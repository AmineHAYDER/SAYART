const Counter = (appointments, criteria) => {

    let counter = 0
    if (appointments) appointments.map(app => {if (app.service.name === criteria) counter+=1 })
    return counter

}

export default Counter