﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace ServiceFUEN.Models.EFModels
{
    public partial class CommentReport
    {
        public int Id { get; set; }
        public int? Reporter { get; set; }
        public int CommentId { get; set; }
        public DateTime ReportTime { get; set; }

        public virtual Comment Comment { get; set; }
        public virtual Member ReporterNavigation { get; set; }
    }
}