let ul = document.getElementsByTagName("li")
for(let i=0;i<=10;i++){
    if(i%2!==0){
        ul[i].style.backgroundColor = "blue"
        ul[i].style.color = "white"
    }
}
