var scores,current,activeplayer=0;

var x;
function init(){

scores=[0,0];
current=0;
roundscore=0;

}
init();

document.querySelector('#r').addEventListener('click',function(){
x=Math.floor(Math.random()*6)+1;
document.querySelector('.dice').style.display = 'block';
document.querySelector('.dice').src='dice'+x+'.jpg';
console.log(x);
if(x!==1)
{
roundscore+=x;
document.getElementById('current-'+activeplayer).innerHTML=roundscore;
document.getElementById('total'+activeplayer).innerHTML=scores[activeplayer];
}else
{
nxt();
roundscore=0;
}
});
document.querySelector('#h').addEventListener('click',function(){
	scores[activeplayer]+=roundscore;
	document.getElementById('total'+activeplayer).innerHTML=scores[activeplayer];
	roundscore=0;
	document.getElementById('current-'+activeplayer).innerHTML=roundscore;
	if(scores[activeplayer]>=20){
		document.querySelector('#name'+ activeplayer).innerHTML='<em>winner</em>';
		}
	nxt();
	

	
	
});
function nxt(){
	if(activeplayer==1){
		activeplayer=0;

}else
{
	activeplayer=1;
}
	document.getElementById('current-0').innerHTML=0;
	document.getElementById('current-1').innerHTML=0;
	document.querySelector('.player1').classList.toggle('active');
	document.querySelector('.player2').classList.toggle('active');
	

}

document.querySelector('#n').addEventListener('click',function(){
	init();
	document.getElementById('name0').textContent = "Player1";
	document.getElementById('name1').textContent = "Player2";
	document.getElementById('total0').textcontent=0;
	document.getElementById('total1').textcontent=0;
	document.getElementById('current-0').textcontent=0;
	document.getElementById('current-1').textcontent=0;

});

	
