//delete
const del = document.getElementById('delete');

//brackets
const brackets = document.getElementById('brackets');

//ac
const ac = document.getElementById('ac');

// showcase
const result = document.getElementById('showcase');

// numbers
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');
const dot = document.getElementById('.');
const sqrt = document.getElementById('sqrt');
const xupn = document.getElementById('xUpN');
const factorial = document.getElementById('factorial');
const plus = document.getElementById('+');
const minus = document.getElementById('-');
const multiple = document.getElementById('x');
const divide = document.getElementById('/');
const calc = document.getElementById('calculate');

plus.addEventListener('click', () => {result.innerHTML += "+";})
minus.addEventListener('click', () => {result.innerHTML += "-";})
multiple.addEventListener('click', () => {result.innerHTML += "*";})
divide.addEventListener('click', () => {result.innerHTML += "/";})
one.addEventListener('click', () => {result.innerHTML += "1";})
two.addEventListener('click', () => {result.innerHTML += "2";})
three.addEventListener('click', () => {result.innerHTML += "3";})
four.addEventListener('click', () => {result.innerHTML += "4";})
five.addEventListener('click', () => {result.innerHTML += "5";})
six.addEventListener('click', () => {result.innerHTML += "6";})
seven.addEventListener('click', () => {result.innerHTML += "7";})
eight.addEventListener('click', () => {result.innerHTML += "8";})
nine.addEventListener('click', () => {result.innerHTML += "9";})
zero.addEventListener('click', () => {result.innerHTML += "0";})
dot.addEventListener('click', () => {result.innerHTML += ".";})
ac.addEventListener('click', () => {result.innerHTML="";})
del.addEventListener('click', () => {
    let a = result.innerHTML;
    result.innerHTML = a.substring(0, result.innerHTML.length - 1);

})
brackets.addEventListener('click', () => {
    let value = result.innerHTML;
    result.innerHTML=`(${value})`;
})

calc.addEventListener('click', () => {
    const problem = result.innerHTML;
    let a = eval(problem || null);
    result.innerHTML = `${a}`;
})

sqrt.addEventListener('click', () => {
    const problem = result.innerHTML;
    let a = Math.pow(problem, 2);
    result.innerHTML = `${a}`;
})

factorial.addEventListener('click', () => {
    const number = result.innerHTML;
     let a = 1;
    for(let i = 1; i<=number; i++) {
        a = (a*i);
    }
    result.innerHTML = `${a}`;
})

xupn.addEventListener('click', () => {
    let a = prompt('What power of the number do you want to get?');
    let num = Number(a);
    let b = Math.pow(result.innerHTML, num);
    result.innerHTML = `${b}`;
})