using finalAssestment.net.Models;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace TodoApi.data
{
    public class ToDoContext : DbContext
    {       
        public DbSet<Owners> Owner{ get; set; } = null!;
        public DbSet<Vehicle> Vehicle { get; set; } = null!;
        public DbSet<Claims> Claims { get; set; } = null!;
        public ToDoContext(DbContextOptions<ToDoContext> options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<Claims>(
                claim => {
                    
                    claim.ToTable("Claims");
                    claim.HasKey(p => p.Id);
                    claim.Property(p => p.Description);
                    claim.Property(p => p.Status);
                    claim.Property(p => p.Date);
                    claim.Property(p => p.Vehicle_ID);
                }
               
               

                ); 
        }


    }
}