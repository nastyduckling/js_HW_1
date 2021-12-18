let pasword = prompt('Введите логин');
const ADMIN_PASSWORD = 'adminpass';
let message = ''
    if (pasword == ADMIN_PASSWORD){
        message = 'Добро пожаловать!';
        } 
        else if(pasword == null){
        message = 'Отмененно пользоватлем';
        }
        else if(pasword != ADMIN_PASSWORD){
        message = 'Доступ запрещен, неверный пароль';
        } 
alert(message);