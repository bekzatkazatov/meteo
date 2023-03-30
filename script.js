const submit = document.querySelector('.submit')
const title = document.querySelector('.title')
const subtitle = document.querySelector('.subtitle')
const title3 = document.querySelector('.title3')
const input = document.querySelector('.input')


submit.addEventListener('click', () => {
    let a = input.value
    console.log(a)
    fetch(`http://api.weatherapi.com/v1/current.json?key=fdcb5ececad9421badb60037233003&q=${a}`)
        .then((response) => response.json())
        .then((data) => {
                title.innerHTML = `${data.location.region}`;
                subtitle.innerHTML = `${data.location.country}`;
                title3.innerHTML = `${data.current.temp_c}`
            }

        )
})