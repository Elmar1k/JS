const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let index = 0; index < week.length; index++) {
    const element = week[index];
    if (index === 5 || index === 6) {
        console.log(week[index].bold());
    } else {
        console.log(week[index]);
    }
}
