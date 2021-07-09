var repeat =0;
var a=[];
var surfaceroughnessarray=[];
var d,p,n,b,q,flag=0;
var tensileloadvalues=[[0,0],[0,0],[0,0],[0,0],[0,0]];
var tensilevalues = [[20,13.95,8.74],[40,18.07,12.86],[60,22.19,16.98],[80,26.31,21.10],[100,30.43,25.22]];
console.log(tensilevalues.length)
for (index = 0; index < tensilevalues.length; index++) {
	tensileloadvalues[index][0] = tensilevalues[index][1]*52;
	tensileloadvalues[index][1] = tensilevalues[index][2]*52;
	tensileloadvalues[index][0] = tensileloadvalues[index][0].toFixed(3);
	tensileloadvalues[index][1] = tensileloadvalues[index][1].toFixed(3);
}
console.log(tensileloadvalues);
p1="";
p2="";
p3="";
p4="";
p5="";
p6="";
p7="";
var i=0;
var x1=1.5;
var x2=0.75;
var t = 6;
var z,sw,v;
var svg= document.getElementById('specimen');
var svgNS = "http://www.w3.org/2000/svg";

function navNext()
{
	console.log('next button pressed');
  for (temp = 0; temp <= 5 ; temp++)
  {
      document.getElementById('canvas'+temp).style.visibility="hidden";
  }
  document.getElementById('step-2').setAttribute('class','step');
  document.getElementById('specimen').setAttribute('class','svg');
  simsubscreennum+=1;
  document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
  document.getElementById('nextButton').style.visibility="hidden";
  magic();
}

var ca;
var questions=["More infill density means </br>more material has to be used.",
				"What value of infill density(in %) <br>is used in most FDM applications?",
				"The base plate will be kept</br> at a temperature(in °C) of "];

var options2=[["True","False"],//True
			  ["50","20","80"],//20
			  ["100","10","30","60"]];//60

function validateAnswer(qn,ans,left,top)
{
	 $("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	console.log('questions[qn] is',questions[qn]);
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);

	for(j=0;j<options2[qn].length;j++)
	{
		console.log('options[qn] is',options2[qn]);
		opt = options2[qn][j];
		console.log('options2[qn][j] is',options2[qn][j]);
		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				if (repeat==1 || repeat==3 || repeat==4) {
					document.getElementById('nextButton').style.visibility="visible";
				}
			},1500);
		});
	}
}


//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
   if (document.getElementById('arrow1').style.visibility=="hidden")
       document.getElementById('arrow1').style.visibility="visible";
   else
       document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction()
{
console.log('mystopfunction is running');
clearInterval(myInt);
document.getElementById('arrow1').style.visibility="hidden";
}
function tabledraw6()
{
	myStopFunction();
	document.getElementById('spec').style.animation = "spec-move 2s 1 forwards ";
    setTimeout(function()
	{
		console.log('timeoutmain is over');
		document.getElementById('can61a').style.visibility="visible";
        document.getElementById('can63a').style.visibility="visible";
		console.log(document.getElementById('can63a'));
        document.getElementById('can65').style.visibility="visible";
        document.getElementById('spec').style.visibility="hidden";
        document.getElementById('can61').style.visibility="hidden";//mn0
        myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:265px; top:380.2px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
		 // Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
		 // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
	},2000)
	$('#green').click(function()//green
	{
        console.log('green is clicked');
		myStopFunction();
		$('#green').hide();
		setTimeout(function()
		{
            console.log('timeout is over');
			document.getElementById('can61').style.visibility="hidden";//mn0
			document.getElementById('can63a').style.visibility="visible";//ez3
			document.getElementById('can61a').style.visibility="visible";//mn1
			setTimeout(function()
			{
	                console.log('$(#can63a).delay(3000).hide(1).promise().done is running');
					document.getElementById('can63a').style.visibility="hidden";//ez3
					document.getElementById('can61a').style.visibility="hidden";
					document.getElementById('can63b').style.visibility="visible";//ez4
					document.getElementById('can61b').style.visibility="visible";//mn2
			},3000);
			setTimeout(function()
			{
				console.log('$(#can63b).delay(3000).hide(1).promise().done is running');
				document.getElementById('can63b').style.visibility="hidden";//ez3
				document.getElementById('can61b').style.visibility="hidden";
				document.getElementById('can63c').style.visibility="visible";//ez5
				document.getElementById('can61c').style.visibility="visible";//mn3
			},6000);
			setTimeout(function()
			{
				console.log('$(#can63c).delay(3000).hide(1).promise().done is running');
				document.getElementById('can63c').style.visibility="hidden";//ez3
				document.getElementById('can61c').style.visibility="hidden";
				document.getElementById('can63d').style.visibility="visible";//ez6
				document.getElementById('can61d').style.visibility="visible";//mn4
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:260px; top:370px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
				 // Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
				 // Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(180deg)";
				$('#red').click(function()
				{
					console.log('red is clicked');
					myStopFunction();
					$('#green').show();
					$('#red').off('click');
					$('#green').off('click');
					document.getElementById('sr1').style.visibility="visible";
					if($("input[name='d']:checked").val()==0){	document.getElementById('sr1').innerHTML="Load at failure of specimen = "+tensileloadvalues[repeat-1][1]+" N";		}
					if($("input[name='d']:checked").val()==1){	document.getElementById('sr1').innerHTML="Load at failure of specimen = "+tensileloadvalues[repeat-1][0]+" N";		}
					setTimeout(function()
    				{
    				    if (repeat==1) {
    				        setTimeout(function()
    				        {
    				            validateAnswer(0,0,"530px","340px");
    				        },500);
    				    }
    				    else if (repeat==3) {
    				        setTimeout(function()
    				        {
    				            validateAnswer(1,1,"530px","340px");
    				        },500);
    				    }
    				    else if (repeat==4){
    				        setTimeout(function()
    				        {
    				            validateAnswer(2,3,"530px","340px");
    				        },500);
    				    }
    				    else {
    				        document.getElementById('nextButton').style.visibility="visible";
    				    }
    				}, 1000);
					});
			},9000);
		document.getElementById('can62').style.transformOrigin="50% 90%";//mndl
		document.getElementById('can62').style.animation = "needle-move 10s 1 forwards ";
        document.getElementById('can62').addEventListener("animationend",()=>{  console.log('mndl is done');   })
		});
	});

}
//-------------------------------------function magic starts here----------------------------------------------------

function magic()
{

	if (simsubscreennum==1)
	{
		refresh2();
		refresh1();
		repeat+=1;
		if(flag==1)
		{
			console.log('flagis1');
		document.getElementById('canvas3').style.visibility="hidden";
		document.getElementById('arrow1').style.visibility='hidden';
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('can6-3').innerHTML="Layer height = " +0.5+" mm";
		document.getElementById('infill').innerHTML= tensilevalues[repeat-1][0];
		document.getElementById('can6-2').innerHTML="Infill density = "+tensilevalues[repeat-1][0] +" %";
		document.getElementById('can6-4').innerHTML="Raster angle =  &#177;"+45+"°" ;
        document.getElementById('can6-5').innerHTML="Build orientation = "+0+"°";
		document.getElementById('trial').style="visibility:visible;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		document.getElementById("done").style.visibility= "hidden";
		document.getElementById("select").style.visibility= "hidden";
		if($("input[name='d']:checked").val()==0){	document.getElementById('can6-1').innerHTML="Material = ABS";		}
		if($("input[name='d']:checked").val()==1){	document.getElementById('can6-1').innerHTML="Material = PLA";		}
		document.getElementById('can6-1').style.visibility="visible";
		document.getElementById('nextButton').style.visibility="visible";
		}
	else{
		console.log('flagis0');
		console.log('value is',tensilevalues);
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('can6-3').innerHTML="Layer height = "+0.5+" mm";
		document.getElementById('infill').innerHTML= tensilevalues[repeat-1][0];
		document.getElementById('can6-2').innerHTML="Infill density = " +tensilevalues[repeat-1][0] +" %";
		document.getElementById('can6-4').innerHTML="Raster angle =  &#177;"+45+"°" ;
        document.getElementById('can6-5').innerHTML="Build orientation = "+0+"°";
		document.getElementById('trial').style="visibility:visible;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;

		document.getElementById("done").onclick=function()
		{
			if($("input[name='d']:checked").val()!=0 && $("input[name='d']:checked").val()!=1 )
			{
				alert("Select material to proceed")
			}
			else
			{
				document.getElementById('nextButton').style.visibility="visible";
			}
		}
	}
}

	else if (simsubscreennum==2)
	{

		refresh1();
		refresh3();
		if (repeat==1) {
            document.getElementById('step-2').style.visibility="visible";
			document.getElementById('base').setAttribute('d',"m15 "+(272.5+(0.3*2.5)+(0.5/2))+"h420v10h-420v-10")
			//console.log(document.getElementById('base').getAttribute('d'));
			document.getElementById('base').style.strokeWidth = 0.5;
			document.getElementById('base').setAttribute('class','draw');
			myInt = setInterval(animatearrow, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; right: 730px; bottom: 147.5px; height: 40px; z-index: 10;";
	   		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
	   		//Code for IE9
	   		document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
	   		// Standard syntax
	   		document.getElementById("arrow1").style.transform = "rotate(180deg)";
			const anim1 = document.getElementById('drawlayer8');
			anim1.addEventListener("animationend",()=>{
				document.getElementById('nextButton').style.visibility="visible";
				//document.getElementById('step-2').setAttribute('class','step2');
				//document.getElementById('specimen').setAttribute('class','svg2');
				})
		}

		if (repeat>1) {
		document.getElementById('note').innerHTML="Hover over the specimen to fade out the top layers and zoom in on the infill layers."
		document.getElementById('note').style.visibility="visible";
		document.getElementById('step-2').setAttribute('class','step2');
		document.getElementById('specimen').setAttribute('class','svg2');
        document.getElementById('step-2').style.visibility="visible";
		myInt = setInterval(animatearrow, 500);
		document.getElementById('arrow1').style="position:absolute; left: 20px; top: 175px; height: 40px; z-index: 500;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('base').setAttribute('d',"m15 "+(272.5+(0.3*2.5)+(0.5/2))+"h420v10h-420v-10")
		//console.log(document.getElementById('base').getAttribute('d'));
		document.getElementById('base').style.strokeWidth = 0.5;
		document.getElementById('base').setAttribute('class','draw');
		document.getElementById('base').style.zIndex=repeat;
		middle1(2,middle2,0);
		for (let index = 2; index < 6; index++)
		{
			document.getElementById("drawlayer"+(index+1)+""+(repeat)+"").setAttribute('class','drawrepeat');
		}
		lastrepeat(6);
		document.getElementById('nextButton').style.visibility="visible";
		document.getElementById('step-2').onmouseover =function ()
		{
			console.log('onmouseover is running');
			myStopFunction();
			document.getElementById('note').style.visibility="hidden";
			$("#lastrepeat"+(7)+""+repeat+"").fadeOut(750);
			$("#lastrepeat"+(8)+""+repeat+"").fadeOut(750);
		};
		}
	}
	else if (simsubscreennum==3)
	{
		refresh1();
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 560px; top: 185px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
		document.getElementById('spec').style.visibility="visible";
		document.getElementById('can61').style.visibility="visible";
		document.getElementById('can62').style.visibility="visible";
		document.getElementById('green').style.visibility="visible";
		document.getElementById('spec').onclick=function(){tabledraw6();}
	}
    else if (simsubscreennum==4){
		refresh1();
		n=0;
		document.getElementById('41').style.visibility="visible";
		document.getElementById('42').style.visibility="visible";
		document.getElementById('form').style.visibility="visible";
		document.getElementById('check').style.visibility="visible";
		document.getElementById('specimennotch').style.visibility="visible";
		if($("input[name='d']:checked").val()==0){	document.getElementById('41').innerHTML="Load at failure of specimen = "+tensileloadvalues[repeat-1][1]+" N";		}
		if($("input[name='d']:checked").val()==1){	document.getElementById('41').innerHTML="Load at failure of specimen =  "+tensileloadvalues[repeat-1][0]+" N";		}
		document.getElementById("check").onclick=function()
		{
			n = n+1;
			if(!document.getElementById("output").value  || !document.getElementById("output").value!=" ")
			{
				alert("Enter the value to proceed ");
			}
			else
			{
				output = document.getElementById("output").value;
				if($("input[name='d']:checked").val()==0){	var tensile = tensilevalues[repeat-1][2];	}
				if($("input[name='d']:checked").val()==1){	var tensile = tensilevalues[repeat-1][1];	}
				if(Math.round(output) == Math.round(tensile))
				{
					document.getElementById("check").style.visibility="hidden";
					document.getElementById("form").style.visibility="hidden";
					document.getElementById("rw").style="color:#32CD32; font-size:22px; position:absolute; left:330px; top:-25px";
					document.getElementById("rw").innerHTML="&#10004;";
					document.getElementById("rw").style.visibility="visible";
					document.getElementById('nextButton').style.visibility="visible";
				}
				else
				{
					document.getElementById("rw").style="color:red; font-size:22px; position:absolute; left:330px; top:-25px";
					document.getElementById("rw").innerHTML="&#10008;";
					document.getElementById("rw").style.visibility="visible";
					if (n==2) {
						document.getElementById("check").style.visibility="hidden";
						document.getElementById("result").style.visibility="visible";
					}
				}
			}
		}
		document.getElementById('form').onclick=function(){
			document.getElementById("formula").style.visibility="visible";
		}
		document.getElementById('result').onclick=function(){
			document.getElementById("check").style.visibility="hidden";
			document.getElementById("result").style.visibility="hidden";
			document.getElementById("rw").style.visibility="hidden";
			document.getElementById("formula").style.visibility="hidden";
			document.getElementById("form").style.visibility="hidden";
			if($("input[name='d']:checked").val()==0){	document.getElementById('output').value = tensilevalues[repeat-1][2];		}
			if($("input[name='d']:checked").val()==1){	document.getElementById('output').value = tensilevalues[repeat-1][1];;		}
			document.getElementById("output").value =  tensilevalues[repeat-1][1];
			document.getElementById("nextButton").style.visibility="visible";
		}
		if(repeat < 5 && repeat>0)
		 {
			flag=1;
			simsubscreennum=0;
		 }
	}
	else if (simsubscreennum==5)
	{
		refresh1();
		document.getElementById('trial').style.visibility='hidden';
		document.getElementById('1-1').innerHTML=tensilevalues[0][0];
		document.getElementById('2-1').innerHTML=tensilevalues[1][0];
		document.getElementById('3-1').innerHTML=tensilevalues[2][0];
		document.getElementById('4-1').innerHTML=tensilevalues[3][0];
		document.getElementById('5-1').innerHTML=tensilevalues[4][0];
		if ($("input[name='d']:checked").val()==1) {
			document.getElementById('1-2').innerHTML=tensilevalues[0][1];
			document.getElementById('2-2').innerHTML=tensilevalues[1][1];
			document.getElementById('3-2').innerHTML=tensilevalues[2][1];
			document.getElementById('4-2').innerHTML=tensilevalues[3][1];
			document.getElementById('5-2').innerHTML=tensilevalues[4][1];

		}
		if($("input[name='d']:checked").val()==0) {
			document.getElementById('1-2').innerHTML=tensilevalues[0][2];
			document.getElementById('2-2').innerHTML=tensilevalues[1][2];
			document.getElementById('3-2').innerHTML=tensilevalues[2][2];
			document.getElementById('4-2').innerHTML=tensilevalues[3][2];
			document.getElementById('5-2').innerHTML=tensilevalues[4][2];
		}

		document.getElementById('inferenceDiv').style.visibility='visible';


	}

}

function refresh1()
{
	if (repeat>1) {
		myStopFunction();
	}
	document.getElementById('arrow1').style.visibility='hidden';
	document.getElementById('base').setAttribute('class','');
    document.getElementById('drawlayer1').style.animation = "";
    document.getElementById('drawlayer2').style.animation = "";
	document.getElementById('drawlayer7').style.animation = "";
	document.getElementById('drawlayer8').style.animation = "";
	document.getElementById('drawlayer7').style.strokeDasharray = 0;
	document.getElementById('drawlayer7').style.strokeDashoffset =0;
	document.getElementById('drawlayer8').style.strokeDasharray = 0;
	document.getElementById('drawlayer8').style.strokeDashoffset = 0;
	document.getElementById('note').style.visibility="hidden";
    document.getElementById('sr1').style.visibility="hidden";
	document.getElementById('can61a').style.visibility="hidden";
	document.getElementById('can65').style.visibility="hidden";
	document.getElementById('can61').style.visibility="hidden";
	document.getElementById('can6-1').style.visibility="hidden";
	document.getElementById('green').style.visibility="hidden";
	document.getElementById('41').style.visibility="hidden"
	document.getElementById('42').style.visibility="hidden"
	document.getElementById('form').style.visibility="hidden";
	document.getElementById('check').style.visibility="hidden";
	document.getElementById('specimennotch').style.visibility="hidden";
	document.getElementById('can63d').style.visibility="hidden";
	document.getElementById('can61d').style.visibility="hidden";
	document.getElementById('can62').style.visibility="hidden";
	document.getElementById('can62').style.animation = "";
	document.getElementById("rw").style.visibility="hidden";
	document.getElementById("formula").style.visibility="hidden";
	document.getElementById('spec').style.animation="";
	document.getElementById('can62').style.animation="";
	document.getElementById("step-2").style.visibility="hidden";
}

function refresh2()
{
	document.getElementById("can6-2").innerHTML = "";
	document.getElementById('output').value="";
}
function refresh3()
{
	if (repeat>1)
	{
		for (let index = 2; index < 6; index++)
		{
			document.getElementById("drawlayer"+(index+1)+""+(repeat-1)+"").style.visibility="hidden";
			if (repeat>2 && index<2) {
				document.getElementById('lastrepeat'+(index+7)+''+(repeat-1)+'').style.visibility="hidden";
			}
		}
	}
}

function checkInference()
{
	document.getElementById("ans").style.visibility="visible";
	if($("input[name='inf']:checked").val()==1)
	{
		document.getElementById("ans").innerHTML="Correct answer!";
	}
	else
	{
		document.getElementById("ans").innerHTML="Wrong! Ultimate tensile strength increases with increase in infill density";
	}

	setTimeout(function()
	{
		document.getElementById("inference").style.visibility="hidden";
		document.getElementById("infAns").innerHTML="Increased infill density means more material is present in the specimen. This directly leads to increase in strength.";
		$("#infAns").fadeIn(750);
	},1000);
}
