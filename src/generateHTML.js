const generateTeamMembers = (teamMembers) => {
  let memberCards = '';
  for ( i = 0; i < teamMembers.length; i++) {
    switch (teamMembers[i].role()) {
      case 'Manager':
        memberCards += managerCard(teamMembers[i])
        console.log('added manager')
        break;
      case 'Engineer':
        memberCards += engineerCard(teamMembers[i])
        console.log('added engineer')
        break;
      case 'Intern':
        memberCards += internCard(teamMembers[i])
        console.log('added Intern')
        break;
    }
  }
  return memberCards
}

let managerCard = (manager) => {
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-body bg-primary bg-gradient">
    <h5 class="card-title">${manager.name}</h5>
    <h5 class="card-title">Manager</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${manager.id}</li>
    <li class="list-group-item">${manager.email}</li>
    <li class="list-group-item">${manager.officeNum}</li>
  </ul>
</div>`
}

let engineerCard = (engineer) => {
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-body bg-success bg-gradient">
    <h5 class="card-title">${engineer.name}</h5>
    <h5 class="card-title">Engineer</h5>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">${engineer.id}</li>
  <li class="list-group-item">${engineer.email}</li>
  <li class="list-group-item">${engineer.github}</li>
  </ul>
</div>`
}

let internCard = (intern) => {
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-body bg-danger bg-gradient">
    <h5 class="card-title">${intern.name}</h5>
    <h5 class="card-title">Intern</h5>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">${intern.id}</li>
  <li class="list-group-item">${intern.email}</li>
  <li class="list-group-item">${intern.school}</li>
  </ul>
</div>`
}

// Generates HTML for user with Team Member Cards
const generateHTML = (teamMembers) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Document</title>
  </head>
  <body>
  <div>
    ${generateTeamMembers(teamMembers)}
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  </body>
  </html>`;
}

module.exports = generateHTML