let a = prompt("Введите строку из 3 цифр:");

if (a.length===3) {
  console.log(+a[0]+ +a[1]+ +a[2]);
} else {
    console.log("Введите три цифры!!!");
}
