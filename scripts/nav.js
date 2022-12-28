let homeLink = "index.html";
let aboutLink = "about.html";

let homeItem = `<li><a href=${homeLink}>Home</a><li>`
let aboutItem = `<li><a href=${aboutLink}>About</a><li>`

let navContent = `<ul>${homeItem}${aboutItem}</ul>`

document.getElementById("nav").innerHTML = navContent;