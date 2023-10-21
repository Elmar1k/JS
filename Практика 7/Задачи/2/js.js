let a = [];
let sum = 0;
for (let index = 0; index < 6; index++) {
    const element = a[index];
    a[index] = prompt("Введите массив из 6 цифр(отрицательных и положительных:",+index);
    console.log(a[index]);
    if (a[index]>=0){
        sum += +a[index] 
    }
}
console.log("Сумма положительных элементов равна = ",sum);