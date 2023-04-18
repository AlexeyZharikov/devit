const cron = require('node-cron');
const axios = require('axios')

const task = cron.schedule('* * * * *', () => {
  axios.post('http://localhost:8001/posts')
  .then(() => console.log('Cron started'))
  .catch(err => console.log(err));
});


task.start();

