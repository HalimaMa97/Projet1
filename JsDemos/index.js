
let xhr=new XMLHttpRequest()
xhr.open("GET","https://github.com/HalimaMa97/Projet1/blob/master/azza.txt",true)
let res=xhr.responseText
xhr.send()
console.log(xhr.readyState)
document.getElementById('demo').innerHTML=res

