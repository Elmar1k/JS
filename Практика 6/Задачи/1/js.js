let day = Number(prompt("Введите день:"));

if (day<1) {
    console.log("Нет такого дня!");
} else if (day <= 10){
    console.log(`Число ${day} попадает в первую декаду месяца`);
} else if (day <=20){
    console.log(`Число ${day} попадает во вторую декаду месяца`);
} else if (day <=31) {
    console.log(`Число ${day} попадает в третию декаду месяца`);
} else {
    console.log("Нет такого дня!");
}