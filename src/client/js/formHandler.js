function handleSubmit(event) {
    event.preventDefault()


    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7bbbde674a90e21870da2f7086b7b970';
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
        .then(res => {
            return res.json()
        })
        .then(function (data) {
            document.getElementById('results').innerHTML = data.message
        })
    // const response = fetch(baseURL)
    // document.getElementById('apiChallenge').addEventListener("This is a message", eventHandler)
    const getWeather = fetch(baseURL)
    getWeather.then(function (resp) {
        const answer = resp.json()
        return answer;
    }).then(function (ans) {
        document.getElementById('apiChallenge').innerHTML = ans.name + ", " + ans.coord.lon + ", " + ans.coord.lat + ", " + ans.main.temp
    })
}

export { handleSubmit }
