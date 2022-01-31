let valore1: number;
let valore2: number;
let result: number;
let result2: number;
let risultato: number;
let numeroRand: number;
let confronto: number;
let confronto2: number;
let uguale:boolean =false;

$(() => {
    numeroRand = Math.floor(Math.random() * 100);
    console.log(numeroRand);
    $('#Restart').hide();
    $('#verifica').on('click', function () {
        $('#Restart').show();
        $('#inizio').html('il numero da indovinare era: ' + numeroRand);
        valore1 = Number($('#p1').val());
        valore2 = Number($('#p2').val());
        if (valore1 != 0 && valore2 != 0) {

            result = valore1;
            result2 = valore2;
           
        }
        confronto = result - numeroRand;
        confronto2 = result2 - numeroRand;
        console.log('primo confronto ' + confronto);
        console.log('primo confronto ' + confronto2);

        if (confronto < 0) {
            confronto *= -1;
        }
        if (confronto2 < 0) {
            confronto2 *= -1;
        }
        if (result == numeroRand) {
            $('#finale').html('ha vinto il giocatore 1');
            uguale=true;
        }
        if (result2 == numeroRand) {
            $('#finale').html('ha vinto il giocatore 2');
            uguale=true;
        }

        if (confronto < confronto2 && uguale==false) {
            console.log('nessuno ha indovinato ma ha vinto il giocatore 1');
            $('#finale').html('nessuno ha indovinato ma il giocatore 1 si è avvicinato di più');
        }
        if (confronto > confronto2 && uguale==false) {
            console.log('nessuno ha indovinato ma ha vinto il giocatore 2');
            $('#finale').html('nessuno ha indovinato ma il giocatore 2 si è avvicinato di più');
        }
        if (confronto == confronto2 && uguale==false) {
            $('#finale').html('la distanza tra i numeri è la stessa');
            if(valore1==valore2 ){
                $('#finale').html('avete messo gli stessi numeri e non avete vinto'); 
            }
        }
        if (confronto == confronto2 && uguale==true) {
            $('#finale').html('la distanza tra i numeri è la stessa');
            if(valore1==valore2 ){
                $('#finale').html('avete messo gli stessi numeri e avete vinto'); 
            }
        }
      
    })
})  
//dadegi@gmail.com