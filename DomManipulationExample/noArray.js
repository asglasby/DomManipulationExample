var myListItemCounter = 0;

var addToDoItem = function () {
    "use strict"
    if (document.getElementById("input").value === "") {  //if the user does not enter any text or item, don't let them move on

        alert("Please Enter An Item to add to the list");
    } else {
        
        myListItemCounter++;
        var myNewListItem = document.getElementById("input").value;
        //document.getElementById("orderedlist").innerHTML += '<li id="hideItem' + myListItemCounter + '"><span id="listItem' + myListItemCounter + '" onclick="strikeOutListItem(\'listItem' + myListItemCounter + '\');"> "' + myNewListItem + +myListItemCounter + ' "</span>' + '<span id="listItem' + myListItemCounter + '" onclick="hideListItem(\'hideItem' + myListItemCounter + '\');">  ---Click to Delete--- </span></li>';

        document.getElementById("orderedlist").innerHTML += '<li id="hideItem' + myListItemCounter + '"><span id="listItem' + myListItemCounter + '" onclick="strikeOutListItem(\'listItem' + myListItemCounter + '\');"> "' + myNewListItem + ' "</span>' + '<span id="listItem' + myListItemCounter + '" onclick="hideListItem(\'hideItem' + myListItemCounter + '\');">  ---Click to Delete--- </span></li>';

        document.getElementById("input").value = "";
    }
};

var strikeOutListItem = function (listItemId) {
    "use strict";
    document.getElementById(listItemId).setAttribute("class", "strikethrough");
};

var hideListItem = function (hideItemId) {
    "use strict";
    document.getElementById(hideItemId).setAttribute("class", "hideItem");
};

//document.getElementById("orderedlist").innerHTML = " ";
