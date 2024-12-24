document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('auth-form');
    const loginInput = document.getElementById('login');
    const dobInput = document.getElementById('dob');
    const genderInput = document.getElementById('gender');
    const loginError = document.getElementById('login-error');
    const dobError = document.getElementById('dob-error');
    const genderError = document.getElementById('gender-error');
    const userLogin = document.getElementById('user-login');
    const logoutBtn = document.getElementById('logout-btn');
    const testResult = document.getElementById('test-result');

    // Обработка отправки формы
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        // Проверка логина
        if (!loginInput.checkValidity()) {
            loginError.textContent = 'Логин должен состоять из 4-10 символов, русских букв и цифр.';
            isValid = false;
        } else {
            loginError.textContent = '';
        }

        // Проверка даты рождения
        if (!dobInput.checkValidity()) {
            dobError.textContent = 'Дата рождения должна быть не раньше 1950 года и не позже текущей даты.';
            isValid = false;
        } else {
            dobError.textContent = '';
        }

        // Проверка пола
        if (genderInput.value === '') {
            genderError.textContent = 'Пол обязателен для заполнения.';
            isValid = false;
        } else {
            genderError.textContent = '';
        }

        // Если все проверки пройдены, сохраняем данные и перенаправляем
        if (isValid) {
            const login = loginInput.value;
            const dob = dobInput.value;
            const gender = genderInput.value;
            localStorage.setItem('userLogin', login);
            localStorage.setItem('userDob', dob);
            localStorage.setItem('userGender', gender);
            window.location.href = 'description.html';
        }
    });

    // Отображение логина и кнопки выхода, если пользователь уже аутентифицирован
    const storedLogin = localStorage.getItem('userLogin');
    if (storedLogin) {
        userLogin.textContent = storedLogin;
        logoutBtn.style.display = 'block';

        // Обработка выхода
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('userLogin');
            localStorage.removeItem('userDob');
            localStorage.removeItem('userGender');
            localStorage.removeItem('testResult');
            window.location.href = 'auth.html';
        });
    }

    // Отображение результата теста, если он есть
    const storedTestResult = localStorage.getItem('testResult');
    if (storedTestResult) {
        testResult.textContent = `Ваш результат теста: ${storedTestResult} из 6`;
    }
});
