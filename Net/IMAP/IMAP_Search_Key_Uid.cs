﻿using System;

namespace LumiSoft.Net.IMAP
{
    /// <summary>
    /// This class represents IMAP SEARCH <b>UID (sequence set)</b> key. Defined in RFC 3501 6.4.4.
    /// </summary>
    /// <remarks>Messages with unique identifiers corresponding to the specified
    /// unique identifier set.  Sequence set ranges are permitted.</remarks>
    public class IMAP_Search_Key_Uid : IMAP_Search_Key
    {
        private IMAP_SequenceSet m_pSeqSet = null;

        /// <summary>
        /// Default constructor.
        /// </summary>
        /// <param name="seqSet">IMAP sequence-set.</param>
        /// <exception cref="ArgumentNullException">Is raised when <b>seqSet</b> is null reference.</exception>
        public IMAP_Search_Key_Uid(IMAP_SequenceSet seqSet)
        {
            if(seqSet == null)
            {
                throw new ArgumentNullException("seqSet");
            }

            m_pSeqSet = seqSet;
        }


        #region static method Parse

        /// <summary>
        /// Returns parsed IMAP SEARCH <b>UID (sequence set)</b> key.
        /// </summary>
        /// <param name="r">String reader.</param>
        /// <returns>Returns parsed IMAP SEARCH <b>UID (sequence set)</b> key.</returns>
        /// <exception cref="ArgumentNullException">Is raised when <b>r</b> is null reference.</exception>
        /// <exception cref="ParseException">Is raised when parsing fails.</exception>
        internal static IMAP_Search_Key_Uid Parse(StringReader r)
        {
            if(r == null)
            {
                throw new ArgumentNullException("r");
            }

            string word = r.ReadWord();
            if(!string.Equals(word,"UID",StringComparison.InvariantCultureIgnoreCase))
            {
                throw new ParseException("Parse error: Not a SEARCH 'UID' key.");
            }
            r.ReadToFirstChar();
            string value = r.QuotedReadToDelimiter(' ');
            if(value == null)
            {
                throw new ParseException("Parse error: Invalid 'UID' value.");
            }
            IMAP_SequenceSet seqSet = new IMAP_SequenceSet();
            try
            {
                seqSet.Parse(value);
            }
            catch
            {
                throw new ParseException("Parse error: Invalid 'UID' value.");
            }

            return new IMAP_Search_Key_Uid(seqSet);
        }

        #endregion


        #region override method ToString

        /// <summary>
        /// Returns this as string.
        /// </summary>
        /// <returns>Returns this as string.</returns>
        public override string ToString()
        {
            return "UID " + m_pSeqSet.ToSequenceSetString();
        }

        #endregion


        #region Properties implementation

        /// <summary>
        /// Gets sequence-set value.
        /// </summary>
        public IMAP_SequenceSet Value
        {
            get
            { 
                return m_pSeqSet;
            }
        }

        #endregion
    }
}
