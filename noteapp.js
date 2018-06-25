console.log('Starting App');
const fs = require('fs');
fs.appendFile('greetings.txt','Hello this is an awsome day',function(err){
  if(err){console.log('Error in writing')}
});
