var $inputTitle = $(".title")
var $inputBody = $(".description")
var storedIdeas = []

$(".save").on("click", function(){
  var inputTitle = $inputTitle.val()
  var inputBody = $inputBody.val()
  var newIdea = new Idea(inputTitle, inputBody)
  var localKey = newIdea.id

  storedIdeas.push(newIdea)
// json stringify to send back to local storage

localStorage.setItem("storedIdeas", JSON.stringify(storedIdeas));
applyInput(newIdea)
// grab idea from local storage and display on page

// clear input values
$inputTitle.val(null);
$inputBody.val(null);

// evaluate prepend to show the newest ideas first

//  $inputTitle.val(null);
//  $inputBody.val(null);

})

function applyInput (newIdea) {
  $('.bottom').prepend(newIdea.innerHTML)
}
// json parse to access item from local storage
//  JSON.parse(localStorage.getItem(localKey))
// evaluate prepend to show the newest ideas first

function Idea(title, body){
  this.title = title;
  this.body = body;
  this.id = Date.now()
  this.quality = "swill"
  this.creation = document.createElement('article')
  this.class = 'ideabody'
  this.innerHTML = `<span class = "delete"><h2>${this.title}<img src="./images/delete.svg"/ class = "deleteArrow"></h2></span><p class = "body-content">${this.body}</p><p class = "quality"><img src = "./images/upvote.svg" class = "upvote"><img src = "./images/downvote.svg" class = "downvote">quality:</p><hr>`
}
