let a = {
    surname: 'Салиманов ',
    name: 'Эльмар ',
    patronymic: 'Русланович',
    ocupation: 'Студент',
    degree: 'Среднее',
    category: 'Первая',
    education: 'ГБПОУ "Оникс"',
    discipline: 'Организация сетевых технологии',
    note: '-'
};

// -------------------------------------------------------------------------------------------------------------

let $a = document.querySelector('#name');
$a.innerHTML = `<b>${a.surname} ${a.name} ${a.patronymic}</b> <br><br>`;

let $b = document.querySelector('#b');
$b.innerHTML = `<i>Должность: </i>${a.ocupation}<br><br>`;

let $c = document.querySelector('#c');
$c.innerHTML = `<i>Уровень образования: </i>${a.degree}<br><br>`;

let $d = document.querySelector('#d');
$d.innerHTML = `<i>Категория: </i>${a.category}<br><br>`;

let $e = document.querySelector('#e');
$e.innerHTML = `<i>Образование: </i>${a.education}<br><br>`;

let $f = document.querySelector('#f');
$f.innerHTML = `<i>Дисциплина: </i>${a.discipline}<br><br>`;

let $r = document.querySelector('#r');
$r.innerHTML = `<i>Примечание: </i>${a.note}<br><br>`;