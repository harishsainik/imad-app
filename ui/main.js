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
var leftMargin=0;
function moveRight(){
    legtMargin=leftMargin+5;
    img.style.LeftMargin=leftMargin+"px";
}
img.onclick = function(){
    var interval = serInterval(moveRight,50);
};