// Declare the DOM UL element to be used
const ulElement = document.getElementById('ulElement')
const userInput = document.querySelector('#user-input')
const searchBtn = document.querySelector('#search-btn')

// collect User Input for Search String
searchBtn.onclick = () =>{
    const zipVar = userInput.value

// Run the function to fetch according to user's search string
fetchAPI(zipVar)
}

// Fetch the API asynchronously with a function
const fetchAPI = async (zip)=>{
const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&zip=${zip}&units=imperial&appid=0097e03a6236c7d401ba5bda6437e681`)
const myData = await response.json()

// define the function to populate the UL with list items from the fetch response json
function populateList(){
        const newLi = document.createElement('li')
        newLi.innerHTML = `
        <strong style="color: goldenrod; margin-left: 34%">${myData.city.name} </strong><hr />
        &bull; Current conditions: <strong style="color: goldenrod">${Math.round(myData.list[0].main.temp)}<sup><small>&deg;</small></sup> F</strong> and there's ${myData.list[0].weather[0].description}. <br />
        &bull; Feels like: <strong style="color: goldenrod">${Math.round(myData.list[0].main.feels_like)}<sup><small>&deg;</small></sup> F</strong><br />
        &bull; Humidity: <strong style="color: goldenrod">${myData.list[0].main.humidity}&percnt;</strong>`
        ulElement.innerHTML = ''
        ulElement.appendChild(newLi)
}
populateList();
}



(function(){
    document.addEventListener('DOMContentLoaded', function(){
        setInterval(updateTime, 1000)

        function updateTime() {
        var clockEl = document.querySelector('.clock')
        var clockH1 = document.querySelector('#clock-h1')
        var d = new Date()
        var hours = d.getHours()
        
        clockH1.textContent = `${hours}:${String(d.getMinutes()).padStart(2, 0)}:${String(d.getSeconds()).padStart(2, '0')}`
    }
})

})()
