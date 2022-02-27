const clearBtn  = document.getElementById('clear');
const equalsBtn  = document.getElementById('equals');
const screenEl = document.getElementById('screen');
const ansScreenEl = document.getElementById('ansScreen');
const numbers = document.querySelectorAll('.numbervalue');

clearBtn.addEventListener('click', ()=> {
  screenEl.innerText = '';
})

const symbolsEls = document.querySelectorAll('.symbols');

symbolsEls.forEach(symbolsEl => { symbolsEl.addEventListener('click', ()=> {
  screenEl.innerText += symbolsEl.innerText;
})
  
});

const mine = document.createElement('b');

equalsBtn.addEventListener('click', () => {
  var num = screenEl.innerText;
  var nums = eval(num);
  ansScreenEl.innerText = nums;
  ansScreenEl.appendChild(mine);
  screenEl.innerHTML = '';
  mine.innerText = nums;
  screenEl.appendChild(mine);
  console.log(nums);

})


numbers.forEach(number => { number.addEventListener('click', () => {
  const mine = document.createElement('b');
  mine.innerText = number.innerText;

  screenEl.appendChild(mine);
})
});