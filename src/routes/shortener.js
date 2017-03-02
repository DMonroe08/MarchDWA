
//Function to create a random string 
function shortenURL(){
var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var text = "";
var range = 8;
for (var i = 0; i < range; i++){
  text += string.charAt(Math.floor(Math.random() * string.length));
};
return text;

}
exports.shortenURL = shortenURL;
