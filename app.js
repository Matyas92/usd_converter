

var form = document.querySelector("form")

form.onsubmit = function(){


   fetch('https://api.fastforex.io/fetch-all?api_key=0329169a1f-baaff4a35e-r2diyf')
   .then(response => response.json())
   .then(data => {


      const currency = document.querySelector('#currency').value.toUpperCase()
      const results = data.results[currency]

      if(results !== undefined){
         document.querySelector('#result').innerHTML = `1 USD equals ${results.toFixed(3)} ${currency}.`;


      }else{

         document.querySelector('#result').innerHTML = "Invalid currency"
      }

   })

   return false
}
