import dat from 'dat.gui';
const gui  = new dat.GUI();

const canvas = document.querySelector('canvas');
const c =   canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height=window.innerHeight;

c.moveTo(0,canvas.height/2);



let wave = {
    y:canvas.height/2,
    length:0.01,
    amplitude:50,
    frequency :0.01,
    color:0,
}
gui.add(wave,'y',0,canvas.height);
gui.add (wave, 'amplitude',-400, 400);
gui.add(wave, 'length',-0.001,0.05)
gui.add(wave, 'frequency',-0.01,5);
//gui.add(wave, 'color', 0,255);
let increment =wave.frequency;
function SinWave(){
    c.beginPath();
    c.fillStyle='rgba(0, 0, 0, 0.2)';
   // c.clearRect(0,0,canvas.width,canvas.height);
    for (let i  =0 ; i <canvas.width; i ++){
        c.lineTo(i,wave.y+ wave.amplitude*Math.cos(increment)* Math.sin(i*wave.length+increment))
    }
    c.strokeStyle=`hsl(${wave.color} , 50% , 50% )`

    c.stroke();
    increment  += wave.frequency;    
    if(wave.color>=255){
        wave.color = wave.color-1;
    }else if(wave.color<=0){
        wave.color= wave.color+1;
    };

}
function update (){
    SinWave();
    requestAnimationFrame(update)
}

update();


