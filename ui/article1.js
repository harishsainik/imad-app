var submit = document.getElementById('submit-btn');

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
            //fetch list and render it
            var comments=req.responseText;
            comments=JSON.parse(comments);
            var list='';
            for(var i=0;i<comments.length;i++){
                list+='<li>' + comments[i].comment +'</li>';
            }
            var ui=document.getElementById('commentlist');
            ui.innerHTML = list; 
          }
      }
      //Request not done yet
    };
    
    //fetch name
    var input = document.getElementById('comment');
    var comment = input.value;
    //Make the request
    req.open('GET','http://harishsainilajak.imad.hasura-app.io/submitcomment1?comment='+comment,true);
    req.send(null);
    
};