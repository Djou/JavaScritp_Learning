function getTimeFromSeconds(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone:'GMT'
  })
};

function iniciaRelogio() {
  const timer = setInterval(function() {
    segundos++;
    relogio.innerHTML = getTimeFromSeconds(segundos);
  }, 1000)
}


const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;

iniciar.addEventListener('click', function(event){
  clearInterval(timer);
  iniciaRelogio();
});

pausar.addEventListener('click', function(event){
  clearInterval(timer);
});

zerar.addEventListener('click', function(event){
  clearInterval(timer);
  relogio.innerHTML = '00:00:00';
});