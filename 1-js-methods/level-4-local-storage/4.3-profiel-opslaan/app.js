// Opdracht 4.3: Profiel Opslaan
console.log('🚀 Opdracht 4.3: Profiel Opslaan');

function slaProfielOp() {
    // TODO: Haal alle waarden uit formulier
    const naam = document.getElementById('naam');
    const email = document.getElementById('email');
;
    const leeftijd =document.getElementById('leeftijd');
    const kleur = document.getElementById('kleur');
    
    // TODO: Valideer verplichte velden
    if (!naam === '' && !email === '') {
        alert('Naam en email zijn verplicht!');
        return;
    }
    
    // TODO: Sla elk veld apart op in localStorage
    localStorage.setItem('profiel-naam', naam.value);
    localStorage.setItem('profiel-email', email.value);
    localStorage.setItem('profiel-leeftijd', leeftijd.value);
    localStorage.setItem('profiel-kleur', kleur.value);
    
    // TODO: Sla ook opslag datum op
    localStorage.setItem('profiel-opgeslagen', new Date());
    
    alert('Profiel opgeslagen!');
    toonProfiel();
}

function laadProfiel() {
    // TODO: Haal alle waarden op uit localStorage
    const naam = localStorage.setitem('profiel-naam');
    const email = localStorage.setitem('profiel-email');
    const leeftijd = localStorage.setitem('profiel-leeftijd');
    const kleur = localStorage.setitem('profiel-kleur');
    
    // TODO: Vul formulier als data bestaat
  if (naam) {
        document.getElementById('naam').value = naam;
    }
    
    if (email) {
        document.getElementById('email').value = email;
    }
    
    if (leeftijd) {
        document.getElementById('leeftijd').value = leeftijd;
    }
    
    if (kleur) {
        document.getElementById('kleur').value = kleur;
    }
}

function toonProfiel() {
    const container = document.getElementById('profiel-weergave');
    
    // TODO: Haal alle opgeslagen waarden op
    const naam =  localStorage.getItem('profiel-naam');
    const email = localStorage.getItem('profiel-email');
    const leeftijd = localStorage.getItem('profiel-leeftijd');
    const kleur = localStorage.getItem('profiel-kleur');
    const opgeslagenOp = localStorage.getItem('profiel-opgeslagen');
    
    // TODO: Check of er profiel data is
    if (naam && email) {
        // TODO: Toon profiel gegevens
        container.innerHTML = `
            <h3>Opgeslagen Profiel:</h3>
            <p><strong>Naam:</strong> ${naam}}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Leeftijd:</strong> ${leeftijd || 'Niet ingevuld'}</p>
            <p><strong>Favoriete kleur:</strong> ${kleur || 'Niet gekozen'}</p>
            <p><strong>Opgeslagen op:</strong> ${opgeslagenOp || 'Onbekend'}</p>
        `;
    } else {
        container.innerHTML = '<p>Nog geen profiel opgeslagen.</p>';
    }
}

function wisProfiel() {
    if (confirm('Weet je zeker dat je je profiel wilt wissen?')) {
        // TODO: Verwijder alle profiel items uit localStorage
        localStorage.removeItem(naam);
        localStorage.removeItem(email);
        localStorage.removeItem(leeftijd);
        localStorage.removeItem(kleur);
        localStorage.removeItem(opgeslagenOp);
        
        // TODO: Maak formulier leeg
        document.getElementById('naam').value = '';
        document.getElementById('email').value = '';
        document.getElementById('leeftijd').value = '';
        document.getElementById('kleur').value = '';
        
        toonProfiel();
        alert('Profiel gewist!');
    }
}

// TODO: Initialisatie
function init() {
    laadProfiel();
}

/* jouw code hier - roep init() aan bij DOMContentLoaded */;