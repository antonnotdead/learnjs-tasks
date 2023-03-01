let userLogin = prompt("Введите логин: ", "");
let password;
if (userName === "Админ"){
    password = prompt("Введите пароль: ", "");
    if (password === 'Я Главный'){
        alert('Здраствуйте!');
    }
    else if (password === null && password === "")
    {
        alert('Отменено');
    }
    else
    {
        alert('Неверный пароль');
    }
}
else if(userName === null && userName === ""){
    alert('Отменено');
}
else{
    alert('Я вас не знаю');
}