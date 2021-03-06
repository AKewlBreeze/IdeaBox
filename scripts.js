var $inputTitle = $(".title")
var $inputBody = $(".description")
var storedIdeas = []


$(document).ready(function() {
    storedIdeas = JSON.parse(localStorage.getItem("storedIdeas"))
    if (storedIdeas) {
        renderHTML(storedIdeas);
        deleteButton();
        upvote();
        downvote();
    } else {
        storedIdeas = [];
    }
});

$(".save").on("click", function() {
    var inputTitle = $inputTitle.val();
    var inputBody = $inputBody.val();
    var newIdea = new Idea(inputTitle, inputBody);
    var localKey = newIdea.id;
    //push newIdea to global array storedIdeas
    storedIdeas.push(newIdea);
    // json stringify to send back to local storage
    localStorage.setItem("storedIdeas", JSON.stringify(storedIdeas));

    // grab idea from local storage and display on page
    applyInput(newIdea)

    // clear input values
    $inputTitle.val(null);
    $inputBody.val(null);
})

function applyInput(newIdea) {
    $('.ideabody').prepend(`<div id=${newIdea.id} class = ${newIdea.class}><span class = "delete"><h2 class="editable-title" contenteditable="true">${newIdea.title}<button class = "deleteArrow"></button></h2></span><p contenteditable="true" class = "editable-body">${newIdea.body}</p><p class = "quality"><button class = "upvote"></button><button class = "downvote"></button> quality: ${newIdea.quality}</p><hr></div>`)
}

//assigns input edits on idea title to the object and rerenders the page
    $(".ideabody").on("focusout", ".editable-title", function () {
      var id = this.closest("div").id;
      var inputTitle = $(this).text();
      for (var i = 0; i < storedIdeas.length; i++) {
          if (id == storedIdeas[i].id) {
          storedIdeas[i].title = inputTitle;
          }
        }
        localStorage.setItem("storedIdeas", JSON.stringify(storedIdeas));
        $('.idea-section').empty();
        renderHTML(storedIdeas);
     });

 //prevent enter default on idea title
     $('.ideabody').on('keypress', '.editable-title', function(e) {
        if (e.which == 13) {
        e.preventDefault();
        $(this).blur();
        }
      });

//  assigns input edits on the idea description to object and rerenders page
    $(".ideabody").on("focusout", ".editable-body", function () {
        var id = this.closest("div").id;
        var inputBody = $(this).text();
        for (var i = 0; i < storedIdeas.length; i++) {
            if (id == storedIdeas[i].id) {
            storedIdeas[i].body = inputBody;
            }
          }
          localStorage.setItem("storedIdeas", JSON.stringify(storedIdeas));
          $('.idea-section').empty();
          renderHTML(storedIdeas);
       });

//prevent enter default on idea description
  $('.ideabody').on('keypress', '.editable-body', function(e) {
     if (e.which == 13) {
       e.preventDefault();
       $(this).blur();
       }
     });

function upvote () {
  $(".ideabody").on("click", ".upvote", function() {
      var id = this.closest("div").id;
      uptick(id);
  });
}

function uptick (id){

  for (var i = 0; i < storedIdeas.length; i++) {
      if (id == storedIdeas[i].id) {
      if (storedIdeas[i].quality === "swill")
      {storedIdeas[i].quality = "plausible"}
      else {storedIdeas[i].quality = "genius"}
      }
    }
    localStorage.setItem("storedIdeas", JSON.stringify(storedIdeas));
    $('.idea-section').empty();
    renderHTML(storedIdeas);
 }


function downvote() {
  $(".ideabody").on("click", ".downvote", function() {
    console.log("hmmmm");
    var id = $(this).closest('div').attr('id');
      downtick(id);
    })
}

function downtick (id) {

  for (var i = 0; i < storedIdeas.length; i++) {
      if (id == storedIdeas[i].id) {
      if (storedIdeas[i].quality === "genius")
      {storedIdeas[i].quality = "plausible"}
      else {storedIdeas[i].quality = "swill"}
      }
    }
    localStorage.setItem("storedIdeas", JSON.stringify(storedIdeas));
    $('.idea-section').empty();
    renderHTML(storedIdeas);
}




$(document).ready(function() {
    $('.search').keyup(function() {
        var filter = $(this).val(),
            count = 0;
        $('.idea-section').each(function() {
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).hide();
            } else {
                $(this).show();
                count++;
            }
        });
    });
});


function Idea(title, body, quality) {
    this.title = title;
    this.body = body;
    this.id = Date.now();
    this.quality = quality || "swill";
    this.creation = document.createElement('section');
    this.class = 'idea-section';
}

function deleteButton() {
    $(".ideabody").on('click', '.deleteArrow', function() {
        var id = $(this).closest('div').attr('id');
        deleteItemFromStorage(id);
        $("#" + id).remove();

        // display updated storage after removal
    });
}

function deleteItemFromStorage(id) {
    for (var i = 0; i < storedIdeas.length; i++) {
        if (id == storedIdeas[i].id) {
            storedIdeas.splice(i, 1)
        }
    }
    // set updated array to localStorage
    localStorage.setItem("storedIdeas", JSON.stringify(storedIdeas));
}



function renderHTML(storedIdeas) {

    if (storedIdeas == []) {
        (storedIdeas.map(function(idea) {

            return applyInput(idea)

        }))
    } else {
        storedIdeas.map(function(idea) {
            return applyInput(idea)
        })
    }
}
