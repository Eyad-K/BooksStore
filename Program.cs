var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// دعم الملفات الثابتة
app.UseDefaultFiles(new DefaultFilesOptions
{
    DefaultFileNames = new List<string> { "home.html" }
});
app.UseStaticFiles();

app.Run();
