const form = document.querySelector('form');
const formName = form.querySelector('#name');
const formPhone = form.querySelector('#phone');
const storage = '';

// Проверка - поддерживает ли браузер запись в LocalStorage //

if (storage) {
  formName.value = storage;
  formPhone.focus();
}


// Валидация формы

formName.addEventListener('input', function () {
  this.style.borderColor = /^[a-zа-яё ]+$/i.test(this.value.trim()) ? '' : 'red';
  formName.reportValidity();
});

//  Валидация поля для телефона, разрешены только цифры

formPhone.addEventListener('input', function () {
  this.style.borderColor = /^\d+$/.test(this.value.trim()) ? '' : 'red';
  this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
  formPhone.reportValidity();
});


//Отправка формы

form.addEventListener('submit', (evt)=> {
  evt.preventDefault();
  form.reset();
});
