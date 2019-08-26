// 1. Написать функцию, которая принимает три аргумента, первый строку, второй символ и третий символ. Возвращает true,
// если количество символов (второго и третего аргумента) одинаковое и false если разное.
// Должно быть регистронезависимым checker('HellOo', 'l', 'o') // => true
// checker('hello, 'l', 'o') // => false
// Если первый аргумент не строка, сгенерировать ошибку с сообщением 'Input param in not a string'

const checker = (string, letter1, letter2) => {
    if (typeof string === 'string') {
        let resArray1 = [];
        let resArray2 = [];
        if (letter1 && letter2) {
            let reg1 = new RegExp(letter1, 'gi');
            let reg2 = new RegExp(letter2, 'gi');
            resArray1 = string.match(reg1) || [];
            resArray2 = string.match(reg2) || [];
        } else {
            return;
        }

        return resArray1.length === resArray2.length
    } else {
        throw new Error('Input param in not a string');
    }
};

// 2. Создать функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength,
// заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Если отсутствует какой-то из параметров или он null/undefined генерировать и обработать ошибку

const truncate = (str, maxlength) => {
    try {
        if (!str || !maxlength) {
            throw new Error('Enter correctly all parameters')
        }

        return str.padEnd(maxlength, '…');
    } catch (e) {
        throw e;
    }
};

//3. Написать функцию, первый аргумент принимает входящую строку, второй строку. Функция проверяет, есть ли строка
// со второго аргумента во входящей, если есть то вырезает её со входящей строки и возвращает без неё, если нет,
// то возвращает неизмененную. На каждую ошибку создаем свой собственный класс ошибки

const findMatchString = (str1, str2) => {
    try {
        if (!str1 && !str2) {
            throw new CustomError('No arguments');
        } else if (!str2) {
            throw new CustomError('No argument 2');
        } else if (!str1) {
            throw new CustomError('No argument 1');
        } else if (typeof str1 !== "string" || typeof str2 !== 'string') {
            throw new CustomError('Input params are not a string')
        } else if (str1.includes(str2)) {
            return str1.replace(new RegExp(str2, 'g'), '').trim();
        }

        return str1
    } catch (e) {
        throw e;
    }
};

function CustomError(message) {
    this.message = message;
    this.name = 'CustomError';
}

CustomError.prototype = Object.create(Error.prototype);
CustomError.prototype.constructor = CustomError;
