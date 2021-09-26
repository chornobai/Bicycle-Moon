const form = document.querySelector('.intro-form');
const formSubmit = form.querySelector('.intro-form__button');
const formName = form.querySelector('#name');
const formPhone = form.querySelector('#phone');

let isStorageSupport = true;
let storage = '';

	if (storage) {
		formName.value = storage;
		formPhone.focus();
	}


// Проверка - поддерживает ли браузер запись в LocalStorage //

try{
	storage = localStorage.getItem ("name");
} catch (err) {
	isStorageSupport = false;
}

// Валидация формы

formName.addEventListener('input', function () {
  this.style.borderColor = /^[a-zа-яё ]+$/i.test(this.value.trim()) ? '' : 'red';
  formName.reportValidity()
});

//  Валидация поля для телефона, разрешены только цифры

formPhone.addEventListener('input', function () {
  this.style.borderColor = /^\d+$/.test(this.value.trim()) ? '' : 'red';
  this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
  formPhone.reportValidity()
});




