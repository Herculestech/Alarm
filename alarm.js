const newTime = () => {
    const savedTime = (new Date().toLocaleTimeString())
    normalTime.innerHTML = `${savedTime}`
    normalTime.style.color = "green"
    normalTime.style.fontWeight = "900"
    normalTime.style.fontSize = "70px"
}
setInterval(newTime, 1000);




let myAlarmSong = new Audio("Juice_WRLD_ft_Halsey_-_Life_s_A_Mess_360media.com.ng.mp3")
let wrongAnswer = new Audio("Juice_WRLD_-_Rich_and_Blind.mp3")

const setAlarm = () =>{
    let myHours = hour.value;
    let myMinutes = min.value;
    let Mysec=sec.value;
    n = new Date();
    if(myHours == n.getHours() && myMinutes == n.getMinutes() && Mysec == n.getSeconds()){
        min.value=""
        hour.value=""
        sec.value=""
        myAlarmSong.play()
    }
    setTimeout(setAlarm, 1000);
}

const stopAlarm = () =>{
    alert('Wanna stop this solve this equation')
    let stp = prompt("What is 2x + 2 =6,find x");
    if (stp == 2){
        myAlarmSong.pause()
        // wrongAnswer.play()
        alert('Wake up')
        location.reload() 
    }else{
        alert("Can't stop this without solving the eqaution")
        myAlarmSong.pause()
        wrongAnswer.play()
        notCorrectAnswer.loop
    }
}