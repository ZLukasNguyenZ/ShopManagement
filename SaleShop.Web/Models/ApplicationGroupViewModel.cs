﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SaleShop.Web.Models
{
    public class ApplicationGroupViewModel
    {
        public int ID { get; set; }

        public string Name { get; set; }

        public IEnumerable<ApplicationRoleViewModel> Roles { set; get; }
    }
}