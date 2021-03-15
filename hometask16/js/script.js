//  // задание 1
// const main = document.querySelector('body')
// main.innerHTML = `<div>
//   <div class="colorText">
//     <button>Button</button>
//     <p id="paragraph1">I am just paragraph</p>
//   </div>
//   <div>
//     <input/>
//   </div>
// </div>`
//
// const btn = document.querySelector('button')
// const parag = document.querySelector('#paragraph1')
// const btnText = btn.innerHTML
//
// btn.addEventListener('click', function(){
//   parag.style.fontSize = '50px'
// })
//
// btn.addEventListener('mouseover', function(){
//   this.innerHTML = 'Наведен курсор'
// })
//
// btn.addEventListener('mouseout', function(){
//   this.innerHTML = btnText
// })
//
// const inputForm = document.querySelector('input')
// inputForm.addEventListener('focus', function(){
//     inputForm.style.background = '#69F0AE'
// })
//
// inputForm.addEventListener('blur', function(){
//   inputForm.style.background = '#FF8A80'
//   const inputFormText = inputForm.value
//   if(inputFormText.indexOf('@') < 0 ){
//   return alert('Введите правильный e-mail')
//   }
// })

//  // задание 2
// const main2 = document.querySelector('body')
//  main2.innerHTML = '<button>кнопка</button>'
//
// const btn = document.querySelector('button')
// let clicks = 0
//
// btn.addEventListener('click', function(){
//   clicks += 1
//   const name = document.createElement('div')
//   name.innerHTML = prompt('Ведите Ваше имя:')
//   if(clicks % 2 === 0){
//     btn.after(name)
//   }
//   else btn.before(name)
// })

// задание 2
const main2 = document.querySelector('body')
main2.innerHTML = '<button>кнопка</button>'

const btn = document.querySelector('button')
let clicks = 0

btn.addEventListener('click', function(){
 clicks += 1
 const name = document.createElement('div')
 const userName = name.innerText = prompt('Ведите Ваше имя:')

   if(userName.toLowerCase().indexOf('stop') >= 0 || userName.toLowerCase().indexOf('escape') >= 0){
   btn.removeEventListener('click', name)
   }
   else
 if(clicks % 2 === 0){
   btn.after(name)
 }
 else btn.before(name)
})
