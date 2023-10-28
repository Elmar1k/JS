const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const day = 'Суббота';

for (let index = 0; index < week.length; index++) {
    const element = week[index];
    if (week[index]==day) {
        console.log(week[index].italics());
    } else {
        console.log(week[index]);
    }
}
