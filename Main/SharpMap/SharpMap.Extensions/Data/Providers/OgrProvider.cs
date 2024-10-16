// Copyright 2007: Christian Graefe
//
// This file is part of SharpMap.
// SharpMap is free software; you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version.
// 
// SharpMap is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.

// You should have received a copy of the GNU Lesser General Public License
// along with SharpMap; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA 

using System;
using System.Collections.ObjectModel;
using System.Diagnostics;
//using OSGeo.OGR;
using SharpMap.Converters.WellKnownBinary;
using SharpMap.Extensions.Data;
//using SharpMap.Geometries;
using BoundingBox = GeoAPI.Geometries.Envelope;
using Geometry=GeoAPI.Geometries.IGeometry;
using OgrOgr = OSGeo.OGR.Ogr;
using OgrDataSource = OSGeo.OGR.DataSource;
using OgrLayer = OSGeo.OGR.Layer;
using OgrGeometry = OSGeo.OGR.Geometry;
using OgrEnvelope = OSGeo.OGR.Envelope;
using OgrFeature = OSGeo.OGR.Feature;
using OgrFeatureDefn = OSGeo.OGR.FeatureDefn;
using OgrFieldDefn = OSGeo.OGR.FieldDefn;
using OgrFieldType = OSGeo.OGR.FieldType;
using OsrSpatialReference = OSGeo.OSR.SpatialReference;
using OgrGeometryType = OSGeo.OGR.wkbGeometryType;

namespace SharpMap.Data.Providers
{
    /// <summary>
    /// Ogr provider for SharpMap
    /// Using the csharp and native dlls provided with FwTools. See version FWToolsVersion property below.
    /// <code>
    /// SharpMap.Layers.VectorLayer vLayerOgr = new SharpMap.Layers.VectorLayer("MapInfoLayer");
    /// vLayerOgr.DataSource = new SharpMap.Data.Providers.Ogr(@"D:\GeoData\myWorld.tab");
    /// </code>
    /// </summary>
    [Serializable]
    public class Ogr : BaseProvider
    {
        static Ogr()
        {
            GdalConfiguration.ConfigureOgr();
        }

        #region Fields

        [NonSerialized]
        private BoundingBox _bbox;
        [NonSerialized]
        private readonly OgrDataSource _ogrDataSource;
        [NonSerialized]
        private OgrLayer _ogrLayer;
        private String _filename;
        private String _definitionQuery = "";

        #endregion

        #region Properties

        /// <summary>
        ///  Gets the version of fwTools that was used to compile and test this Ogr Provider
        /// </summary>
        public static string FWToolsVersion
        {
#pragma warning disable 612,618
            get { return FwToolsHelper.FwToolsVersion; }
#pragma warning restore 612,618
        }

        /// <summary>
        /// return the file name of the datasource
        /// </summary>
        public string Filename
        {
            get { return _filename; }
            set { _filename = value; }
        }

        public String DefinitionQuery
        {
            get { return _definitionQuery; }
            set { _definitionQuery = value; }
        }

        public Int32 NumberOfLayers
        {
            get
            {
                int numberOfLayers = _ogrDataSource.GetLayerCount();
                return numberOfLayers;
            }
        }

        public Boolean IsFeatureDataLayer
        {
            get
            {
                _ogrLayer.ResetReading();
                var numFeatures = _ogrLayer.GetFeatureCount(1);
                if (numFeatures <= 0) 
                    return false;
                
                using (var feature = _ogrLayer.GetNextFeature())
                {
                    if (feature == null) 
                        return false;
                    
                    using (var geom = feature.GetGeometryRef())
                    {
                        if (geom == null) 
                            return false;
                        
                        return geom.GetGeometryType() != OgrGeometryType.wkbNone;
                    }
                }
            }
        }

        public String OgrGeometryTypeString
        {
            get
            {
                _ogrLayer.ResetReading();
                var numFeatures = _ogrLayer.GetFeatureCount(1);
                if (numFeatures <= 0) 
                    return string.Format("{0}", OgrGeometryType.wkbNone);
                using (var feature = _ogrLayer.GetNextFeature())
                {
                    if (feature == null) 
                        return string.Format("{0}", OgrGeometryType.wkbNone);
                    
                    using (var geom = feature.GetGeometryRef())
                    {
                        if (geom == null) 
                            return string.Format("{0}", OgrGeometryType.wkbNone);
                        
                        return string.Format("{0}", geom.GetGeometryType());
                    }
                }
            }
        }

        /// <summary>
        /// Get the name of the layer set or set the layer by its name
        /// </summary>
        ///<remarks>
        /// If the name set is not within the layer collection of the
        /// datasource the old layer is kept.
        ///</remarks>
        public string LayerName
        {
            get { return _ogrLayer.GetLayerDefn().GetName(); }
            set
            {
                try
                {
                    OgrLayer layer = _ogrDataSource.GetLayerByName(value);
                    if (layer != null)
                    {
                        _ogrLayer = layer;
                        ConnectionID = string.Format("Data Source={0};Layer{1}", _ogrDataSource.name, value);

                    }
                }
                catch { }
            }
        }

        /// <summary>
        /// Get the index of the layer set or set the layer by its index
        /// </summary>
        public Int32 LayerIndex
        {
            get
            {
                string layerName = LayerName;
                for (int i = 0; i < _ogrDataSource.GetLayerCount(); i++)
                {
                    if (_ogrDataSource.GetLayerByIndex(i).GetName() == layerName)
                        return i;
                }
                throw new Exception("Somehow the layer set cannot be found in datasource");
            }
            set
            {
                if (value < 0 || _ogrDataSource.GetLayerCount() - 1 < value)
                    throw new ArgumentOutOfRangeException("value");
                _ogrLayer = _ogrDataSource.GetLayerByIndex(value);
            }
        }

        public Boolean ContainsLayer(string layerName)
        {
            using (OgrLayer layer = _ogrDataSource.GetLayerByName(layerName))
            {
                return (layer != null);
            }
        }

        #endregion

        #region Constructors

        /// <summary>
        /// Loads a Ogr datasource with the specified layer
        /// </summary>
        /// <param name="filename">datasource</param>
        /// <param name="layerName">name of layer</param>
        ///If you want this functionality use
        ///<example>
        ///SharpMap.Data.Providers.Ogr prov = new SharpMap.Data.Providers.Ogr(datasource);
        ///prov.LayerName = layerName;
        ///</example>
        [Obsolete("This constructor does not work well with VB.NET. Use LayerName property instead")]
        public Ogr(string filename, string layerName)
        {
            Filename = filename;

            _ogrDataSource = OgrOgr.Open(filename, 1);
            _ogrLayer = _ogrDataSource.GetLayerByName(layerName);
            OsrSpatialReference spatialReference = _ogrLayer.GetSpatialRef();
            if (spatialReference != null)
                SRID = spatialReference.AutoIdentifyEPSG();
        }

        /// <summary>
        /// Loads a Ogr datasource with the specified layer
        /// </summary>
        /// <param name="filename">datasource</param>
        /// <param name="layerNum">number of layer</param>
        public Ogr(string filename, int layerNum)
        {
            Filename = filename;

            _ogrDataSource = OgrOgr.Open(filename, 0);
            _ogrLayer = _ogrDataSource.GetLayerByIndex(layerNum);
            OsrSpatialReference spatialReference = _ogrLayer.GetSpatialRef();
            if (spatialReference != null)
                SRID = spatialReference.AutoIdentifyEPSG();
        }

        /// <summary>
        /// Loads a Ogr datasource with the specified layer
        /// </summary>
        /// <param name="datasource">datasource</param>
        /// <param name="layerNum">number of layer</param>
        /// <param name="name">Returns the name of the loaded layer</param>
        ///If you want this functionality use
        ///<example>
        ///SharpMap.Data.Providers.Ogr prov = new SharpMap.Data.Providers.Ogr(datasource, layerNum);
        ///string layerName = prov.Layername;
        ///</example>
        [Obsolete("This constructor does not work well with VB.NET. Use LayerName property instead")]
        public Ogr(string datasource, int layerNum, out string name)
            : this(datasource, layerNum)
        {
            name = _ogrLayer.GetName();
        }

        /// <summary>
        /// Loads a Ogr datasource with the first layer
        /// </summary>
        /// <param name="datasource">datasource</param>
        public Ogr(string datasource)
            : this(datasource, 0)
        {
        }

        /// <summary>
        /// Loads a Ogr datasource with the first layer
        /// </summary>
        /// <param name="datasource">datasource</param>
        /// <param name="name">Returns the name of the loaded layer</param>
        ///<remarks>
        ///This constructor is obsolete!
        ///If you want this functionality use
        ///<example>
        ///SharpMap.Data.Providers.Ogr prov = new SharpMap.Data.Providers.Ogr(datasource);
        ///string layerName = prov.Layername;
        ///</example>
        ///</remarks>
        [Obsolete("This constructor does not work well with VB.NET. Use LayerName property instead")]
        public Ogr(string datasource, out string name)
            : this(datasource, 0, out name)
        {
        }

        #endregion

        #region IProvider Members

        /// <summary>
        /// Boundingbox of the dataset
        /// </summary>
        /// <returns>boundingbox</returns>
        public override BoundingBox GetExtents()
        {
            if (_bbox == null)
            {
                OgrEnvelope ogrEnvelope = new OgrEnvelope();
                if (_ogrLayer != null) _ogrLayer.GetExtent(ogrEnvelope, 1);

                _bbox = new BoundingBox(ogrEnvelope.MinX, ogrEnvelope.MaxX,
                                        ogrEnvelope.MinY, ogrEnvelope.MaxY);
            }

            return _bbox;
        }

        /// <summary>
        /// Returns the number of features in the dataset
        /// </summary>
        /// <returns>number of features</returns>
        public override int GetFeatureCount()
        {
            return _ogrLayer.GetFeatureCount(1);
        }

        /// <summary>
        /// Returns a FeatureDataRow based on a RowID
        /// </summary>
        /// <param name="rowId"></param>
        /// <returns>FeatureDataRow</returns>
        public override FeatureDataRow GetFeature(uint rowId)
        {
            var fdt = new FeatureDataTable();
            _ogrLayer.ResetReading();
            ReadColumnDefinition(fdt, _ogrLayer);
            var feature = _ogrLayer.GetFeature((int) rowId);
            return OgrFeatureToFeatureDataRow(fdt, feature, Factory);
        }

        /// <summary>
        /// Returns geometry Object IDs whose bounding box intersects 'bbox'
        /// </summary>
        /// <param name="bbox"></param>
        /// <returns></returns>
        public override Collection<uint> GetObjectIDsInView(BoundingBox bbox)
        {
            _ogrLayer.SetSpatialFilterRect(bbox.MinX, bbox.MinY, bbox.MaxX, bbox.MaxY);
            _ogrLayer.ResetReading();

            Collection<uint> objectIDs = new Collection<uint>();
            OgrFeature ogrFeature;
            while ((ogrFeature = _ogrLayer.GetNextFeature()) != null)
            {
                objectIDs.Add((uint)ogrFeature.GetFID());
                ogrFeature.Dispose();
            }
            return objectIDs;
        }

        /// <summary>
        /// Returns the geometry corresponding to the Object ID
        /// </summary>
        /// <param name="oid">Object ID</param>
        /// <returns>geometry</returns>
        public override Geometry GetGeometryByID(uint oid)
        {
            using (var ogrFeature = _ogrLayer.GetFeature((int)oid))
            {
                using (var gr = ogrFeature.GetGeometryRef())
                {
                    var g = ParseOgrGeometry(gr, Factory);
                    return g;
                }
            }
        }

        /// <summary>
        /// Returns geometries within the specified bounding box
        /// </summary>
        /// <param name="bbox"></param>
        /// <returns></returns>
        public override Collection<Geometry> GetGeometriesInView(BoundingBox bbox)
        {
            var geoms = new Collection<Geometry>();

            _ogrLayer.SetSpatialFilterRect(bbox.MinX, bbox.MinY, bbox.MaxX, bbox.MaxY);
            _ogrLayer.ResetReading();

            try
            {
                OgrFeature ogrFeature;
                while ((ogrFeature = _ogrLayer.GetNextFeature()) != null)
                {
                    using (var gr = ogrFeature.GetGeometryRef())
                    {
                        var geom = ParseOgrGeometry(gr, Factory);
                        if (geom != null) 
                            geoms.Add(geom);
                    }
                    ogrFeature.Dispose();
                }
            }
            catch(Exception ex)
            {
                Debug.WriteLine(ex.Message);
            }

            return geoms;
        }


        /// <summary>
        /// Returns the data associated with all the geometries that are intersected by 'geom'
        /// </summary>
        /// <param name="bbox">Geometry to intersect with</param>
        /// <param name="ds">FeatureDataSet to fill data into</param>
        public override void ExecuteIntersectionQuery(BoundingBox bbox, FeatureDataSet ds)
        {
            _ogrLayer.SetSpatialFilterRect(bbox.MinX, bbox.MinY, bbox.MaxX, bbox.MaxY);
            ExecuteIntersectionQuery(ds);
        }

        /// <summary>
        /// Returns the data associated with all the geometries that are intersected by 'geom'
        /// </summary>
        /// <param name="geom">Geometry to intersect with</param>
        /// <param name="ds">FeatureDataSet to fill data into</param>
        protected override void OnExecuteIntersectionQuery(Geometry geom, FeatureDataSet ds)
        {
            OgrGeometry ogrGeometry = OgrGeometry.CreateFromWkb(GeometryToWKB.Write(geom));
            _ogrLayer.SetSpatialFilter(ogrGeometry);
            ExecuteIntersectionQuery(ds);

        }

        private void ExecuteIntersectionQuery(FeatureDataSet ds)
        {
            if (!String.IsNullOrEmpty(_definitionQuery))
                _ogrLayer.SetAttributeFilter(_definitionQuery);
            else
                _ogrLayer.SetAttributeFilter("");

            _ogrLayer.ResetReading();

            //reads the column definition of the layer/feature
            FeatureDataTable myDt = new FeatureDataTable();
            ReadColumnDefinition(myDt, _ogrLayer);

            OgrFeature ogrFeature;
            while ((ogrFeature = _ogrLayer.GetNextFeature()) != null)
            {
                FeatureDataRow fdr = OgrFeatureToFeatureDataRow(myDt, ogrFeature, Factory);
                myDt.AddRow(fdr);
            }
            ds.Tables.Add(myDt);

        }

        #endregion

        #region Disposers and finalizers

        protected override void ReleaseManagedResources()
        {
            if (_ogrLayer != null)
                _ogrLayer.Dispose();
            
            if (_ogrDataSource != null)
                _ogrDataSource.Dispose();
            
            base.ReleaseManagedResources();
        }

        #endregion

        #region private methods for data conversion sharpmap <--> ogr

        /// <summary>
        /// Reads the field types from the OgrFeatureDefinition -> OgrFieldDefinition
        /// </summary>
        /// <param name="fdt">FeatureDatatTable</param>
        /// <param name="oLayer">OgrLayer</param>
        private static void ReadColumnDefinition(FeatureDataTable fdt, OgrLayer oLayer)
        {
            using (OgrFeatureDefn ogrFeatureDefn = oLayer.GetLayerDefn())
            {
                int iField;
                string sField;

                for (iField = 0; iField < ogrFeatureDefn.GetFieldCount(); iField++)
                {
                    using (OgrFieldDefn ogrFldDef = ogrFeatureDefn.GetFieldDefn(iField))
                    {
                        OgrFieldType type= ogrFldDef.GetFieldType();
                        try
                        {
                            switch (type)
                            {
                                case OgrFieldType.OFTInteger:
                                    fdt.Columns.Add(ogrFldDef.GetName(), typeof(Int32));
                                    sField = ogrFldDef.GetName();
                                    break;
                                case OgrFieldType.OFTIntegerList:
                                    fdt.Columns.Add(ogrFldDef.GetName(), typeof(Int32[]));
                                    sField = ogrFldDef.GetName();
                                    break;
                                case OgrFieldType.OFTReal:
                                    fdt.Columns.Add(ogrFldDef.GetName(), typeof(Double));
                                    sField = ogrFldDef.GetName();
                                    break;
                                case OgrFieldType.OFTString:
                                    fdt.Columns.Add(ogrFldDef.GetName(), typeof(String));
                                    sField = ogrFldDef.GetName();
                                    break;
                                case OgrFieldType.OFTStringList:
                                case OgrFieldType.OFTWideStringList:
                                    fdt.Columns.Add(ogrFldDef.GetName(), typeof(String[]));
                                    sField = ogrFldDef.GetName();
                                    break;
                                case OgrFieldType.OFTWideString:
                                    fdt.Columns.Add(ogrFldDef.GetName(), typeof(String));
                                    sField = ogrFldDef.GetName();
                                    break;
                                case OgrFieldType.OFTRealList:
                                    fdt.Columns.Add(ogrFldDef.GetName(), typeof(Double[]));
                                    break;
                                case OgrFieldType.OFTDate:
                                case OgrFieldType.OFTTime:
                                case OgrFieldType.OFTDateTime:
                                    fdt.Columns.Add(ogrFldDef.GetName(), typeof(DateTime));
                                    sField = ogrFldDef.GetName();
                                    break;
                                default:
                                    {
                                        //fdt.Columns.Add(_OgrFldDef.GetName(), System.Type.GetType("System.String"));
                                        Debug.WriteLine("Not supported type: " + type + " [" + ogrFldDef.GetName() + "]");
                                        break;
                                    }
                            }
                        }
                        catch
                        {
                            throw;
                        }
                    }
                }
            }
        }

        private static Geometry ParseOgrGeometry(OgrGeometry ogrGeometry, GeoAPI.Geometries.IGeometryFactory factory)
        {
            if (ogrGeometry != null)
            {
                //Just in case it isn't 2D
                ogrGeometry.FlattenTo2D();
                byte[] wkbBuffer = new byte[ogrGeometry.WkbSize()];
                ogrGeometry.ExportToWkb(wkbBuffer);
                Geometry geom = GeometryFromWKB.Parse(wkbBuffer, factory);
                if (geom == null)
                    Debug.WriteLine(string.Format("Failed to parse '{0}'", ogrGeometry.GetGeometryType()));
                return geom;
            }
            return null;
        }

        private static FeatureDataRow OgrFeatureToFeatureDataRow(FeatureDataTable table, OSGeo.OGR.Feature ogrFeature, GeoAPI.Geometries.IGeometryFactory factory)
        {
            FeatureDataRow fdr = table.NewRow();
            Int32 fdrIndex = 0;
            for (int iField = 0; iField < ogrFeature.GetFieldCount(); iField++)
            {
                //*** BEGIN FIX: Ensure fdrIndex is incremented if field value is not set and field is of a supported type.
                bool valueAvailable = ogrFeature.IsFieldSet(iField);
                OgrFieldType fieldType = ogrFeature.GetFieldType(iField);

                // No need to get field value if there's no value available...
                if (!valueAvailable)
                {
                    // We need to increment the data row column index if this is a supported field type
                    // otherwise the next field will be written to the wrong column...
                    // We support all types except OFTBinary...
                    // Supported field types must be consistent with the code in ReadColumnDefinition and the switch case below...
                    if (fieldType != OgrFieldType.OFTBinary)
                    {
                        fdrIndex++;
                    }

                    continue;
                }
                //*** END FIX
                //if (!ogrFeature.IsFieldSet(iField)) continue;
                try
                {
                    switch (ogrFeature.GetFieldType(iField))
                    {
                        case OgrFieldType.OFTString:
                        case OgrFieldType.OFTWideString:
                            {
                                fdr[fdrIndex++] = ogrFeature.GetFieldAsString(iField);
                                break;
                            }
                        case OgrFieldType.OFTStringList:
                        case OgrFieldType.OFTWideStringList:
                            {
                                fdr[fdrIndex++] = ogrFeature.GetFieldAsStringList(iField);
                                break;
                            }
                        case OgrFieldType.OFTInteger:
                            {
                                fdr[fdrIndex++] = ogrFeature.GetFieldAsInteger(iField);
                                break; 
                            }

                        case OgrFieldType.OFTIntegerList:
                            {
                                int count = 0;
                                fdr[fdrIndex++] = ogrFeature.GetFieldAsIntegerList(iField, out count);
                                break;
                            }
                        case OgrFieldType.OFTReal:
                            {
                                fdr[fdrIndex++] = ogrFeature.GetFieldAsDouble(iField);
                                break;
                            }

                        case OgrFieldType.OFTRealList:
                            {
                                int count = 0;
                                fdr[fdrIndex++] = ogrFeature.GetFieldAsDoubleList(iField, out count);
                                break;
                            }
                        case OgrFieldType.OFTDate:
                        case OgrFieldType.OFTDateTime:
                        case OgrFieldType.OFTTime:
                            Int32 y, m, d, h, mi, s, tz;
                            ogrFeature.GetFieldAsDateTime(iField, out y, out m, out d, out h, out mi, out s, out tz);
                            try
                            {
                                if (y == 0 && m == 0 && d == 0)
                                    fdr[fdrIndex++] = DateTime.MinValue.AddMinutes(h * 60 + mi);
                                else
                                    fdr[fdrIndex++] = new DateTime(y, m, d, h, mi, s);
                            }
                            catch
                            {
                                throw;
                            }
                            break;
                        default:
                            Debug.WriteLine(string.Format("Cannot handle Ogr DataType '{0}', '{1}'", ogrFeature.GetFieldType(iField), iField));
                            break;
                    }
                }
                catch { }
            }

            using (var gr = ogrFeature.GetGeometryRef())
            {
                fdr.Geometry = ParseOgrGeometry(gr, factory);
                gr.Dispose();
            }
            return fdr;
        }

        #endregion

        public FeatureDataSet ExecuteQuery(string query)
        {
            return ExecuteQuery(query, null);
        }

        public FeatureDataSet ExecuteQuery(string query, OgrGeometry filter)
        {
            try
            {
                FeatureDataSet ds = new FeatureDataSet();
                FeatureDataTable myDt = new FeatureDataTable();

                OgrLayer results = _ogrDataSource.ExecuteSQL(query, filter, "");

                //reads the column definition of the layer/feature
                ReadColumnDefinition(myDt, results);

                OgrFeature ogrFeature;
                results.ResetReading();
                while ((ogrFeature = results.GetNextFeature()) != null)
                {
                    FeatureDataRow dr = OgrFeatureToFeatureDataRow(myDt, ogrFeature, Factory);
                    myDt.AddRow(dr);
                    /*
                    myDt.NewRow();
                    for (int iField = 0; iField < ogrFeature.GetFieldCount(); iField++)
                    {
                        if (myDt.Columns[iField].DataType == Type.GetType("System.String"))
                            dr[iField] = ogrFeature.GetFieldAsString(iField);
                        else if (myDt.Columns[iField].GetType() == Type.GetType("System.Int32"))
                            dr[iField] = ogrFeature.GetFieldAsInteger(iField);
                        else if (myDt.Columns[iField].GetType() == Type.GetType("System.Double"))
                            dr[iField] = ogrFeature.GetFieldAsDouble(iField);
                        else
                            dr[iField] = ogrFeature.GetFieldAsString(iField);
                    }

                    dr.Geometry = ParseOgrGeometry(ogrFeature.GetGeometryRef());
                    myDt.AddRow(dr);
                     */
                }
                ds.Tables.Add(myDt);
                _ogrDataSource.ReleaseResultSet(results);

                return ds;
            }
            catch (Exception exc)
            {
                Debug.WriteLine(exc.ToString());
                return new FeatureDataSet();
            }
        }

        /// <summary>
        /// Returns the data associated with all the geometries that is within 'distance' of 'geom'
        /// </summary>
        /// <param name="geom"></param>
        /// <param name="distance"></param>
        /// <returns></returns>
        [Obsolete("Use ExecuteIntersectionQuery instead")]
        public FeatureDataTable QueryFeatures(Geometry geom, double distance)
        {
            throw new NotSupportedException();
        }

        /// <summary>
        /// Returns the features that intersects with 'geom'
        /// </summary>
        /// <param name="geom">Geometry</param>
        /// <returns>FeatureDataTable</returns>
        public FeatureDataTable ExecuteIntersectionQuery(Geometry geom)
        {
            FeatureDataSet fds = new FeatureDataSet();
            ExecuteIntersectionQuery(geom, fds);
            return fds.Tables[0];
        }

        /// <summary>
        /// Returns all features with the view box
        /// </summary>
        /// <param name="bbox">view box</param>
        /// <param name="ds">FeatureDataSet to fill data into</param>
        [Obsolete("Use ExecuteIntersectionQuery(BoundingBox,FeatureDataSet) instead")]
        public void GetFeaturesInView(BoundingBox bbox, FeatureDataSet ds)
        {
            ExecuteIntersectionQuery(bbox, ds);
        }
    }
}