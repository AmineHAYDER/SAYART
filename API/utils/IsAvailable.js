const IsAvailable = (dates, date, duration, capacity) => {

    const dateAppointment = new Date(date)
    let cap = capacity
    dates.map(date => {
        const TakenDate = new Date(date.date)

        if (TakenDate.getHours() === dateAppointment.getHours()) {
            if (TakenDate.getMinutes() === dateAppointment.getMinutes()) {
                cap--
            } else if ((TakenDate.getMinutes() === 0) && (dateAppointment.getMinutes() === 30)) {
                if (date.duration > 30) cap--
            }
        } else if ((TakenDate.getHours() + 1) === dateAppointment.getHours()) {
            if ((TakenDate.getMinutes() === 30) && (dateAppointment.getMinutes() === 0)) {
                if (date.duration > 30) cap--
            }
        }
        if (duration > 30) {
            if (TakenDate.getHours() === date.getHours()) {
                if ((TakenDate.getMinutes() === 30) && (dateAppointment.getMinutes() === 0)) {
                    cap--
                }
            } else if ((TakenDate.getHours() - 1) === dateAppointment.getHours()) {
                if ((TakenDate.getMinutes() === 0) && (dateAppointment.getMinutes() === 30)) {
                    cap--
                }
            }
        }
    })
    return cap
}

module.exports = IsAvailable;