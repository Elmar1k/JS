let name = Number(prompt("Введите число"));

switch (name) {
    case 1:
        console.log("Зима")
        break;
    case 2:
        console.log("Весна")
        break;
    case 3:
        console.log("Лето")
        break;
    case 4:
        console.log("Осень")
        break;
    default:
        console.log("Введите числа от 1 до 4!")
        break;
}