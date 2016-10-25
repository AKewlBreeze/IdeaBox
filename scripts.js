var $inputTitle = $(".title")
var $inputBody = $(".description")

$(".save").on("click", function(){
  var inputTitle = $inputTitle.val()
  var inputBody = $inputBody.val()
  var newIdea = new Idea(inputTitle, inputBody)
// create variable of arrays to store
  var savedIdeas = [];
//grab from local storage json parse
  JSON.parse(localStorage.getItem(savedIdeas));
//add new idea object to saved ideas
  savedIdeas.push(newIdea);
// create variable to access key of newIdea from savedIdeas
  var localStorageKey = savedIdeas[savedIdeas.length-1].id
// json stringify to send back to local storage
  JSON.stringify(localStorage.setItem(localStorageKey,savedIdeas));
// grab ideas from local storage and display on page

// clear input values
//  $inputTitle.val(null);
//  $inputBody.val(null);
})


function Idea(title, body){
  this.title = title;
  this.body = body;
  this.id = Date.now()
  this.quality = "swill"
}
