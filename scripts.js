var $inputTitle = $(".title")
var $inputBody = $(".description")

$(".save").on("click", function(){
  var inputTitle = $inputTitle.val()
  var inputBody = $inputBody.val()
  var newIdea = new Idea(inputTitle, inputBody)
  var localKey = newIdea.id

// json stringify to send back to local storage
  JSON.stringify(localStorage.setItem(localKey, newIdea));
// json parse to access item from local storage
//JSON.parse(localStorage.getItem(localKey))

// grab idea from local storage and display on page
  $('.bottom').appendChild(newIdea)

// clear input values
$inputTitle.val(null);
$inputBody.val(null);

// evaluate prepend to show the newest ideas first
})

function Idea(title, body){
  this.title = title;
  this.body = body;
  this.id = Date.now()
  this.quality = "swill"
  this.creation = document.createElement('article')
  this.class = 'ideabody'
  this.innerHTML = '<span class = "delete"><h2>Example Idea 1<img src="./images/delete.svg"/ class = "deleteArrow"></h2></span><p class = "body-content">Example Content</p><p class = "quality"><img src = "./images/upvote.svg" class = "upvote"><img src = "./images/downvote.svg" class = "downvote">quality:</p><hr>'
}
