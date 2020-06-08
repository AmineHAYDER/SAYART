const RemainingTime = (date) => {
    const parseDate = new Date(date)
    const remain =   Date.now() - parseDate
    const days =  (remain/1000/60/60/24 ).toString().split(".")[0]
    const hours = ((remain/1000/60/60)%24).toString().split(".")[0]
    if (days === "0"){
        return "Aujourd'hui"
    }else if (days.startsWith("-")) {
        if (days.split("-")[1] === "0") return "dans " + hours.split("-")[1] +" heures"
        return "dans "+ days.split("-")[1] +" jours et " + hours.split("-")[1] +" heures"
    }else return "il y a "+ days + " jours"

}

export default RemainingTime