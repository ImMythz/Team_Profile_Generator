const teamBuilder = require('../index.js')

const generateTeamMembers = (teamMembers) => {
  // let memberCards;
  for ( i = 0; i < teamMembers.length; i++) {
    switch (teamMembers[i].role()) {
      case 'Manager':
        console.log('added manager')
        break;
      case 'Engineer':
        console.log('added engineer')
        break;
      case 'Intern':
        console.log('added Intern')
        break;
    }
  }
}

const generateHTML = (teamMembers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <title>Document</title>
</head>
<body>
<div>
    <h1>${answers}</h1>
    <h1>${answers.managerId}</h1>
    <h1>${answers.email}</h1>
    <h1>${answers.number}</h1>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>`;

module.exports = generateHTML