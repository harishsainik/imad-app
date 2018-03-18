var button = document.getElementById('button');

var counter=0;
button.onclick= function(){
    //Make request to counter
    
    //fetch result
    
    //display in the span
    counter=counter+1;
    var span= document.getElementById('count');
    span.innerHTML = counter.toString();
}