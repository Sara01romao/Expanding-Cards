const panels =document.querySelectorAll('.panel');


panels.forEach(panel =>{
  panel.addEventListener('click', () =>{
    removeActiveClasses();
    panel.classList.add('active');
  })
})


function removeActiveClasses(){
  panels.forEach(panel =>{
    panel.classList.remove('active');
  })
}


/**------------------------------------------- */

const panels2 =document.querySelectorAll('.panel2');


panels2.forEach(panel2 =>{
  panel2.addEventListener('click', () =>{
    removeActiveClasse();
    panel2.classList.add('active2');
  })
})


function removeActiveClasse(){
  panels2.forEach(panel2 =>{
    panel2.classList.remove('active2');
  })
}