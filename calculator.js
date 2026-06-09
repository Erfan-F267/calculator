let display=document.querySelector('#display');
let btns=document.querySelectorAll('.btn');
let equalBtn=document.querySelector('#equal');
let clearBtn=document.querySelector('#clear');
let numberOne=0;
let numberTwo=0;
let changeNum=0;
let oprator=document.querySelectorAll('.operator');
let chooseOprator;
for(let i=0;i< btns.length;i++){
    btns[i].addEventListener('click',()=>{
        if(changeNum==0){
        let btnType=btns[i].getAttribute('data-type');
        if(btnType=='number'){
            numberOne+=btns[i].getAttribute('data-value');
            display.innerHTML=Number(numberOne);
            for(let j=0;j< oprator.length;j++){
                oprator[j].addEventListener('click',()=>{
                    chooseOprator=oprator[j].getAttribute('data-value');
                    display.innerHTML=chooseOprator;
                    changeNum=1;
                    
                })
                
            }
        }
        }else{
            let btnType2=btns[i].getAttribute('data-type');
            if(btnType2=='number'){
            numberTwo+=btns[i].getAttribute('data-value');
            display.innerHTML=Number(numberTwo);
                equalBtn.addEventListener('click',()=>{
                    display.innerHTML=equal(Number(numberOne),Number(numberTwo),chooseOprator);
                })
            }
        }
        
    })
}
clearBtn.addEventListener('click',()=>{
    window.location.reload();
})


function equal(num1,num2,o){
    let result;
    switch(o){
        case '+':
            result=num1+num2;
        break;
        case '*':
            result=num1*num2;
        break;
        case '-':
            result=num1-num2;
        break;
        case '/':
            result=num1/num2;
        break;
    }
    return result;
}


// let display = document.querySelector('#display');
// let btns = document.querySelectorAll('.btn');
// let equalBtn = document.querySelector('#equal');
// let clearBtn = document.querySelector('#clear');

// // مقادیر
// let currentInput = "";
// let firstNumber = null;
// let operator = null;
// let resetNext = false;

// // نمایش روی صفحه
// function updateDisplay(value) {
//     display.innerHTML = value;
// }

// // هندل کلیک روی دکمه‌ها
// btns.forEach(btn => {
//     let type = btn.getAttribute('data-type');
//     let value = btn.getAttribute('data-value');

//     // کلیک روی دکمه‌ها
//     btn.addEventListener('click', () => {
//         if (type === "number") {
//             if (resetNext) {
//                 currentInput = value;
//                 resetNext = false;
//             } else {
//                 currentInput += value;
//             }
//             updateDisplay(currentInput);
//         }

//         if (type === "operator") {
//             if (currentInput !== "") {
//                 firstNumber = parseFloat(currentInput);
//                 operator = value;
//                 currentInput = "";
//                 updateDisplay(operator);
//             }
//         }

//         if (btn.id === "equal") {
//             if (firstNumber !== null && currentInput !== "") {
//                 let secondNumber = parseFloat(currentInput);
//                 let result = calculate(firstNumber, secondNumber, operator);
//                 updateDisplay(result);
//                 firstNumber = result; // برای تکرار عملیات
//                 currentInput = "";
//                 resetNext = true;
//             }
//         }

//         if (btn.id === "clear") {
//             currentInput = "";
//             firstNumber = null;
//             operator = null;
//             updateDisplay(0);
//         }
//     });
// });

// // تابع محاسبه
// function calculate(num1, num2, op) {
//     switch (op) {
//         case "+": return num1 + num2;
//         case "-": return num1 - num2;
//         case "*": return num1 * num2;
//         case "/": return num2 !== 0 ? num1 / num2 : "خطا";
//         default: return num2;
//     }
// }
