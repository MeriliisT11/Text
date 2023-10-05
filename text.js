
function init ()
{
    var canvas = document.getElementById("canvas");
    if(canvas.getContext)
    {
        var ctx = canvas.getContext("2d");
        
        ctx.font = "32px Arial";
        ctx.fillStyle = "#8FBC8F";
        ctx.fillText("Meriliis Toomet", 10, 160);
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 3;
        ctx.shadowColor = "DarkSalmon"

        ctx.font = "italic bold 45px arial,seriff";
        ctx.fillStyle = "#7FFFD4";
        ctx.fillText("Meriliis Toomet", 10, 60);
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 3;
        ctx.shadowColor = "blue"
    
    
        ctx.font = "Italic bold 60px Fantasy";
        ctx.fillStyle = "#3C0";
        ctx.fillText("Meriliis Toomet", 10, 120);
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 3;
        ctx.shadowColor = "black"
    }
}
onload=init;
