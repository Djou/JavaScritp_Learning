// Capturar evento de submit do formulário
const h1 = document.querySelector('.container h1');

h1.innerHTML = 'TESTE JS';
let data = new Date();
h1.innerHTML = processDate(data);

function processDate(data){
    let dayWeek;
    switch (data.getDay()) {
        case 0:
          dayWeek = 'Domingo'
          break;
        case 1:
          dayWeek = 'Segunda-Feira'
          break;
        case 2:
          dayWeek = 'Terça-Feira'
          break;
        case 3:
          dayWeek = 'Quarta-Feira'
          break;
        case 4:
          dayWeek = 'Quinta-Feira'
          break;
        case 5:
          dayWeek = 'Sexta-Feira'
          break;
        case 6:
          dayWeek = 'Sábado'
          break;
    }

    let dayNumber = data.getDate();
    
    let listMounths = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
                       'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    let mounth = listMounths[data.getMonth()];
    let year = data.getFullYear();
    
    let hour    = data.getHours();
    if (hour < 10) {
        hour = '0' + hour;
    }
    
    let minute  = data.getMinutes();
    if (minute < 10) {
        minute = '0' + minute;
    }

    let seconds = data.getSeconds(); 
    if (seconds < 10) {
        seconds = '0' + minute;
    }

    const dscHour = `${hour}:${minute}:${seconds}`;

    return formatTextDate(dayWeek, dayNumber, mounth, year, dscHour);

};


function formatTextDate(dayWeek, dayNumber, mounth, year, hour){
    let textDate = `${dayWeek}, ${dayNumber} de ${mounth} de ${year} \n ${hour}`;
    return textDate;
};
