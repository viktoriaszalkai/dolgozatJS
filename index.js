import { tablazatOsszeallit } from "./fuggvenyek.js";
import { MACSEKOK } from "./adatok.js";


const kivalasztottLISTA = [];

const TARTALOM = document.querySelector(".tartalom");
TARTALOM.innerHTML = tablazatOsszeallit(MACSEKOK);
const sorELEM = document.getElementsByClassName("sorELEM");

const kivalasztottFELSOROLAS = document.getElementsByClassName("kivalasztott");
kivalasztottFELSOROLAS.innerHTML = kivalaszt(sorELEM);

function szinVALTAS(lista) {
    for (let index = 0; index < lista.length; index++) {
      lista[index].addEventListener("mouseover", function(){
          event.target.closest("td").classList.add("kiv");
      });
    }
    
  }
szinVALTAS(sorELEM)

function szinVISSZA(lista) {
    for (let index = 0; index < lista.length; index++) {
      lista[index].addEventListener("mouseout", function(){
          event.target.closest("td").classList.remove("kiv");
      });
    }
    
  }
szinVISSZA(sorELEM)

function kivalaszt(lista) {
  for (let index = 0; index < lista.length; index++) {
    lista[index].addEventListener("click", function(){
        console.log(event.target.innerHTML);
        kivalasztottFELSOROLAS[0].innerHTML += event.target.innerHTML;
    });
  }
  
}

