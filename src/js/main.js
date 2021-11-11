import "./pages/dateCalc.js";
import "./pages/timer.js"
//import SlimeSrc from "../Slime.png"
import "../css/style.scss"
import mp3 from '../audio/teddy_alert.mp3'
 
//console.log(SlimeSrc);
console.log(mp3)

const button1 = document.querySelector('.button-1');
const button2 = document.querySelector('.button-2');
const calc = document.querySelector('.calc');
let timer = document.querySelector('.timer')

button1.addEventListener('click', () => {
    document.getElementById('output').innerHTML=''
    calc.hidden = false;
    timer.hidden = true;
});

button2.addEventListener('click', () => {
    document.getElementById('output').innerHTML=''
    calc.hidden = true;
    timer.hidden = false;
});

    



