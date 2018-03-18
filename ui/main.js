console.log('Loaded!');

img = document.getElementById("madi");
var marginLeft=0;
var sign=1;
function moveRight(){
    marginLeft=marginLeft+(sign)*5;
    if(marginLeft===1000||marginLeft===0)
    sign*=-1;
    img.style.marginLeft=marginLeft+"px";
}
img.onclick = function(){
    var interval = setInterval(moveRight,50);
};