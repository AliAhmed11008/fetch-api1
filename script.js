// fetching users from api

let loading = document.getElementById("loading");
let error = document.getElementById("error");
let container = document.getElementById("container");

fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response){
    if(!response.ok){
        throw new Error("Network error");
    }
    return response.json();
})
.then(function(data){
    loading.style.display = "none";

    for(let i = 0; i < data.length; i++){
        let user = data[i];
        let firstLetter = user.name.charAt(0);

        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML =
            "<div class='card-top'></div>" +
            "<div class='avatar'>" + firstLetter + "</div>" +
            "<div class='card-body'>" +
                "<h2>" + user.name + "</h2>" +
                "<div class='username'>@" + user.username + "</div>" +
                "<p><b>Email:</b> " + user.email + "</p>" +
                "<p><b>Phone:</b> " + user.phone + "</p>" +
                "<p><b>City:</b> " + user.address.city + "</p>" +
                "<p><b>Company:</b> " + user.company.name + "</p>" +
            "</div>";

        container.appendChild(card);
    }
})
.catch(function(err){
    loading.style.display = "none";
    error.innerHTML = "Oops! Something went wrong. Please try again.";
});
