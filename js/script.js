//collego elementi html al javascript

let cardContainer = document.getElementById("card-container");

//creo oggetti per ogni persona del team

let team1 = {

    pic: "img/wayne-barnett-founder-ceo.jpg",

    name: "Wayne Barnett",

    role: "Founder & CEO",
}

let team2 = {

    pic: "img/angela-caroll-chief-editor.jpg",

    name: "Angela Caroll",

    role: "Chief Editor",
}

let team3 = {

    pic: "img/walter-gordon-office-manager.jpg",

    name: "Walter Gordon",

    role: "Office Manager",
}

let team4 = {

    pic: "img/angela-lopez-social-media-manager.jpg",

    name: "Angela Lopez",

    role: "Social Media Manager",
}

let team5 = {

    pic: "img/scott-estrada-developer.jpg",

    name: "Scott Estrada",

    role: "Developer",
}

let team6 = {

    pic: "img/barbara-ramos-graphic-designer.jpg",

    name: "Barbara Ramos",

    role: "Graphic Designer",
}

//creo array degli oggetti

let team = [team1, team2, team3, team4, team5, team6]

//stampo nel console.log le informazioni
//stampo nel documento le informazioni

for (i = 0; i < team.length; i++) {

    let card = document.createElement("div");
    
    cardContainer.append(card);

    card.classList.add ("card");

    card.innerHTML = `<img src="${team[i]["pic"]}" id="pic" alt = "foto">` + `<div class="name">` + `<h3> ${team[i]["name"]} </h3>` + `${team[i]["role"]}` + `</div>`
}

