var $inputTitle = $(".title")
var $inputBody = $(".description")
var storedIdeas = []

$( document ).ready(function() {
  storedIdeas = JSON.parse(localStorage.getItem("storedIdeas"))
  if (storedIdeas) {
    renderHTML(storedIdeas);
  } else {
    storedIdeas = [];
  }
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




// Search functionality
$(".search").keyup(function(e){
    if(e.keyCode == 13)
    {
        $(this).trigger("enterKey");
        console.log("werk")
    }
});
$(document).ready(function(){

  $('.search').keyup(function(){
    var filter = $(this).val(), count = 0;
    $('.idea-section').each(function(){
      if ($(this).text().search(new RegExp(filter, "i")) < 0) {
        $(this ).hide();
      } else {
        $(this).show();
        count++;
      }
    });
});


});


function Idea(title, body){
  this.title = title;
  this.body = body;
  this.id = Date.now();
  this.quality = "swill";
  this.creation = document.createElement('section');
  this.class = 'idea-section';
  this.innerHTML = `<div class = ${this.class}><span class = "delete"><h2>${this.title}<img src="./images/delete.svg"/ class = "deleteArrow"></h2></span><p class = "body-content">${this.body}</p><p class = "quality"><img src = "./images/upvote.svg" class = "upvote"><img src = "./images/downvote.svg" class = "downvote">quality: ${this.quality}</p><hr></div>`
}

$(".deleteArrow").click(function(){
  console.log("werk");
})

function renderHTML (storedIdeas){
  if (storedIdeas == []){
    (storedIdeas.map(function(idea){
  return applyInput(idea)
}))}
  else {storedIdeas.map(function(idea){
  return applyInput(idea)
  })
}}

//$('.delete')on('click', function{
  // parse storedIdeas

  // remove item from array
  // stringify storedIdeas
//})
