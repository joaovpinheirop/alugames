
// Mudar status de aluguel  
function alterarStatus(id){
  // Game que quermos modificar
  const game = document.getElementById(`game-${id}`)
  // Botão do elemento que queremos modificar
  const imagem  = game.querySelector('.dashboard__item__img');
  const btn = game.querySelector('.dashboard__item__button');


  if(btn.classList.contains('dashboard__item__button--return')){
    btn.classList.remove('dashboard__item__button--return');
    imagem.classList.remove('dashboard__item__img--rented');
    btn.innerHTML = 'Alugar';
  }
  else{
    btn.classList.add('dashboard__item__button--return');
    imagem.classList.add('dashboard__item__img--rented');
    
    btn.innerHTML = 'Devolver';
  }
}