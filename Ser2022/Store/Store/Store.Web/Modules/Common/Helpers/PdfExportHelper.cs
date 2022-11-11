namespace Store.Common
{
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported]
    public class PdfExportHelper
    {
        public static ToolButton CreateToolButton(PdfExportOptions options)
        {
            return null;
        }

        public static ToolButton ExportToPdf(PdfExportOptions options)
        {
            return null;
        }
    }

    [Imported, Serializable]
    public class PdfExportOptions
    {
        public string IDataGrid Grid { get; set; }
    public Func<bool> OnViewSubmit { get; set; }
    public string Title { get; set; }
    public string Hint { get; set; }
    public bool? Separator { get; set; }
    public string ReportTitle { get; set; }
    public double? TitleTop { get; set; }
    public double? TitleFontSize { get; set; }
    public double? FileName { get; set; }
    public bool? PageNumbers { get; set; }
    public JsDictionary<string, string> ColumnTitles { get; set; }
    public AutoTableOptions TableOptions { get; set; }
}
}


