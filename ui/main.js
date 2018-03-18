var button = document.getElementById('counter');

var counter=0;
button.onclick= function(){
    //Create the request object
    var req = new XMLHttpRequest();
    
    //define action to be taken on state change of request
    req.onreadystatechange = function(){
      if(req.readyState === XMLHttpRequest.DONE)
      {
          //if request if done successfully take action
          if(req.status === 200)
          {
              var counter=req.responseText;
              var span= document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
      //Request not done yet
    };
    
    
    //Make the request
    req.open('GET','http://harishsainilajak.imad.hasura-app.io/counter',true);
    req.send(null);
};