Window.onload = function ()
function convertCurrency (event) {
    if('type' in event.target && event.type.target ==='button'){
        let targetCurrency = event.target.value
        let baseValue = document.querySelector('#basevalue')
        fetch('http://api.fixer.io/latest?base=USD').then((response) => {
            return response.json()
        }).then((json) => {
            document.querySelector("#output_currency").innerText = targetCurrency
      document.querySelector('#output_amount').innerText = parseFloat(baseValue * json.rates[targetCurrency]).toFixed(2)
    })
  }
}

document.body.addEventListener('click', convertCurrency)


                
