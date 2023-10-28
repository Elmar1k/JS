let a = [10, 20, 30, 50, 235, 3000];
console.log('Первый способ, с переводом на строку')
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    let num = String(a[index]);//переводим
    let char = num[0];//находим первый символ
    if (char == 1 || char == 2 || char == 5) {
    console.log(num);
}
}
console.log('Второй способ, без перевода на строку')
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    const n = a[index];//Присваиваем каждый элемент
    const f = Math.floor(n / 10 ** Math.floor(Math.log10(n)));//Формулу взял из форума 
    if (f === 1 || f === 2 || f === 5) {
    console.log(a[index]);
}
}