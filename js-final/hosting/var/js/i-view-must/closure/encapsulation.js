// FIXME: NOT WORKING , section 5 vi 76 
const makeN = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++
    const totalPeaceTime = () => timeWithoutDestruction
    const launch = () => {
        timeWithoutDestruction = -1;
        return "boom"
    }
    setInterval(passTime, 1000)
    return {
        launch: launch,
        totalPeaceTime: totalPeaceTime
    }
}
const ohNo = makeN()
ohNo.totalPeaceTime()
ohNo.launch()