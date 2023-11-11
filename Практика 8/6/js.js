let a = {
    start: 'Введение в JS',
    surname: 'Салиманов ',
    name: 'Эльмар ',
    patronymic: 'Русланович',
    ocupation: 'Студент',
    degree: [
        'Основное',
        'Среднее',
        'Высшее',
    ],
    category: 'Первая',
    education: 'ГБПОУ "Оникс"',
    discipline: [
        'Организация сетевых технологии',
        'Информатика',
        'Инженерная графика'
    ],
    note: '-'
};


// -------------------------------------------------------------------------------------------------------------

let $start = document.querySelector('#start');
$start.innerHTML = `<h2>${a.start}</h2><br>`;

let $a = document.querySelector('#name');
$a.innerHTML = `<b>${a.surname} ${a.name} ${a.patronymic}</b> <br><br>`;

let $b = document.querySelector('#b');
$b.innerHTML = `<i>Должность: </i>${a.ocupation}<br><br>`;

let $c = document.querySelector('#c');
$c.innerHTML = `<i>Уровень образования: </i>`;
for (let index = 0; index < a.degree.length; index++) {
    $c.innerHTML += `<span>${a.degree[index]}</span>`;
    if (index !== a.degree.length - 1) {
        $c.innerHTML += ", ";
        }
}
$c.innerHTML += `<br><br>`;

let $d = document.querySelector('#d');
$d.innerHTML = `<i>Категория: </i>${a.category}<br><br>`;

let $e = document.querySelector('#e');
$e.innerHTML = `<i>Образование: </i>${a.education}<br><br>`;

let $f = document.querySelector('#f');
$f.innerHTML = `<i>Дисциплина: </i><ul>`;
for (let index = 0; index < a.discipline.length; index++) {

    $f.innerHTML += `<li>${a.discipline[index]}</li>`;
}
$f.innerHTML += `</ul>`;

let $r = document.querySelector('#r');
$r.innerHTML = `<br><i>Примечание: </i>${a.note}<br><br>`;

// ---------------------Style----------------------------------

let $dis = document.querySelectorAll('#f li');
for (let index = 0; index < $dis.length; index++) {
    const element = $dis[index];
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element.style.color = "#" + randomColor;
}

let $dif = document.querySelectorAll('#c span');
for (let index = 0; index < $dif.length; index++) {
    const element = $dif[index];
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element.style.color = "#" + randomColor;
}
