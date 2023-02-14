﻿using System.Collections.Generic;

namespace Serenity.CodeGeneration
{
    public class ExternalMember
    {
        public ExternalMember()
        {
            Attributes = new List<ExternalAttribute>();
        }

        public List<ExternalAttribute> Attributes { get; private set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public bool IsDeclaration { get; set; }
        public bool IsNullable { get; set; }
        public bool IsProtected { get; set; }
        public bool IsStatic { get; set; }
    }
}