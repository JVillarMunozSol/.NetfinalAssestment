using Microsoft.EntityFrameworkCore;
using TodoApi.data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddDbContext<TodoApi.data.ToDoContext>(
    opt =>
    opt.UseMySql(
        "Server=localhost;Database=juanvillarfatabase;User=root;Password=123456789;",
        ServerVersion.AutoDetect(
        "Server=localhost;Database=juanvillarfatabase;User=root;Password=123456789;"
        )
        )
    );

var app = builder.Build();

// Configure the HTTP request pipeline.



app.UseHttpsRedirection();
app.UseRouting();
app.UseStaticFiles();

app.UseAuthorization();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Claims}/{action=Index}/{id?}");

//app.MapControllers();

app.Run();
