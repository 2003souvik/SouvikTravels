let b=document.getElementById('b')
let bd=document.getElementById('cl')
b.addEventListener('click',tog)
let nodeList = document.querySelectorAll("a");
function tog(e)
{
 if(b.textContent.includes('Light'))
 {
     bd.style.backgroundColor="white"
     b.textContent="Dark"
     b.style.color="white"
     b.style.fontWeight="bolder"
     b.style.background="black"
     document.getElementById('abt').style.color="black"
     for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.color = "red";
     }
    
 }
 else
 {
     bd.style.backgroundColor="black"
     b.textContent="Light"
     b.style.color="black"
     b.style.fontWeight="bolder"
     b.style.background="white"
     document.getElementById('abt').style.color="rgb(179, 44, 111)"
     for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.color = "black";
     }
    

 }
}
