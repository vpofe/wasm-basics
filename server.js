const express = require('express');
const app = express();

// Serving static files from the root. Security issue: don't do this in production
app.use(express.static('./'))

app.listen(3000, () => console.log('Server running on port 3000'))