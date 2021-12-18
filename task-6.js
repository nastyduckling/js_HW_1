let total = 0;
let input;
for(let i = 0; input !== NaN; i += 1){
    input = prompt('Введите число:');
    if (input === null){
        alert(`Сумма введеных чисел: ${total}`);
        break;
    }
    total = total + input;
}