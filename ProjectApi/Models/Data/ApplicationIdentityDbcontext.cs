using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using ProjectApi.Model;
namespace ProjectApi.Model.Data

{
    public class ApplicationIdentityDbContext : IdentityDbContext<ApplicationUser>
    {

        public ApplicationIdentityDbContext(DbContextOptions<ApplicationIdentityDbContext> options):base(options) 
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

    }
  
}