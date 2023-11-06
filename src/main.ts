import quotes from '../'
const k =  Array.from('../quotes.json');

function OsszesIdezet() {
  var egyes = k.sort();
}
function init() {
  const feladat1 = document.getElementById('feladat1');
  feladat1!.addEventListener('click',() =>{
    OsszesIdezet();
  });
  for (let i = 0; i < k.length; i++) {
    console.log(k[i]);
    
  }
}
document.addEventListener('DOMContentLoaded',init);