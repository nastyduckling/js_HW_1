let credits = 35500;
let pricePerDroid = 3000;
let quantityDroids = prompt('Какое количество дроидов желаете приобрести?')
let totalPrice = (pricePerDroid*quantityDroids);
let needCredits = credits/totalPrice;
credits = credits - totalPrice;
if (quantityDroids == null){
    console.log( 'Отмененно пользователем');
} else if(needCredits >= 1){
    console.log( `Вы купили ${quantityDroids} дроидов, на счету осталось, ${credits}`);
}else{
    console.log('Недостаточно денег на счету');
}