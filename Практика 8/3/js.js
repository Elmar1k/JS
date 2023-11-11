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

document.write('<b>'+a.surname+a.name+a.patronymic+'</b> <br><br>');
document.write('<i>Должность: </i>'+a.ocupation+'<br><br>');
document.write('<i>Уровень образования: </i>'+a.degree+'<br><br>');
document.write('<i>Категория: </i>'+a.category+'<br><br>');
document.write('<i>Образование: </i>'+a.education+'<br><br>');
document.write('<i>Дисциплина: </i>'+a.discipline+'<br><br>');
document.write('<i>Примечание: </i>'+a.note+'<br><br>');