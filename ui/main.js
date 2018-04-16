//For login
//Submit username and password
var submit = document.getElementById('submit_button');

submit.onclick = function(){
     //Create the request object
    var req = new XMLHttpRequest();
    
    //define action to be taken on state change of request
    req.onreadystatechange = function(){
      if(req.readyState === XMLHttpRequest.DONE)
      {
          //if request if done successfully take action
          if(req.status === 200)
          {
              console.log("user logged in");
              alert("login succeessful");
          }
          else if(req.status ===403)
          {
             alert("invalid username or password");
          }
          else if(req.status === 500){
              alert("Internal server error");
          }
          
      }
      //Request not done yet
    };
    
    //fetch username and password
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    //Make the request
    req.open('POST','http://harishsainilajak.imad.hasura-app.io/login',true);
    req.setRequestHeader('Content-Type','application/json');
    req.send(JSON.stringify({username:username,password:password}));
    
};

//For Registration
//Submit username and password
var submit = document.getElementById('register_button');

submit.onclick = function(){
     //Create the request object
    var req = new XMLHttpRequest();
    
    //define action to be taken on state change of request
    req.onreadystatechange = function(){
      if(req.readyState === XMLHttpRequest.DONE)
      {
          //if request if done successfully take action
          if(req.status === 200)
          {
              console.log("user created");
              alert("Sign up successful");
              submit.innerHtml="Registered";
          }
          else if(req.status === 500){
              alert("Internal server error");
          }
          
      }
      //Request not done yet
    };
    
    //fetch username and password
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    //Make the request
    req.open('POST','http://harishsainilajak.imad.hasura-app.io/create-user',true);
    req.setRequestHeader('Content-Type','application/json');
    req.send(JSON.stringify({username:username,password:password}));
    
};