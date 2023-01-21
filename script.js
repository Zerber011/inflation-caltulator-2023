/*
1. Prvo se pokupi vrednost sa svih INput polja. 
*/

function inflationCalculator() {
    let inf_rate = document.querySelector('#inflationRate').value;
    let money = document.querySelector('#money').value;
    let years = document.querySelector('#years').value;

    inf_rate = parseFloat(inf_rate);
    money = parseFloat(money);
    years = parseFloat(years);

    let vrednost = money - (money * (inf_rate / 100));

    for (let i = 1; i < years; i++) {
        vrednost -= vrednost * (inf_rate / 100);
    }

    vrednost = vrednost.toFixed(2);

    let div = document.createElement('div');
    div.classList = 'new-value';
    div.innerHTML = `Vaših: ${money}€, sa inflacijom od: ${inf_rate} %, 
                    za: ${years} god. Vredeće: ${vrednost}€. Objašnjenje dole!`;

    document.querySelector('.container').appendChild(div);






    console.log(vrednost);
}