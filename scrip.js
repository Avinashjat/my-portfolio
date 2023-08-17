



var tittlelinks = document.getElementsByClassName("tittle-links");
var tittlecontent = document.getElementsByClassName("tittle-content");

function openabout(tagname) {
    // Remove the "skills" class from all tittlelinks
    for (var i = 0; i < tittlelinks.length; i++) {
        tittlelinks[i].classList.remove("skills");
    }

    // Remove the "active-skill" class from all tittlecontent elements
    for (var i = 0; i < tittlecontent.length; i++) {
        tittlecontent[i].classList.remove("active-skill");
    }

    // Add the "skills" class to the clicked tittlelink
    event.currentTarget.classList.add("skills");

    // Add the "active-skill" class to the corresponding tittlecontent based on the provided tagname
    document.getElementById(tagname).classList.add("active-skill");
}

