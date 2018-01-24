var fs = require('fs-extra');

fs.copySync('public', 'build', {
  derefence: true,
  filter: file => file !== 'public/index/html'
});
