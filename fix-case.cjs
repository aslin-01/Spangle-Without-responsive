const fs = require('fs');
const filesToFix = {
  'src/Pages/About/Components/Support.jsx': [
    { from: 'webx-nav-Logo_03.jpg', to: 'Webx-nav-Logo_03.jpg' }
  ],
  'src/Pages/About/Components/Team.jsx': [
    { from: 'team1.jpg', to: 'Team1.jpg' },
    { from: 'team2.jpg', to: 'Team2.jpg' },
    { from: 'team3.jpg', to: 'Team3.jpg' }
  ],
  'src/Pages/Career/Career.jsx': [
    { from: 'success.png', to: 'Success.png' }
  ],
  'src/Pages/Services/ServiceDetails.jsx': [
    { from: 'service-icon.png', to: 'Service-icon.png' }
  ],
  'src/Pages/Services/Services.jsx': [
    { from: 'service-icon.png', to: 'Service-icon.png' }
  ]
};

for (const [file, replacements] of Object.entries(filesToFix)) {
  let content = fs.readFileSync(file, 'utf8');
  for (const {from, to} of replacements) {
    content = content.replace(from, to);
  }
  fs.writeFileSync(file, content);
}
console.log("Fixed!");
