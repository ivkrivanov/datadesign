
namespace Store.Infra.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Infra.SupportTypeString")]
    [BasedOnRow(typeof(Entities.SupportTypeStringRow))]
    public class SupportTypeStringColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EnumLocaleId { get; set; }

        [Width(100)]
        //[LookupEditor(typeof(Scripts.SupportTypeLookup)), QuickFilter]
        public Int32 EnumValue { get; set; }
        [EditLink]
        public String DisplayName { get; set; }


        [Width(150)]
        [LookupEditor(typeof(Store.Administration.LanguageLookup)),QuickFilter]
        public Int32 LanguageId { get; set; }
        public String LanguageName { get; set; }
        
    }
}