var $inputTitle = $(".title")

var $inputBody = $(".description")

$(".save").on("click", function(e){
  var inputTitle = $inputTitle.val()
  var inputBody = $inputBody.val()
  var newIdea = new Idea(inputTitle, inputBody)
  debugger
// grab from local storage json parse
// add new idea to array
// json stringify to send back to local storage
// grab ideas from local storage and display on page
// clear input values
// evaluate prepend to show the newest ideas first
})


function Idea(title, body){
  this.title = title;
  this.body = body;
  this.id = Date.now()
  this.quality = "swill"
}
