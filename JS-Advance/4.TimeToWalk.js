function calculateTime(steps, footLength, speeda){
    let speed = speeda / 3.6 // calculate km/h to m/min 
    let distance = steps * footLength
    let time = distance / speed  // time in seconds
    time = Math.trunc(distance/500) * 60  + time 
    let h = String(Math.trunc(time /( 60 * 60)));
    time = time - h * 60
    let m = String(Math.trunc(time / 60))
    let s = String(Math.round(time % 60))

    console.log(`${h.padStart(2, 0)}:${m.padStart(2, 0)}:${s.padStart(2, 0)}`);
}

calculateTime(4000, 0.60, 5)
calculateTime(2564,0.70,5.5)