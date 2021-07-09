var repeat =0;
var a=[];
var surfaceroughnessarray=[];
var d,p,n,b,q,flag=0;
var cuttingspeedvalues = [[1000,1.01],[2000,1.46],[3000,1.92],[4000,2.38],[5000,2.83]];
console.log('cuttingspeedvalues=',cuttingspeedvalues);
p1="";
p2="";
p3="";
p4="";
p5="";
p6="";
p7="";
var wirepath="";
var i=0;
var x1=1.5;
var x2=0.75;
var t = 7.5;
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
//   document.getElementById('step-2').setAttribute('class','step');
//   document.getElementById('specimen').setAttribute('class','svg');
 simsubscreennum+=1;
 document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
 document.getElementById('nextButton').style.visibility="hidden";
 magic();
}

var ca;
var questions=["Cutting speed is ___________ to material thickness.",
				"The loss of energy at cut zone <br> increases with increasing cutting speed",
				"Drastic reduction in cutting speed leads to "];

var options2=[["Inversely proportional","Directly proportional","Not related"],//Inversely proportional
			  ["True","False"],//False
			  ["Wastage of energy","Lesser efficiency","All of the above"]];//All of the above

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
		document.getElementById('probe1').style.visibility='hidden';
		document.getElementById('spec').style.visibility='hidden';
		document.getElementById('arrow1').style.visibility='hidden';
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('can6-3').innerHTML="Laser power = " +1.5+" KW";
		document.getElementById('cuttingspeed').innerHTML= cuttingspeedvalues[repeat-1][0];
		document.getElementById('can6-1').innerHTML="Cutting speed = "+cuttingspeedvalues[repeat-1][0] +" mm/min";
		document.getElementById('can6-4').innerHTML="Assist gas pressure  = "+12.5  +" bar" ;
		document.getElementById('trial').style="visibility:visible;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		document.getElementById('can6-1').style.visibility="visible";
		document.getElementById('nextButton').style.visibility="visible";
		}
	else{
		console.log('flagis0');
		console.log('value is',cuttingspeedvalues);
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('can6-3').innerHTML="Laser power = "+1.5+" KW";
		document.getElementById('cuttingspeed').innerHTML= cuttingspeedvalues[repeat-1][0];
		document.getElementById('can6-1').innerHTML="Cutting speed = " +cuttingspeedvalues[repeat-1][0] +" mm/min";
		document.getElementById('can6-1').style.visibility="visible";
		document.getElementById('can6-4').innerHTML="Assist gas pressure = "+12.5  +" bar" ;
		document.getElementById('trial').style="visibility:visible;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
        document.getElementById('nextButton').style.visibility="visible";
		}
	}
    else if(simsubscreennum==2)
    {
		refresh2();
		refresh1();
 		document.getElementById("machineclose").style.visibility="visible";
		 document.getElementById("sheet1").style.visibility="visible";
        myInt = setInterval(animatearrow, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 572px; top: 316px; height: 40px; width:60px; z-index: 10;";//for machine opening
	   	document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
	   	//Code for IE9
	   	document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
	   	// Standard syntax
	   	document.getElementById("arrow1").style.transform = "rotate(0deg)";
        document.getElementById("machineclose").onclick=function()
			{
            	myStopFunction();
                document.getElementById("machineclose").style.visibility="hidden";
                document.getElementById("machineopen").style.visibility="visible";
                document.getElementById("sheet1").style.visibility="hidden";
                document.getElementById("sheet2").style.visibility="visible";
                myInt = setInterval(animatearrow, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 10px; top: 270px; height: 40px; z-index: 10;";//for material inserting
	   			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
	   			//Code for IE9
	   			document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
				// Standard syntax
		   		document.getElementById("arrow1").style.transform = "rotate(180deg)";
                document.getElementById("sheet2").onclick=function()
			    {
                    myStopFunction();
                    document.getElementById("machineopen").style.visibility="hidden";
                    document.getElementById("machineopensheet").style.visibility="visible";
                    document.getElementById("sheet2").style.visibility="hidden";
				    myInt = setInterval(animatearrow, 500);
    				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 612px; top: 132px; height: 40px; z-index: 10;";//for material inserting
    				document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
    				//Code for IE9
   	    			document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
	    			// Standard syntax
	    			document.getElementById("arrow1").style.transform = "rotate(0deg)";
                    document.getElementById("machineopensheet").onclick=function()
                    {
                       myStopFunction();
                       document.getElementById("machineopensheet").style.visibility="hidden";
                       document.getElementById("machineclosesheet").style.visibility="visible";
					   if (repeat==1) {
						setTimeout(function()
							{
								validateAnswer(0,0,"50px","130px");
							},500);
						}
						else if (repeat==3) {
						setTimeout(function()
						{
							validateAnswer(1,1,"50px","130px");
						},500);
						}
						else if (repeat==4){
						setTimeout(function()
						{
							validateAnswer(2,2,"50px","130px");
						},500);
						}
						else {
						document.getElementById('nextButton').style.visibility="visible";
						}
                    }
            }
            }


    }
	else if (simsubscreennum==3)
	{

		refresh1();
		refresh3();
		document.getElementById("shape").style.visibility = "visible";
		document.getElementById("specimen").style.visibility = "visible";
		document.getElementById("specimen2").style.visibility = "visible";
		document.getElementById("step-2").style.visibility = "visible";
		document.getElementById("image").style.display = "block";
		document.getElementById('xaxis1').style.visibility='visible';
		document.getElementById('lasertop1').style.visibility='visible';
		document.getElementById('lasernozzle1').style.visibility='visible';
		document.getElementById('laser').style.visibility='visible';
		document.getElementById('laserfront').style.visibility='visible';
		document.getElementById('laserhorizontalfront1').style.visibility='visible';
		document.getElementById('laservertical1').style.visibility='visible';
		console.log("xaxis1 is",document.getElementById("xaxis1"))
		console.log("lasertop1 is",document.getElementById("lasertop1"))
		console.log("lasernozzle1 is",document.getElementById("lasernozzle1"))
	}
	else if (simsubscreennum==4)
	{
		refresh1();
		refresh3();
		document.getElementById('nextButton').style.visibility="hidden";
		var r = document.querySelector(':root');
		myInt = setInterval(animatearrow, 500);
		document.getElementById('arrow1').style="position:absolute;left: 520px; top: 314px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
		//Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		var shape = document.getElementById("shape").value;
		console.log("shape value is",shape)
		if(shape==0)
		{
			var length = parseFloat(document.getElementById("rectlength").value);
            var breadth = parseFloat(document.getElementById("rectbreadth").value);
			document.getElementById("spec").setAttribute('d',"m"+(195-(length/2))+" "+(310-(breadth/2))+"h"+length+" v"+breadth+""+"h-"+length+" v-"+breadth+"");
		}
		else if(shape==1)
		{
			var side =  parseFloat(document.getElementById("squareside").value);
			document.getElementById("spec").setAttribute('d',"m"+(195-(side/2))+" "+(310-(side/2))+"h"+side+" v"+side+""+"h-"+side+" v-"+side+"");
		}
		document.getElementById('device').style.visibility='visible';
		document.getElementById("spec").style.visibility="visible";
		document.getElementById("spec").style.stroke = "black";
		document.getElementById('probe1').style.visibility='visible';
		document.getElementById('wire1').style.visibility='visible';

		console.log(document.getElementById("spec"))

		document.getElementById("probe1").onclick=function()
		{
			myStopFunction();
			document.getElementById("probe1").style.visibility="hidden";
			document.getElementById("wire1").style.visibility="hidden";
			document.getElementById('wire2').style.visibility='visible';

			if(shape==0)
			{

				var probeleft = parseFloat(195+(length/4));
				var proberight = parseFloat(195-(length/4));
				var probetop = parseFloat(310-(breadth/2)-42.4);
				console.log("proberight value is",proberight)
			}
			else if(shape==1)
			{
				var probeleft = parseFloat(195+(side/4));
				var proberight = parseFloat(195-(side/4));
				var probetop = parseFloat(310-(side/2)-42.4);
			}
			document.getElementById("probe").style.left = ""+probeleft+"px";
			document.getElementById("probe").style.top  = ""+probetop+"px";
			document.getElementById("probebase").style.left = ""+(probeleft+60)+"px";
			document.getElementById("probebase").style.top  = ""+(probetop-7.5)+"px";

			document.getElementById("probe").style.visibility="visible";
			document.getElementById("probebase").style.visibility="visible";

			var wirepath = "C655 300 "+((probeleft+60+199)+((645-(probeleft+60+199))/2))+" 300 "+((probeleft+60+199)+((645-(probeleft+60+199))/2))+" 255 "+((probeleft+60+199)+((645-(probeleft+60+199))/2))+" 200 "+((probeleft+60+199)+20)+" "+((probetop-7.5+19.57))+" "+((probeleft+60+199))+" "+((probetop-7.5+19.57))+" ";
			document.getElementById("wire2").setAttribute('d',"m698.96 117.43s2.7915-11.395 2.7915-22.099c0 -7.5055-1.3726-14.671-6.0426-17.33-85.816-48.86-74.181 70.636-63.888 183.1 "+(wirepath)+"");
			document.getElementById("wire2").style.stroke = "black";
			document.getElementById("wire2").style.strokeWidth = "3.5298px";

			console.log("wire2 value is",document.getElementById('wire2'))
			console.log("wirepath value is",wirepath)
			myInt = setInterval(animatearrow, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 712px; top: 315px; height: 40px; z-index: 10;";//for probe moving(press device)
			document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
			//Code for IE9
			   document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(0deg)";
			document.getElementById("device").onclick=function()
			{
				myStopFunction();
				console.log("proberight value is",proberight)
				console.log("probeleft value is",probeleft)
				r.style.setProperty('--leftprobe', ''+(proberight)+'px');
				var rs = getComputedStyle(r);
				console.log("The value of --leftprobe is: " + rs.getPropertyValue('--leftprobe'));
			    document.getElementById('probe').style.animation = "probe_right 3s linear 2 forwards alternate";
				document.getElementById('probe').addEventListener("animationend",()=>{
					document.getElementById('dispres').innerHTML =""+(cuttingspeedvalues[repeat-1][1])+"";
					document.getElementById('dispres').style.visibility="visible";
					document.getElementById('sr1').style.visibility="hidden";
					document.getElementById('sr2').innerHTML ="Surface Roughness of specimen = "+cuttingspeedvalues[repeat-1][1]+" &#181m";
					document.getElementById('sr2').style.visibility="visible";
					document.getElementById('nextButton').style.visibility="visible";	})
			}
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
		document.getElementById('sr2').style.visibility="hidden";
		document.getElementById('dispres').style.visibility="hidden";
		document.getElementById('probebase').style.visibility = "hidden";
		document.getElementById('probe').style.visibility = "hidden";
		document.getElementById('device').style.visibility = "hidden";
		document.getElementById('wire2').style.visibility = "hidden";
		document.getElementById('spec').style.visibility='hidden';
		document.getElementById('probe1').style.visibility = "hidden";
		document.getElementById('probe1').style.visibility = "hidden";
		document.getElementById('dispres').style.visibility="hidden";
		document.getElementById('trial').style.visibility='hidden';
		document.getElementById('1-1').innerHTML=cuttingspeedvalues[0][0];
		document.getElementById('2-1').innerHTML=cuttingspeedvalues[1][0];
		document.getElementById('3-1').innerHTML=cuttingspeedvalues[2][0];
		document.getElementById('4-1').innerHTML=cuttingspeedvalues[3][0];
        document.getElementById('5-1').innerHTML=cuttingspeedvalues[4][0];
        document.getElementById('1-2').innerHTML=cuttingspeedvalues[0][1];
        document.getElementById('2-2').innerHTML=cuttingspeedvalues[1][1];
        document.getElementById('3-2').innerHTML=cuttingspeedvalues[2][1];
        document.getElementById('4-2').innerHTML=cuttingspeedvalues[3][1];
        document.getElementById('5-2').innerHTML=cuttingspeedvalues[4][1];
		document.getElementById('inferenceDiv').style.visibility='visible';
	}
}


function refresh1()
{
	if (repeat>1) {
		myStopFunction();
	}
	document.getElementById('arrow1').style.visibility='hidden';
	document.getElementById("specimen").style.visibility = "hidden";
	document.getElementById("specimen2").style.visibility = "hidden";
	document.getElementById("step-2").style.visibility = "hidden";
	document.getElementById("image").style.display = "none";
	document.getElementById('can6-1').style.visibility="hidden";
	// document.getElementById('note').style.visibility="hidden";
}

function refresh2()
{
	document.getElementById('dispres').style.visibility='hidden';
	document.getElementById('dispres').innerHTML="";
	document.getElementById('sr2').innerHTML = "Surface Roughness of specimen =";
	document.getElementById('sr2').style.visibility='hidden';
	document.getElementById('device').style.visibility='hidden';
	document.getElementById('probebase').style.visibility='hidden';
	document.getElementById('probe').style.animation = "";
	document.getElementById('probe').style.visibility='hidden';
	document.getElementById('wire2').style.visibility='hidden';
	document.getElementById('spec').style.visibility='hidden';
	if (repeat>1) {
		document.getElementById('length1'+(repeat-1)+'').style.visibility='hidden';
		document.getElementById('length2'+(repeat-1)+'').style.visibility='hidden';
		document.getElementById('breadth1'+(repeat-1)+'').style.visibility='hidden';
		document.getElementById('breadth2'+(repeat-1)+'').style.visibility='hidden';
		document.getElementById('length1'+(repeat-1)+'').style.animation="";
		document.getElementById('length2'+(repeat-1)+'').style.animation="";
		document.getElementById('breadth1'+(repeat-1)+'').style.animation="";
		document.getElementById('breadth2'+(repeat-1)+'').style.animation="";
		for (let index1 = 1; index1 < 7; index1++) {
			document.getElementById('lasertop'+index1+'').style.animation="";
		}
		for (let index2 = 1; index2 < 6; index2++) {
			document.getElementById('xaxis'+index2+'').style.animation="";
		}
		for (let index3 = 1; index3 < 7; index3++) {
			document.getElementById('lasernozzle'+index3+'').style.animation="";
		}
		for (let index4 = 1; index4 < 4; index4++) {
			document.getElementById('laservertical'+index4+'').style.animation="";
			document.getElementById('lasernozzle0'+index4+'').style.animation="";
			document.getElementById('xaxis0'+index4+'').style.animation="";
			document.getElementById('lasertop0'+index4+'').style.animation="";
		}
		document.getElementById('laserfront').style.animation="";
		document.getElementById('laser').style.animation="";
		document.getElementById('laserhorizontalline').style.animation="";
		document.getElementById('laserhorizontalfront1').style.animation="";
		document.getElementById('laserhorizontalfront2').style.animation="";
		document.getElementById('laserhorizontal').style.animation="";
		document.getElementById('laserhorizontal2').style.animation="";
		document.getElementById('laservertical1').style.animation="";
		document.getElementById('laservertical3').style.animation="";
		document.getElementById('lasernozzle0').style.animation="";
		document.getElementById('xaxis0').style.animation="";
		document.getElementById('lasertop0').style.animation="";
		document.getElementById('lasertop04').style.animation="";
		document.getElementById('pause').style.visibility="hidden";
		document.getElementById('start0').style.visibility="visible";
		document.getElementById('start').style.visibility="hidden";
		document.getElementById('estop1').style.visibility="hidden";
		document.getElementById('estop').style.visibility="visible";
		document.getElementById('speedval').style.visibility="hidden";
		document.getElementById('unit').style.visibility="hidden";

		document.getElementById("rectlength").value="";
        document.getElementById("rectbreadth").value="";
		document.getElementById("squareside").value="";

		document.getElementById('xaxis5').style.visibility='hidden';
		document.getElementById('lasertop6').style.visibility='hidden';
		document.getElementById('lasernozzle6').style.visibility='hidden';

	}
	document.getElementById("can6-1").innerHTML = "";
	//document.getElementById('output').value="";
}
function refresh3()
{
	// document.getElementById('dispres').style.visibility='hidden';
	// document.getElementById('dispres').innerHTML="";
	// document.getElementById('sr2').innerHTML = "Surface Roughness of specimen =";
	// document.getElementById('sr2').style.visibility='hidden';
	// document.getElementById('display').style.animation = "";
	// document.getElementById('probe1').style.animation = "";
	// document.getElementById('probe2').style.animation = "";
	document.getElementById("machineclosesheet").style.visibility = "hidden";
	document.getElementById("shape").style.visibility = "hidden";
	document.getElementById("rectinput").style.visibility = "hidden";
	document.getElementById("squareinput").style.visibility = "hidden";
	//document.getElementById('output').value="";
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
		document.getElementById("ans").innerHTML="Wrong! Surface roughness increases with increase in cutting speed";
	}

	setTimeout(function()
	{
		document.getElementById("inference").style.visibility="hidden";
		document.getElementById("infAns").innerHTML="Increased cutting speed leads to faster passing of laser beam which leads to insufficient cutting. This in turn leads to increased surface roughness.";
		$("#infAns").fadeIn(750);
	},1000);
}
