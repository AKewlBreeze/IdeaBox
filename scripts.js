var $inputTitle = $(".title")
var $inputBody = $(".description")
// var storedIdeas =  []

$( document ).ready(function() {
  // storedIdeas = JSON.parse(localStorage.getItem("storedIdeas"))
  // if (storedIdeas == []) {
  //   !renderHTML(storedIdeas)
  // }
  // else {renderHTML(storedIdeas)}
});

$(".save").on("click", function(){
  var inputTitle = $inputTitle.val()
  var inputBody = $inputBody.val()
  var newIdea = new Idea(inputTitle, inputBody)
  debugger;
  var localKey = newIdea.id
//push newIdea to global array storedIdeas
  // storedIdeas.push({ newIdea.id: newIdea})
// json stringify to send back to local storage
// localStorage.setItem("storedIdeas", JSON.stringify(storedIdeas));
localStorage.setItem(newIdea.id, newIdea)

// grab idea from local storage and display on page
// applyInput(newIdea)
//
// // clear input values
// $inputTitle.val(null);
// $inputBody.val(null);
})


function renderAll () {
  $.each(localStorage, function( timeStamp, ideaObject) { renderIdea(ideaObject) } )
}
     
function Idea(title, body){
  this.title = title;
  this.body = body;
  this.id = Date.now();
  this.quality = "swill";
  this.class = 'idea-section';
}

function renderIdea(idea) {
  $('.ideaBody').prepend(`<span class = "delete" id='${idea.id}'><h2>${this.title}<img src="./images/delete.svg"/ class = "deleteArrow"></h2></span><p class = "body-content">${this.body}</p><p class = "quality"><img src = "./images/upvote.svg" class = "upvote"><img src = "./images/downvote.svg" class = "downvote">quality: ${this.quality}</p><hr>`)
}

// function deleteIdea(idea) {
//   $(`.ideaBody #section-${idea.id}`).remove()
//
// }
// function renderHTML (storedIdeas){
//   storedIdeas.map(function(idea){
//   return applyInput(idea)
//   })
// }


// $('.idea-section').on('click', '.deleteArrow', function(){
//   console.log('hey');
//   // find the object id of the corresponding object
//   var $objectId = $(this).parent('id');
//   // parse savedIdeas
//   storedIdeas = JSON.parse(localStorage.getItem("storedIdeas"));
//   // find the index of the object we want to remove
//   var index = storedIdeas.indexOf($objectid);
//   // remove that object from the array
//   storedIdeas.splice(index);
//   // json stringify to send back to local storage
//   localStorage.setItem("storedIdeas", JSON.stringify(storedIdeas));
//   renderHTML(storedIdeas);
// });

// // function to call on to compare id value of idea object value in stored arrays
// function select (storedIdeas, idea) {
//   for (var i = 0; i < storedIdeas.length; i++) {
//         if (idea.id == storedIdeas[i].id) return idea.id;
// }}
