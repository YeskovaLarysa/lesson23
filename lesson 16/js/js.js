const btn1 = document.querySelector('#btn1');
const BODY = document.querySelector('body');

let clicksCounter = 0;

// btn1.onclick = function() {
//   const P = document.createElement('P');
//   clicksCounter++;
//   P.innerHTML = `Номер параграфа: ${clicksCounter} TEXT.... ${clicksCounter * clicksCounter}`;

//   BODY.append(P);
// };
  
// btn1.onclick = function() {
//   console.log(clicksCounter);
  
// };

function btn1ClickReaction (e) {
  const P = document.createElement('P');
  clicksCounter++;
  P.innerHTML = `Номер параграфа: ${clicksCounter} TEXT.... ${clicksCounter * clicksCounter}`;
  console.log(e);
  BODY.append(P);
}

btn1.addEventListener('click', btn1ClickReaction);

btn1.addEventListener('dblclick', function(){
  console.log(clicksCounter);
  console.log(this);
});

btn1.addEventListener('contextmenu', function(){
  console.log('contextmenu');
});


const btnText = btn1.innerHTML;
btn1.addEventListener('mouseover', function(){
  this.innerHTML = 'Привет';
});

btn1.addEventListener('mouseleave', function(){
  this.innerHTML = btnText;
});
  
const input1 = document.querySelector('#input1');


// input1.addEventListener('focus', function(){
//   this.style.background = 'aqua';
//   this.style.fontSize = '50px';
// });

// input1.addEventListener('blur', function(){
//   this.style.background = 'white';
//   this.style.fontSize = '20px';
// });

const p1 = document.querySelector('#p1');
input1.addEventListener('input', function(e){
  p1.innerHTML = e.target.value;
});


let conter2 = 0
input1.addEventListener('change', function(e){
  
  for (let i = 0; i< 10; i++) {
    conter2++;
    const P = document.createElement('P');
    P.innerText = `${i} ${conter2}`;
    BODY.append(P);
  }

});

const link = document.querySelector('a');

link.addEventListener('click', function(e){
  e.preventDefault();
  console.log('переход...');

  document.location.href = 'https://jsfiddle.net/7pwj0tso/';
});



// window.addEventListener('scroll', function(e) {
//   // console.log(e);
//   console.log(this.scrollY);

//   if (this.scrollY > 200) {
//     BODY.style.background = 'red';
//   } else {
//     BODY.style.background = 'white';
//   }
// });

window.addEventListener('resize', function(e) {
  console.log('innerHeight',e.target.innerHeight);
  console.log('innerWidth',e.target.innerWidth);

});



//form


const form = document.querySelector('form');
const input2 = document.querySelector('#input2');



input2.addEventListener('focus', function(e){
  this.style.background = 'white';
});

// form.addEventListener('submit', function(e){


//   e.preventDefault();

//   console.log(input2.value);
//   if (input2.value.length < 10){
//     input2.style.background = 'red';
//   }

// });

window.addEventListener('beforeunload', (event) => {
  alert('asd');
});