# workshops-app-vue

1 step
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagment.Model
{
    public class EmployeeContext:DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> options)
        : base(options)
        {
        }
        public DbSet<Employee> Employees { get; set; }
    }
}


2 step
// Add services to the container.
 builder.Services.AddDbContext<StockContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("DbConnection")));


3 step
tools->nuget package anager->package manager console

4step
//Install-Package Microsoft.EntityFrameworkCore.Tools 

add-migration InitialCreate

Update-Database