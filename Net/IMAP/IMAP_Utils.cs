using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace LumiSoft.Net.IMAP
{
	/// <summary>
	/// Provides utility methods for IMAP.
	/// </summary>
	public class IMAP_Utils
	{
		#region method ParseMessageFlags

		/// <summary>
		/// Parses message flags from string.
		/// </summary>
		/// <param name="flagsString">Message flags string.</param>
		/// <returns></returns>
		public static IMAP_MessageFlags ParseMessageFlags(string flagsString)
		{
			IMAP_MessageFlags mFlags = 0;

			flagsString = flagsString.ToUpper();
			
			if(flagsString.IndexOf("ANSWERED") > -1)
			{
				mFlags |= IMAP_MessageFlags.Answered;
			}
			if(flagsString.IndexOf("FLAGGED") > -1)
			{
				mFlags |= IMAP_MessageFlags.Flagged;
			}
			if(flagsString.IndexOf("DELETED") > -1)
			{
				mFlags |= IMAP_MessageFlags.Deleted;
			}
			if(flagsString.IndexOf("SEEN") > -1)
			{
				mFlags |= IMAP_MessageFlags.Seen;
			}
			if(flagsString.IndexOf("DRAFT") > -1)
			{
				mFlags |= IMAP_MessageFlags.Draft;
			}

			return mFlags;
		}

		#endregion

		#region method MessageFlagsToString

		/// <summary>
		/// Converts message flags to string. Eg. \SEEN \DELETED .
		/// </summary>
		/// <returns></returns>
		public static string MessageFlagsToString(IMAP_MessageFlags msgFlags)
		{
			string retVal = "";
			if(((int)IMAP_MessageFlags.Answered & (int)msgFlags) != 0)
			{
				retVal += " \\ANSWERED";
			}
			if(((int)IMAP_MessageFlags.Flagged & (int)msgFlags) != 0)
			{
				retVal += " \\FLAGGED";
			}
			if(((int)IMAP_MessageFlags.Deleted & (int)msgFlags) != 0)
			{
				retVal += " \\DELETED";
			}
			if(((int)IMAP_MessageFlags.Seen & (int)msgFlags) != 0)
			{
				retVal += " \\SEEN";
			}
			if(((int)IMAP_MessageFlags.Draft & (int)msgFlags) != 0)
			{
				retVal += " \\DRAFT";
			}

			return retVal.Trim();
		}

		#endregion

		#region static method MessageFlagsAdd

		/// <summary>
		/// Adds specified flags to flags list.
		/// </summary>
		/// <param name="flags">Current message flags.</param>
		/// <param name="flagsToAdd">Flags to add.</param>
		/// <returns>Returns new flags.</returns>
		/// <exception cref="ArgumentNullException">Is raised when <b>flags</b> or <b>flagsToAdd</b> is null reference.</exception>
		public static string[] MessageFlagsAdd(string[] flags,string[] flagsToAdd)
		{
			if(flags == null)
			{
				throw new ArgumentNullException("flags");
			}
			if(flagsToAdd == null)
			{
				throw new ArgumentNullException("flagsToAdd");
			}

			List<string> retVal = new List<string>();
			retVal.AddRange(flags);

			foreach(string flagToAdd in flagsToAdd)
			{
				bool contains = false;
				foreach(string flag in flags)
				{
					if(string.Equals(flag,flagToAdd,StringComparison.InvariantCultureIgnoreCase))
					{
						contains = true;
						break;
					}
				}

				if(!contains)
				{
					retVal.Add(flagToAdd);
				}
			}

			return retVal.ToArray();
		}

		#endregion

		#region static method MessageFlagsRemove

		/// <summary>
		/// Removes specified flags from message flags list.
		/// </summary>
		/// <param name="flags">Message flags.</param>
		/// <param name="flagsToRemove">Message flags to remove.</param>
		/// <returns>Returns new message flags.</returns>
		/// <exception cref="ArgumentNullException">Is raised when <b>flags</b> or <b>flagsToRemove</b> is null reference.</exception>
		public static string[] MessageFlagsRemove(string[] flags,string[] flagsToRemove)
		{
			if(flags == null)
			{
				throw new ArgumentNullException("flags");
			}
			if(flagsToRemove == null)
			{
				throw new ArgumentNullException("flagsToRemove");
			}

			List<string> retVal = new List<string>();
			foreach(string flag in flags)
			{
				bool remove = false;
				foreach(string flagToRemove in flagsToRemove)
				{
					if(string.Equals(flag,flagToRemove,StringComparison.InvariantCultureIgnoreCase))
					{
						remove = true;
						break;
					}
				}

				if(!remove)
				{
					retVal.Add(flag);
				}
			}

			return retVal.ToArray();
		}

		#endregion


		#region method ACL_to_String

		/// <summary>
		/// Converts IMAP_ACL_Flags to string.
		/// </summary>
		/// <param name="flags">Flags to convert.</param>
		/// <returns></returns>
		public static string ACL_to_String(IMAP_ACL_Flags flags)
		{
			string retVal = "";
			if((flags & IMAP_ACL_Flags.l) != 0)
			{
				retVal += "l";
			}
			if((flags & IMAP_ACL_Flags.r) != 0)
			{
				retVal += "r";
			}
			if((flags & IMAP_ACL_Flags.s) != 0)
			{
				retVal += "s";
			}
			if((flags & IMAP_ACL_Flags.w) != 0)
			{
				retVal += "w";
			}
			if((flags & IMAP_ACL_Flags.i) != 0)
			{
				retVal += "i";
			}			
			if((flags & IMAP_ACL_Flags.p) != 0)
			{
				retVal += "p";
			}
			if((flags & IMAP_ACL_Flags.c) != 0)
			{
				retVal += "c";
			}
			if((flags & IMAP_ACL_Flags.d) != 0)
			{
				retVal += "d";
			}
			if((flags & IMAP_ACL_Flags.a) != 0)
			{
				retVal += "a";
			}

			return retVal;
		}

		#endregion

		#region method ACL_From_String

		/// <summary>
		/// Parses IMAP_ACL_Flags from string.
		/// </summary>
		/// <param name="aclString">String from where to convert</param>
		/// <returns></returns>
		public static IMAP_ACL_Flags ACL_From_String(string aclString)
		{
			IMAP_ACL_Flags retVal = IMAP_ACL_Flags.None;
			aclString = aclString.ToLower();
			if(aclString.IndexOf('l') > -1)
			{
				retVal |= IMAP_ACL_Flags.l;
			}
			if(aclString.IndexOf('r') > -1)
			{
				retVal |= IMAP_ACL_Flags.r;
			}
			if(aclString.IndexOf('s') > -1)
			{
				retVal |= IMAP_ACL_Flags.s;
			}
			if(aclString.IndexOf('w') > -1)
			{
				retVal |= IMAP_ACL_Flags.w;
			}
			if(aclString.IndexOf('i') > -1)
			{
				retVal |= IMAP_ACL_Flags.i;
			}
			if(aclString.IndexOf('p') > -1)
			{
				retVal |= IMAP_ACL_Flags.p;
			}
			if(aclString.IndexOf('c') > -1)
			{
				retVal |= IMAP_ACL_Flags.c;
			}
			if(aclString.IndexOf('d') > -1)
			{
				retVal |= IMAP_ACL_Flags.d;
			}
			if(aclString.IndexOf('a') > -1)
			{
				retVal |= IMAP_ACL_Flags.a;
			}

			return retVal;
		}

		#endregion


		#region method ParseDate

		/// <summary>
		/// Parses IMAP date time from string.
		/// </summary>
		/// <param name="date">DateTime string.</param>
		/// <returns>Returns parsed date-time value.</returns>
		/// <exception cref="ArgumentNullException">Is raised when <b>date</b> is null reference.</exception>
		public static DateTime ParseDate(string date)
		{
			if(date == null)
			{
				throw new ArgumentNullException("date");
			}

			/* RFC 3501. IMAP date format. 
				date-time       = DQUOTE date-day-fixed "-" date-month "-" date-year SP time SP zone DQUOTE
				date            = day-month-year
				date-day-fixed  = (SP DIGIT) / 2DIGIT
								; Fixed-format version of date-day
				date-month      = "Jan" / "Feb" / "Mar" / "Apr" / "May" / "Jun" /
								  "Jul" / "Aug" / "Sep" / "Oct" / "Nov" / "Dec"
				time            = 2DIGIT ":" 2DIGIT ":" 2DIGIT
			*/
			if(date.IndexOf('-') > -1)
			{
				try
				{
					return DateTime.ParseExact(date.Trim(),new string[]{"d-MMM-yyyy","d-MMM-yyyy HH:mm:ss zzz"},System.Globalization.DateTimeFormatInfo.InvariantInfo,System.Globalization.DateTimeStyles.None);
				}
				catch
				{
					throw new ArgumentException("Argument 'date' value '" + date + "' is not valid IMAP date.");
				}
			}
			else
			{
				return LumiSoft.Net.MIME.MIME_Utils.ParseRfc2822DateTime(date);
			}
		}

		#endregion

		#region static DateTimeToString

		/// <summary>
		/// Converts date time to IMAP date time string.
		/// </summary>
		/// <param name="date">DateTime to convert.</param>
		/// <returns></returns>
		public static string DateTimeToString(DateTime date)
		{			
			string retVal = "";
			retVal += date.ToString("dd-MMM-yyyy HH:mm:ss",System.Globalization.CultureInfo.InvariantCulture);
			retVal += " " + date.ToString("zzz",System.Globalization.CultureInfo.InvariantCulture).Replace(":","");

			return retVal;
		}

		#endregion


		#region static method Encode_IMAP_UTF7_String

		/// <summary>
		/// Encodes specified data with IMAP modified UTF7 encoding. Defined in RFC 3501 5.1.3.  Mailbox International Naming Convention.
		/// Example: �� is encoded to &amp;APYA9g-.
		/// </summary>
		/// <param name="text">Text to encode.</param>
		/// <returns></returns>
		public static string Encode_IMAP_UTF7_String(string text)
		{
			/* RFC 3501 5.1.3.  Mailbox International Naming Convention
				In modified UTF-7, printable US-ASCII characters, except for "&",
				represent themselves; that is, characters with octet values 0x20-0x25
				and 0x27-0x7e.  The character "&" (0x26) is represented by the
				two-octet sequence "&-".

				All other characters (octet values 0x00-0x1f and 0x7f-0xff) are
				represented in modified BASE64, with a further modification from
				[UTF-7] that "," is used instead of "/".  Modified BASE64 MUST NOT be
				used to represent any printing US-ASCII character which can represent
				itself.
				
				"&" is used to shift to modified BASE64 and "-" to shift back to
				US-ASCII.  There is no implicit shift from BASE64 to US-ASCII, and
				null shifts ("-&" while in BASE64; note that "&-" while in US-ASCII
				means "&") are not permitted.  However, all names start in US-ASCII,
				and MUST end in US-ASCII; that is, a name that ends with a non-ASCII
				ISO-10646 character MUST end with a "-").
			*/

			// Base64 chars, except '/' is replaced with ','
			char[] base64Chars = new char[]{
				'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
				'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
				'0','1','2','3','4','5','6','7','8','9','+',','
			};

			MemoryStream retVal = new MemoryStream();
			for(int i=0;i<text.Length;i++)
			{
				char c = text[i];

				// The character "&" (0x26) is represented by the two-octet sequence "&-".
				if(c == '&')
				{
					retVal.Write(new byte[]{(byte)'&',(byte)'-'},0,2);
				}
				// It is allowed char, don't need to encode
				else if(c >= 0x20 && c <= 0x25 || c >= 0x27 && c <= 0x7E)
				{
					retVal.WriteByte((byte)c);
				}
				// Not allowed char, encode it
				else
				{
					// Superfluous shifts are not allowed. 
					// For example: �� may not encoded as &APY-&APY-, but must be &APYA9g-.

					// Get all continuous chars that need encoding and encode them as one block
					MemoryStream encodeBlock = new MemoryStream();
					for(int ic=i;ic<text.Length;ic++)
					{
						char cC = text[ic];

						// Allowed char
						if(cC >= 0x20 && cC <= 0x25 || cC >= 0x27 && cC <= 0x7E)
						{
							break;
						}
						else
						{
							encodeBlock.WriteByte((byte)((cC & 0xFF00) >> 8));
							encodeBlock.WriteByte((byte)(cC & 0xFF));
							i = ic;
						}
					}

					// Ecode block
					byte[] encodedData = Net_Utils.Base64EncodeEx(encodeBlock.ToArray(),base64Chars,false);
					retVal.WriteByte((byte)'&');
					retVal.Write(encodedData,0,encodedData.Length);
					retVal.WriteByte((byte)'-');
				}
			}

			return System.Text.Encoding.Default.GetString(retVal.ToArray());
		}

		#endregion

		#region static method Decode_IMAP_UTF7_String

		/// <summary>
		/// Decodes IMAP modified UTF7 encoded data. Defined in RFC 3501 5.1.3.  Mailbox International Naming Convention.
		/// Example: &amp;APYA9g- is decoded to ��.
		/// </summary>
		/// <param name="text">Text to encode.</param>
		/// <returns></returns>
		public static string Decode_IMAP_UTF7_String(string text)
		{
			/* RFC 3501 5.1.3.  Mailbox International Naming Convention
				In modified UTF-7, printable US-ASCII characters, except for "&",
				represent themselves; that is, characters with octet values 0x20-0x25
				and 0x27-0x7e.  The character "&" (0x26) is represented by the
				two-octet sequence "&-".

				All other characters (octet values 0x00-0x1f and 0x7f-0xff) are
				represented in modified BASE64, with a further modification from
				[UTF-7] that "," is used instead of "/".  Modified BASE64 MUST NOT be
				used to represent any printing US-ASCII character which can represent
				itself.
				
				"&" is used to shift to modified BASE64 and "-" to shift back to
				US-ASCII.  There is no implicit shift from BASE64 to US-ASCII, and
				null shifts ("-&" while in BASE64; note that "&-" while in US-ASCII
				means "&") are not permitted.  However, all names start in US-ASCII,
				and MUST end in US-ASCII; that is, a name that ends with a non-ASCII
				ISO-10646 character MUST end with a "-").
			*/

			// Base64 chars, except '/' is replaced with ','
			char[] base64Chars = new char[]{
				'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
				'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
				'0','1','2','3','4','5','6','7','8','9','+',','
			};

			StringBuilder retVal = new StringBuilder();
			for(int i=0;i<text.Length;i++)
			{
				char c = text[i];

				// Encoded block or escaped &
				if(c == '&')
				{
					int endingPos = -1;
					// Read encoded block
					for(int b=i+1;b<text.Length;b++)
					{
						// - marks block end
						if(text[b] == '-')
						{
							endingPos = b;
							break;
						}
						// Invalid & sequence, just treat it as '&' char and not like shift.
						// &....&, but must be &....-
						else if(text[b] == '&')
						{							
							break;
						}
					}
			
					// If no ending -, invalid encoded block. Treat it like it is
					if(endingPos == -1)
					{
						// Just let main for to handle other chars after &
						retVal.Append(c);
					}
					// If empty block, then escaped &
					else if(endingPos - i == 1)
					{
						retVal.Append(c);
						// Move i over '-'
						i++;
					}
					// Decode block
					else
					{
						// Get encoded block
						byte[] encodedBlock = System.Text.Encoding.Default.GetBytes(text.Substring(i + 1,endingPos - i - 1));
		
						// Convert to UTF-16 char						
						byte[] decodedData = Net_Utils.Base64DecodeEx(encodedBlock,base64Chars);
						char[] decodedChars = new char[decodedData.Length / 2];                        
						for(int iC=0;iC<decodedChars.Length;iC++)
						{
							decodedChars[iC] = (char)(decodedData[iC * 2] << 8 | decodedData[(iC * 2) + 1]);
						}
						
						// Decode data
						retVal.Append(decodedChars);

						// Move i over '-'
						i += encodedBlock.Length + 1;
					}
				}
				// Normal byte
				else
				{
					retVal.Append(c);
				}
			}

			return retVal.ToString();
		}

		#endregion


		#region method NormalizeFolder

		/// <summary>
		/// Normalizes folder path.  Example: /Inbox/SubFolder/ will be Inbox/SubFolder.
		/// </summary>
		/// <param name="folder">Folder path to normalize.</param>
		/// <returns>Returns normalized folder path.</returns>
		public static string NormalizeFolder(string folder)
		{
			folder = folder.Replace("\\","/");
			if(folder.StartsWith("/"))
			{
				folder = folder.Substring(1);
			}
			if(folder.EndsWith("/"))
			{
				folder = folder.Substring(0,folder.Length - 1);
			}

			return folder;
		}

		#endregion

		#region static method IsValidFolderName

		/// <summary>
		/// Gets if the specified folder name is valid folder name.
		/// </summary>
		/// <param name="folder">Folder name.</param>
		/// <returns>Returns true if specified folde name is valid.</returns>
		public static bool IsValidFolderName(string folder)
		{
			// TODO: Path ?

			return true;
		}

		#endregion

	}
}
