let a = prompt("Введите строку из 6 цифр:");
console.log(a);

if (a.length===6) {
    var sum1 = +a[0]+ +a[1]+ +a[2];
    var sum2 = +a[3]+ +a[4]+ +a[5];
  console.log("Сумма первых трех цифр равна = ",sum1);
  console.log("Сумма последних трех цифр равна = ",sum2);
  if (sum1 == sum2){
    console.log("Сумма равна");
} else {
    console.log("Сумма не равна");
}
} else {
    console.log("Введите строку из 6 цифр!!!");
}
