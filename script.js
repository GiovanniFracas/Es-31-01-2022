var valore1;
var valore2;
var numeroRand;
var confronto;
var confronto2;
var uguale = false;
$(function () {
    numeroRand = (Math.floor(Math.random() * 100));
    console.log(numeroRand);
    $('#Restart').hide();
    $('#verifica').on('click', function () {
        $('#Restart').show();
        $('#inizio').html('il numero da indovinare era: ' + numeroRand);
        valore1 = Number($('#p1').val());
        valore2 = Number($('#p2').val());
        confronto = Math.abs(valore1 - numeroRand);
        confronto2 = Math.abs(valore2 - numeroRand);
        console.log('primo confronto ' + confronto);
        console.log('primo confronto ' + confronto2);
        if (valore1 == numeroRand) {
            $('#finale').html('Il giocatore 1 ha indovinato');
            uguale = true;
        }
        if (valore2 == numeroRand) {
            $('#finale').html('Il giocatore 2 ha indovinato');
            uguale = true;
        }
        if (confronto < confronto2 && !uguale) {
            $('#finale').html('Nessuno ha indovinato ma il giocatore 1 si è avvicinato di più');
        }
        if (confronto > confronto2 && !uguale) {
            $('#finale').html('Nessuno ha indovinato ma il giocatore 2 si è avvicinato di più');
        }
        if (confronto == confronto2 && !uguale) {
            $('#finale').html('La distanza tra i numeri è la stessa');
            if (valore1 == valore2) {
                $('#finale').html('Avete messo gli stessi numeri e non avete indovinato');
            }
        }
        if (confronto == confronto2 && uguale) {
            $('#finale').html('La distanza tra i numeri è la stessa');
            if (valore1 == valore2) {
                $('#finale').html('Avete messo gli stessi numeri e avete indovinato');
            }
        }
    });
});
//dadegi@gmail.com
