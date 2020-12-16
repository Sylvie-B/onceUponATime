document.getElementById("userName").focus();    //  give form focus

let button = document.getElementById("storytelling");   // get button

let story = document.getElementById("story");   // get story

// 5 tableaux
let name = ["Sylvie", "le dragon", "le chat", "la tortue", "Godzilla", "la princesse", "la grenouille", "le feu"];
let thing = ["en carosse", "un gâteau", "son chapeau pointu", "la citrouille", "en balai"];
let temp = ["tiéde", "brulant", "glacé", "chaude", "violette"];
let adj = ["rose", "petit", "grand", "gentil", "en colère", "géant", "méchant", "timide"];
let place = ["dans le jardin", "partout dans le monde", "dehors", "à Fourmies", "à la maison", "en vacances", "dans la foret"];
let verb = ["joue", "se promène", "travaille", "mange", "crache", "parle a"];

// create story
button.addEventListener("click", function (){
    userName = document.getElementById("userName").value;
    if (userName.length === 0){
        userName = random(name);
    }
    // créer un élément
    let sentence = document.createElement("p");
    sentence.innerHTML = userName + " " + random(temp)  + " " + random(verb) + " " + random(thing) + " " + random(adj) + " " + random(place);
    // ajouter l'élément
    story.appendChild(sentence);
    document.getElementById("userName").value = ""; // clear form
    document.getElementById("userName").focus();    //  give focus
})

// fonction qui choisi les mots au hazard
function random (table){
    // let word = Math.ceil(Math.random() * table.length-1);
    return table[Math.ceil(Math.random() * table.length-1)];
}
