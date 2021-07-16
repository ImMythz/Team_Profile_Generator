const generateTeamMembers = (teamMembers) => {
  let memberCards = '';
  for ( i = 0; i < teamMembers.length; i++) {
        memberCards += employeeCard(teamMembers[i])
        console.log('added employee card')
  }
  return memberCards
}

let employeeCard = (employee) => {
  let extra = '';
  let color = '';
  switch (employee.role()) {
    case 'Manager':
      extra = 'Office Number: ' + employee.officeNum;
      color = 'bg-primary bg-gradient';
      break;
    case 'Engineer':
      extra = 'GitHub: ' + '<a href="https://github.com/' + employee.github + '">' + employee.github + '</a>';
      color = 'bg-success bg-gradient';
      break;
    case 'Intern':
      extra = 'School: ' + employee.school;
      color = 'bg-danger bg-gradient';
      break;
  }
  return `
    <div class="card shadow-sm text-center mt-5 m-5" style="width: 18rem;">
      <div class="card-body ${color}">
        <h5 class="card-title">${employee.name}</h5>
        <h5 class="card-title">${employee.role()}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employee.id}</li>
        <li class="list-group-item">Email:<a href="mailto:${employee.email}?subject=Subject&body=message%20goes%20here"> ${employee.email}</a></li>
        <li class="list-group-item">${extra}</li>
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
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
        <div class="mx-auto">
          <a class="navbar-brand text-white" href="#">My Tech Team</a>
        </div>
      </nav>
    </div>
    <main class="d-flex flex-row flex-wrap justify-content-center">
        ${generateTeamMembers(teamMembers)}
    </main>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  </body>
  </html>`;
}

module.exports = generateHTML