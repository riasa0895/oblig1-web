// lager en array som lagrer alle objektene
const alleBilletter = [];

function handleFormSubmit(event) {
    event.preventDefault();

    // setter verdien på de ulike elementer
    const fornavn = document.getElementById('Fornavn').value;
    const etternavn = document.getElementById('Etternavn').value;
    const telefonnr = document.getElementById('Telefonnr').value;
    const epost = document.getElementById('Epost').value;
    const antall = document.getElementById('numberInput').value;
    const film = document.getElementById('Filmutvalg').value;

    const billett = {
        navn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost: epost,
        antall: antall,
        film: film
    };

    // setter objekt inn i array
    alleBilletter.push(billett);

    displayTicketOverview();
}

const form = document.getElementById('bilettform');
form.addEventListener('submit', handleFormSubmit);

//oversikt over de ulike elementer i objektet som er lagret i arrayet
function displayTicketOverview() {
    const overviewElement = document.getElementById('ticketOverview');
    overviewElement.innerHTML = '';
    alleBilletter.forEach(billett => {
        const listItem = document.createElement('li');
        listItem.textContent = `Navn: ${billett.navn}, Etternavn: ${billett.etternavn}, Antall: ${billett.antall}, Film: ${billett.film}, Telefonnr: ${billett.telefonnr}, Epost: ${billett.epost}`;
        overviewElement.appendChild(listItem);
    });
}
//denne funksjonen tømmer hele arrayet
function clearTickets() {
    console.log('Clear Tickets function called.');
    alleBilletter.length =  0;
    console.log('All tickets have been cleared.');
}

document.getElementById('bilettform').addEventListener('submit', function(event) {
    event.preventDefault();

    var fornavn = document.getElementById('Fornavn').value;
    var etternavn = document.getElementById('Etternavn').value;
    var telefonnr = document.getElementById('Telefonnr').value;
    var epost = document.getElementById('Epost').value;
    var antall = document.getElementById('numberInput').value;

    // Setter verdi til ulike felt, krever info fra bruker
    if (fornavn === '') {
        alert('Fornavn må fylles ut.');
        return false;
    }
    if (etternavn === '') {
        alert('Etternavn må fylles ut.');
        return false;
    }
    if (telefonnr === '') {
        alert('Telefonnr må fylles ut, kun tall.');
        return false;
    }
    if (epost === '') {
        alert('Epost må fylles ut.');
        return false;
    }
    if (antall === '' || antall <=  0) {
        alert('Antall må være mer enn 0.');
        return false;
    }

});

