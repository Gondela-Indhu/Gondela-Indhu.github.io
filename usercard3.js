let gandhioldinfo = {
    imgurl: "https://tse2.mm.bing.net/th?id=OIP.h1u0WdtyHk1mITELUMvfPwHaEo&pid=Api&P=0&h=180",
    name: "Mahatma Gandhi",
    Description: "Freedom Fighter"
}


let displayobject;
let getRandomUser = function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(console.log(data))
    document.getElementById("gandhi-img").src = displayobject.imgurl;
    document.getElementById("mahatma-name").innerHTML = displayobject.name;
    document.getElementById("mahatma-description").innerHTML = displayobject.Description;
}