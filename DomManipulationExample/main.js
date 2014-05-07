"use strict";
var functName = function () {
    "use strict"

    return "Hello";
};

//var result = functName();
//var myResult = document.getElementById("paragraph1").innerHTML;
//document.getElementById("paragraph1").innerHTML = result; //sets the contents of the result and setting it into property of the any HTML that is in the property of the HTML tag.
//alert(myResult)

var addToDoItem = function () {
    "use strict"
    var myToDoListArray = [];
    if (document.getElementById("input").value === "") {  //if the user does not enter any text or item, don't let them move on

        alert("Please Enter An Item to add to the list");
    } else {
        var myNewListItem = document.getElementById("input").value;
        myToDoListArray.push(myNewListItem);
        alert(myToDoListArray);
        for (var i = 0; i < myToDoListArray.length; i++) {
            document.getElementById("orderedlist").innerHTML += "<li>" + myToDoListArray[i] + "</li>";
            
        }
        document.getElementById("input").value = "";
        
    }
};