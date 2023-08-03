const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

//Data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// routes files
require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);

app.listen(PORT, function() {
  console.log(`Server is listening on PORT: ${PORT}`);
});