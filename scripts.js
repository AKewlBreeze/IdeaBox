var $inputTitle = $(".title")
var $inputBody = $(".description")
var storedIdeas = []


$(document).ready(function() {
    storedIdeas = JSON.parse(localStorage.getItem("storedIdeas"))
    if (storedIdeas) {
        renderHTML(storedIdeas);
        deleteButton()
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
    deleteButton();
    upvote();
    downvote();

    // clear input values
    $inputTitle.val(null);
    $inputBody.val(null);
})

function applyInput(newIdea) {
    $('.ideabody').prepend(newIdea.innerHTML)
}




function upvote() {
    $(".upvote").on('click', function() {
        console.log("werk");
    })
}

function downvote() {
    $(".downvote").on('click', function() {
        console.log("werk");
    })
}


$(".search").keyup(function(e) {
    if (e.keyCode == 13) {
        $(this).trigger("enterKey");
        console.log("werk")
    }
});

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


function Idea(title, body) {
    this.title = title;
    this.body = body;
    this.id = Date.now();
    this.quality = "swill";
    this.creation = document.createElement('section');
    this.class = 'idea-section';
    this.innerHTML = `<div id=${this.id} class = ${this.class}><span class = "delete"><h2>${this.title}<button class = "deleteArrow"></button></h2></span><p class = "body-content">${this.body}</p><p class = "quality"><button class = "upvote"></button><button class = "downvote"></button> quality: ${this.quality}</p><hr></div>`
}

function deleteButton() {
    $(".idea-section").on('click', '.deleteArrow', function() {
        var id = this.closest("div").id;
        debugger
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





// $(".idea-section").on('click', '.deleteButton', function(){
//   debugger
//   var id = $(this).parent().attr('localKey');
//   var idea =  findIdea(id);
//   deleteIdea(idea);
//   $(this).parent().remove();
// });

function findIdea() {
    return storedIdeas.find(function(idea) {
        return idea.id === parseInt(id);
    });
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

//$('.delete')on('click', function{
// parse storedIdeas

// remove item from array
// stringify storedIdeas
//})
