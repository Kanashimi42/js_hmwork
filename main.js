//1
let sayError = () => alert("Some error occurred!");


//2
let showError = x => alert(`Error ${x} occurred!`);



//3
let createHeaders = n => {
    for (let i = 0; i < n; i++)
        document.write(`<h2>Header ${i + 1}</h2>`);
}


//4
function checkPassword(args) {
     
    let checkPasword = args => args.includes("Step") || args.includes("Web") || args.includes("JavaScript") ? true : false;

    if (checkPasword("HelloJavaScript"))
        alert("Пароль подходит!");
    else
        alert("Пароль не соответствует требованиям!");

    if (checkPasword("Hello"))
        alert("Пароль подходит!");
    else
        alert("Пароль не соответствует требованиям!");
}

//5
function signFunc(args) {
    let sign = x => x == 0 ? 0 : x < 0 ? -1 : 1;

    if (sign(100) == 1)
        alert("Число положительное!");
    if (sign(-10) == -1)
        alert("Число отрицательное!");
    if (sign(0) == 0)
        alert("Число равно нулю!");
}

//6
function WeeK() {
    let outputWeeks = x => alert(x == 0 ? "Sunday" : x == 1 ? "Monday" : x == 2 ? "Tuesday" : x == 3 ? "Wednesday" : x == 4 ? "Thursday" : x == 5 ? "Friday" : x == 6 ? "Saturday" : `Number ${x}`);
    for (let i = 0; i <= 7; i++)
        outputWeeks(i);
}

function task() {
    let initialVolumee = parseInt(prompt("Введите первоначальный объём воды (в лт.):"));
    let dailyLeak = 0.1;
    let amountOfDays = 0;

    while (initialVolumee >= 10) {
        initialVolumee -= dailyLeak * initialVolumee
        amountOfDays++;
    }
    alert(`Вода закончится через ${amountOfDays} дней`);
}
