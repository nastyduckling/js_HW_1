let deliveriChina = 150;
let deliveriChilli = 250;
let deliveriAustrali = 165;
let deliveriIndia = 90;
let deliveriYamayka = 130;
let deliveriCountry = prompt('Выберите странну');
deliveriCountry = deliveriCountry.toLowerCase();
    switch (deliveriCountry){
        case 'китай':
            alert(`Доставка в ${deliveriCountry} будет стоить ${deliveriChina} кредитов`);
            break
        case 'австралия':
            alert(`Доставка в ${deliveriCountry} будет стоить ${deliveriAustrali} кредитов`);
            break
        case 'индия':
            alert(`Доставка в ${deliveriCountry} будет стоить ${deliveriIndia} кредитов`);
            break
        case 'ямайка':
            alert(`Доставка в ${deliveriCountry} будет стоить ${deliveriYamayka} кредитов`);
            break
        case 'null':
            alert( 'Отмененно пользователем');
        default:
            alert('В вашу страну нету доставки');
    }