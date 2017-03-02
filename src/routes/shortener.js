function shortenURL(){
var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var text = "";
for (var i = 0; i < length; i++){
  text += string.charAt(Math.floor(Math.random() * string.length));
};
return text;

}
exports.shortenURL = shortenURL;
