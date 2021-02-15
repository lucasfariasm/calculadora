let checkboxDark = document.querySelector('input[name="theme"]');

let checkboxTurnOn = document.querySelector('input[name="turnOn"]');
const buttons = document.querySelectorAll('button')

let valuesOntheScreen = document.querySelector('.upper-value')
let output = document.querySelector('.lower-value')
const allNumbers = document.querySelectorAll('.number');
const clearAll = document.getElementById('clear');
const clearLast = document.getElementById('backspace')
const rest = document.getElementById('%');
const addition = document.getElementById('+');
const subtraction = document.getElementById('-')
const multiply = document.getElementById('*')
const divide = document.getElementById('/')
const result = document.getElementById('=')

// TEMA DARK
checkboxDark.addEventListener('change',function(){
    if(this.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

// LIGAR CALCULADORA
buttons.forEach(item => item.disabled = true)

checkboxTurnOn.addEventListener('change',function(){{
  if(!this.checked){
    buttons.forEach(item => item.disabled = true); 

    output.innerHTML = "";
  }else {
    buttons.forEach(item => item.disabled = false);
    output.innerHTML = "0";
  }
}})

// FUNÇÃO LIMPAR VALORES
function clearValues(){
  output.innerHTML = "0";
  valuesOntheScreen.innerHTML = "";
}

clearAll.addEventListener('click', clearValues)

// COLOCAR VALOR CLICADO NA TELA 
allNumbers.forEach(item => item.addEventListener('click', number => {
  if(output.innerText[0] === "0" && output.innerText === "0"){
    output.innerText = ""
  }
  
  if(output.innerText[0] === "."){
    output.innerText = "0.";
  } 
  output.innerText += number.target.innerText
}))

// FUNÇÃO APAGAR DÍGITO
function clearLastItem(){
  const valueItem = output.innerText
  let currentValue = valueItem.substring(0, valueItem.length-1)
  if (currentValue ==="0" || currentValue === ""){
    output.innerText = "0";
    return
  } else {
    output.innerText = currentValue
  }
}
clearLast.addEventListener('click', clearLastItem)

// FUNÇÃO Porcentagem
function restValue(){
  const percentage = output.innerText/100
  
  output.innerText = percentage
}

rest.addEventListener('click', restValue)

// FUNÇÃO PRIMEIRO VALOR A SER SOMADO

function calc(){
  if(output.innerHTML === '' || output.innerHTML === '0'){
    let valore = valuesOntheScreen.innerHTML;

    valuesOntheScreen.innerHTML = valore.substr(0, valore.length-1) + this.id;
  } else {
    valuesOntheScreen.innerHTML += output.innerHTML + this.id
  }
  
  output.innerHTML = '';
}
addition.addEventListener('click', calc)
subtraction.addEventListener('click', calc)
multiply.addEventListener('click', calc)
divide.addEventListener('click', calc)

// FUNÇÃO RESULTADO DA OPERAÇÃO
function resultOperation(){
  const calculando = valuesOntheScreen.innerText + output.innerText;
  const outputFormatted = eval(calculando)
  valuesOntheScreen.innerText = "";
  output.innerText= outputFormatted;

}

result.addEventListener('click', resultOperation)
