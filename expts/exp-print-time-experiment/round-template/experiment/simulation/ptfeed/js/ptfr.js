
//on click of next button
var repeat =0;
var a=[];
var surfaceroughnessarray=[];
var d,p,n=0,b,q,flag=0;
var feedvalues = [[20,50.6],[30,27.9],[40,20.2]];
var timearray = [];
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
var z,sw,v;
var svg= document.getElementById('specimen');
var svgNS = "http://www.w3.org/2000/svg";

function navNext()
{
	console.log('next button pressed');
  for (temp = 0; temp <= 4 ; temp++)
  {
      document.getElementById('canvas'+temp).style.visibility="hidden";
  }

 simsubscreennum+=1;
 document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
 document.getElementById('nextButton').style.visibility="hidden";
 magic();
}

var ca;
var questions=["More feed rate combined with <br>lesser printing speed can lead to ",
				"What is likely to occur at<br>very high feed rate?",
				"The exrtruder head will be </br> at a temperature(in °C) of "];

var options2=[["Curling","Dimensional inaccuracies","Stringing","Warping"],//Dimensional inaccuracies
			  ["Printer jam","Jerk","Overheating"],//Printer jam
			  ["100","500","350","200"]];//200

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
				if (repeat==1 || repeat==2 || repeat==3) {
					document.getElementById('nextButton').style.visibility="visible";
				}
			},1500);
		});
	}
}
for ( i = 0; i < 15; i=i+2) {
    if (((i+2)*2.75)<42.5) {
        p1 += "h2.75 l"+(i+1)*-2.75+" "+(i+1)*-2.75+ "v-2.75 l"+(i+2)*2.75+" "+(i+2)*2.75+"";
        p4 += "h2.75 l"+(i+1)*-2.75+" "+(i+1)*2.75+ "v2.75 l"+(i+2)*2.75+" "+(i+2)*-2.75+"";
    } else {
        p1 += "h2.75 l"+(i+1)*-2.75+" "+(i+1)*-2.75+"v-1.25";
        p4 += "h2.75 l"+(i+1)*-2.75+" "+(i+1)*2.75+"v1.25";
    }
}

for (j = 0; j < 64; j++) {
    if (j<63) {
        p2+="h"+x1+" l42.5 42.5 h2.75 l-42.5 -42.5";
        p5+="h"+x1+" l42.5 -42.5 h2.75 l-42.5 42.5";
        x1 =2.75;
    } else {
        p2+="h2.75 l42.5 42.5h2";
        p5+="h2.75 l42.5 -42.5h2";
    }
}

for ( k = 0; k < 16; k=k+2) {
    if (k<15) {
        p3 += "v-"+x2+" l"+(-(41.75-k*2.75))+" "+(-(41.75-k*2.75))+"h2.75 l"+(41.75-(k+1)*2.75)+" "+(41.75-(k+1)*2.75)+" ";
        p6 += "v"+x2+" l"+(-(41.75-k*2.75))+" "+(41.75-k*2.75)+"h2.75 l"+(41.75-(k+1)*2.75)+" "+(-(41.75-(k+1)*2.75))+" ";
        x2= 2.75;
    } else {
        p3 += "v-2.75l"+(-(41.75-k*2.75))+" "+(-(41.75-k*2.75))+" ";
        p6 += "v2.75l"+(-(41.75-k*2.75))+" "+(41.75-k*2.75)+" ";

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
			hr = 0;
			min = 0;
			sec = 0;
		console.log('flagis1');
		document.getElementById('canvas3').style.visibility="hidden";
		document.getElementById('arrow1').style.visibility='hidden';
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('can6-2').innerHTML="Feed Rate = " +feedvalues[repeat-1][0] +" mm/s";
		document.getElementById('feed').innerHTML= feedvalues[repeat-1][0];
		document.getElementById('can6-4').innerHTML="Infill density = " +100  +" %";
		document.getElementById('can6-3').innerHTML="Layer height  = "+0.3  +" mm" ;
		document.getElementById('can6-5').innerHTML="Build orientation = "+0+"°" ;
		document.getElementById('trial').style="visibility:visible;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		document.getElementById('nextButton').style.visibility="visible";
		}
	else{
		console.log('flagis0');
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('can6-2').innerHTML="Feed Rate  = " +feedvalues[repeat-1][0] +" mm/s";
		document.getElementById('feed').innerHTML= feedvalues[repeat-1][0];
		document.getElementById('can6-4').innerHTML="Infill density = " +100  +" %";
		document.getElementById('can6-3').innerHTML="Layer height  = "+0.3  +" mm" ;
		document.getElementById('can6-5').innerHTML="Build orientation = "+0+"°" ;
		document.getElementById('trial').style="visibility:visible;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		document.getElementById('nextButton').style.visibility="visible";
	}
}

	else if (simsubscreennum==2)
	{
		refresh1();
		refresh3();
		if (repeat>1) {
			document.getElementById('stopwatch0').style.visibility="hidden";
			document.getElementById('stopwatch00').style.visibility="visible";
			myInt = setInterval(animatearrow, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 430px; top: 245px; height: 40px; z-index: 10;";
	   		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)";
	   		//Code for IE9
	   		document.getElementById("arrow1").style.msTransform = "rotate(360deg)";
			// Standard syntax
	   		document.getElementById("arrow1").style.transform = "rotate(360deg)";
        	document.getElementById("stopwatch00").onclick=function()
			{
            	myStopFunction();
            	resetTimer();
            	setTimeout(function()
				{
                	document.getElementById("stopwatch00").style.visibility="hidden";
                	document.getElementById("stopwatch3").style.visibility="visible";
                	setTimeout(function()
					{
                    	document.getElementById("stopwatch3").style.visibility="hidden";
                    	document.getElementById("stopwatch0").style.visibility="visible";
					},100);
					myInt = setInterval(animatearrow, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; right: 730px; bottom: 147.5px; height: 40px; z-index: 10;";
	   				document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
	   				//Code for IE9
	   				document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
					// Standard syntax
		   			document.getElementById("arrow1").style.transform = "rotate(180deg)";
            	},100);}
		}else{
			document.getElementById('stopwatch0').style.visibility="visible";
			myInt = setInterval(animatearrow, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; right: 730px; bottom: 147.5px; height: 40px; z-index: 10;";
	   		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
	   		//Code for IE9
	   		document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
			// Standard syntax
		   document.getElementById("arrow1").style.transform = "rotate(180deg)";
		}
		document.getElementById('step-2').style.visibility="visible";
		document.getElementById('specimen').style.visibility='visible';
		document.getElementById('base').setAttribute('d',"m15 "+(272.5+(0.3*2.5)+(0.5/2))+"h420v10h-420v-10")
		document.getElementById('img0').style.visibility="visible";
		//console.log(document.getElementById('base'));
		document.getElementById('base').style.strokeWidth = 0.5;
		document.getElementById('base').setAttribute('class','draw');
		document.getElementById('base').style.zIndex=repeat;
		document.getElementById('base').style.visibility="visible";
		document.getElementById('dispres').style.visibility="visible";
	}

	else if (simsubscreennum==3)
	{
		refresh1();
		 n=0;
		document.getElementById('base').style.visibility="hidden";
		document.getElementById('stopwatch0').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('table1').style.visibility="visible";
		document.getElementById('table1').style.top= 150;
		document.getElementById('0-1').innerHTML = feedvalues[repeat-1][0];
		document.getElementById('dispres2').style.visibility="visible";
		document.getElementById('dispres2').innerHTML= document.getElementById('dispres').innerHTML;
		document.getElementById("check3").style.visibility="visible";
		document.getElementById("hint").style.visibility="visible";
		var time1  = ((parseInt(hr)*3600+parseInt(min)*60+parseInt(sec))/60);
		time = Math.round(time1 * 100) / 100;
		console.log("time is =", time)
		timearray.push(time);
		console.log("timearray is =", timearray)
		document.getElementById("check3").onclick=function()
		{
      		n=n+1;
			if(!document.getElementById("timeval").value  || !document.getElementById("timeval").value!=" ")
			{
				alert("Enter the value to proceed ");
			}
			else
			{
				timeval = document.getElementById("timeval").value;
				if(Math.round(timeval) == Math.round(time))
				{
					document.getElementById("check3").style.visibility="hidden";
          document.getElementById("hint").style.visibility="hidden";
					document.getElementById("rw").style="color:#32CD32; font-size:22px; position:absolute; left:510px; top:122px;";
					document.getElementById("rw").innerHTML="&#10004;";
					document.getElementById("rw").style.visibility="visible";
					document.getElementById('nextButton').style.visibility="visible";
				}
				else
				{
					document.getElementById("rw").style="color:red; font-size:22px; position:absolute; left:510px; top:122px;";
					document.getElementById("rw").innerHTML="&#10008;";
					document.getElementById("rw").style.visibility="visible";
          if (n==2) {
						document.getElementById("check3").style.visibility="hidden";
						document.getElementById("result").style.visibility="visible";
					}
				}
			}
		}
		document.getElementById('hint').onclick=function(){
			document.getElementById("formula").style.visibility="visible";
		}
    document.getElementById('result').onclick=function(){
			document.getElementById("check3").style.visibility="hidden";
			document.getElementById("result").style.visibility="hidden";
			document.getElementById("rw").style.visibility="hidden";
			document.getElementById("formula").style.visibility="hidden";
			document.getElementById("hint").style.visibility="hidden";
			document.getElementById("timeval").value = Math.round(((parseInt(hr)*3600+parseInt(min)*60+parseInt(sec))/60)* 100) / 100;;
			document.getElementById("nextButton").style.visibility="visible";
		}
		if(repeat < 3 && repeat>0)
		 {
			 flag=1;
			 simsubscreennum=0;
		 }
	}
	else if (simsubscreennum==4)
	{
		refresh1();
		document.getElementById('dispres').style.visibility="hidden";
		document.getElementById('trial').style.visibility='hidden';
		document.getElementById('table2').style.visibility="visible";
		document.getElementById('1-1').innerHTML=feedvalues[0][0];
		document.getElementById('2-1').innerHTML=feedvalues[1][0];
		document.getElementById('3-1').innerHTML=feedvalues[2][0];
		document.getElementById('1-2').innerHTML=timearray[0];
		document.getElementById('2-2').innerHTML=timearray[1];
		document.getElementById('3-2').innerHTML=timearray[2];
		document.getElementById('inferenceDiv').style.visibility='visible';
	}
}
function refresh1()
{
	if (repeat>1) {
		myStopFunction();
		document.getElementById('drawlayer1'+(repeat-1)+'').style.animation = "";
		document.getElementById('drawlayer2'+(repeat-1)+'').style.animation = "";
		for (let z = 2; z <15; z++) {
			document.getElementById('drawlayer'+(z-1)+(repeat-1)+'').style.animation = "";
			//console.log(z-1);
			document.getElementById('img'+(z-1)+'').style.animation = "";
		}
		document.getElementById('drawlayer3'+(repeat-1)+'').style.animation = "";
		document.getElementById('drawlayer4'+(repeat-1)+'').style.animation = "";
		document.getElementById('base').setAttribute('class','');
	}
	document.getElementById('step-2').style.visibility="hidden";
	document.getElementById('specimen').style.visibility="hidden";
	document.getElementById('table1').style.visibility="hidden";
	document.getElementById('dispres').style.visibility="hidden";
	document.getElementById('dispres2').style.visibility="hidden";
	document.getElementById("rw").style.visibility="hidden";
	document.getElementById("formula").style.visibility="hidden";
}

function refresh2()
{
	document.getElementById('dispres').style.visibility='hidden';
	document.getElementById("can6-2").innerHTML = "";
	document.getElementById('timeval').value="";
}
function refresh3()
{
	if (repeat>1)
	{
		for (let index = 0; index < 13; index++)
		{
			document.getElementById("layer"+(index+1)+""+(repeat-1)+"").style.visibility="hidden";
			//console.log("drawlayer"+(index+1)+""+(repeat-1)+"");
			document.getElementById("drawlayer"+(index+1)+""+(repeat-1)+"").style.visibility="hidden";
		}
	}
}

function checkInference()
{
	document.getElementById("ans").style.visibility="visible";
	if($("input[name='inf']:checked").val()==2)
	{
		document.getElementById("ans").innerHTML="Correct answer!";
	}
	else
	{
		document.getElementById("ans").innerHTML="Wrong! Print time decreases with increase in feed rate.";
	}
	setTimeout(function()
	{
		document.getElementById("inference").style.visibility="hidden";
		document.getElementById("infAns").innerHTML="With increase in feed rate, more material is deposited per unit time. This leads to decrease in printing time required.";
		$("#infAns").fadeIn(750);
	},1500);
}
