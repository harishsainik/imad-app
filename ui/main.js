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
var lm=0;
function moveRight(){
    lm=lm+5;
    img.style.marginLeft=lm+"px";
}
img.onclick = function(){
    var interval = setInterval(moveRight,50);
};