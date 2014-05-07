var addToDoItem = function () {
    "use strict"
    var myToDoListArray = [];
    if (document.getElementById("input").value === "") {  //if the user does not enter any text or item, don't let them move on

        alert("Please Enter An Item to add to the list");
    } else {
        var myNewListItem = document.getElementById("input").value;
            document.getElementById("orderedlist").innerHTML += "<li>" + myNewListItem + "</li>";       
            document.getElementById("input").value = "";
    }
};