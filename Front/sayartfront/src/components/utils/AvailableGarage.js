const AvailableGarage = (dates, appDate, duration, capacity) => {
    const AppointmentDate = new Date(appDate)
    let cap = capacity
    dates.map(date => {
        const TakenDate = new Date(date.date)

        if (TakenDate.getHours() === AppointmentDate.getHours()) {
            if (TakenDate.getMinutes() === AppointmentDate.getMinutes()) {
                cap--
            } else if ((TakenDate.getMinutes() === 0) && (AppointmentDate.getMinutes() === 30)) {
                if (date.duration > 30) cap--
            }
        } else if ((TakenDate.getHours() + 1) === AppointmentDate.getHours()) {
            if ((TakenDate.getMinutes() === 30) && (AppointmentDate.getMinutes() === 0)) {
                if (date.duration > 30) cap--
            }
        }
        if (duration > 30) {
            if (TakenDate.getHours() === AppointmentDate.getHours()) {
                if ((TakenDate.getMinutes() === 30) && (AppointmentDate.getMinutes() === 0)) {
                    cap--
                }
            } else if ((TakenDate.getHours() - 1) === AppointmentDate.getHours()) {
                if ((TakenDate.getMinutes() === 0) && (AppointmentDate.getMinutes() === 30)) {
                    cap--
                }
            }
        }

    })
    return cap

}

export default AvailableGarage