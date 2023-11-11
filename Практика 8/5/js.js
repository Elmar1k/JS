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
$start.innerHTML = `<h1>${a.start}</h1><br>`;

let $a = document.querySelector('#name');
$a.innerHTML = `<b>${a.surname} ${a.name} ${a.patronymic}</b> <br><br>`;

let $b = document.querySelector('#b');
$b.innerHTML = `<i>Должность: </i>${a.ocupation}<br><br>`;

let $c = document.querySelector('#c');
$c.innerHTML = `<i>Уровень образования:`;
for (let index = 0; index < a.degree.length; index++) {
    $c.innerHTML += `</i>${a.degree[index]}`;
    $c.innerHTML += ", ";
}
$c.innerHTML = `<br>`;

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
