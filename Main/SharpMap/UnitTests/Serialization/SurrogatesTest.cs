﻿using System.Drawing;
using System.Drawing.Drawing2D;
using NUnit.Framework;

namespace UnitTests.Serialization
{
    public class SurrogatesTest : BaseSerializationTest
    {
        [Test]
        public void TestPen()
        {
            var formatter = GetFormatter();
            var penS = new Pen(Color.BurlyWood, 1.5f);
            var penD = SandD(penS, formatter);
            ComparePens(penS, penD);

            penS.Width = 5.2f;
            penS.DashCap = DashCap.Round;
            penS.StartCap = LineCap.RoundAnchor;
            penS.CustomEndCap = new AdjustableArrowCap(10, 5) {BaseInset = 3};

            penD = SandD(penS, formatter);
            ComparePens(penS, penD);

            penS.EndCap = LineCap.SquareAnchor;
            penS.DashPattern = new[] { 4.0F, 2.0F, 1.0F, 3.0F };
            penD = SandD(penS, formatter);

            ComparePens(penS, penD);

        }

        internal static void ComparePens(Pen penS, Pen penD, string testProperty = null)
        {
            testProperty = testProperty ?? string.Empty;

            Assert.IsNotNull(penS, testProperty + " is null");
            Assert.IsNotNull(penD, testProperty + " is null");
            Assert.AreEqual(penS.PenType, penD.PenType, testProperty + " PenType differs");
            Assert.AreEqual(penS.Color, penD.Color, testProperty + " Color differs");
            Assert.AreEqual(penS.Width, penD.Width, testProperty + " Width differs");
            Assert.AreEqual(penS.StartCap, penD.StartCap, testProperty + " StartCap differs");
            Assert.AreEqual(penS.DashCap, penD.DashCap, testProperty + " DashCap differs");
            Assert.AreEqual(penS.DashStyle, penD.DashStyle, testProperty + " DashStyle differs");
            Assert.AreEqual(penS.DashOffset, penD.DashOffset, testProperty + " DashOffset differs");
            Assert.AreEqual(penS.LineJoin, penD.LineJoin, testProperty + " LineJoin differs");
            Assert.AreEqual(penS.MiterLimit, penD.MiterLimit, testProperty + " MiterLimit differs");
            Assert.AreEqual(penS.Alignment, penD.Alignment, testProperty + " Alignment differs");
            Assert.AreEqual(penS.EndCap, penD.EndCap, testProperty + " EndCap differs");
            if (penS.EndCap == LineCap.Custom)
                Assert.IsNotNull(penD.CustomEndCap);
            if (penS.StartCap == LineCap.Custom)
                Assert.IsNotNull(penD.CustomStartCap);
            CompareArrays(penS.CompoundArray, penD.CompoundArray, testProperty + " CompoundArray");
            if (penS.DashStyle == DashStyle.Custom)
                CompareArrays(penS.DashPattern, penD.DashPattern, testProperty + " DashPattern");
            CompareArrays(penS.Transform.Elements, penD.Transform.Elements, testProperty + " Transform.Elements");
        }

        private static void CompareArrays<T>(T[] a1, T[] a2, string testProperty = null)
        {
            testProperty = testProperty ?? string.Empty;

            if (a1 == null && a2 == null)
                return;

            Assert.IsTrue(a1 != null && a2 != null, testProperty + " one is null");

            Assert.AreEqual(a1.Length, a2.Length, testProperty + " different length");
            for (var i = 0; i < a1.Length; i++ )
                Assert.AreEqual(a1[i], a2[i], string.Format("{0} differ at index {1} [{2}, {3}]", testProperty, i, a1.ToString(), a2.ToString()));
        }

        [Test]
        public void TestSolidBrush()
        {
            var brushS = new SolidBrush(Color.Aquamarine);
            var brushD = SandD(brushS, GetFormatter());
            Assert.IsNotNull(brushD);
            Assert.AreEqual(brushS.Color, brushD.Color);
        }

        [Test]
        public void TestHatchBrush()
        {
            var brushS = new HatchBrush(HatchStyle.DashedVertical, Color.Blue, Color.DarkOliveGreen);
            var brushD = SandD(brushS, GetFormatter());
            Assert.IsNotNull(brushD);
            Assert.AreEqual(brushS.HatchStyle, brushD.HatchStyle);
            Assert.AreEqual(brushS.ForegroundColor, brushD.ForegroundColor);
            Assert.AreEqual(brushS.BackgroundColor, brushD.BackgroundColor);
        }

        [Test]
        public void TestTextureBrush()
        {
            //Create some bitmap
            using (var bmp = new Bitmap(15, 15))
            {
                for (var i = 0; i < bmp.Width; i++)
                    for (var j = 0; j < bmp.Height; j++)
                        bmp.SetPixel(i, j, Color.FromKnownColor((KnownColor)((i * bmp.Width+j)%100)));

                var brushS = new TextureBrush(bmp)
                    { WrapMode = WrapMode.TileFlipXY, Transform = new Matrix(0.9f, 1f, 1f, 0.9f, 0.2f, 0.2f)};
                var brushD = SandD(brushS, GetFormatter());
                
                Assert.IsNotNull(brushD);
                Assert.AreEqual(brushS.WrapMode, brushD.WrapMode);
                for (var i = 0; i < 6; i++ )
                    Assert.AreEqual(brushS.Transform.Elements[i], brushD.Transform.Elements[i]);

                Assert.AreEqual(brushS.Image.Width, brushD.Image.Width);
                Assert.AreEqual(brushS.Image.Height, brushD.Image.Height);
                Assert.AreEqual(brushS.Image.HorizontalResolution, brushD.Image.HorizontalResolution, 0.1);
                Assert.AreEqual(brushS.Image.VerticalResolution, brushD.Image.VerticalResolution, 0.1);
                
                //This is machine dependant so don't test
                //Assert.AreEqual(brushS.Image.PixelFormat, brushD.Image.PixelFormat);

                for (var i = 0; i < brushS.Image.Width; i++)
                    for (var j = 0; j < brushS.Image.Height; j++)
                    {
                        var ps = ((Bitmap) brushS.Image).GetPixel(i, j);
                        var pd = ((Bitmap) brushD.Image).GetPixel(i, j);
                        Assert.AreEqual(ps, pd);
                    }
            }
        }

        [Test]
        public void TestLinearGradientBrush()
        {
            var formatter = GetFormatter();
            var brushS = new LinearGradientBrush(new RectangleF(10, 10, 15, 15),
                                                 Color.Blue, Color.LightBlue, -30, true);

            var brushD = SandD(brushS, formatter);
            CompareLgb(brushS, brushD);

            brushS = new LinearGradientBrush(new PointF(3, 499), new PointF(-40, 200),
                Color.Lime, Color.Brown);
            brushD = SandD(brushS, formatter);
            CompareLgb(brushS, brushD);

            var myBlend = new Blend();
            myBlend.Factors = new []{ .2f, .4f, .8f, .8f, .4f, .2f };
            myBlend.Positions = new[] { 0.0f, .2f, .4f, .6f, .8f, 1.0f };

            brushS.Blend = myBlend;

            brushD = SandD(brushS, formatter);
            CompareLgb(brushS, brushD);

            var cb = new ColorBlend(6);
            cb.Colors[0] = Color.SaddleBrown;
            cb.Colors[1] = Color.IndianRed;
            cb.Colors[2] = Color.Magenta;
            cb.Colors[3] = Color.ForestGreen;
            cb.Colors[4] = Color.AntiqueWhite;
            cb.Colors[5] = Color.Yellow;
            cb.Positions[0] = 0f;
            cb.Positions[1] = 0.92f;
            cb.Positions[2] = 0.93f;
            cb.Positions[3] = 0.94f;
            cb.Positions[4] = 0.95f;
            cb.Positions[5] = 1.0f;

            brushS.InterpolationColors = cb;

            brushD = SandD(brushS, formatter);
            CompareLgb(brushS, brushD);

        }

        private static void CompareLgb(LinearGradientBrush brushS, LinearGradientBrush brushD)
        {
            Assert.IsNotNull(brushD);
            if (brushS.Blend != null)
                for (var i = 0; i < brushS.Blend.Factors.Length; i++)
                {
                    Assert.AreEqual(brushS.Blend.Factors[i], brushD.Blend.Factors[i]);
                    Assert.AreEqual(brushS.Blend.Positions[i], brushD.Blend.Positions[i]);
                }
            else
                for (var i = 0; i < brushS.InterpolationColors.Colors.Length; i++)
                {
                    Assert.AreEqual(brushS.InterpolationColors.Colors[i], brushD.InterpolationColors.Colors[i]);
                    Assert.AreEqual(brushS.InterpolationColors.Positions[i], brushD.InterpolationColors.Positions[i]);
                }
            Assert.AreEqual(brushS.Rectangle, brushD.Rectangle);
            Assert.AreEqual(brushS.GammaCorrection, brushD.GammaCorrection);
            for (var i = 0; i < brushS.LinearColors.Length; i++)
                Assert.AreEqual(brushS.LinearColors[i], brushD.LinearColors[i]);

            Assert.AreEqual(brushS.WrapMode, brushD.WrapMode);
            for (var i = 0; i < 6; i++)
                Assert.AreEqual(brushS.Transform.Elements[i], brushD.Transform.Elements[i]);
        }
    }
}