let canvas = document.getElementById("canvas");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let ctx = canvas.getContext("2d");

window.onmousemove = (e) => {
   let x;
   let y;
   let mouseDown = false;

   window.onmousedown = (e) => {
       ctx.moveTo(x,y);
       mouseDown = true;
   }
   window.onmouseup = (e) => {
       mouseDown = false;
   }

    window.onmousemove = (e) =>{
        x = e.clientX;
        y = e.clientY;
    
        if(mouseDown)
        {
           ctx.lineTo(x,y);
           ctx.stroke();
        }
    }
}


