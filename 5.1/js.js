let a = prompt("Введите логин:");

if (a === "Админ") {
let b = prompt("Введите пароль:");

if (b === "Я главный") {
alert("Здравствуйте!");
} else if (b === null || b === "") {
alert("Отменено");
} else {
alert("Неверный пароль");
}

} else if (a === null || a === "") {
alert("Отменено");
} else {
alert("Неверный логин");
}