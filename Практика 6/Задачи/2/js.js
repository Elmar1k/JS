let a = Number(prompt("Введите месяц:"));

if (a < 1) {
console.log("Нет такого месяца!");
} else if (a == 12 || a <= 2) {
console.log(`${a} месяц это - Зима`);
} else if (a >= 3 && a <= 5) {
console.log(`${a} месяц это - Весна`);
} else if (a >= 6 && a <= 8) {
console.log(`${a} месяц это - Лето`);
} else if (a >= 9 && a <= 11) {
console.log(`${a} месяц это - Осень`);
} else {
console.log("Нет такого месяца!");
}