const txtarea = document.querySelector('#textarea');
const inputTxt = document.querySelector('.input-text');
const btnSearch = document.querySelector('#btn-search');
const req = document.querySelector('.required');

const days = [
  'Sunday (Ahad)',
  'Monday (Senin)',
  'Tuesday (Selasa)',
  'Wednesday (Rabu)',
  'Thursday (Kamis)',
  'Friday (Jum\'at)',
  'Saturday (Sabtu)'
]

btnSearch.addEventListener('click', function() {
  if(!inputTxt.value) {
    inputTxt.style.border = '2px solid red';
    req.innerText = 'Required!';
  } else if (inputTxt.value) {
    inputTxt.style.border = '1px solid #dbdbdb';
    req.innerText = '';

    const date = new Date(`${inputTxt.value}`);
    const day = date.getDay();
    const sentence = `${days[day]}`;
    txtarea.innerText = sentence;
    inputTxt.value = '';
  }
});

const btnClear = document.querySelector('.btn-delete');
btnClear.addEventListener('click', function() {
  txtarea.removeChild(txtarea.childNodes[0]);
});