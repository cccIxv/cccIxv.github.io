const date = new Date(2021, 1, 20, 3, 12);
document.write(`Дата: ${date}`);

function getWeekDay(date) {
    const days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}

const exampleDate1 = new Date(2021, 1, 20); // 20 лютого 2021
alert(`День тижня: ${getWeekDay(exampleDate1)}`);

function getLastDayOfMonth(year, month) {
    const date = new Date(year, month + 1, 0);
    return date.getDate();
}

document.write(`<br>Останній день місяця: ${getLastDayOfMonth(2020,1)}`);
// Лютий 2020, має бути 29

function getSecondsToTomorrow() {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const diff = tomorrow - now;
    return Math.floor(diff / 1000);
}

document.write(`<br>Секунд до завтра: ${getSecondsToTomorrow()}`);

function formatDate(date) {
    const now = new Date();
    const diff = (now - date) / 1000;

    if (diff < 1) {
        return "прямо зараз";
    } else if (diff < 60) {
        return `${Math.floor(diff)} сек. назад`;
    } else if (diff < 3600) {
        return `${Math.floor(diff / 60)} хв. назад`;
    } else {
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const year = ('' + date.getFullYear()).slice(-2);
        const hours = ('0' + date.getHours()).slice(-2);
        const minutes = ('0' + date.getMinutes()).slice(-2);
        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }
}

const exampleDate2 = new Date(new Date() - 120 * 60 * 1000); // 2 години тому
document.write(`<br>Дата: ${formatDate(exampleDate2)}`);