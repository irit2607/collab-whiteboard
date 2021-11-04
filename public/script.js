let canvas = document.getElementById("canvas");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var io = io.connect("http://localhost:8080/")

let ctx = canvas.getContext("2d");

window.onmousemove = (e) => {
   let x;
   let y;
   let mouseDown = false;

   window.onmousedown = (e) => {
       ctx.moveTo(x,y);
       io.emit('down', {x,y})
       mouseDown = true;
   };

   window.onmouseup = (e) => {
       mouseDown = false;
   };

   io.on("ondraw" , ({x,y}) => {
    ctx.lineTo(x,y);
    ctx.stroke();
   });

   io.on("ondown" , ({x,y}) => {
       ctx.moveTo(x,y);
   })

    window.onmousemove = (e) =>{
        x = e.clientX;
        y = e.clientY;
    
        if(mouseDown)
        {
            io.emit("draw", {x,y});
           ctx.lineTo(x,y);
           ctx.stroke();
        }
    }
}


