using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Net;
using System.Net.Sockets;
using System.Threading;

namespace LumiSoft.Net
{
	/// <summary>
	/// This is base class for Socket and Session based servers.
	/// </summary>
	[Obsolete("Use TCP_Server class instead")]
	public abstract class SocketServer : System.ComponentModel.Component 
	{
		private List<SocketServerSession> m_pSessions           = null;
		private Queue<QueuedConnection>   m_pQueuedConnections  = null;
		private bool                      m_Running             = false;
		private System.Timers.Timer       m_pTimer              = null;
		private IPBindInfo[]              m_pBindInfo           = null;
		private int                       m_SessionIdleTimeOut  = 30000;
		private int                       m_MaxConnections      = 1000;
		private int                       m_MaxBadCommands      = 8;       
		private bool                      m_LogCmds             = false;

		#region Events declarations

		/// <summary>
		/// Occurs when server or session has system error(unhandled error).
		/// </summary>
		public event ErrorEventHandler SysError = null;

		#endregion

		#region Internal Structs and Classes

		#region struct QueuedConnection

		/// <summary>
		/// This struct holds queued connection info.
		/// </summary>
		private struct QueuedConnection
		{
			private Socket   m_pSocket;
			private IPBindInfo m_pBindInfo;

			/// <summary>
			/// Default constructor.
			/// </summary>
			/// <param name="socket">Socket.</param>
			/// <param name="bindInfo">Bind info.</param>
			public QueuedConnection(Socket socket,IPBindInfo bindInfo)
			{
				m_pSocket   = socket;
				m_pBindInfo = bindInfo;
			}

			#region Properties Implementation

			/// <summary>
			/// Gets socket.
			/// </summary>
			public Socket Socket
			{
				get
                { 
                    return m_pSocket;
                }
			}

			/// <summary>
			/// Gets bind info.
			/// </summary>
			public IPBindInfo BindInfo
			{
				get
                { 
                    return m_pBindInfo; 
                }
			}

			#endregion
		}

		#endregion

		#endregion

		/// <summary>
		/// Default constructor.
		/// </summary>
		public SocketServer()
		{
			m_pSessions          = new List<SocketServerSession>();
			m_pQueuedConnections = new Queue<QueuedConnection>();
			m_pTimer             = new System.Timers.Timer(15000);
			m_pBindInfo          = new IPBindInfo[]{new IPBindInfo(System.Net.Dns.GetHostName(),IPAddress.Any,10000,SslMode.None,null)};

			m_pTimer.AutoReset = true;
			m_pTimer.Elapsed += new System.Timers.ElapsedEventHandler(this.m_pTimer_Elapsed);
		}

		#region method Dispose

		/// <summary>
		/// Clean up any resources being used and stops server.
		/// </summary>
		public new void Dispose()
		{
			base.Dispose();

			StopServer();				
		}

		#endregion


		#region method StartServer

		/// <summary>
		/// Starts server.
		/// </summary>
		public void StartServer()
		{
			if(!m_Running)
            {
				m_Running = true;

				// Start accepting ang queueing connections
				Thread tr = new Thread(new ThreadStart(this.StartProcCons));
				tr.Start();

				// Start proccessing queued connections
				Thread trSessionCreator = new Thread(new ThreadStart(this.StartProcQueuedCons));
				trSessionCreator.Start();

				m_pTimer.Enabled = true;
			}
		}

		#endregion

		#region method StopServer

		/// <summary>
		/// Stops server. NOTE: Active sessions aren't cancled.
		/// </summary>
		public void StopServer()
		{
			if(m_Running)
            {
				m_Running = false;

				// Stop accepting new connections
				foreach(IPBindInfo bindInfo in m_pBindInfo)
                {
					if(bindInfo.Tag != null)
                    {
						((Socket)bindInfo.Tag).Close();
						bindInfo.Tag = null;
					}
				}

				// Wait method StartProcCons to exit
				Thread.Sleep(100);
			}
		}

		#endregion


		#region method StartProcCons

		/// <summary>
		/// Starts proccessiong incoming connections (Accepts and queues connections).
		/// </summary>
		private void StartProcCons()
		{	
			try
            {
				CircleCollection<IPBindInfo> binds = new CircleCollection<IPBindInfo>();
				foreach(IPBindInfo bindInfo in m_pBindInfo)
                {
					Socket s = new Socket(AddressFamily.InterNetwork,SocketType.Stream,ProtocolType.Tcp);
					s.Bind(new IPEndPoint(bindInfo.IP,bindInfo.Port));
					s.Listen(500);
				
					bindInfo.Tag = s;
					binds.Add(bindInfo);
				}

				// Accept connections and queue them			
				while(m_Running)
                {
					// We have reached maximum connection limit
					if(m_pSessions.Count > m_MaxConnections)
                    {
						// Wait while some active connectins are closed
						while(m_pSessions.Count > m_MaxConnections)
                        {
							Thread.Sleep(100);
						}
					}

					// Get incomong connection
					IPBindInfo bindInfo = binds.Next();

					// There is waiting connection
					if(m_Running && ((Socket)bindInfo.Tag).Poll(0,SelectMode.SelectRead))
                    {
						// Accept incoming connection
						Socket s = ((Socket)bindInfo.Tag).Accept();
												
						// Add session to queue
						lock(m_pQueuedConnections)
                        {
							m_pQueuedConnections.Enqueue(new QueuedConnection(s,bindInfo));
						}
					}
					
					Thread.Sleep(2);
				}
			}
			catch(SocketException x)
            {
				// Socket listening stopped, happens when StopServer is called.
				// We need just skip this error.
				if(x.ErrorCode == 10004)
                {			
				}
				else
                {
					OnSysError("WE MUST NEVER REACH HERE !!! StartProcCons:",x);
				}
			}
			catch(Exception x)
            {
				OnSysError("WE MUST NEVER REACH HERE !!! StartProcCons:",x);
			}
		}

		#endregion
		
		#region method StartProcQueuedCons

		/// <summary>
		/// Starts queueed connections proccessing (Creates and starts session foreach queued connection).
		/// </summary>
		private void StartProcQueuedCons()
		{
			try
            {
				while(m_Running)
                {
					// There are queued connections, start sessions.
					if(m_pQueuedConnections.Count > 0)
                    {
						QueuedConnection connection;
						lock(m_pQueuedConnections)
                        {
							connection = m_pQueuedConnections.Dequeue();
						}

						try
                        {
							InitNewSession(connection.Socket,connection.BindInfo);
						}
						catch(Exception x)
                        {
							OnSysError("StartProcQueuedCons InitNewSession():",x);
						}
					}
					// There are no connections to proccess, delay proccessing. We need to it 
					// because if there are no connections to proccess, while loop takes too much CPU.
					else
                    {
						Thread.Sleep(10);
					}
				}
			}
			catch(Exception x)
            {
				OnSysError("WE MUST NEVER REACH HERE !!! StartProcQueuedCons:",x);
			}
		}

		#endregion


		#region method AddSession

		/// <summary>
		/// Adds specified session to sessions collection.
		/// </summary>
		/// <param name="session">Session to add.</param>
		internal protected void AddSession(SocketServerSession session)
		{
			lock(m_pSessions)
            {
				m_pSessions.Add(session);
			}			
		}

		#endregion

		#region method RemoveSession

		/// <summary>
		/// Removes specified session from sessions collection.
		/// </summary>
		/// <param name="session">Session to remove.</param>
		internal protected void RemoveSession(SocketServerSession session)
		{
			lock(m_pSessions)
            {
				m_pSessions.Remove(session);
			}			
		}

		#endregion


		#region method OnSysError

		/// <summary>
		/// 
		/// </summary>
		/// <param name="text"></param>
		/// <param name="x"></param>
		internal protected void OnSysError(string text,Exception x)
		{
			if(this.SysError != null)
            {
				this.SysError(this,new Error_EventArgs(x,new StackTrace()));
			}
		}

		#endregion

		#region method OnSessionTimeoutTimer

		/// <summary>
		/// This method must get timedout sessions and end them.
		/// </summary>
		private void OnSessionTimeoutTimer()
		{
			try
            {
				// Close/Remove timed out sessions
				lock(m_pSessions)
                {
					SocketServerSession[] sessions = this.Sessions;

					// Loop sessions and and call OnSessionTimeout() for timed out sessions.
					for(int i=0;i<sessions.Length;i++)
                    {	                
						// If session throws exception, handle it here or next sessions timouts are not handled.
						try
                        {
							// Session timed out
							if(DateTime.Now > sessions[i].SessionLastDataTime.AddMilliseconds(this.SessionIdleTimeOut))
                            {                                
								sessions[i].OnSessionTimeout();
							}
						}
						catch(Exception x)
                        {
							OnSysError("OnTimer:",x);
						}
					}
				}
			}
			catch(Exception x)
            {
				OnSysError("WE MUST NEVER REACH HERE !!! OnTimer:",x);
			}
		}

		#endregion

		#region method m_pTimer_Elapsed

		private void m_pTimer_Elapsed(object sender,System.Timers.ElapsedEventArgs e)
		{	
			OnSessionTimeoutTimer();
		}

		#endregion


		#region virtual method InitNewSession

		/// <summary>
		/// Initialize and start new session here. Session isn't added to session list automatically, 
		/// session must add itself to server session list by calling AddSession().
		/// </summary>
		/// <param name="socket">Connected client socket.</param>
		/// <param name="bindInfo">BindInfo what accepted socket.</param>
		protected virtual void InitNewSession(Socket socket,IPBindInfo bindInfo)
		{
		}

		#endregion


		#region Properties Implementation

		/// <summary>
		/// Gets or set socket binding info. Use this property to specify on which IP,port server 
		/// listnes and also if is SSL or STARTTLS support.
		/// </summary>
		public IPBindInfo[] BindInfo
		{
			get
            { 
                return m_pBindInfo;
            }

			set
            {
				if(value == null)
                {
					throw new NullReferenceException("BindInfo can't be null !");
				}

				//--- See if bindinfo has changed -----------
				bool changed = false;
				if(m_pBindInfo.Length != value.Length)
                {
					changed = true;
				}
				else
                {
					for(int i=0;i<m_pBindInfo.Length;i++)
                    {
						if(!m_pBindInfo[i].Equals(value[i]))
                        {
							changed = true;
							break;
						}
					}
				}
				//-------------------------------------------

				if(changed)
                {
					// If server is currently running, stop it before applying bind info.
					bool running = m_Running;
					if(running)
                    {
						StopServer();
					}
	 
					m_pBindInfo = value; 

					// We need to restart server to take effect IP or Port change
					if(running)
                    {				    
						StartServer();
					}
				}
			}
		}

		/// <summary>
		/// Gets or sets maximum allowed connections.
		/// </summary>
		public int MaxConnections 
		{
			get
            { 
                return m_MaxConnections;
            }

			set
            {
                m_MaxConnections = value;
            }
		}
		
		/// <summary>
		/// Runs and stops server.
		/// </summary>
		public bool Enabled 
		{
			get
            { 
                return m_Running;
            }

			set
            {				
				if(value != m_Running & !this.DesignMode)
                {
					if(value)
                    {
						StartServer();
					}
					else
                    {
						StopServer();
					}
				}
			}
		}
	
		/// <summary>
		/// Gets or sets if to log commands.
		/// </summary>
		public bool LogCommands
		{
			get
            {
                return m_LogCmds; 
            }

			set
            { 
                m_LogCmds = value; 
            }
		}

		/// <summary>
		/// Session idle timeout in milliseconds.
		/// </summary>
		public int SessionIdleTimeOut 
		{
			get
            { 
                return m_SessionIdleTimeOut;
            }

			set
            { 
                m_SessionIdleTimeOut = value; 
            }
		}
				
		/// <summary>
		/// Gets or sets maximum bad commands allowed to session.
		/// </summary>
		public int MaxBadCommands
		{
			get
            {
                return m_MaxBadCommands;
            }

			set
            { 
                m_MaxBadCommands = value;
            }
		}

		/// <summary>
		/// Gets active sessions.
		/// </summary>
		public SocketServerSession[] Sessions
		{
			get
            { 
                return m_pSessions.ToArray();
            }
		}

		#endregion

	}
}
