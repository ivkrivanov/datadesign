using System;
using System.Diagnostics;
using System.IO;
using System.Windows.Forms;

namespace DAL {

	public class DBTool {

		#region Fields

		private string server;
		private string port;
		private string database;
		private string uid;
		private string password;

		DBHelper _dbHelper = DBHelper.GetInstance ();

		#endregion

		#region Properties

		private string _restorePath;
		public string restorePath {
			set { _restorePath = value; }
			get { return _restorePath; }
		}

		private string _backupPath;
		public string backupPath {
			set { _backupPath = value; }
			get { return _backupPath; }
		}

		private bool _dbexists = false ;
		public bool dbexists {
			get { return _dbexists; }
		}

		#endregion

		/// <summary>
		/// Constructor
		/// </summary>
		public DBTool() {
			Initialize ();
		}

		/// <summary>
		/// Initialize values
		/// </summary>
		public void Initialize() {
			ConnectionParts ();
			string existsMyData = string.Format ( "SELECT IF(EXISTS (SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '{0}'), 'Yes','No')", database );
			try {
				string result = (string)(_dbHelper.ExecuteScalar ( existsMyData ));
				if ( result.Length > 0 ) {
					if ( result == "Yes" )
						_dbexists = true;
					else {
						string createMySql  = string.Format ( "CREATE DATABASE IF NOT EXISTS {0}", database );
						_dbHelper.ExecuteNonQuery ( createMySql );
						Restore ();
					}
				}
			}
			catch {
				//InstallerHelper.InstallHelper ();
				_dbexists = false;
			}

			#region Old
			//server = Properties.Settings.Default.server.ToString ();   //"localhost"
			//database = "projectdb";
			//uid = "root";
			//password = "sa";
			//string connectionString = "SERVER=" + server + ";" + "UID=" + uid + ";" + "PASSWORD=" + password + ";" + "Character Set=cp1251";

			//try {
			//    connection = new MySqlConnection ( connectionString );
 
			//    string existsMyData = string.Format ( "SELECT IF(EXISTS (SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '{0}'), 'Yes','No')", database );

			//    using ( MySqlCommand existscomm = new MySqlCommand ( existsMyData, connection ) ) {
			//        existscomm.Connection.Open ();
			//        string report = existscomm.ExecuteScalar ().ToString ();
			//        existscomm.Connection.Close ();
			//        if ( report.Length > 0 ) {
			//            if ( report == "Yes" ) {
			//                _dbexists = true;
			//                //MessageBox.Show ( "Database exists!" );
			//            } else {
			//                string createMySql  = string.Format ( "CREATE DATABASE IF NOT EXISTS {0}", database );

			//                using ( MySqlCommand createcomm = new MySqlCommand ( createMySql, connection ) ) {
			//                    createcomm.Connection.Open ();
			//                    createcomm.ExecuteNonQuery ();
			//                    createcomm.Connection.Close ();
			//                }
			//                //MessageBox.Show ( "Database created!" );
			//                Restore ();
			//            }
			//        }
			//    }

			//    connectionString = "SERVER=" + server + ";" + "DATABASE=" + database + ";" + "UID=" + uid + ";" + "PASSWORD=" + password + ";" + "Character Set=cp1251";
			//    connection.ConnectionString = connectionString;
			//}
			//catch {
			//    InstallerHelper.InstallHelper ();
			//    _dbexists = false;
			//}
			#endregion
		}

		private void ConnectionParts() {
			string conn = _dbHelper.ConnectionString;
			string[] connParts = conn.Split (new string[] {";"},StringSplitOptions .None );
			for ( int i = 0; i < connParts.Length - 1; i++ ) {
				string[] part = connParts [i].Split ( new string [] { "=" }, StringSplitOptions.None );

				#region MySql
				if ( _dbHelper.Provider == "MySql.Data.MySqlClient" ) {
					switch (part[0]) {
						case ("Server")	:
							server = part[1];
							break;
						case ("Port") :
							port = part [1];
							break;
						case ("Uid"):
							uid = part [1];
							break;
						case ("Pwd"):
							password = part [1];
							break;
						case ("Database"):
							database = part [1];
							break;
						default:
							break;
					}
				}
				#endregion

				#region SQL Server
				else if ( _dbHelper.Provider == "Sql.Data.SqlClient" ) {
					switch ( part [0] ) {
						case ("Data Source") :
							server = part [1];
							break;
						case ("Initial Catalog") :
							database = part [1];
							break;
						case ("User ID") :
							uid = part [1];
							break;
						case ("Password"):
							password = part [1];
							break;
						default:
							break;
					}
				}
				#endregion
			}
		}
		///// <summary>
		///// RestoreSQL
		///// </summary>
		///// <returns></returns>
		//private Boolean  RestoreSQL() {
		//    try {
		//        string path = @"C:\Program Files\VIVASOFT\BULRIS\projectdb.sql";
		//        //string path = @"C:\Kingston\projectDB 20110804 1539.sql";
		//        StreamReader file = new StreamReader ( path );
		//        string restoreSQL = file.ReadToEnd ();
		//        file.Close ();
		//        using ( MySqlCommand restore = new MySqlCommand ( restoreSQL, connection ) ) {
		//            restore.Connection.Open ();
		//            restore.ExecuteNonQuery ();
		//            restore.Connection.Close ();
		//        }
		//        return true;
		//    }
		//    catch (MySqlException ex) {
		//        MessageBox.Show ( "Error , unable to Restore!", ex.GetType ().Name );
		//        return false;
		//    }

		//}
		///// <summary>
		///// open connection to database
		///// </summary>
		///// <returns></returns>
		//private bool OpenConnection() {
		//    try {
		//        connection.Open ();
		//        return true;
		//    }
		//    catch ( MySqlException ex ) {
		//        //When handling errors, you can your application's response based on the error number.
		//        //The two most common error numbers when connecting are as follows:
		//        //0: Cannot connect to server.
		//        //1045: Invalid user name and/or password.
		//        switch ( ex.Number ) {
		//            case 0:
		//                MessageBox.Show ( "Cannot connect to server.  Contact administrator" );
		//                break;

		//            case 1045:
		//                MessageBox.Show ( "Invalid username/password, please try again" );
		//                break;
		//        }
		//        return false;
		//    }
		//}
		///// <summary>
		///// Close connection
		///// </summary>
		///// <returns></returns>
		//private bool CloseConnection() {
		//    try {
		//        connection.Close ();
		//        return true;
		//    }
		//    catch ( MySqlException ex ) {
		//        MessageBox.Show ( ex.Message );
		//        return false;
		//    }
		//}
		/// <summary>
		/// Backup
		/// </summary>
		public void Backup() {
			try {
				DateTime Time = DateTime.Now;
				int year = Time.Year;
				int month = Time.Month;
				int day = Time.Day;
				int hour = Time.Hour;
				int minute = Time.Minute;
				int second = Time.Second;
				int millisecond = Time.Millisecond;

				//Save file to C:\ with the current date as a filename
				string path;
				path = "C:\\" + year + "-" + month + "-" + day + "-" + hour + "-" + minute + "-" + second + "-" + millisecond + ".sql";
				StreamWriter file = new StreamWriter ( path );

				ProcessStartInfo psi = new ProcessStartInfo ();
				psi.FileName = "mysqldump";
				psi.RedirectStandardInput = false;
				psi.RedirectStandardOutput = true;
				psi.Arguments = string.Format ( @"-u{0} -p{1} -h{2} {3}", uid, password, server, database );
				psi.UseShellExecute = false;

				Process process = Process.Start ( psi );

				string output;
				output = process.StandardOutput.ReadToEnd ();
				file.WriteLine ( output );
				process.WaitForExit ();
				file.Close ();
				process.Close ();
			}
			catch ( IOException ex ) {
				MessageBox.Show ( "Error, unable to backup!", ex.GetType ().Name );
			}
		}
		/// <summary>
		/// Restore
		/// </summary>
		public Boolean Restore() {
			if ( _dbHelper.Provider == "MySql.Data.MySqlClient" ) {
				try {
					//ConnectionParts ();
					string path = @"C:\Program Files\VIVASOFT\BULRIS\projectdb.sql";
					StreamReader file = new StreamReader ( path );
					string input = file.ReadToEnd ();
					file.Close ();

					ProcessStartInfo psirestore = new ProcessStartInfo ();
					psirestore.FileName = @"C:\Program Files\MySQL\MySQL Server 5.1\bin\mysql.exe";
					psirestore.RedirectStandardInput = true;
					psirestore.RedirectStandardOutput = false;
					psirestore.Arguments = string.Format ( @"-u{0} -p{1} -h{2} {3}", uid, password, server, database );
					psirestore.UseShellExecute = false;

					Process processrestore = Process.Start ( psirestore );
					processrestore.StandardInput.WriteLine ( input );
					processrestore.StandardInput.Close ();
					processrestore.WaitForExit ();
					processrestore.Close ();
					MessageBox.Show ( "Database restored!" );
					return true;
				}
				catch ( IOException ex ) {
					MessageBox.Show ( "Error, unable to Restore!", ex.GetType ().Name );
					return false;
				}
			}
			else if ( _dbHelper.Provider == "Sql.Data.SqlClient" ) {
				return false;
			}
			return false;
		}
	}
}
