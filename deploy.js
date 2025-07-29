// deploy.js
const ghpages = require('gh-pages');

ghpages.publish(
  'dist',
  {
    branch: 'gh-pages',
    message: 're-deploy',
    force: true,
  },
  function (err) {
    if (err) {
      console.error('🚫 Deployment failed:', err);
    } else {
      console.log('✅ Deployed successfully to GitHub Pages');
    }
  }
);
