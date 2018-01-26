/* Constants */
const express = require('express');
const app = express();
const path = require('path');

app.set('port', (process.env.PORT || 3000));

/* Application */
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send();
});

app.listen(app.get('port'), () => {
  console.log('Listening on ', app.get('port'));
})
