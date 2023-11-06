import quotes from '../quotes.json';
const k =  Array.from(quotes.quotes);
const ol = document.createElement("ol");
const oldal = document.getElementById("app");
const eredmeny = document.createElement("input")as HTMLInputElement;

function OsszesIdezet() {
  
  k.sort((a, b) => {
    const nameA = a.author 
    const nameB = b.author
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  if (ol.hasChildNodes()) {
    const mom = ol.childElementCount;
    for (let i = mom-1; i > -1; i--) {
      ol.removeChild(ol.children[i]);
    }
  }
  else{
    var map1 = k.map((quote) => {
      const lista = document.createElement("li");
      const q = document.createElement('q');
      const szerzo = document.createTextNode(quote.author+ ": ");
      const szoveg = document.createTextNode(quote.quote);
      q.appendChild(szoveg);
      lista.appendChild(szerzo);
      lista.appendChild(q);
      ol.appendChild(lista);
    });
    oldal!.appendChild(ol);
    

    
  }
 
}
function The() {
  if (ol.hasChildNodes()) {
    const mom = ol.childElementCount;
    for (let i = mom-1; i > -1; i--) {
      ol.removeChild(ol.children[i]);
    }
  }
  else{
    var map2 = k.map((quote) =>{
      const lista = document.createElement("li");
      const p = document.createElement('p');
      var szovi = quote.quote;
      var aokcoska = szovi.replace(" the "," <b>the</b> ")
      p.innerHTML = aokcoska.replace("The "," <b>The</b> ");
      
      lista.appendChild(p);
      ol.appendChild(lista);
    });
    oldal!.appendChild(ol);
    
  }
}
function Hosszusag() {
 
    var map3 = k.map((quote) =>{
      return quote.quote.length;
    });
    const p2 = map3.join(', ');
    const p = document.createElement('p');
    const szov = document.createTextNode(p2);
    oldal!.appendChild(p);
    p.appendChild(szov);
}

function Darabszam() {
  const szerzo = document.getElementById("szerzo") as HTMLInputElement;
  const krap = szerzo.value;
  var szam = 0;
  var map4 = k.map((quote) =>{
      if (quote.author == krap) {
        szam++;
      }
  });
  

  
      eredmeny.value = szam.toString();
      var m = szam.toString();
      oldal!.appendChild(eredmeny);
}

function init() {
 
      eredmeny.type = "number";
      eredmeny.readOnly = true;
      eredmeny.id = "eredmeny";
  const feladat1 = document.getElementById('feladat1');
  const feladat2 = document.getElementById('feladat2');
  const feladat3 = document.getElementById('feladat3');
  const feladat4 = document.getElementById('feladat4');
  feladat1!.addEventListener('click',() =>{
    OsszesIdezet();
  });
  feladat2!.addEventListener('click',() => {
    The();
  });
  feladat3!.addEventListener('click',() => {
   Hosszusag();
  });
  feladat4!.addEventListener('click',() => {
    Darabszam();
  });

}
document.addEventListener('DOMContentLoaded',init);