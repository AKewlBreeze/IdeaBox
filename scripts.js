var $inputTitle = $(".title")
var $inputBody = $(".description")
var storedIdeas = []

// json parse to access item from local storage

// display storedIdeas on the page

$( document ).ready(function() {
  var storedIdeas = JSON.parse(localStorage.getItem("storedIdeas"))
  renderHTML(storedIdeas)
});

$(".save").on("click", function(){
  var inputTitle = $inputTitle.val()
  var inputBody = $inputBody.val()
  var newIdea = new Idea(inputTitle, inputBody)
  var localKey = newIdea.id
//push newIdea to global array storedIdeas
  storedIdeas.push(newIdea)
// json stringify to send back to local storage
localStorage.setItem("storedIdeas", JSON.stringify(storedIdeas));

// grab idea from local storage and display on page
applyInput(newIdea)

// clear input values
$inputTitle.val(null);
$inputBody.val(null);
})

function applyInput (newIdea) {
  $('.ideabody').prepend(newIdea.innerHTML)
}

// evaluate prepend to show the newest ideas first

function Idea(title, body){
  this.title = title;
  this.body = body;
  this.id = Date.now();
  this.quality = "swill";
  this.creation = document.createElement('section');
  this.class = 'idea-section';
  this.innerHTML = `<span class = "delete"><h2>${this.title}<img src="./images/delete.svg"/ class = "deleteArrow"></h2></span><p class = "body-content">${this.body}</p><p class = "quality"><img src = "./images/upvote.svg" class = "upvote"><img src = "./images/downvote.svg" class = "downvote">quality: ${this.quality}</p><hr>`
}

function renderHTML (storedIdeas){
  storedIdeas.map(function(idea){
  return applyInput(idea)
  })
}
