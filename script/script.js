/*Створіть клас Phone, який містить змінні number, model і weight.
Створіть три екземпляри цього класу.
Виведіть на консоль значення їх змінних.
Додати в клас Phone методи: receiveCall, має один параметр - ім'я. Виводить на консоль повідомлення "Телефонує {name}". Метод getNumber повертає номер телефону. Викликати ці методи кожного з об'єктів.
 */
class Phone {
    constructor(number, model, weight) {
        this.number = number;
        this.model = model;
        this.weight = weight;
    }
    receiveCall(str) {
        const a = 'Телефонує ';
        return a + str
    }
    getNumber(number) {
        return number
    }
}
const phoneMod = new Phone('mi10', 'xiomi', '15.5d')
const callPhone = new Phone()
console.log(phoneMod)
console.log(callPhone.receiveCall('Petr'), callPhone.getNumber(8068439219))


