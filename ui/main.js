console.log('Loaded!');

var element = document.getElementById('text');
element.innerHTML=`
    <div>
        <h1>Home Page</h1>
        <p class="center" margin="auto">Welcome to the Home page. Content is changed by the javascript code.
        </p>
    </div>
`;
element.style.margin="auto";
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