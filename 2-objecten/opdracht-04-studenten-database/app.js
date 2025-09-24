const students = [
  {
    id: 1,
    naam: 'Emma van Dijk',
    leeftijd: 20,
    studie: 'Frontend Development',
    cijfer: 8.5,
    actief: true,
  },
  {
    id: 2,
    naam: 'Liam de Boer',
    leeftijd: 19,
    studie: 'Backend Development',
    cijfer: 7.2,
    actief: true,
  },
  {
    id: 3,
    naam: 'Sophie Jansen',
    leeftijd: 21,
    studie: 'Frontend Development',
    cijfer: 9.1,
    actief: false,
  },
  {
    id: 4,
    naam: 'Daan Peters',
    leeftijd: 22,
    studie: 'Fullstack Development',
    cijfer: 6.8,
    actief: true,
  },
  {
    id: 5,
    naam: 'Evi de Wit',
    leeftijd: 20,
    studie: 'Frontend Development',
    cijfer: 8.9,
    actief: true,
  },
];

function toonAlleStudenten() {
//   // 📝 WAT MOET JE DOEN:
//   // 1. Loop door de hele 'students' array
const studentlist = document.getElementById('studenten-lijst')
  for (let student of students) { 
studentlist.innerHTML += `<article class="actief"> 
      <strong>${student.naam}</strong> (20 jaar)<br>
      📚 ${student.studie}<br>
      📊 Cijfer: ${student.cijfer} | Status: ${student.actief} 
  </article>`
     
}
}
//   // 2. Maak voor elke student een HTML article element
//   // 3. Voeg de HTML toe aan het element met id 'studenten-lijst'

//   //
//   // 💡 TIP: Gebruik array.map() om HTML te maken en innerHTML om toe te voegen
//   //
//   // 🎯 VOORBEELD HTML per student:
 


function toonActieveStudenten() {
  
  const actieveStudenten = students.filter(student => student.actief === true);
  const studentlist = document.getElementById('studenten-lijst')
  for (let student of students) { 
studentlist.innerHTML += `<article class="actief"> 
      <strong>${student.naam}</strong> (20 jaar)<br>
      📚 ${student.studie}<br>
      📊 Cijfer: ${student.cijfer} | Status: ${student.actief} 
  </article>`
  }
}

function toonTopStudenten() {


  // 1. Filter de students array op studenten met cijfer >= 8.0
const smartstudents = students.filter(student => student.cijfer >= 8.0); { 
     }
}
// 🚀 START DE APPLICATIE - roep deze aan als de pagina laadt
toonAlleStudenten();
