let change = document.querySelector('.changeButton')
let reset = document.querySelector('.resetButton')
let convert =document.querySelector('.convertButton')
let convertInput = document.getElementById('converter')
let converC=document.querySelector('.C')
let converF=document.querySelector('.F')
let result =document.querySelector('.result')

let flagTemp = true

change.addEventListener('click',function(){
    if (flagTemp) {
        converC.innerHTML='°C'
        converF.innerHTML='°F'
        convertInput.value ='°C'
        result.innerHTML=''
        document.title='Mohammad| Js | °C to °F'
        flagTemp=false
    }else{
        converC.innerHTML='°F'
        converF.innerHTML='°C'
        convertInput.value ='°F'
        result.innerHTML=''
        document.title='Mohammad| Js | °F to °C'
        flagTemp=true
    }
})
convert.addEventListener('click',function(){
    if (convertInput.value=='') {
        result.innerHTML='please a Enter  :'
        result.style.color='red'
    }else if (isNaN(convertInput.value)) {
        result.innerHTML='please Enter your number :'
        result.style.color='red'
    }else{
        if (flagTemp) {
            let inputValue = convertInput.value
            let resultValue =(inputValue-32)/1.8
            result.innerHTML=`°F${inputValue} in °C${resultValue}`
            result.style.color='green'
        }else{
            let inputValue = convertInput.value
            let resultValue =(inputValue*9/5)+32
            result.innerHTML=`°C${inputValue} in °F${resultValue}`
            result.style.color='green'
        }
    }
})
reset.addEventListener('click',function(){
    result.innerHTML=''
    if (flagTemp) {
        convertInput.value='°F'
    }else{
        convertInput.value='°C'
    }
    
})
