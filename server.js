var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
	'article-one':{
	title:'Article One',
	heading:'Article One',
	content:`<p>
			I want to be disability for you.
			Make new signs for you.
			They are saying things about us

			online in their underwear.
			The listserv is blowing up.
			Ableist verse, ableist verse

			and I am talking to you.
			I am a green circle for you
			and there you go again

			into my cover letters.
			Pinned your last dispatch
			to my Outlook so every day

			starts with you. Got your text.
			Got your chat. Got your tweet.
			Got you all over me.

			I want to be disability for you
			and capital crawl for you
			and accommodate you. 
		</p>`
},
	'article-two':{
	title:'Article Two',
	heading:'Article Two',
	content:`<p>The first thing I learned was to look wide
			at the darkness

			and not want anything. Head say, Just look 
			at the darkness

			and tell me what you see. I'd say, I see stars or
			Just the stars, Dad.

			And he'd say, Don't call them that yet. What do you see?
			Just the stars, Dad.

			But then I'd be quiet and let my eyes go and look wide
			at the darkness.

			It was like a dome. I think it frightened me to stare
			at the darkness.

			I see light. I see a million little lights. And he'd say
			They aren't all stars.

			Some were planets and some were planes and I'd say, Yeah,
			they aren't all stars.

			But not really believe it. But say it so not to feel stupid out there
			in the darkness.
		</p>`
},
	'article-three':{
	title:'Article Three',
	heading:'Article Three',
	content:`<p>
			'Save your hands, 'my mother says,
			seeing me untwist a jar's tight cap'

			just the way she used to tell me
			not to let boys fool around, or feel

			my breasts: Ikeep them fresh
			for marriage,' as if they were a pair

			of actual fruit. I scoffed
			to think they could bruise, scuff,

			soften, rot, wither. I look down now
			at my knuckly thumbs, my index finger

			permanently askew in the same classic
			crook as hers, called a swan's neck,

			as if snapped, it's that pronounced.
			Even as I type, wondering how long

			I'll be able to' each joint in my left hand
			needing to be hoisted, prodded, into place,

			one knuckle like a clock’s dial clicking
			as it’s turned to open, bend or unbend.

			I balk at the idea that we can overuse
			ourselves, must parcel out and pace

			our energies so as not to run out of any
			necessary component while still alive—

			the definition of “necessary” necessarily
			suffering change over time. 

			The only certainty is uncertainty, I thought
			I knew, so ignored whatever she said

			about boys and sex: her version of
			a story never mine. It made me laugh,

			the way she made up traditions, that we
			didn’t kiss boys until a certain age, we

			didn’t fool around. What we? What part of me
			was she? No part I could put my finger on.

			How odd, then, one day, to find her
			half-napping in her room, talking first

			to herself and then to me, about a boy
			she used to know, her friend’s brother,

			who she kissed, she said, just because 
			he wanted her to. “Now why would I do that,”

			she mused, distraught anew and freshly
			stung by the self-betrayal. So much 

			I still want to do with my hands'
			type, play, cook, caress, swipe, re-trace.
		</p>`
}
}


function createTemplate(data){
	var title=data.title;
	var heading=data.heading;
	var content=data.content;
	var htmlTemplate =`
		<!DOCTYPE html>
		<html>
		<head>
			<title>${title}</title>
			
			<link href="ui/style.css" rel="stylesheet"/>
		</head>
		<body>
			
			<div class="container">
			    <a href="/"> Home </a>
			    <h1>${heading}</h1>
				${content}
			</div>
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
app.get('/submitname/:name',function(req,res){
    var name=req.params.name;
    names.push(name);//add name to list;
    //send list using JSON
    res.send(JSON.stringify(names));
});

app.get('/ui/main.js',function(req,res){
   res.sendFile(path.join(__dirname,'ui','main.js')); 
});


app.get('/:articleName',function(req,res){
  var articleName=req.params.articleName;	
  res.send(createTemplate(articles[articleName]));
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
