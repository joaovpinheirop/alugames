
function alterarStatus(id){
  const game = document.getElementById(`game-${id}`)
  const btn = game.querySelector('a');

  if(btn.classList.contains('dashboard__item__button--return')){
    btn.classList.remove('dashboard__item__button--return');
    btn.innerHTML = 'Alugar';
  }
  else{
    btn.classList.add('dashboard__item__button--return');
    btn.innerHTML = 'Devolver';
  }

}