namespace DemoWinForm
{
    partial class fMap
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(fMap));
            this.toolStrip1 = new System.Windows.Forms.ToolStrip();
            this.openToolStripButton = new System.Windows.Forms.ToolStripButton();
            this.toolStripSeparator1 = new System.Windows.Forms.ToolStripSeparator();
            this.View = new System.Windows.Forms.ToolStripSplitButton();
            this.baseView = new System.Windows.Forms.ToolStripMenuItem();
            this.standartView = new System.Windows.Forms.ToolStripMenuItem();
            this.allView = new System.Windows.Forms.ToolStripMenuItem();
            this.textView = new System.Windows.Forms.ToolStripButton();
            this.toolStripSeparator2 = new System.Windows.Forms.ToolStripSeparator();
            this.ZoomToExtentsToolStripButton = new System.Windows.Forms.ToolStripButton();
            this.ZoomOutModeToolStripButton = new System.Windows.Forms.ToolStripButton();
            this.ZoomInModeToolStripButton = new System.Windows.Forms.ToolStripButton();
            this.PanToolStripButton = new System.Windows.Forms.ToolStripButton();
            this.helpToolStripButton = new System.Windows.Forms.ToolStripButton();
            this.toolStripSeparator3 = new System.Windows.Forms.ToolStripSeparator();
            this.tRefresh = new System.Windows.Forms.Timer(this.components);
            this.tVHF = new System.Windows.Forms.Timer(this.components);
            this.AddLayerDialog = new System.Windows.Forms.OpenFileDialog();
            this.mapBox1 = new SharpMap.Forms.MapBox();
            this.toolStrip1.SuspendLayout();
            this.SuspendLayout();
            // 
            // toolStrip1
            // 
            this.toolStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.openToolStripButton,
            this.toolStripSeparator1,
            this.View,
            this.textView,
            this.toolStripSeparator2,
            this.ZoomToExtentsToolStripButton,
            this.ZoomOutModeToolStripButton,
            this.ZoomInModeToolStripButton,
            this.PanToolStripButton,
            this.helpToolStripButton,
            this.toolStripSeparator3});
            this.toolStrip1.Location = new System.Drawing.Point(0, 0);
            this.toolStrip1.Name = "toolStrip1";
            this.toolStrip1.RenderMode = System.Windows.Forms.ToolStripRenderMode.Professional;
            this.toolStrip1.Size = new System.Drawing.Size(648, 25);
            this.toolStrip1.TabIndex = 4;
            this.toolStrip1.Text = "toolStrip1";
            // 
            // openToolStripButton
            // 
            this.openToolStripButton.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.openToolStripButton.Image = ((System.Drawing.Image)(resources.GetObject("openToolStripButton.Image")));
            this.openToolStripButton.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.openToolStripButton.Name = "openToolStripButton";
            this.openToolStripButton.Size = new System.Drawing.Size(23, 22);
            this.openToolStripButton.Text = "&Open";
            this.openToolStripButton.Visible = false;
            // 
            // toolStripSeparator1
            // 
            this.toolStripSeparator1.Name = "toolStripSeparator1";
            this.toolStripSeparator1.Size = new System.Drawing.Size(6, 25);
            this.toolStripSeparator1.Visible = false;
            // 
            // View
            // 
            this.View.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.View.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.baseView,
            this.standartView,
            this.allView});
            this.View.Image = ((System.Drawing.Image)(resources.GetObject("View.Image")));
            this.View.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.View.Name = "View";
            this.View.Size = new System.Drawing.Size(32, 22);
            this.View.Text = "toolStripSplitButton1";
            this.View.Visible = false;
            // 
            // baseView
            // 
            this.baseView.Name = "baseView";
            this.baseView.Size = new System.Drawing.Size(118, 22);
            this.baseView.Text = "Base";
            // 
            // standartView
            // 
            this.standartView.Name = "standartView";
            this.standartView.Size = new System.Drawing.Size(118, 22);
            this.standartView.Text = "Standart";
            // 
            // allView
            // 
            this.allView.Name = "allView";
            this.allView.Size = new System.Drawing.Size(118, 22);
            this.allView.Text = "All";
            // 
            // textView
            // 
            this.textView.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.textView.Image = ((System.Drawing.Image)(resources.GetObject("textView.Image")));
            this.textView.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.textView.Name = "textView";
            this.textView.Size = new System.Drawing.Size(23, 22);
            this.textView.Text = "toolStripButton1";
            this.textView.Visible = false;
            // 
            // toolStripSeparator2
            // 
            this.toolStripSeparator2.Name = "toolStripSeparator2";
            this.toolStripSeparator2.Size = new System.Drawing.Size(6, 25);
            this.toolStripSeparator2.Visible = false;
            // 
            // ZoomToExtentsToolStripButton
            // 
            this.ZoomToExtentsToolStripButton.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.ZoomToExtentsToolStripButton.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.ZoomToExtentsToolStripButton.Name = "ZoomToExtentsToolStripButton";
            this.ZoomToExtentsToolStripButton.Size = new System.Drawing.Size(23, 22);
            this.ZoomToExtentsToolStripButton.Text = "ZoomToExtents";
            // 
            // ZoomOutModeToolStripButton
            // 
            this.ZoomOutModeToolStripButton.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.ZoomOutModeToolStripButton.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.ZoomOutModeToolStripButton.Name = "ZoomOutModeToolStripButton";
            this.ZoomOutModeToolStripButton.Size = new System.Drawing.Size(23, 22);
            this.ZoomOutModeToolStripButton.Text = "Zoom Out";
            // 
            // ZoomInModeToolStripButton
            // 
            this.ZoomInModeToolStripButton.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.ZoomInModeToolStripButton.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.ZoomInModeToolStripButton.Name = "ZoomInModeToolStripButton";
            this.ZoomInModeToolStripButton.Size = new System.Drawing.Size(23, 22);
            this.ZoomInModeToolStripButton.Text = "Zoom In";
            // 
            // PanToolStripButton
            // 
            this.PanToolStripButton.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.PanToolStripButton.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.PanToolStripButton.Name = "PanToolStripButton";
            this.PanToolStripButton.Size = new System.Drawing.Size(23, 22);
            this.PanToolStripButton.Text = "Pan";
            // 
            // helpToolStripButton
            // 
            this.helpToolStripButton.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.helpToolStripButton.Image = ((System.Drawing.Image)(resources.GetObject("helpToolStripButton.Image")));
            this.helpToolStripButton.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.helpToolStripButton.Name = "helpToolStripButton";
            this.helpToolStripButton.Size = new System.Drawing.Size(23, 22);
            this.helpToolStripButton.Text = "He&lp";
            // 
            // toolStripSeparator3
            // 
            this.toolStripSeparator3.Name = "toolStripSeparator3";
            this.toolStripSeparator3.Size = new System.Drawing.Size(6, 25);
            // 
            // tRefresh
            // 
            this.tRefresh.Interval = 5000;
            // 
            // tVHF
            // 
            this.tVHF.Interval = 2000;
            // 
            // AddLayerDialog
            // 
            this.AddLayerDialog.Filter = "Shapefiles|*.000|All files|*.*";
            this.AddLayerDialog.Multiselect = true;
            this.AddLayerDialog.RestoreDirectory = true;
            this.AddLayerDialog.Title = "Choose Layer Data";
            // 
            // mapBox1
            // 
            this.mapBox1.ActiveTool = SharpMap.Forms.MapBox.Tools.Pan;
            this.mapBox1.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.mapBox1.BackColor = System.Drawing.SystemColors.GradientActiveCaption;
            this.mapBox1.Cursor = System.Windows.Forms.Cursors.Hand;
            this.mapBox1.FineZoomFactor = 5D;
            this.mapBox1.Location = new System.Drawing.Point(0, 28);
            this.mapBox1.MapQueryMode = SharpMap.Forms.MapBox.MapQueryType.LayerByIndex;
            this.mapBox1.Name = "mapBox1";
            this.mapBox1.PreviewMode = SharpMap.Forms.MapBox.PreviewModes.Fast;
            this.mapBox1.QueryGrowFactor = 5F;
            this.mapBox1.QueryLayerIndex = 0;
            this.mapBox1.SelectionBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(210)))), ((int)(((byte)(244)))), ((int)(((byte)(244)))), ((int)(((byte)(244)))));
            this.mapBox1.SelectionForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(244)))), ((int)(((byte)(244)))), ((int)(((byte)(244)))));
            this.mapBox1.ShowProgressUpdate = false;
            this.mapBox1.Size = new System.Drawing.Size(648, 235);
            this.mapBox1.TabIndex = 5;
            this.mapBox1.Text = "mapBox1";
            this.mapBox1.WheelZoomMagnitude = 3D;
            // 
            // fMap
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(648, 261);
            this.Controls.Add(this.mapBox1);
            this.Controls.Add(this.toolStrip1);
            this.Name = "fMap";
            this.Text = "fMap";
            this.toolStrip1.ResumeLayout(false);
            this.toolStrip1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.ToolStrip toolStrip1;
        private System.Windows.Forms.ToolStripButton openToolStripButton;
        private System.Windows.Forms.ToolStripSeparator toolStripSeparator1;
        private System.Windows.Forms.ToolStripSplitButton View;
        private System.Windows.Forms.ToolStripMenuItem baseView;
        private System.Windows.Forms.ToolStripMenuItem standartView;
        private System.Windows.Forms.ToolStripMenuItem allView;
        private System.Windows.Forms.ToolStripButton textView;
        private System.Windows.Forms.ToolStripSeparator toolStripSeparator2;
        private System.Windows.Forms.ToolStripButton ZoomToExtentsToolStripButton;
        private System.Windows.Forms.ToolStripButton ZoomOutModeToolStripButton;
        private System.Windows.Forms.ToolStripButton ZoomInModeToolStripButton;
        private System.Windows.Forms.ToolStripButton PanToolStripButton;
        private System.Windows.Forms.ToolStripButton helpToolStripButton;
        private System.Windows.Forms.ToolStripSeparator toolStripSeparator3;
        private System.Windows.Forms.Timer tRefresh;
        internal System.Windows.Forms.Timer tVHF;
        private System.Windows.Forms.OpenFileDialog AddLayerDialog;
        private SharpMap.Forms.MapBox mapBox1;

    }
}