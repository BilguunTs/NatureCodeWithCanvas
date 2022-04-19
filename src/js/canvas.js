import dat from 'dat.gui';
const gui  = new dat.GUI();

const canvas = document.querySelector('canvas');
const c =   canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height=window.innerHeight;

c.moveTo(0,canvas.height/2);



const wave = {
    y:canvas.height/2,
    length:0.01,
    amplitude:50,
    frequency :0.01,
}
gui.add(wave,'y',0,canvas.height);
gui.add (wave, 'amplitude',-400, 400);
gui.add(wave, 'length',-0.001,0.05)
gui.add(wave, 'frequency',-0.01,1);

let increment =wave.frequency;
function SinWave(){
    c.beginPath();
    c.clearRect(0,0,canvas.width,canvas.height);
    for (let i  =0 ; i <canvas.width; i ++){
        c.lineTo(i,wave.y+ wave.amplitude* Math.sin(i*wave.length+increment))
    }
    increment  += wave.frequency;
    c.stroke();
}
function update (){
    SinWave();
    requestAnimationFrame(update)
}

update();


