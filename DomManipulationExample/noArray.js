var addToDoItem = function () {
    "use strict"
    var myListItemCounter = 0;
    if (document.getElementById("input").value === "") {  //if the user does not enter any text or item, don't let them move on

        alert("Please Enter An Item to add to the list");
    } else {
        myListItemCounter++;
        var myNewListItem = document.getElementById("input").value;
        document.getElementById("orderedlist").innerHTML += '<li id="listItem' + myListItemCounter + '"> "'+  myNewListItem +    ' ---Click to Delete--- '+ myListItemCounter + '"</li>';
        document.getElementById("input").value = "";
    }
};