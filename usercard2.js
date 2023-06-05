let gandhioldinfo = {
    imgurl: "https://tse2.mm.bing.net/th?id=OIP.h1u0WdtyHk1mITELUMvfPwHaEo&pid=Api&P=0&h=180",
    name: "Mahatma Gandhi",
    Description: "Freedom Fighter"
}

let gandhiyounginfo = {
    imgurl: "https://tse3.mm.bing.net/th?id=OIP.NxIhSDYNWuiI7EHC7yu9QgHaHA&pid=Api&P=0&h=180",
    name: "Mohandas KaramChandh Gandhi",
    Description: "Father of the Nation"
}

let isgandhijiold = true;
let displayobject;
let flipdata = function(){
    if(isgandhijiold == true){
        displayobject = gandhiyounginfo;
        isgandhijiold = false;
    }
    else{
        displayobject = gandhioldinfo;
        isgandhijiold = true;
    }
    document.getElementById("gandhi-img").src = displayobject.imgurl;
    document.getElementById("gandhi-name").innerHTML = displayobject.name;
    document.getElementById("gandhi-description").innerHTML = displayobject.Description;
}