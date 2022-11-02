const alarmSong = new Audio("Juice_WRLD_ft_Halsey_-_Life_s_A_Mess_360media.com.ng.mp3")
alarmSong.loop=true
let alarmTime = null
let alarmTimeout = null

const updateTime = () => {
    const date = new Date()

    const hour = timeFormat(date.getHours())
    const minutes = timeFormat(date.getMinutes())
    const seconds = timeFormat(date.getSeconds())
    disp.innerHTML = `${hour} : ${minutes} : ${seconds}`
    disp.style.color = "green"
    disp.style.fontWeight = "900"
    disp.style.fontSize = "77px"
}

function timeFormat(time) {
    if (time < 10){
        return '0' + time
    }
    return time
}
function setAlarmTime(value) {
    alarmTime = value
}

const setAlarm = () => {
        if(alarmTime) {
    const current = new Date()
    const timeToAlarm = new Date(alarmTime)

    if (timeToAlarm > current) {
        const timeout = timeToAlarm.getTime() - current.getTime()
        alarmTimeout = setTimeout(() => alarmSong.play(), timeout)
        alert('Alarm set')
    }
  }
}
function clearAlarm() {
    alarmSong.pause()
    if (alarmTimeout) {
        clearTimeout(alarmTimeout)
        alert('Alarm cleared')
    }
}
setInterval(updateTime, 1000);