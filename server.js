var express = require('express');
var morgan = require('morgan');
var path = require('path');

var Pool = require('pg').Pool;

var config = {
  user:'harishsainilajak',
  database:'harishsainilajak',
  host:'db.imad.hasura-app.io',
  port:'5432',
  password:process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));
var pool=new Pool(config);



function createTemplate(data){
	var title=data.title;
	var heading=data.heading;
	var content=data.content;
	var comment=data.comment;
	var script=data.script;
	var htmlTemplate =`
		<!DOCTYPE html>
		<html>
		<head>
			<title>${title}</title>
			
			<link href="/ui/style.css" rel="stylesheet"/>
		</head>
		<body>
			
			<div class="container">
			    <a href="/"> Home </a>
			    <h1>${heading}</h1>
				${content}
			</div>
			<div class="footer">
			${comment}
			</div>

	        <script type="text/javascript" src=${script}>
	        </script>
		</body>
		</html>
		`;
		return htmlTemplate
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});



var counter=0;
app.get('/counter',function(req,res){
   counter=counter+1;
   res.send(counter.toString());
});

var names=[];
app.get('/submitname',function(req,res){
    var name=req.query.name;
    names.push(name);//add name to list;
    //send list using JSON
    res.send(JSON.stringify(names));
});

app.get('/submitcomment1',function(req,res){
    var comment=req.query.comment;// we can also use 'insert into comment1 ("comment") values ($1)' in the following query
    pool.query("insert into comment1 (\"comment\") values ($1)",[comment],function(err){
        if(err){
            res.status(500).send(err.toString());
        }
    });
        console.log("coming here");
      pool.query("SELECT * from comment1",function(err,result){
      if(err){
          res.status(500).send(err.toString());
      }
      else{
          if(result.rows.length === 0){
              res.status(404).send("item not found");
          }
          else{
            var articleData=result.rows[0];
            res.send(JSON.stringify(result.rows));
          }
      }
  });
});


app.get('/submitcomment2',function(req,res){
    var comment=req.query.comment;// we can also use 'insert into comment1 ("comment") values ($1)' in the following query
    pool.query("insert into comment2 (\"comment\") values ($1)",[comment],function(err){
        if(err){
            res.status(500).send(err.toString());
        }
    });
        console.log("coming here");
      pool.query("SELECT * from comment2",function(err,result){
      if(err){
          res.status(500).send(err.toString());
      }
      else{
          if(result.rows.length === 0){
              res.status(404).send("item not found");
          }
          else{
            var articleData=result.rows[0];
            res.send(JSON.stringify(result.rows));
          }
      }
  });
});


app.get('/submitcomment3',function(req,res){
    var comment=req.query.comment;// we can also use 'insert into comment1 ("comment") values ($1)' in the following query
    pool.query("insert into comment3 (\"comment\") values ($1)",[comment],function(err){
        if(err){
            res.status(500).send(err.toString());
        }
    });
        console.log("coming here");
      pool.query("SELECT * from comment3",function(err,result){
      if(err){
          res.status(500).send(err.toString());
      }
      else{
          if(result.rows.length === 0){
              res.status(404).send("item not found");
          }
          else{
            var articleData=result.rows[0];
            res.send(JSON.stringify(result.rows));
          }
      }
  });
});

app.get('/ui/main.js',function(req,res){
   res.sendFile(path.join(__dirname,'ui','main.js')); 
});

app.get('/ui/article1.js',function(req,res){
   res.sendFile(path.join(__dirname,'ui','article1.js')); 
});
app.get('/ui/article2.js',function(req,res){
   res.sendFile(path.join(__dirname,'ui','article2.js')); 
});
app.get('/ui/article3.js',function(req,res){
   res.sendFile(path.join(__dirname,'ui','article3.js')); 
});

app.get('/articles/:articleName',function(req,res){
  pool.query("SELECT * from article where title=$1",[req.params.articleName],function(err,result){
      if(err){
          res.status(500).send(err.toString());
      }
      else{
          if(result.rows.length === 0){
              res.status(404).send("item not found");
          }
          else{
            var articleData=result.rows[0];
            res.send(createTemplate(articleData));
          }
      }
  });	
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
