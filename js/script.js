const hoursHand = document.querySelector('.hour-hand')
const minutesHand = document.querySelector('.minute-hand')
const secondsHand = document.querySelector('.second-hand')

const getTime = () => {
    const date = new Date()
    const obj = {
        hours: date.getHours(),
        minute: date.getMinutes(),
        seconds: date.getSeconds()
    }
    return obj;
}

setInterval(() => {

    const { seconds } = getTime()
    secondsHand.style.transform = `translate(0,-50%) rotate(${seconds * 6}deg)`
    const { minute } = getTime()
    minutesHand.style.transform = `translate(0,-50%) rotate(${minute * 6}deg)`
    const { hours } = getTime()
    hoursHand.style.transform = `translate(0,-50%) rotate(${hours * 30}deg)`
},1000)