/*- Написати функцію filterBy(), яка прийматиме 2 аргументи. Перший аргумент - масив, який міститиме будь-які дані, другий аргумент - тип даних.
- Функція повинна повернути новий масив, який міститиме всі дані, які були передані в аргумент, за винятком тих, тип яких був переданий другим аргументом. Тобто якщо передати масив ['hello', 'world', 23, '23', null], і другим аргументом передати 'string', то функція поверне масив [23, null]. */



// let randomArr = [1, 2, 3, 4, 5, 6, null, 'дані', true];
// let variable = 5;

// function filterBy(arr, variable) {
//     newArr = arr.filter((n) => { return typeof n != typeof variable });
//     console.log(newArr);
// }

// filterBy(randomArr, variable)
let a = [1, 2, 3, 4, 5, 6, null, 'дані', true];
let b = 5;
let c = []
function filterBy(a, b) {
    for (var i = 0; i < a.length; i++) {
        if (typeof a[i] != typeof b) {
            c.push(a[i]);
        }
    }
    console.log(c)
}
filterBy(a, b)