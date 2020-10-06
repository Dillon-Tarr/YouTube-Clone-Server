const mongoose = require('mongoose');
mongoose
.connect(`mongodb+srv://Dillon:<password>@cluster0.r0lrf.mongodb.net/<dbname>?retryWrites=true&w=majority`,
{ useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('Connected to MongoDB...'))
 .catch((err) => console.log(`Could not connect to MongoDB. ERROR: ${err}`));