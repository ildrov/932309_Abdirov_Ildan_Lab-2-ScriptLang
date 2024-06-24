//  Функция  для  загрузки  паролей  из  localStorage 
function loadPasswords() {
    let passwords = localStorage.getItem('passwords');
    if (passwords) {
        passwords = JSON.parse(passwords);
        displayPasswords(passwords);
    }
}

//  Функция  для    отображения    паролей    в    таблице
function displayPasswords(passwords) {
    const tableBody = document.getElementById('passwordsTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    for (let i = 0; i < passwords.length; i++) {
        const row = tableBody.insertRow();
        const loginCell = row.insertCell();
        const passwordCell = row.insertCell();
        const urlCell = row.insertCell();

        loginCell.textContent = passwords[i].login;
        passwordCell.textContent = passwords[i].password;
        urlCell.textContent = passwords[i].url;
    }
}

//  Функция  для  добавления  нового  пароля
function addPassword(event) {
    event.preventDefault(); 

    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const url = document.getElementById('url').value;

    let passwords = localStorage.getItem('passwords');
    if (passwords) {
        passwords = JSON.parse(passwords);
    } else {
        passwords = [];
    }

    passwords.push({ login: login, password: password, url: url });
    localStorage.setItem('passwords', JSON.stringify(passwords));

    document.getElementById('addPasswordForm').reset(); 
    displayPasswords(passwords); 
}

//  Слушатель  события  для  формы  добавления  пароля
document.getElementById('addPasswordForm').addEventListener('submit', addPassword);

//  Загружаем  пароли  при  загрузке  страницы
loadPasswords(); 