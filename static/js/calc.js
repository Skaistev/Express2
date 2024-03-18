

const formDom = document.forms[0];
const firstNumberDom = document.getElementById('first_number');
const secondNumberDom = document.getElementById('second_number');
const resultDom = document.getElementById('result');
console.log(firstNumberDom)





formDom.addEventListener('submit' , e => {
   e.preventDefault();
   const first = +firstNumberDom.value
   const second = +secondNumberDom.value;

   if (isNaN(first)||isNaN(second)){
     resultDom.innerText = "klaida"
   } else {

   resultDom.innerText = first + second;
}
  
});


