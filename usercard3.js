let gandhioldinfo = {
    imgurl: "https://tse2.mm.bing.net/th?id=OIP.h1u0WdtyHk1mITELUMvfPwHaEo&pid=Api&P=0&h=180",
    name: "Mahatma Gandhi",
    Description: "Freedom Fighter"
}


let displayobject = {
    name: "",
    imgurl: "",
    Description: ""

}
let getRandomUser = function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data => {
        displayobject.name = data.results[0].name.first + " " + data.results[0].name.last;
        displayobject.imgurl = data.results[0].picture.large;
        displayobject.Description = data.results[0].gender;
        document.getElementById("gandhi-img").src = displayobject.imgurl;
        document.getElementById("mahatma-name").innerHTML = displayobject.name;
        document.getElementById("mahatma-description").innerHTML = displayobject.Description;
    })
}