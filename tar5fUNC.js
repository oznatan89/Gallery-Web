

var count = 0;
var i = 0;
var lili=0;
var imgs = [];
var ps = [];
var countLi = 1;
function addItem()
{
	var container = document.createElement('div');
	var picture = document.createElement('img');
	var text = document.createElement('text');

	var inputElement1 = document.getElementById('user-input');
	var userInputValue1 = inputElement1.value;
	var inputElement2 = document.getElementById('nameP');
	var userInputValue2 = inputElement2.value;
	if (imgs.length == 10)
	{	
		var t = document.getElementById("demo");
		t.innerHTML="You can not add more than 10 pictures";
		inputElement1.value="";
		inputElement1.placeholder="Waiting to address...";
		inputElement2.value="";
		inputElement2.placeholder="Enter name of Picture...";
		return;
	}
	if (userInputValue1 == "" || userInputValue2 == "" )
		{
			var t = document.getElementById("demo");
			if (userInputValue1 == "" && userInputValue2 == "" )
				t.innerHTML="You forgot write 'address & a pictureName'";
			else if (userInputValue1 == "")
				t.innerHTML="You forgot write 'address'";
			else
				t.innerHTML="You forgot write a 'pictureName'";
			inputElement1.value="";
			inputElement1.placeholder="Waiting to address...";
			inputElement2.value="";
			inputElement2.placeholder="Enter name of Picture...";
			return;
		}
	
	picture.src = userInputValue1;
	var imgSrc=document.getElementById('imi');
	imgSrc.src =userInputValue1;
	imgs.push(userInputValue1);
	inputElement1.value="";
	inputElement1.placeholder="Waiting to address...";	
	
	text.innerHTML ="<br>"+ userInputValue2;
	var t = document.getElementById("demo");
	t.innerHTML=userInputValue2;
	inputElement2.value="";
	inputElement2.placeholder="Enter name of Picture...";
	ps.push(userInputValue2);
	count++;

	var list3 = document.getElementById('id-ul');
	var id = lili++;
	var newLiItem = createLiItemFromText(id);
	list3.appendChild(newLiItem);
}
function createLiItemFromText(text)
{
	var abc = document.createElement('a');
	abc.href = '#';	
	abc.text = countLi++;
	abc.onclick = function (){move(text);}
	abc.id = text;
	var myNewLiElement = document.createElement('li');
	myNewLiElement.appendChild(abc);
	return myNewLiElement;
}
function move(aaa)
{	
	var imgSrc=document.getElementById('imi');
	imgSrc.src =imgs[aaa];
	var t = document.getElementById("demo");
	t.innerHTML=ps[aaa];
	count.value = aaa-1;
}
function nxtPic()
{
	if (imgs.length==0) // IF IMGS NO exist
	{
		var t = document.getElementById("demo");
		t.innerHTML="You do not have a picture..";
		return;
	}
	count++;
	if (count >= imgs.length )
		count = 0;

	var imgSrc=document.getElementById('imi');
	imgSrc.src = imgs[count];

	var t = document.getElementById("demo");
	t.innerHTML=  ps[count];
}
function bckPic()
{
	if (imgs.length==0) // IF IMGS NO exist
	{
		var t = document.getElementById("demo");
		t.innerHTML="You do not have a picture..";
		return;
	}
	count--;
	if (count < 0 )
		count = imgs.length-1;

	var imgSrc=document.getElementById('imi');
	imgSrc.src = imgs[count];

	var t = document.getElementById("demo");
	t.innerHTML=  ps[count];
}
