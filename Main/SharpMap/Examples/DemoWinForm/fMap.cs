using System;
using System.ComponentModel;
using System.Configuration;
using System.Collections.Generic;
using System.Data;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Text;
using System.IO;
using System.Text;
using System.Windows.Forms;
//using SharpMap;
using SharpMap.Data;
//using SharpMap.Data.Providers;
using SharpMap.Forms;
using GeoAPI.Geometries;
using SharpMap.Layers;
using SharpMap.Styles;
//using SharpMap.Converters.WellKnownBinary;
//using SharpMap.Converters.WellKnownText;
using SharpMap;
using SharpMap.Data.Providers;
using SharpMap.Layers;
using SharpMap.Rendering;
using SharpMap.Styles;
using Point = GeoAPI.Geometries.Coordinate;
using SharpMap.Rendering.Thematics;
//using Geometry = GeoAPI.Geometry;



namespace DemoWinForm
{
	public partial class fMap : Form
	{
		//private BindingList<cRadio> ListOfFullRadios;
		private readonly Dictionary<string, ILayerFactory> _layerFactoryCatalog = new Dictionary<string, ILayerFactory>();
		private readonly Dictionary<string, Bitmap> _symbolTable = new Dictionary<string, Bitmap>();
		private const string TempGeometryFieldName = "SHARPMAP_TEMPGEOM";

		private static bool _ShowBase = true;
		private static bool _ShowStandart = true;
		private static bool _ShowAll = true;
		private static bool _ShowText = true;

		public static bool ShowBase { get { return _ShowBase; } set { _ShowBase = value; } }
		public static bool ShowStandart { get { return _ShowStandart; } set { _ShowStandart = value; } }
		public static bool ShowAll { get { return _ShowAll; } set { _ShowAll = value; } }
		public static bool ShowText { get { return _ShowText; } set { _ShowText = value; } }

		public Point bottomleft;
		public Point topright;

		public double leftmargin;
		public double topmargin;
		public double rightmargin;
		public double bottommargin;

		public string str_out;

		private delegate IStyle GetStyleHandler(FeatureDataRow row);


		class ThemeViaDelegate : ITheme
		{
			public GetStyleHandler GetStyleFunction;
			private readonly IStyle _default;
			private readonly String _columnName;
			private readonly IDictionary<String, IStyle> _stylePreserver;

			public ThemeViaDelegate(IStyle defaultStyle, String columnName)
			{
				_default = defaultStyle;
				_stylePreserver = new Dictionary<string, IStyle>();
				_columnName = columnName;
			}


			#region Implementation of ITheme

			public IStyle GetStyle(FeatureDataRow attribute)
			{
				IStyle returnStyle;
				String value = Convert.ToString(attribute[_columnName]);
				if (!_stylePreserver.TryGetValue(value, out returnStyle))
				{
					if (GetStyleFunction != null)
					{
						returnStyle = GetStyleFunction(attribute);
						if (returnStyle == null)
							returnStyle = _default;
						_stylePreserver.Add(value, returnStyle);
					}
					else
						returnStyle = _default;
				}
				//returnStyle.MinVisible = _default.MinVisible;
				//returnStyle.MaxVisible = _default.MaxVisible;
				return returnStyle;
			}

			#endregion
		}

		public fMap()
		{
			InitializeComponent();

			registerSymbols();

			registerLayerFactories();

			this.SizeChanged += new EventHandler(frmMap_SizeChanged);

			//this.openToolStripButton.Click += new EventHandler(openToolStripButton_Click);
			this.ZoomToExtentsToolStripButton.Click += new EventHandler(ZoomToExtentsToolStripButton_Click);
			this.ZoomInModeToolStripButton.Click += new EventHandler(ZoomInModeToolStripButton_Click);
			this.ZoomOutModeToolStripButton.Click += new EventHandler(ZoomOutModeToolStripButton_Click);
			this.PanToolStripButton.Click += new EventHandler(PanToolStripButton_Click);

			tRefresh.Tick += new EventHandler(tRefresh_Tick);
			tVHF.Tick += new EventHandler(tVHF_Tick);

			mapBox1.MouseUp += new MapBox.MouseEventHandler(mapBox1_MouseUp);

			this.SetStyle(ControlStyles.DoubleBuffer | ControlStyles.UserPaint | ControlStyles.AllPaintingInWmPaint, true);
			this.UpdateStyles();

			mapBox1.ActiveTool = MapBox.Tools.Pan;
			mapBox1.ShowProgressUpdate = true;

			Cursor mic = mapBox1.Cursor;
			mapBox1.Cursor = Cursors.WaitCursor;
			mapBox1.BackColor = Color.FromArgb(0xd8, 0xf4, 0xe1);
			Cursor = Cursors.WaitCursor;

			string MapName = @"D:\RnD\Map";

			try
			{
				mapBox1.Map = FillLayers(MapName);

				mapBox1.Map.Size = Size;

				mapBox1.Map.ZoomToExtents();

				setmargin();

				InitializeMap();

			}
			catch (Exception ex)
			{
				MessageBox.Show(this, ex.Message, "Error");
			}

			Cursor = Cursors.Default;
			mapBox1.Cursor = mic;

			tVHF.Interval = 1000;
			tVHF.Enabled = true;
			tVHF.Start();
		}

		private void InitializeMap()
		{

			//VectorLayer layDistanceMarks = new VectorLayer("dismrk");
			//layDistanceMarks.DataSource = new MySqlProvider("Server=localhost;Port=3306;Database=projectdb;Uid=root;Pwd=sa;allow user variables=true", "geodata", "Geom", "oid");
			////layDistanceMarks.DataSource = new MySqlProvider ( "Server=172.17.1.124;Port=3306;Database=projectdb;Uid=root;allow user variables=true", "geodata", "Geom", "oid" );
			//layDistanceMarks.Style.Symbol = _symbolTable["WhiteStopShip"];
			//layDistanceMarks.Style.Line = new Pen(Color.FromArgb(160, Color.DarkSlateBlue), 1); // 147, 116, 39 ), 3 );
			//layDistanceMarks.Style.Line.DashStyle = DashStyle.Dash;
			//layDistanceMarks.Style.SymbolScale = 0.5f;
			//layDistanceMarks.MaxVisible = 0.5;

			//LabelLayer distanselabels = CreateLabelLayer(layDistanceMarks, "Name");
			////distanselabels.Style.ForeColor = Color.White;
			//distanselabels.Style.Font = new Font(FontFamily.GenericSerif, 10);

			//mapBox1.Map.Layers.Add(layDistanceMarks);
			//mapBox1.Map.Layers.Add(distanselabels);
		}

		private VectorLayer ColorLayer(Ogr prov, VectorLayer lay, string name)
		{
			switch (name)
			{
				case "ACHARE": /* 4, Anchorage area, 4, area */
					lay.Style.Fill = new SolidBrush(Color.FromArgb(192, Color.Blue)); // 182, 157, 64 ) );
					lay.Style.Outline = new Pen(Color.FromArgb(200, 147, 116, 39), 1);
					lay.Style.EnableOutline = true;
					break;
				case "BCNLAT": /* 7, "Beacon, lateral", point */
					if (_ShowAll || !_ShowBase || _ShowStandart)
					{
						lay.Style.PointSize = 10;
						lay.Style.Symbol = VectorStyle.DefaultSymbol;
						//_symbolTable ["OutFallSmall"]; // Resources.OutfallSmall;
						lay.Style.MaxVisible = 2;
					}
					break;
				case "BCNSPP": /* 9,"Beacon, special purpose/general", point */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.PointSize = 10;
						lay.Style.Symbol = VectorStyle.DefaultSymbol;
						//_symbolTable ["OutFallSmall"]; // Resources.OutfallSmall;
						lay.Style.PointColor = new SolidBrush(Color.FromArgb(100, 255, 255, 0));
					}
					break;
				case "BRIDGE": /* 11, Bridge, 11, area */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.Fill = new SolidBrush(Color.FromArgb(192, 147, 116, 39));
						lay.Style.Outline = new Pen(Color.FromArgb(192, 136, 152, 139), 1);
						lay.Style.EnableOutline = true;
					}
					break;
				case "BUISGL":  /* 12, cities - build_in area, Building, single, 12 */
					if (prov.OgrGeometryTypeString.IndexOf("Polygon") > 0)
					{
						if (_ShowAll || _ShowBase || _ShowStandart)
						{
							lay.Style.Fill = new SolidBrush(Color.FromArgb(240, 182, 157, 64));
							lay.Style.Outline = new Pen(Color.FromArgb(192, 147, 116, 39), 1);
							lay.Style.EnableOutline = true;
						}
					}
					else if (prov.OgrGeometryTypeString.IndexOf("Point") > 0)
					{
						if (_ShowAll || _ShowBase || _ShowStandart)
						{
							lay.Style.PointSize = 10f;
							//lay.Style.Symbol = VectorStyle.DefaultSymbol;
							lay.Style.PointColor = new SolidBrush(Color.FromArgb (255, 0, 255, 0));
						}
					}
					break;
				case "BUAARE": /* 13/ cities - build_in area, Built-up area, 13, area */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.Fill = new SolidBrush(Color.FromArgb(128, Color.DarkOrange)); // 182, 157, 64 ) ); //240
						lay.Style.Outline = new Pen(Color.FromArgb(255, 0, 0, 0), 1);
						lay.Style.EnableOutline = true;
					}
					break;
				case "BOYLAT": /* 17, "Buoy, lateral", point */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.PointSize = 10;
						lay.Style.Symbol = VectorStyle.DefaultSymbol;
						//_symbolTable ["OutFallSmall"]; // Resources.OutfallSmall;
						lay.Style.MaxVisible = 2;
					}
					break;
				case "CBLARE": /* 20, cable area, 20, area  */
					lay.Style.Fill = new SolidBrush(Color.FromArgb(192, Color.Red)); // 182, 157, 64 ) );
					lay.Style.Outline = new Pen(Color.FromArgb(200, 147, 116, 39), 1);
					lay.Style.EnableOutline = true;
					break;
				case "CBLOHD": /* 21, Cable, overhead, line */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.Line = new Pen(Color.FromArgb(160, Color.Black), 3);
						lay.Style.Line.DashStyle = DashStyle.DashDot;
					}
					break;
				case "CBLSUB": /*22,"Cable, submarine", line */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.Line = new Pen(Color.FromArgb(160, Color.Black), 3);
						lay.Style.Line.DashStyle = DashStyle.DashDot;
					}
					break;
				case "CANALS": /* 23, Canal, 23, area */
					if (prov.OgrGeometryTypeString.IndexOf("Polygon") > 0)
					{
						lay.Style.Fill = new SolidBrush(Color.FromArgb(255, Color.Blue)); // 182, 157, 64 ) );
						lay.Style.Outline = new Pen(Color.FromArgb(200, 147, 116, 39), 1);
						lay.Style.EnableOutline = true;
					}
					else if (prov.OgrGeometryTypeString.IndexOf("Line") > 0)
					{
						if (_ShowAll || _ShowBase || _ShowStandart)
						{
							lay.Style.Line = new Pen(Color.FromArgb(200, 95, 106, 96), 10);
							lay.MaxVisible = .3;
						}
					}
					break;
				case "CTNARE": /* 27, Caution area, point */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.PointSize = 10;
						lay.Style.Symbol = VectorStyle.DefaultSymbol;
						//_symbolTable ["OutFallSmall"]; // Resources.OutfallSmall;
						lay.Style.MaxVisible = 2;
					}
					break;
				case "COALNE": /* 30, Coastline, line */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.Outline = new Pen(Color.FromArgb(160, Color.DeepSkyBlue), 1); // 129, 195, 226 ), 1 );
					}
					break;
				case "DAMCON": /* 38, Dam, line */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.Line = new Pen(Color.FromArgb(200, Color.DarkBlue), 2);
					}
					break;
				case "DAYMAR": /* 39,Daymark, point */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.PointSize = 10;
						lay.Style.Symbol = VectorStyle.DefaultSymbol;
						//_symbolTable ["OutFallSmall"]; // Resources.OutfallSmall;
						lay.Style.MaxVisible = 2;
					}
					break;
                case "NOTMRK":
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.PointSize = 10;
						lay.Style.Symbol = VectorStyle.DefaultSymbol;
						//_symbolTable ["OutFallSmall"]; // Resources.OutfallSmall;
						lay.Style.MaxVisible = 2;
					}
					break;

				case "DEPARE": /* 42, Depth area, 42, area */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						//lay.Style.Fill = new SolidBrush(Color.FromArgb(128, 0x5f, 0x6a, 0x60)); //96
						lay.Style.Fill = new SolidBrush(Color.FromArgb(128, 0x1f, 0x1a, 0xd0)); //96
						lay.Style.Outline = new Pen(Color.FromArgb(200, 95, 106, 96), 1);
						lay.Style.EnableOutline = false;
					}
					break;
				case "DEPCNT": /* 43, Depth contour, line */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.Line = new Pen(Color.FromArgb(200, Color.DarkBlue), 2);
					}
					break;
				case "DISMAR": /* 44, Distance mark, point */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.PointSize = 10;
						lay.Style.Symbol = VectorStyle.DefaultSymbol;
						//_symbolTable ["OutFallSmall"]; // Resources.OutfallSmall;
						lay.Style.MaxVisible = 2;
					}
					break;
				case "DRGARE": /* 46, Dredged area, 46, area */
					lay.Style.Fill = new SolidBrush(Color.FromArgb(192, Color.DarkBlue)); // 182, 157, 64 ) );
					lay.Style.Outline = new Pen(Color.FromArgb(200, 147, 116, 39), 1);
					lay.Style.EnableOutline = true;
					break;
				case "DMPGRD":  /* 48, Dumping ground, 48, area */
					lay.Style.Fill = new SolidBrush(Color.FromArgb(192, Color.SandyBrown)); // 182, 157, 64 ) );
					lay.Style.Outline = new Pen(Color.FromArgb(200, 147, 116, 39), 1);
					lay.Style.EnableOutline = true;
					break;
				case "DYKCON": /* 49, Dyke, 49, area */
					if (prov.OgrGeometryTypeString.IndexOf("Polygon") > 0)
					{
					if (_ShowAll || _ShowBase || _ShowStandart)
						{
							lay.Style.Fill = new SolidBrush(Color.FromArgb(200, 147, 116, 39));
							//lay.Style.Fill = new SolidBrush(Color.FromArgb(255, Color.Black));
							lay.Style.Outline = new Pen(Color.FromArgb(200, 136, 152, 139), 1);
							lay.Style.EnableOutline = true;
						}
					}
					else if (prov.OgrGeometryTypeString.IndexOf("Polygon") > 0)
					{
						if (_ShowAll || _ShowBase || _ShowStandart)
						{
							lay.Style.Line = new Pen(Color.FromArgb(200, 147, 116, 39), 3);
						}
					}
					break;
				case "FAIRWY": /* 51, Fairway, 51, area */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.Fill = new SolidBrush(Color.FromArgb(128, Color.Blue ));
						lay.Style.Outline = new Pen(Color.FromArgb(200, 136, 152, 139), 1);
						lay.Style.Outline.DashStyle = DashStyle.Dash;
						lay.Style.EnableOutline = true;
					}
					break;
				case "FERYRT": /* 53, Ferry route, line */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.Line = new Pen(Color.FromArgb(160, Color.Red), 3);
						lay.Style.Line.DashStyle = DashStyle.DashDotDot;
						lay.MaxVisible = .2;
					}
					break;
				case "FOGSIG": /* 58, Fog signal, point */
					if (_ShowAll || !_ShowBase || _ShowStandart)
					{
						lay.Style.PointSize = 10;
						lay.Style.Symbol = VectorStyle.DefaultSymbol;
						//_symbolTable ["OutFallSmall"]; // Resources.OutfallSmall;
						lay.Style.MaxVisible = 2;
					}
					break;
				case "GATCON": /* 61, Gate, 61, area */
					lay.Style.Fill = new SolidBrush(Color.FromArgb(192, Color.Black)); // 182, 157, 64 ) );
					lay.Style.Outline = new Pen(Color.FromArgb(200, 147, 116, 39), 1);
					lay.Style.EnableOutline = true;
					break;
				case "LAKARE": /* 69, lake, 69, area */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.Fill = new SolidBrush(Color.FromArgb(192, Color.Blue));
						lay.Style.Outline = new Pen(Color.FromArgb(255, 95, 106, 96), 1);
						lay.Style.EnableOutline = true;
					}
					break;
				case "LNDARE": /* 71, land area, 71, area */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						//lay.Style.Fill = new SolidBrush(Color.FromArgb(127, 177, 170, 107)); //127
						lay.Style.Fill = new SolidBrush(Color.FromArgb(128, Color.SandyBrown)); //96
						lay.Style.Outline = new Pen(Color.FromArgb(100, 0, 0, 0), 1);
						lay.Style.EnableOutline = true;
					}
					break;
				case "LNDELV": /* 72, Land elevation,line */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.PointSize = 10;
						lay.Style.Symbol = VectorStyle.DefaultSymbol;
						//_symbolTable ["OutFallSmall"]; // Resources.OutfallSmall;
					}
					break;
				case "LNDRGN": /* 73, land region, 73, area */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						//lay.Style.Fill = new SolidBrush(Color.FromArgb(127, 115, 170, 198));
						lay.Style.Fill = new SolidBrush(Color.FromArgb(64, Color.SandyBrown));
						lay.Style.Outline = new Pen(Color.FromArgb(100, 0, 0, 0), 1);
						lay.Style.EnableOutline = true;
					}
					break;
				case "LNDMRK": /* 74,Landmark, point */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.PointSize = 14;
						lay.Style.PointColor = new SolidBrush( Color.FromArgb(100, 255, 0, 255));
						lay.Style.Symbol = VectorStyle.DefaultSymbol;
						//_symbolTable ["OutFallSmall"]; // Resources.OutfallSmall;


					}
					break;
				case "LIGHTS": /* 75,Light, point */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.PointSize = 10f;
						lay.Style.Symbol = _symbolTable["PumpSmall"];
						lay.Style.MaxVisible = 2f;
						lay.Style.PointColor = Brushes.Green;
					}
					break;
				case "MORFAC": /* 84, Mooring/warping facility, point */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.PointSize = 10;
						lay.Style.Symbol = VectorStyle.DefaultSymbol;
						//_symbolTable ["OutFallSmall"]; // Resources.OutfallSmall;

					}
					break;
				case "NAVLNE": /* 85, Navigation line, line */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.Line = new Pen(Color.FromArgb(200, Color.DarkBlue), 2);
					}
					break;
                case "notmrk": /* 86, Obstruction, line */
                    if (_ShowAll || !_ShowBase || _ShowStandart)
                    {
                        lay.Style.PointSize = 10;
                        //lay.Style.Symbol = VectorStyle.DefaultSymbol;
                        lay.Style.Symbol = _symbolTable["notmrk"]; // Resources.OutfallSmall;
                        lay.Style.MaxVisible = 2;
                    }
                    break;

				case "OBSTRN": /* 86, Obstruction, line */
					if (_ShowAll || !_ShowBase || _ShowStandart)
					{
						lay.Style.PointSize = 10;
						lay.Style.Symbol = VectorStyle.DefaultSymbol;
						//_symbolTable ["OutFallSmall"]; // Resources.OutfallSmall;
						lay.Style.MaxVisible = 2;
					}
					break;
				case "OFSPLF": /* 87,Offshore platform, line */
					if (_ShowAll || !_ShowBase || _ShowStandart)
					{
						lay.Style.PointSize = 10;
						lay.Style.Symbol = VectorStyle.DefaultSymbol;
						//_symbolTable ["OutFallSmall"]; // Resources.OutfallSmall;
						lay.Style.MaxVisible = 2;
					}
					break;
				case "PILPNT": /* 90, Pile, point */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						//lay.Style.PointSize = 10;
						//lay.Style.Symbol = VectorStyle.DefaultSymbol;
						////_symbolTable ["OutFallSmall"]; // Resources.OutfallSmall;

						lay.Style.PointSize = 4;
						lay.Style.PointColor = Brushes.Black;
					}
					break;
				case "PIPARE": /* 92, Pipeline area, 92, area  */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.Fill = new SolidBrush(Color.FromArgb(64, Color.Red));
						lay.Style.Outline = new Pen(Color.FromArgb(200, Color.Red), 1);
						lay.Style.Outline.DashStyle = DashStyle.Dot;
						lay.Style.EnableOutline = true;
					}
					break;
				case "PIPSOL": /* 94, "Pipeline, submarine/on land", line */
					if (_ShowAll || !_ShowBase || _ShowStandart)
					{
						lay.Style.Line = new Pen(Color.FromArgb(160, Color.Red), 2);
						lay.Style.Line.DashStyle = DashStyle.DashDot;
					}
					break;
				case "PONTON": /* 95, Pontoon, 95, area */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.Fill = new SolidBrush(Color.FromArgb(192, Color.SaddleBrown));
						lay.Style.Outline = new Pen(Color.FromArgb(192, 136, 152, 139), 1);
						lay.Style.EnableOutline = true;
					}
					break;
				case "PRDARE": /* 97, Production / storage area, point */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.PointSize = 10;
						lay.Style.Symbol = VectorStyle.DefaultSymbol;
						//_symbolTable ["OutFallSmall"]; // Resources.OutfallSmall;
					}
					break;
				case "PYLONS": /* 98, Pylon/bridge support, 98, area */
					if (prov.OgrGeometryTypeString.IndexOf("Polygon") > 0)
					{
						if (_ShowAll || _ShowBase || _ShowStandart)
						{
							lay.Style.Fill = new SolidBrush(Color.FromArgb(64, Color.DeepPink));
							lay.Style.Outline = new Pen(Color.FromArgb(200, Color.DeepPink), 1);
							lay.Style.Outline.DashStyle = DashStyle.Dot;
							lay.Style.EnableOutline = true;
						}
					}
					else if (prov.OgrGeometryTypeString.IndexOf("Point") > 0)
					{
						if (_ShowAll || !_ShowBase || _ShowStandart)
						{
							lay.Style.PointSize = 10;
							lay.Style.Symbol = _symbolTable["OutFallSmall"]; // Resources.OutfallSmall;
							lay.Style.MaxVisible = .2;
						}
					}
					break;
				case "RAILWY": /* 106,  railway, line */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.Line = new Pen(Color.FromArgb(240, Color.Black), 2); // 147, 116, 39 ), 3 );
						lay.Style.Line.DashStyle = DashStyle.DashDotDot;
						lay.MaxVisible = .2;
					}
					break;
				case "RECTRC": /* 109, Recommended track, line */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.Line = new Pen(Color.FromArgb(200, Color.DarkBlue), 2);
					}
					break;
				case "RESARE": /* 112, Restricted area, 112, area */
					lay.Style.Fill = new SolidBrush(Color.FromArgb(192, Color.Black)); // 182, 157, 64 ) );
					lay.Style.Outline = new Pen(Color.FromArgb(200, 147, 116, 39), 1);
					lay.Style.EnableOutline = true;
					break;
				case "RETRFL": /* 113, Retro-reflector, point */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.PointSize = 10;
						lay.Style.Symbol = VectorStyle.DefaultSymbol;
						//_symbolTable ["OutFallSmall"]; // Resources.OutfallSmall;
					}
					break;
				case "RIVERS": /* 114, Rirers, 114, area */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.Fill = new SolidBrush(Color.FromArgb(168, Color.Blue)); // 129, 195, 255));
						lay.Style.Outline = new Pen(Color.FromArgb(200, 95, 106, 96), 1);
						lay.Style.EnableOutline = true;
					}
					break;
				case "ROADWY": /* 116, Road, line */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.Line = new Pen(Color.FromArgb(240, Color.BurlyWood), 2); // 147, 116, 39 ), 1 );
						lay.MaxVisible = .3;
					}
					break;              
				case "SEAARE": /* 119, Sea area / named water area, 119, area  */
					lay.Style.Fill = new SolidBrush(Color.FromArgb(192, Color.Blue));
					lay.Style.Outline = new Pen(Color.FromArgb(200, 147, 116, 39), 1);
					lay.Style.EnableOutline = true;
					break;
				case "SBDARE": /* 121, Seabed area, point */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.PointSize = 10;
						lay.Style.Symbol = VectorStyle.DefaultSymbol;
						//_symbolTable ["OutFallSmall"]; // Resources.OutfallSmall;
					}
					break;
				case "SILTNK":  /* 125, Silo / tank, 125, area */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.Fill = new SolidBrush(Color.FromArgb(192, 182, 157, 64));
						lay.Style.Outline = new Pen(Color.FromArgb(192, 147, 116, 39), 1);
						lay.Style.EnableOutline = true;
					}
					break;
				case "SLOTOP": /* 126, Slope topline, point */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.Line = new Pen(Color.FromArgb(160, Color.Brown), 1); //136, 152, 139 ), 1 );
					}
					break;
				case "SMCFAC": /* 128, Small craft facility, point */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.PointSize = 10;
						lay.Style.Symbol = VectorStyle.DefaultSymbol;
						//_symbolTable ["OutFallSmall"]; // Resources.OutfallSmall;
					}
					break;
				case "UWTROC": /* 153,Underwater rock / awash rock, point*/
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.PointSize = 10;
						lay.Style.Symbol = VectorStyle.DefaultSymbol;
						//_symbolTable ["OutFallSmall"]; // Resources.OutfallSmall;
					}
					break;
				case "UNSARE": /* 154, Unsurveyed area, 154, area */
					lay.Style.Fill = new SolidBrush(Color.FromArgb(192, Color.Blue)); // 182, 157, 64 ) );
					lay.Style.Outline = new Pen(Color.FromArgb(200, 147, 116, 39), 1);
					lay.Style.EnableOutline = true;
					break;
				case "WRECKS": /* 159,Wreck, point */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.PointSize = 10f;
						lay.Style.Symbol = _symbolTable["Wrecks"];
						lay.Style.SymbolScale = 1;
						lay.Style.MaxVisible = 1f;
						lay.Style.PointColor = Brushes.Brown;
						lay.MaxVisible = .2;
					}
					break;
				case "wtwdis": /* */
					if (_ShowAll || _ShowBase || _ShowStandart)
					{
						lay.Style.Line = new Pen(Color.FromArgb(160, Color.Black), 3);
						lay.Style.Line.DashStyle = DashStyle.DashDot;
					}
					break;


				case "M_NSYS":
					lay.Style.Fill = new SolidBrush(Color.FromArgb(192, Color.Green)); // 182, 157, 64 ) );
					lay.Style.Outline = new Pen(Color.FromArgb(200, Color.Black), 5);
					lay.Style.EnableOutline = true;
					break;
				case "M_COVR":
					lay.Style.Fill = new SolidBrush(Color.FromArgb(0, Color.Green)); // 182, 157, 64 ) );
					lay.Style.Outline = new Pen(Color.FromArgb(0, Color.Black), 5);
					lay.Style.EnableOutline = true;
					//LabelLayer layLabel = CreateLabelLayer ( lay, "INFORM" );
					//layLabel.Style.Font = new Font ( FontFamily.GenericSansSerif, 8 );
					//addLayer ( layLabel );
					break;
				case "M_ACCY":
					lay.Style.Fill = new SolidBrush(Color.FromArgb(192, Color.LightBlue)); // 182, 157, 64 ) );
					lay.Style.Outline = new Pen(Color.FromArgb(200, Color.Black), 5);
					lay.Style.EnableOutline = true;
					break;

				case "Generic":

					lay.Style.Fill = new SolidBrush(Color.FromArgb(64, Color.Transparent));
					//lay.Style.Outline = new Pen(Color.FromArgb(0, Color.Transparent), 1);
					lay.Style.SymbolScale = .5f;
					//lay.Style.EnableOutline = false;
					lay.Style.Symbol = _symbolTable["WhiteShip"];
					int st = lay.Style.Symbol.PropertyItems[0].Value[0];
					if (st == 160)
					{
					    lay.Style.Symbol = _symbolTable["WhiteStopShip"];
					}
					break;




				//    case "M_NSYS" :
				//        if ( _ShowAll || !_ShowBase || _ShowStandart ) {
				//            lay.Style.PointSize = 10;
				//            //lay.Style.Symbol = VectorStyle.DefaultSymbol;
				//            lay.Style.Symbol = _symbolTable ["WhiteStopShip"];
				//            //_symbolTable ["OutFallSmall"]; // Resources.OutfallSmall;
				//            lay.Style.MaxVisible = 2;
				//        }
				//        break;






			}
			return lay;
		}

		private Map FillLayers(string mapName)
		{
			Map map = new Map();

			List<FileInfo> lfi = FillFiles(mapName);

			//Transparent style
			VectorStyle transparentStyle = new VectorStyle();

			transparentStyle.Fill = Brushes.Transparent;
			transparentStyle.EnableOutline = true; //otherwise all the fancy theming stuff won't work!
			transparentStyle.Line.Brush = Brushes.Transparent;
			transparentStyle.Outline.Brush = Brushes.Transparent;
			transparentStyle.Symbol = null;

			int j = 0;

			try
			{
				for (j = 0; j < lfi.Count; j++)
				{
					string fileName = lfi[j].FullName;
					string extension = Path.GetExtension(fileName);

					ILayerFactory layerFactory = null;

					if (!_layerFactoryCatalog.TryGetValue(extension, out layerFactory))
						continue;

					Ogr provider = new Ogr(fileName);

					//for (Int32 i = 0 ; i < provider.NumberOfLayers ; i++)
					for (Int32 i = provider.NumberOfLayers - 1; i > 0; i--)
					{
						//i = 3;
						Ogr prov = new Ogr(fileName, i);

						if (!prov.IsFeatureDataLayer)
							continue;

						string name = string.Empty;

						name = prov.LayerName;

						FeatureDataSet ds = new FeatureDataSet();

						//prov.GetFeaturesInView(mapBox1.Map.Envelope, ds);

						VectorLayer maplay = new VectorLayer("");

						VectorLayer lay = new VectorLayer(string.Format("{0}_Layer_{1}", fileName, name), prov);

						maplay = ColorLayer(prov, lay, name);
						map.Layers.Add(maplay);
						switch (name)
						{
							case "BUAARE":
							case "LNDRGN":
								{
									LabelLayer laylabel = CreateLabelLayer(maplay, "OBJNAM");
									//addLayer(laylabel);
									map.Layers.Add(laylabel);
									break;
								}
							case "M_COVR":
							case "GENERIC":
								{
									LabelLayer laylabel = CreateLabelLayer(maplay, "OBJL");
									map.Layers.Add(laylabel);
									break;
								}

						}
					}
				}
			}
			#region old
			//switch (name)
						//{
						//    #region Polygon	








						//    #endregion Polygon

						//    #region Lines

						//    //    case "m_nsys":
						//    //        if ( _ShowAll || !_ShowBase || _ShowStandart ) {
						//    //            lay.Style.Line = new Pen ( Color.FromArgb ( 200, Color.Coral ), 2 );
						//    //            map.Layers.Add ( lay );
						//    //        }
						//    //        break;
						//    //    //case "Generic":
						//    //    //    lay.Style.Line = new Pen ( Color.Black, 1 );
						//    //    //    lay.MinVisible = 200;
						//    //    //    lay.MaxVisible = .5;
						//    //    //    map.Layers.Add ( lay );

						//    //    //    LabelLayer laylabel = CreateLabelLayer ( lay, "0" );
						//    //    //    laylabel.Style.Font = new Font ( FontFamily.GenericSansSerif, 8 );
						//    //    //    map.Layers.Add ( laylabel );
						//    //    //    break;
						//    #endregion Lines

						//    #region Points



						//    ////case "Generic":

						//    ////        //lay.Style.PointSize = 2;
						//    ////        lay.Style.PointColor = Brushes.Black;
						//    ////        lay.Style.PointSize = 10;
						//    ////        //lay.Style.Symbol = VectorStyle.DefaultSymbol;
						//    ////        lay.Style.Symbol = _symbolTable ["WhiteStopShip"];
						//    ////        lay.Style.SymbolScale = .5f;
						//    ////        //_symbolTable ["OutFallSmall"]; // Resources.OutfallSmall;
						//    ////        lay.Style.MaxVisible = 0.5;

						//    ////        map.Layers.Add ( lay );

						//    ////        //LabelLayer layLabel = CreateLabelLayer ( lay, "INFORM" );
						//    ////        //layLabel.Style.Font = new Font ( FontFamily.GenericSansSerif, 8 );
						//    ////        //addLayer ( layLabel );

						//    ////        break;
						//    //    //else {
						//    //    //    lay.Style.PointSize = 5f;
						//    //    //    //lay.Style.MinVisible = 50f;
						//    //    //    lay.Style.PointColor = Brushes.Green;
						//    //    //    map.Layers.Add ( lay );
						//    //    //}
						//    //    //}
						//    //    }
						//    #endregion
						//}
					//}
					

					//VectorLayer vlay = new VectorLayer("0");

					//vlay.DataSource = new SharpMap.Data.Providers.Ogr(fileName, provider.NumberOfLayers - 1);

					//vlay.Style.Fill = new SolidBrush(Color.FromArgb(128, Color.Transparent));

					//map.Layers.Add(vlay);
					//LabelLayer vlayLabel = CreateLabelLayer(vlay, "INFORM");
					//vlayLabel.Style.Font = new Font(FontFamily.GenericSansSerif, 8);
					//map.Layers.Add(vlayLabel);
				//}
			//}
			#endregion 
			catch (Exception ex)
			{
				MessageBox.Show("Error: Could not read file from disk. Original error: " + ex.Message);
			}
			return map;
		}

		private void frmMap_SizeChanged(object sender, EventArgs e) {
			this.mapBox1.Refresh ();
		}

		#region Private members
		private void registerSymbols()
		{
			_symbolTable["RedShip"] = Properties.Resources.redShip;
			_symbolTable["BlueShip"] = Properties.Resources.blueShip;
			_symbolTable["WhiteShip"] = Properties.Resources.whiteShip;
			_symbolTable["WhiteStopShip"] = Properties.Resources.whiteStopShip;
			_symbolTable["CyanShip"] = Properties.Resources.cyanShip;
			_symbolTable["LightgrayShip"] = Properties.Resources.lightgrayShip;
			_symbolTable["MagentaShip"] = Properties.Resources.magentaShip;
			_symbolTable["OutFallSmall"] = Properties.Resources.OutfallSmall;
			_symbolTable["PinkShip"] = Properties.Resources.pinkShip;
			_symbolTable["Wrecks"] = Properties.Resources.wrecks;
			_symbolTable["YellowShip"] = Properties.Resources.yellowShip;
			_symbolTable["PumpSmall"] = Properties.Resources.PumpSmall;
			_symbolTable["RadioGreen"] = Properties.Resources.RadioGreen;
			_symbolTable["RadioRed"] = Properties.Resources.RadioRed;
			_symbolTable["RadioYellow"] = Properties.Resources.RadioYellow;
            _symbolTable["notmrk"] = Properties.Resources.notmrk;
		}
		private void registerLayerFactories()
		{
			//ConfigurationManager.GetSection("LayerFactories");
			_layerFactoryCatalog[".000"] = new S57FileLayerFactory();
		}
		private void addLayer(ILayer layer)
		{
			mapBox1.Map.Layers.Add(layer);
		}

		private static List<FileInfo> FillFiles(string mapName)
		{
			List<FileInfo> lfi = new List<FileInfo>();
			DirectoryInfo dir = new DirectoryInfo(mapName);
			FileInfo[] fi = dir.GetFiles();
			foreach (FileInfo file in fi)
			{
				lfi.Add(file);
			}
			return lfi;
		}

		private void setmargin()
		{
			//topright = mapBox1.Map.Envelope.TopRight;
			//bottomleft = mapBox1.Map.Envelope.BottomLeft;
			//topmargin = topright.Y;
			//bottommargin = bottomleft.Y;
			//leftmargin = bottomleft.X;
			//rightmargin = topright.X;
		}

		#region toolstrip

		private void textView_Click(object sender, EventArgs e)
		{
			if (ShowText == true)
				ShowText = false;
			else
				ShowText = true;
		}
		/// <summary>
		/// Zoom to Extends
		/// </summary>
		/// <param name="sender"></param>
		/// <param name="e"></param>
		private void ZoomToExtentsToolStripButton_Click(object sender, EventArgs e)
		{
			BeginInvoke((MethodInvoker)delegate { zoomToExtents(); });
		}

		private void zoomToExtents()
		{
			mapBox1.Map.ZoomToExtents();
			mapBox1.Refresh();
		}
		/// <summary>
		/// Pan
		/// </summary>
		/// <param name="sender"></param>
		/// <param name="e"></param>
		private void PanToolStripButton_Click(object sender, EventArgs e)
		{
			BeginInvoke((MethodInvoker)delegate { changeMode(MapBox.Tools.Pan); });
		}
		/// <summary>
		/// Zoom out
		/// </summary>
		/// <param name="sender"></param>
		/// <param name="e"></param>
		private void ZoomOutModeToolStripButton_Click(object sender, EventArgs e)
		{
			BeginInvoke((MethodInvoker)delegate { changeMode(MapBox.Tools.ZoomOut); });
		}
		/// <summary>
		/// Zoom in
		/// </summary>
		/// <param name="sender"></param>
		/// <param name="e"></param>
		private void ZoomInModeToolStripButton_Click(object sender, EventArgs e)
		{
			BeginInvoke((MethodInvoker)delegate { changeMode(MapBox.Tools.ZoomIn); });
		}
		/// <summary>
		/// Change mode
		/// </summary>
		/// <param name="tool"></param>
		private void changeMode(MapBox.Tools tool)
		{
			mapBox1.ActiveTool = tool;

			ZoomInModeToolStripButton.Checked = (tool == MapBox.Tools.ZoomIn);
			ZoomOutModeToolStripButton.Checked = (tool == MapBox.Tools.ZoomOut);
			PanToolStripButton.Checked = (tool == MapBox.Tools.Pan);
			//QueryModeToolStripButton.Checked = (tool == MapBox.Tools.Query);
		}

		#endregion menu	toolstrip

		#region Tracker
		/// <summary>
		/// 
		/// </summary>
		/// <param name="col"></param>
		/// <returns></returns>
		private bool isAttributeColumn(DataColumn col)
		{
			return !StringEquals(col.ColumnName, "Longitude") &&
				   !StringEquals(col.ColumnName, "Latitude") &&
				   !StringEquals(col.ColumnName, TempGeometryFieldName) &&
				   !(col.ColumnName.StartsWith("Envelope_"));
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="s1"></param>
		/// <param name="s2"></param>
		/// <returns></returns>
		private bool StringEquals(string s1, string s2)
		{
			return String.Equals(s1, s2, StringComparison.CurrentCultureIgnoreCase);
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dataTable"></param>
		/// <returns></returns>
		private FeatureDataTable CreateFeatureDataTable(DataTable dataTable)
		{

			FeatureDataTable fdt = new FeatureDataTable();
			foreach (DataColumn col in dataTable.Columns)
				// if (isAttributeColumn(col))
				fdt.Columns.Add(col.ColumnName, col.DataType, col.Expression);

			foreach (DataRow dr in dataTable.Rows)
			{
				FeatureDataRow fdr = fdt.NewRow();
				foreach (DataColumn col in dataTable.Columns)
					//if ( isAttributeColumn ( col ) )
					fdr[col.ColumnName] = dr[col];

				//fdr.Geometry = GeometryFromWKB.Parse((byte[])dr[TempGeometryFieldName]);
				fdt.AddRow(fdr);
			}
			return fdt;
		}


		/// <summary>
		/// Обновяване на данните за местоположението на корабите
		/// </summary>
		private void RefreshLayer()
		{
			//cVessel layVessel = new cVessel();
			//DataTable dt = layVessel.LoadLastPosition(leftmargin, rightmargin, topmargin, bottommargin);

			//foreach (VectorLayer l in this.mapBox1.Map.VariableLayers)
			//{
			//    foreach (DataRow dr in dt.Rows)
			//    {
			//        string name = Convert.ToString(dr["Name"]);
			//        if (l.LayerName == name)
			//        {
			//            SharpMap.Geometries.Point pt = new SharpMap.Geometries.Point(Convert.ToDouble(dr["Longitude"]), Convert.ToDouble(dr["Latitude"]));
			//            l.DataSource = new SharpMap.Data.Providers.GeometryFeatureProvider(pt);
			//            l.Style.SymbolRotation = (float)(Convert.ToDouble(dr["Rot"]) - 90);
			//        }
			//    }
			//}
		}
		/// <summary>
		/// Timer tRefresh tick
		/// </summary>
		/// <param name="o"></param>
		/// <param name="e"></param>
		private void tRefresh_Tick(object o, EventArgs e)
		{
			tRefresh.Stop();
			RefreshLayer();
			VariableLayerCollection.TouchTimer();
			mapBox1.Refresh();
			//mapBox1.ActiveTool = MapBox.Tools.Pan;
			tRefresh.Start();
		}

		#endregion Tracker

		/// <summary>
		/// Open form with information
		/// of vessel
		/// </summary>
		/// <param name="sender"></param>
		/// <param name="e"></param>
		private void mapBox1_MouseUp(object sender, MouseEventArgs e)
		{

			//cVessel layVessel = new cVessel();

			//SharpMap.Geometries.Point p = mapBox1.Map.ImageToWorld(e.Location);

			//BoundingBox box = p.GetBoundingBox();
			//double pX = box.Min.X;
			//double pY = box.Min.Y;

			//DataTable dt = layVessel.GetShipInfo(pX, pY);

			//foreach (DataRow dr in dt.Rows)
			//{
			//    cVessel v = new cVessel(dr);
			//    Form f = new fInfo(v);

			//    f.Show();
			//}
		}
		/// <summary>
		/// Create label layer
		/// </summary>
		/// <param name="originalLayer"></param>
		/// <param name="labelColumnName"></param>
		/// <returns></returns>
		public LabelLayer CreateLabelLayer(VectorLayer originalLayer, string labelColumnName)
		{
			SharpMap.Layers.LabelLayer labelLayer = new SharpMap.Layers.LabelLayer(originalLayer.LayerName + ":Labels");
			labelLayer.DataSource = originalLayer.DataSource;
			labelLayer.LabelColumn = labelColumnName;
			labelLayer.Style.CollisionDetection = false;
			labelLayer.Style.CollisionBuffer = new SizeF(10F, 10F);
			labelLayer.LabelFilter = SharpMap.Rendering.LabelCollisionDetection.ThoroughCollisionDetection;
			labelLayer.Style.Offset = new PointF(0, -5F);
			labelLayer.MultipartGeometryBehaviour = SharpMap.Layers.LabelLayer.MultipartGeometryBehaviourEnum.CommonCenter;
			labelLayer.Style.Font = new Font(FontFamily.GenericSansSerif, 12);
			labelLayer.MaxVisible = originalLayer.MaxVisible;
			labelLayer.MinVisible = originalLayer.MinVisible;
			labelLayer.Style.Halo = new Pen(Color.White, 3);
			labelLayer.SmoothingMode = System.Drawing.Drawing2D.SmoothingMode.HighQuality;
			labelLayer.CoordinateTransformation = originalLayer.CoordinateTransformation;

			labelLayer.LabelStringDelegate = delegate(SharpMap.Data.FeatureDataRow fdr)
			{
				//return fdr [Convert.ToInt32 ( labelColumnName )].ToString ();
				return fdr[labelColumnName].ToString();
				//return fdr ["inform"].ToString ();
			};

			return labelLayer;
		}

		public LabelLayer CreateLabelLayer(VectorLayer originalLayer)
		{
			SharpMap.Layers.LabelLayer labelLayer = new SharpMap.Layers.LabelLayer(originalLayer.LayerName + ":Labels");
			labelLayer.DataSource = originalLayer.DataSource;
			labelLayer.Style.CollisionDetection = false;
			labelLayer.Style.CollisionBuffer = new SizeF(10F, 10F);
			labelLayer.LabelFilter = SharpMap.Rendering.LabelCollisionDetection.ThoroughCollisionDetection;
			labelLayer.Style.Offset = new PointF(0, -5F);
			labelLayer.MultipartGeometryBehaviour = SharpMap.Layers.LabelLayer.MultipartGeometryBehaviourEnum.CommonCenter;
			labelLayer.Style.Font = new Font(FontFamily.GenericSansSerif, 12);
			labelLayer.MaxVisible = originalLayer.MaxVisible;
			labelLayer.MinVisible = originalLayer.MinVisible;
			//labelLayer.Style.Halo = new Pen(Color.White, 3);
			labelLayer.SmoothingMode = System.Drawing.Drawing2D.SmoothingMode.HighQuality;
			//labelLayer.CoordinateTransformation = originalLayer.CoordinateTransformation;

			labelLayer.LabelStringDelegate = delegate(SharpMap.Data.FeatureDataRow fdr)
			{
				//return fdr [Convert.ToInt32 ( labelColumnName )].ToString ();
				
				return fdr["OBJL"].ToString();
				//return fdr ["inform"].ToString ();
			};
			//fdrr = frd;
			return labelLayer;
		}

		/// <summary>
		/// Timer tick
		/// </summary>
		/// <param name="sender"></param>
		/// <param name="e"></param>
		private void tVHF_Tick(object sender, System.EventArgs e)
		{

			if (Cursor.Current != Cursors.Cross)
			{
				tVHF.Stop();
				UpdateMap();
				VariableLayerCollection.TouchTimer();
				tVHF.Start();
			}
		}

		/// <summary>
		/// Update radio information
		/// </summary>
		private void UpdateMap()
		{
			//ListOfFullRadios = fBulris.AllRadios;
			//for (int i = 0; i < ListOfFullRadios.Count; i++)
			//{
			//    if (ListOfFullRadios[i].Error == 0)
			//    {
			//        StationStatusLayer(ListOfFullRadios[i].PointX,
			//            ListOfFullRadios[i].PointY,
			//            ListOfFullRadios[i].PointNum,
			//            ListOfFullRadios[i].Status + ListOfFullRadios[i].iPTT,
			//            ListOfFullRadios[i].TransceiverID);
			//    }

			//    //StationStatusLayer(double x, double y, int num, int status, int idr);			
			//}

		}
		#endregion Private members

		private string GetConfigValue(string key)
		{
			try
			{
				return ConfigurationManager.AppSettings[key].ToString().Trim();
			}
			catch (Exception ex)
			{
				Console.WriteLine (key + " not set");
				return "";
			}
		}

	}
}
