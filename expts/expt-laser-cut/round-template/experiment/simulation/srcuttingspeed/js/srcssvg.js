var n=0,n1 = 0,n2=1,n3,n4=1,x,y,l,x1,y1,l1;
p1="";
p3="";
p4="";
p5="";
p6="";
var x1_=1.5;
var x2_=2.75;
var l1 = 30.175;
var l2 = 30.175;
var t = 5;
var t_circ = 8;

var framespeed = 40;
var svg= document.getElementById('specimen2');
var svgNS = "http://www.w3.org/2000/svg";
// document.getElementById("specimen").style.visibility = "visible";
// document.getElementById("specimen2").style.visibility = "visible";
// document.getElementById("step-2").style.visibility = "visible";
// document.getElementById("canvas3").style.visibility = "visible";

// console.log("specimen is",document.getElementById("specimen"))
// console.log("specimen2 is",document.getElementById("specimen2"))
// console.log("specimen2 is",document.getElementsByClassName("step"))
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
// document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; top:409px;"
// document.getElementById("notes").innerHTML="The emergency stop button can be pressed at any point during cutting to stop the process to reduce damage due to any accident.";
// // document.getElementById("notes").style.width =  ""+(600)+"px";
// document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
// document.getElementById("notes").style.textAlign = "center";
// console.log(document.getElementById('notes').offsetWidth)
// console.log(""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px")
// setTimeout(function()
// {
//     var probeleft = parseFloat(195+(170/4));
//     var probetop = parseFloat(310-(60/2)-42.404);
//  	document.getElementById('wire0').style.visibility='hidden';
//     document.getElementById('wire2').style.visibility='visible';
//     var wirepath = "C655 300 "+((probeleft+60+199)+((645-(probeleft+60+199))/2))+" 300 "+((probeleft+60+199)+((645-(probeleft+60+199))/2))+" 255 "+((probeleft+60+199)+((645-(probeleft+60+199))/2))+" 200 "+((probeleft+60+199)+20)+" "+((probetop-7.5+19.57))+" "+((probeleft+60+199))+" "+((probetop-7.5+19.57))+" ";
//     document.getElementById("wire2").setAttribute('d',"m698.96 117.43s2.7915-11.395 2.7915-22.099c0 -7.5055-1.3726-14.671-6.0426-17.33-85.816-48.86-74.181 70.636-63.888 183.1 "+(wirepath)+"");
//     document.getElementById("wire2").style.stroke = "black";
//     document.getElementById("wire2").style.strokeWidth = "3.5298px";
// },(2)*1000);
// document.getElementById('dispres').innerHTML =""+(laserpowervalues[0][1])+"";
// document.getElementById('dispres').style.visibility='visible';
document.getElementById("shapesubmit").onclick=function()
		{
            var shape = document.getElementById("shape").value;
            console.log(shape)
			if(shape==0)
			{
				document.getElementById('rectinput').style.visibility="visible";
                document.getElementById('squareinput').style.visibility="hidden";
                // document.getElementById('circinput').style.visibility="hidden";
			}
			else if(shape==1)
			{
                document.getElementById('rectinput').style.visibility="hidden";
                document.getElementById('squareinput').style.visibility="visible";
                // document.getElementById('circinput').style.visibility="hidden";
			}
            else if(shape==2)
			{
				document.getElementById('rectinput').style.visibility="hidden";
                document.getElementById('squareinput').style.visibility="hidden";
                // document.getElementById('circinput').style.visibility="visible";
			}
		}


document.getElementById("dimsubmit").onclick=function()
{
    var shape = document.getElementById("shape").value;
    console.log("dimsubmit running and shape=",shape)
    if(shape==0)
    {
        if(!document.getElementById("rectlength").value  || !document.getElementById("rectlength").value!=" "  || !document.getElementById("rectbreadth").value  || !document.getElementById("rectbreadth").value!=" ")
        {
            alert("Enter the value to proceed ");
        }
        else
        {
            var length = parseFloat(document.getElementById("rectlength").value);
            var breadth = parseFloat(document.getElementById("rectbreadth").value);
            console.log('dimensions=',length,breadth)
        }
        var r = document.querySelector(':root');
        var leftcorner = 390-(length/2)-19;
        var topcorner = 169.942-(breadth/2)-29;
        var topaxis = topcorner+2.75;
        console.log('corners=',leftcorner,topcorner)
        r.style.setProperty('--left', ''+leftcorner+'px');
        r.style.setProperty('--top', ''+topcorner+'px');
        r.style.setProperty('--topaxis', ''+topaxis+'px');
        var rs = getComputedStyle(r);
				myInt = setInterval(animatearrow, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 618px; top: 372px; height: 30px; width: 30px; z-index: 10;";//for speed button
				document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
				//Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
				// Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById("speed").onclick=function()
        {
                myStopFunction();
                if (repeat==1) {
                  document.getElementById("speedval").innerHTML= ""+(0)+"";
                } else {
                  document.getElementById("speedval").innerHTML= ""+cuttingspeedvalues[repeat-2][0]+"";
                }
                document.getElementById("speedval").style.visibility="visible";
                document.getElementById("unit").style.visibility="visible";
                console.log( document.getElementById("speedval"))
                document.getElementById('uparrow').style.visibility="visible";
                myInt = setInterval(animatearrow, 500);
                document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 714px; top: 273.5px; height: 30px; width: 30px; z-index: 10;";//for uparrow button
                document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                //Code for IE9
                document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                // Standard syntax
                document.getElementById("arrow1").style.transform = "rotate(180deg)";
                document.getElementById("uparrow").onclick=function()
                {
                    myStopFunction();
                    document.getElementById("speedval").innerHTML= ""+cuttingspeedvalues[repeat-1][0]+"";
                    document.getElementById("speedval").style.visibility="visible";
                    document.getElementById("unit").style.visibility="visible";
                    myInt = setInterval(animatearrow, 500);
                    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 722px; top: 329px; height: 30px; width: 30px; z-index: 10;";//for enter button
                    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                    //Code for IE9
                    document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                    // Standard syntax
                    document.getElementById("arrow1").style.transform = "rotate(180deg)";
                    document.getElementById("enter").onclick=function()
                    {
                        myStopFunction();
                        myInt = setInterval(animatearrow, 500);
                        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 696px; top: 350.95px; height: 30px; width: 30px; z-index: 10;";//for origin button
                        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                        //Code for IE9
                        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                        // Standard syntax
                        document.getElementById("arrow1").style.transform = "rotate(180deg)";
                    }
                }

        }
        document.getElementById("origin").onclick=function()
        {
            myStopFunction();
            setTimeout(function()
            {
            document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; top:409px;"
            document.getElementById("notes").innerHTML="The origin button moves the laser nozzle to the origin point of the shape to be made.";
            document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
            },0);
            setTimeout(function()
            {
            document.getElementById("notes").style.visibility="hidden";
            console.log("origin note hidden")
            },(2500));
            document.getElementById("lasertop1").style.animation = "movelaser 2s linear forwards";
            document.getElementById("xaxis1").style.animation = "moveaxis 2s linear forwards";
            document.getElementById("lasernozzle1").style.animation = "movenozzle 2s linear forwards";
            setTimeout(function()
            {
            myInt = setInterval(animatearrow, 500);
            document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 722px; top: 350px; height: 30px; width: 30px; z-index: 10;";//for frame button
            document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
            //Code for IE9
               document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
            // Standard syntax
            document.getElementById("arrow1").style.transform = "rotate(180deg)";
            },(2500));
            document.getElementById("frame").onclick=function()
            {
                myStopFunction();
                setTimeout(function()
                {
                document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; top:409px;"
                document.getElementById("notes").innerHTML="The frame button moves the laser nozzle to show the frame of the cut area without activating laser.";
                document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
                },0);
                setTimeout(function()
                {
                document.getElementById("notes").style.visibility="hidden";
                myInt = setInterval(animatearrow, 500);
                document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:722px; top: 372px; height: 30px; width: 30px; z-index: 10;";//for start0 button
                document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                //Code for IE9
                   document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                // Standard syntax
                document.getElementById("arrow1").style.transform = "rotate(180deg)";
                console.log("framebutton note hidden")
                },((length+breadth)/(framespeed/2))*1000);
                document.getElementById('lasertop1').style.visibility="hidden";
                document.getElementById('lasertop1').style.animation="";
                document.getElementById("lasertop01").style.left = ""+leftcorner+"px";
                document.getElementById("lasertop01").style.top = ""+topcorner+"px";
                document.getElementById('lasertop01').style.visibility="visible";
                document.getElementById('lasernozzle1').style.visibility="hidden";
                document.getElementById('lasernozzle01').style.visibility="visible";
                document.getElementById('xaxis1').style.visibility="hidden";
                document.getElementById('xaxis01').style.visibility="visible";
                document.getElementById("xaxis01").style.top = ""+(topcorner+2.75)+"px";
                document.getElementById("lasernozzle01").style.left = ""+leftcorner+"px";
                var left2 = leftcorner+length;
                //console.log('left2=',left2)
                r.style.setProperty('--left', ''+left2+'px');
                //console.log("length is ",document.getElementById(id1));
                document.getElementById('lasertop01').style.animation = "movelaser "+(length/framespeed)+"s linear forwards";
                document.getElementById("lasernozzle01").style.animation = "movenozzle "+(length/framespeed)+"s linear forwards";

                document.getElementById("lasertop01").addEventListener("animationend",()=>
                {
                    document.getElementById('lasertop01').style.visibility="hidden";
                    document.getElementById('lasertop01').style.animation="";
                    document.getElementById("lasertop02").style.left = ""+left2+"px";
                    document.getElementById("lasertop02").style.top = ""+topcorner+"px";
                    document.getElementById('lasertop02').style.visibility="visible";
                    document.getElementById('xaxis01').style.visibility="hidden";
                    document.getElementById('xaxis02').style.visibility="visible";
                    document.getElementById("xaxis02").style.top = ""+(topcorner+2.75)+"px";
                    var top2 = topcorner+breadth;
                    var topaxis2 = top2+2.75;
                    //console.log('top2=',top2)
                    r.style.setProperty('--top', ''+top2+'px');
                    r.style.setProperty('--topaxis', ''+topaxis2+'px');
                    //console.log("The value of --top is: " + rs.getPropertyValue('--top'));
                    document.getElementById('lasertop02').style.animation = "movelaser "+(breadth/framespeed)+"s linear forwards";
                    document.getElementById('xaxis02').style.animation = "moveaxis "+(breadth/framespeed)+"s linear forwards";

                    document.getElementById("lasertop02").addEventListener("animationend",()=>
                    {
                        document.getElementById('lasertop02').style.visibility="hidden";
                        document.getElementById('lasertop02').style.animation="";
                        document.getElementById("lasertop03").style.left = ""+left2+"px";
                        document.getElementById("lasertop03").style.top = ""+top2+"px";
                        document.getElementById('lasertop03').style.visibility="visible";
                        document.getElementById('lasernozzle01').style.visibility="hidden";
                        document.getElementById('lasernozzle02').style.visibility="visible";
                        document.getElementById("lasernozzle02").style.left = ""+left2+"px";
                        r.style.setProperty('--left', ''+leftcorner+'px');
                        document.getElementById('lasertop03').style.animation = "movelaser "+(length/framespeed)+"s linear forwards";
                        document.getElementById("lasernozzle02").style.animation = "movenozzle "+(length/framespeed)+"s linear forwards";

                        document.getElementById("lasertop03").addEventListener("animationend",()=>
                        {
                            document.getElementById('lasertop03').style.visibility="hidden";
                            document.getElementById('lasertop03').style.animation="";
                            document.getElementById("lasertop04").style.left = ""+leftcorner+"px";
                            document.getElementById("lasertop04").style.top = ""+top2+"px";
                            document.getElementById('lasertop04').style.visibility="visible";
                            document.getElementById('lasernozzle02').style.visibility="hidden";
                            document.getElementById('lasernozzle03').style.visibility="visible";
                            document.getElementById("lasernozzle03").style.left = ""+leftcorner+"px";
                            document.getElementById('xaxis02').style.visibility="hidden";
                            document.getElementById('xaxis03').style.visibility="visible";
                            document.getElementById("xaxis03").style.top = ""+(top2+2.75)+"px";
                            r.style.setProperty('--top', ''+topcorner+'px');
                            r.style.setProperty('--topaxis', ''+(topcorner+2.75)+'px');
                            //console.log("The value of --topaxis is: " + rs.getPropertyValue('--topaxis'))
                            document.getElementById('lasertop04').style.animation = "movelaser "+(breadth/framespeed)+"s linear forwards";
                            document.getElementById('xaxis03').style.animation = "moveaxis "+(breadth/framespeed)+"s linear forwards";
                        });
                    });
                });
            }
        }

        document.getElementById("start0").onclick=function()
        {
            myStopFunction();
            document.getElementById('pause').style.visibility="visible";
            document.getElementById('start0').style.visibility="hidden";
            setTimeout(function()
            {
            document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible;  top:409px;"
            document.getElementById("notes").innerHTML="The tube generates the laser beam, which is deflected by the mirrors to the nozzle, where the lens focuses it into the material";
            document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
            },1000);
            setTimeout(function()
            {
            document.getElementById("notes").style.visibility="hidden";
            console.log("time for first note hiding after start button pressed is",(2+(t-0.5))*1000)
            },((((307.942-(breadth/2))/lenlaser)*t)+(lenlaserfront/lenlaser)*t)*1000);


            var length = parseFloat(document.getElementById("rectlength").value);
            var breadth = parseFloat(document.getElementById("rectbreadth").value);
              var leftcorner = 390-(length/2)-19;
              var topcorner = 169.942-(breadth/2)-29;
              var topaxis = topcorner+2.75;
              var r = document.querySelector(':root')

              if (repeat==1) {
                  var cutspeed =10;
              } else if(repeat==2){
                  var cutspeed = 12.5;
              }else if(repeat==3){
                  var cutspeed = 15;
              }else if(repeat==4){
                  var cutspeed = 17.5;
              }else if(repeat==5){
                  var cutspeed = 20;
              }

            document.getElementById("laser").setAttribute('d',"m339 48.5h-179v"+(169.942-(breadth/2)-48.5)+" h"+(leftcorner-160)+"");
            var lenlaser = document.getElementById("laser").getTotalLength();
            document.getElementById("laser").style.strokeDasharray = lenlaser;
            document.getElementById("laser").style.strokeDashoffset = lenlaser;
            document.getElementById("laser").style.strokeWidth = 1.4;
            document.getElementById("laser").style.animation = "animatelaser "+(t)+"s linear forwards";
            console.log("laser is",document.getElementById("laser"))

            document.getElementById("laserfront").setAttribute('d',"m168 303.5h"+(leftcorner-149.5)+"v84.468");
            var lenlaserfront = document.getElementById("laserfront").getTotalLength();
            document.getElementById("laserfront").style.strokeDasharray = lenlaserfront;
            document.getElementById("laserfront").style.strokeDashoffset = lenlaserfront;
            document.getElementById("laserfront").style.strokeWidth = 1.4;
            document.getElementById("laserfront").style.animation = "animatelaser "+((lenlaserfront/lenlaser)*t)+"s linear "+((((307.942-(breadth/2))/lenlaser)*t))+"s forwards";
            console.log("laserfront is",document.getElementById("laserfront"))
//1st side
            setTimeout(function()
            {
            document.getElementById('lasertop04').style.visibility="hidden";
            document.getElementById('lasertop04').style.animation="";
            document.getElementById('lasertop1').style.visibility="hidden";
            document.getElementById('lasertop1').style.animation="";
            document.getElementById("lasertop2").style.left = ""+leftcorner+"px";
            document.getElementById("lasertop2").style.top = ""+topcorner+"px";
            document.getElementById('lasertop2').style.visibility="visible";
            document.getElementById('lasernozzle03').style.visibility="hidden";
            document.getElementById('lasernozzle1').style.visibility="hidden";
            document.getElementById('lasernozzle2').style.visibility="visible";
            document.getElementById('laser').style.visibility="hidden";
            document.getElementById('laserfront').style.visibility="hidden";
            document.getElementById('laserpart1').style.visibility="visible";
            document.getElementById('xaxis03').style.visibility="hidden";
            document.getElementById('xaxis1').style.visibility="hidden";
            document.getElementById('xaxis2').style.visibility="visible";
            document.getElementById("xaxis2").style.top = ""+(topcorner+2.75)+"px";

            document.getElementById('laserhorizontalline2').style.visibility="visible";
            document.getElementById("laserhorizontalline2").setAttribute('d',"M171.15, "+(169.942-(breadth/2)-topaxis)+" h"+(leftcorner-171.15)+"") ;
            document.getElementById("laserhorizontalline2").style.strokeWidth = 1.4;
            document.getElementById("laserhorizontalline2").setAttribute("class","draw");

            document.getElementById('laservertical2').style.visibility="visible";
            document.getElementById("laservertical2").setAttribute('d',"M160, 89.1 v"+(topaxis-89.1)+"");
            document.getElementById("laservertical2").style.strokeWidth = 1.4;
            document.getElementById("laservertical2").setAttribute("class","draw");

            document.getElementById('laserfront1').style.visibility="visible";
            document.getElementById("laserfront1").setAttribute('d',"m168 303.5h"+(leftcorner-168.3)+"");
            document.getElementById("laserfront1").style.strokeWidth = 1.4;
            document.getElementById("laserfront1").setAttribute("class","draw");
            // document.getElementById('laser').style.visibility="hidden";
            // document.getElementById('laserfront').style.visibility="hidden";
            document.getElementById("lasernozzle2").style.left = ""+leftcorner+"px";
            var left2 = leftcorner+length;
            //console.log('left2=',left2)
            r.style.setProperty('--left', ''+left2+'px');
            //console.log("The value of --left is: " + rs.getPropertyValue('--left'));

            document.getElementById("laserhorizontal").style.top = ""+(topcorner+2.75)+"px";
            document.getElementById('laserhorizontal').style.visibility="visible";
            document.getElementById('laserhorizontalline').style.visibility="visible";
            document.getElementById("laserhorizontalline").setAttribute('d',"M"+(leftcorner)+", "+(169.942-(breadth/2)-topaxis)+" h"+(length)+"") ;
            document.getElementById("laserhorizontalline").style.strokeWidth = 1.4;
            document.getElementById("laserhorizontalline").style.strokeDasharray = length;
            document.getElementById("laserhorizontalline").style.strokeDashoffset = length;
            document.getElementById("laserhorizontalline").style.zIndex = 11;
            document.getElementById("laserhorizontalline").style.animation = "animatelaser "+(length/cutspeed)+"s linear forwards";

            document.getElementById("laserhorizontalfront1").setAttribute('d',"M"+(leftcorner)+",303.5 h"+(length)+"") ;
            document.getElementById("laserhorizontalfront1").style.strokeWidth = 1.4;
            document.getElementById("laserhorizontalfront1").style.strokeDasharray = length;
            document.getElementById("laserhorizontalfront1").style.strokeDashoffset = length;
            document.getElementById("laserhorizontalfront1").style.zIndex = 11;
            document.getElementById("laserhorizontalfront1").style.animation = "animatelaser "+(length/cutspeed)+"s linear forwards";

            console.log("DURING FIRST SIDE");
            console.log("ANIMATION");
            console.log("laserhorizontal is ",document.getElementById("laserhorizontal"));
            console.log("laserhorizontalline is",document.getElementById("laserhorizontalline"))
            console.log("laserhorizontalfront1 is ",document.getElementById("laserhorizontalfront1"));
            console.log("LASERTOP2 is ",document.getElementById("lasertop2"));
            console.log("xaxis2 is ",document.getElementById("xaxis2"));
            console.log("lasernozzle2 is ",document.getElementById("lasernozzle2"));
            console.log("DRAW");
            console.log("laserhorizontalline2 is",document.getElementById("laserhorizontalline2"))
            console.log("laservertical2 is",document.getElementById("laservertical2"))
            console.log("laserfront1 is",document.getElementById("laserfront1"))

            var id1 = 'length1'+(repeat)+'';
            var path1=document.createElementNS(svgNS,"path");
            specimen2.appendChild(path1);
            path1.setAttributeNS(null,'id',id1);
            path1.setAttributeNS(null,'fill','none');
            document.getElementById(id1).setAttribute('d',"M"+(390-(length/2))+", "+(169.942-(breadth/2))+" h"+(length)+"") ;
            document.getElementById(id1).style.strokeWidth = 2;
            document.getElementById(id1).style.strokeDasharray = length;
            document.getElementById(id1).style.strokeDashoffset = length;
            document.getElementById(id1).style.zIndex = 10;
            document.getElementById(id1).style.animation = "animate "+(length/cutspeed)+"s linear forwards";



            //console.log("length is ",document.getElementById(id1));
            document.getElementById('lasertop2').style.animation = "movelaser "+(length/cutspeed)+"s linear forwards";
            document.getElementById("lasernozzle2").style.animation = "movenozzle "+(length/cutspeed)+"s linear forwards";
            setTimeout(function()
            {
            document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; top:409px;"
            document.getElementById("notes").innerHTML="The motors will have the nozzle move in the required path to cut the material using the focused laser beam.";
            document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
            console.log("motors note visible")
            },(100));
            setTimeout(function()
            {
            document.getElementById("notes").style.visibility="hidden";
            console.log("motors note hidden")
            },(3000));
            setTimeout(function()
            {
            document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible;  top:409px;"
            document.getElementById("notes").innerHTML="Press the start-pause button again to pause the cutting process.";
            document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
            console.log("startbutton note visible")
            },3100);

            document.getElementById("estop").onclick=function()
            {
                myStopFunction();
                console.log("estop presed")
                setTimeout(function()
                {
                document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; top:409px;"
                document.getElementById("notes").innerHTML="Press the reset button to reset the values used in the cutting.";
                document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
                },250);

                document.getElementById("lasertop2").style.animationPlayState = 'paused';
                document.getElementById("lasernozzle2").style.animationPlayState = 'paused';
                document.getElementById("laserhorizontalfront1").style.animationPlayState = 'paused';
                document.getElementById("laserhorizontalline").style.animationPlayState = 'paused';
                document.getElementById(id1).style.animationPlayState = 'paused';

                document.getElementById('laserpart1').style.visibility="hidden";
                document.getElementById('laserhorizontalline2').style.visibility="hidden";
                document.getElementById('laservertical2').style.visibility="hidden";
                document.getElementById('laserfront1').style.visibility="hidden";
                document.getElementById('laserhorizontalline').style.visibility="hidden";
                document.getElementById('laserhorizontalfront1').style.visibility="hidden";

                var lasernozzleleft = $("#lasernozzle2").position().left;
                var lasernozzletop = $("#lasernozzle2").position().top;
                var xaxisleft = $("#xaxis2").position().left;
                var xaxistop = $("#xaxis2").position().top;
                var lasertopleft = $("#lasertop2").position().left;
                var lasertoptop = $("#lasertop2").position().top;

                document.getElementById('lasernozzle2').style.visibility="hidden";
                document.getElementById('xaxis2').style.visibility="hidden";
                document.getElementById('lasertop2').style.visibility="hidden";

                console.log("lasernozzleleft is ",lasernozzleleft);

                document.getElementById("xaxis0").style.left = ""+(xaxisleft)+"px";
                document.getElementById("xaxis0").style.top = ""+(xaxistop)+"px";
                document.getElementById("lasernozzle0").style.left = ""+(lasernozzleleft)+"px";
                document.getElementById("lasernozzle0").style.top = ""+(lasernozzletop)+"px";
                document.getElementById("lasertop0").style.left = ""+(lasertopleft)+"px";
                document.getElementById("lasertop0").style.top = ""+(lasertoptop)+"px";

                console.log("lasernozzle2 is ",document.getElementById("lasernozzle2"),"and lasernozzle0 is",document.getElementById("lasernozzle0"));
                console.log("xaxis2 is ",document.getElementById("xaxis2"),"and xaxis0 is",document.getElementById("xaxis0"));
                document.getElementById('lasernozzle0').style.visibility="visible";
                document.getElementById('xaxis0').style.visibility="visible";
                document.getElementById('lasertop0').style.visibility="visible";

                myInt = setInterval(animatearrow, 500);
                document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 563px; top: 368px; height: 30px; width: 30px; z-index: 10;";//for reset button
                document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                //Code for IE9
                document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                // Standard syntax
                document.getElementById("arrow1").style.transform = "rotate(180deg)";

                document.getElementById("reset").onclick=function()
                {
                    myStopFunction();
                    setTimeout(function()
                    {
                    document.getElementById("notes").style.visibility="hidden";
                    console.log("time for first note hiding in estop press is",(2+(t-0.5))*1000)
                    },(0));
                    setTimeout(function()
                    {
                    document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; top:409px;"
                    document.getElementById("notes").innerHTML="After changing values as required, press start-pause button again to resume cutting.";
                    document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
                    console.log("time is",new Date())
                    },250);
                    r.style.setProperty('--left', ''+191.740+'px');
                    r.style.setProperty('--top', ''+92.696+'px');
                    r.style.setProperty('--topaxis', ''+94.914+'px');
                    document.getElementById('start').style.visibility="visible";
                    document.getElementById('pause').style.visibility="hidden";
                    document.getElementById('lasertop0').style.animation = "movelaser 2s linear 2 alternate forwards ";
                    document.getElementById('xaxis0').style.animation = "moveaxis 2s linear 2 alternate forwards ";
                    document.getElementById("lasernozzle0").style.animation = "movenozzle 2s linear 2 alternate forwards ";
                    console.log("LASERTOP2 is ",document.getElementById("lasertop2"));
                    console.log("lasernozzle2 is ",document.getElementById("lasernozzle2"));
                }
            }

            document.getElementById("pause").onclick=function()
            {
                setTimeout(function()
                {
                document.getElementById("notes").style.visibility="hidden";
                console.log("startbutton note hidden")
                },0);
                setTimeout(function()
                {
                document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; top:409px;"
                document.getElementById("notes").innerHTML="Press the button again to resume cutting.";
                document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
                },500);
                console.log("PAUSE pressed")
                document.getElementById('start').style.visibility="visible";
                document.getElementById('pause').style.visibility="hidden";
                document.getElementById("lasertop2").style.animationPlayState = 'paused';
                document.getElementById("lasernozzle2").style.animationPlayState = 'paused';
                document.getElementById("laserhorizontalfront1").style.animationPlayState = 'paused';
                document.getElementById("laserhorizontalline").style.animationPlayState = 'paused';
                document.getElementById(id1).style.animationPlayState = 'paused';
                document.getElementById('laserpart1').style.visibility="hidden";
                document.getElementById('laserhorizontalline2').style.visibility="hidden";
                document.getElementById('laservertical2').style.visibility="hidden";
                document.getElementById('laserfront1').style.visibility="hidden";
                document.getElementById('laserhorizontalline').style.visibility="hidden";
                document.getElementById('laserhorizontalfront1').style.visibility="hidden";

                var lasernozzleleft = $("#lasernozzle2").position().left;
                var lasernozzletop = $("#lasernozzle2").position().top;
                var xaxisleft = $("#xaxis2").position().left;
                var xaxistop = $("#xaxis2").position().top;
                var lasertopleft = $("#lasertop2").position().left;
                var lasertoptop = $("#lasertop2").position().top;

                document.getElementById('lasernozzle2').style.visibility="hidden";
                document.getElementById('xaxis2').style.visibility="hidden";
                document.getElementById('lasertop2').style.visibility="hidden";

                console.log("lasernozzleleft is ",lasernozzleleft);

                document.getElementById("xaxis0").style.left = ""+(xaxisleft)+"px";
                document.getElementById("xaxis0").style.top = ""+(xaxistop)+"px";
                document.getElementById("lasernozzle0").style.left = ""+(lasernozzleleft)+"px";
                document.getElementById("lasernozzle0").style.top = ""+(lasernozzletop)+"px";
                document.getElementById("lasertop0").style.left = ""+(lasertopleft)+"px";
                document.getElementById("lasertop0").style.top = ""+(lasertoptop)+"px";

                console.log("lasernozzle2 is ",document.getElementById("lasernozzle2"),"and lasernozzle0 is",document.getElementById("lasernozzle0"));
                console.log("xaxis2 is ",document.getElementById("xaxis2"),"and xaxis0 is",document.getElementById("xaxis0"));
                document.getElementById('lasernozzle0').style.visibility="visible";
                document.getElementById('xaxis0').style.visibility="visible";
                document.getElementById('lasertop0').style.visibility="visible";
            }
            document.getElementById("start").onclick=function()
            {
                document.getElementById("notes").style.visibility="hidden";
                n1++;
                console.log("START pressed and n1=",n1)
                if (n1==1) {
                setTimeout(function()
                {
                document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; top:409px;"
                document.getElementById("notes").innerHTML="At any point during cutting, the emergency stop button can be pressed to stop the process to reduce damage due to any accident.";
                document.getElementById("notes").style.textAlign = "center";
                document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
                myInt = setInterval(animatearrow, 500);
                document.getElementById('arrow1').style="visibility:visible ;position:absolute;left: 611px; top: 203px; height: 40px; width: 40px; z-index: 10;";//for estop button
                document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                //Code for IE9
                document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                // Standard syntax
                document.getElementById("arrow1").style.transform = "rotate(180deg)";
                },(100));
                setTimeout(function()
                {
                myStopFunction();
                document.getElementById("notes").style.visibility="hidden";
                },(4000));
                }
                document.getElementById('pause').style.visibility="visible";
                document.getElementById('start').style.visibility="hidden";
                r.style.setProperty('--left', ''+left2+'px');
                r.style.setProperty('--top', ''+topcorner+'px');
                r.style.setProperty('--topaxis', ''+topaxis+'px');
                document.getElementById("lasertop2").style.animationPlayState = 'running';
                document.getElementById("lasernozzle2").style.animationPlayState = 'running';
                document.getElementById("laserhorizontalfront1").style.animationPlayState = 'running';
                document.getElementById("laserhorizontalline").style.animationPlayState = 'running';
                document.getElementById(id1).style.animationPlayState = 'running';

                document.getElementById('laserpart1').style.visibility="visible";
                document.getElementById('laserhorizontalline2').style.visibility="visible";
                document.getElementById('laservertical2').style.visibility="visible";
                document.getElementById('laserfront1').style.visibility="visible";
                document.getElementById('laserhorizontalline').style.visibility="visible";
                document.getElementById('laserhorizontalfront1').style.visibility="visible";

                document.getElementById('lasernozzle0').style.visibility="hidden";
                document.getElementById('xaxis0').style.visibility="hidden";
                document.getElementById('lasertop0').style.visibility="hidden";
                document.getElementById('lasernozzle2').style.visibility="visible";
                document.getElementById('xaxis2').style.visibility="visible";
                document.getElementById('lasertop2').style.visibility="visible";
            }
//2nd side
            document.getElementById("lasertop2").addEventListener("animationend",()=>
            {

                document.getElementById('lasertop2').style.visibility="hidden";
                document.getElementById('lasertop2').style.animation="";
                document.getElementById("lasertop3").style.left = ""+left2+"px";
                document.getElementById("lasertop3").style.top = ""+topcorner+"px";
                document.getElementById('lasertop3').style.visibility="visible";
                document.getElementById('xaxis2').style.visibility="hidden";
                document.getElementById('xaxis3').style.visibility="visible";
                document.getElementById("xaxis3").style.top = ""+(topcorner+2.75)+"px";


                document.getElementById('lasernozzle2').style.visibility="hidden";
                document.getElementById('lasernozzle3').style.visibility="visible";
                document.getElementById("lasernozzle3").style.left = ""+left2+"px";
                var top2 = topcorner+breadth;
                var topaxis2 = top2+2.75;
                //console.log('top2=',top2)
                r.style.setProperty('--top', ''+top2+'px');
                r.style.setProperty('--topaxis', ''+topaxis2+'px');
                //console.log("The value of --top is: " + rs.getPropertyValue('--top'));

                var id2 = 'breadth1'+(repeat)+'';
                var path2=document.createElementNS(svgNS,"path");
                specimen2.appendChild(path2);
                path2.setAttributeNS(null,'id',id2);
                path2.setAttributeNS(null,'fill','none');
                document.getElementById(id2).setAttribute('d',"M"+(390+(length/2))+", "+(169.942-(breadth/2))+" v"+(breadth)+"") ;
                document.getElementById(id2).style.strokeWidth = 2;
                document.getElementById(id2).style.strokeDasharray = breadth;
                document.getElementById(id2).style.strokeDashoffset = breadth;
                document.getElementById(id2).style.zIndex = 10;
                document.getElementById(id2).style.animation = "animate "+(breadth/cutspeed)+"s linear forwards";
                document.getElementById('lasertop3').style.animation = "movelaser "+(breadth/cutspeed)+"s linear forwards";
                document.getElementById('xaxis3').style.animation = "moveaxis "+(breadth/cutspeed)+"s linear forwards";
                document.getElementById('laserhorizontal').style.animation = "moveaxis "+(breadth/cutspeed)+"s linear forwards";

                document.getElementById('laserhorizontalfront1').style.visibility="hidden";
                document.getElementById('laserhorizontalfront1').style.animation="";
                document.getElementById("laserhorizontalfront2").setAttribute('d',"M"+(leftcorner)+",303.5 h"+(length)+"") ;
                document.getElementById("laserhorizontalfront2").style.strokeWidth = 1.4;
                document.getElementById("laserhorizontalfront2").style.strokeDasharray = length;
                document.getElementById("laserhorizontalfront2").setAttribute("class","draw");
                document.getElementById('laserhorizontalfront2').style.visibility="visible";

                document.getElementById('laservertical1').style.visibility="visible";
                document.getElementById("laservertical1").setAttribute('d',"M"+(160)+", "+(topaxis)+" v"+(breadth)+"") ;
                document.getElementById("laservertical1").style.strokeWidth = 1.4;
                document.getElementById("laservertical1").style.strokeDasharray = breadth;
                document.getElementById("laservertical1").style.strokeDashoffset = breadth;
                document.getElementById("laservertical1").style.zIndex = 11;
                document.getElementById("laservertical1").style.animation = "animatelaser "+(breadth/cutspeed)+"s linear forwards";


                console.log("DURING SECOND SIDE");
                console.log("ANIMATION");
                console.log("laserhorizontal is ",document.getElementById("laserhorizontal"));
                console.log("laservertical1 is",document.getElementById("laservertical1"))
                console.log("DRAW");
                console.log("laserhorizontalline2 is",document.getElementById("laserhorizontalline2"))
                console.log("laservertical2 is",document.getElementById("laservertical2"))
                console.log("laserfront1 is",document.getElementById("laserfront1"))
                console.log("laserhorizontalfront2 is ",document.getElementById("laserhorizontalfront2"));

                document.getElementById("estop").onclick=function()
                {
                    console.log("estop pressed")
                    setTimeout(function()
                    {
                    document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; top:409px;"
                    document.getElementById("notes").innerHTML="Press the reset button to reset the values used in the cutting.";
                    document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
                    },250);
                    document.getElementById("lasertop3").style.animationPlayState = 'paused';
                    document.getElementById("lasernozzle3").style.animationPlayState = 'paused';
                    document.getElementById("laservertical1").style.animationPlayState = 'paused';
                    document.getElementById("xaxis3").style.animationPlayState = 'paused';
                    document.getElementById("laserhorizontal").style.animationPlayState = 'paused';
                    document.getElementById(id2).style.animationPlayState = 'paused';

                    document.getElementById('laserpart1').style.visibility="hidden";
                    document.getElementById('laserhorizontalline2').style.visibility="hidden";
                    document.getElementById('laservertical1').style.visibility="hidden";
                    document.getElementById('laservertical2').style.visibility="hidden";
                    document.getElementById('laserfront1').style.visibility="hidden";
                    document.getElementById('laserhorizontalline').style.visibility="hidden";
                    document.getElementById('laserhorizontalfront2').style.visibility="hidden";

                    var lasernozzleleft = $("#lasernozzle3").position().left;
                    var lasernozzletop = $("#lasernozzle3").position().top;
                    var xaxisleft = $("#xaxis3").position().left;
                    var xaxistop = $("#xaxis3").position().top;
                    var lasertopleft = $("#lasertop3").position().left;
                    var lasertoptop = $("#lasertop3").position().top;

                    document.getElementById('lasernozzle3').style.visibility="hidden";
                    document.getElementById('xaxis3').style.visibility="hidden";
                    document.getElementById('lasertop3').style.visibility="hidden";

                    console.log("lasernozzleleft is ",lasernozzleleft);

                    document.getElementById("xaxis0").style.left = ""+(xaxisleft)+"px";
                    document.getElementById("xaxis0").style.top = ""+(xaxistop)+"px";
                    document.getElementById("lasernozzle0").style.left = ""+(lasernozzleleft)+"px";
                    document.getElementById("lasernozzle0").style.top = ""+(lasernozzletop)+"px";
                    document.getElementById("lasertop0").style.left = ""+(lasertopleft)+"px";
                    document.getElementById("lasertop0").style.top = ""+(lasertoptop)+"px";

                    console.log("lasernozzle3 is ",document.getElementById("lasernozzle3"),"and lasernozzle0 is",document.getElementById("lasernozzle0"));
                    console.log("xaxis3 is ",document.getElementById("xaxis3"),"and xaxis0 is",document.getElementById("xaxis0"));
                    document.getElementById('lasernozzle0').style.visibility="visible";
                    document.getElementById('xaxis0').style.visibility="visible";
                    document.getElementById('lasertop0').style.visibility="visible";

                    document.getElementById('lasertop0').style.animation = "";
                    document.getElementById('xaxis0').style.animation = "";
                    document.getElementById("lasernozzle0").style.animation = "";

                    myInt = setInterval(animatearrow, 500);
                    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 563px; top: 368px; height: 30px; width: 30px; z-index: 10;";//for reset button
                    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                    //Code for IE9
                    document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                    // Standard syntax
                    document.getElementById("arrow1").style.transform = "rotate(180deg)";

                    document.getElementById("reset").onclick=function()
                    {
                        myStopFunction();
                    	setTimeout(function()
                    	{
                    	document.getElementById("notes").style.visibility="hidden";
                    	console.log("time for first note hiding in estop press is",(2+(t-0.5))*1000)
                    	},(0));
                    	setTimeout(function()
                    	{
                    	document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:10px; top:409px;"
                    	document.getElementById("notes").innerHTML="After changing values as required, press start-pause button again to resume cutting.";
                    	document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
                    	console.log("time is",new Date())
                    	},250);
                        console.log("RESET pressed")
                        r.style.setProperty('--left', ''+191.740+'px');
                        r.style.setProperty('--top', ''+92.696+'px');
                        r.style.setProperty('--topaxis', ''+94.914+'px');
                        document.getElementById('start').style.visibility="visible";
                        document.getElementById('pause').style.visibility="hidden";
                        document.getElementById('lasertop0').style.animation = "movelaser 2s linear 2 alternate forwards ";
                        document.getElementById('xaxis0').style.animation = "moveaxis 2s linear 2 alternate forwards ";
                        document.getElementById("lasernozzle0").style.animation = "movenozzle 2s linear 2 alternate forwards ";
                        console.log("LASERTOP2 is ",document.getElementById("lasertop2"));
                        console.log("lasernozzle2 is ",document.getElementById("lasernozzle2"));
                    }
                }

                document.getElementById("pause").onclick=function()
                {
                    setTimeout(function()
                    {
                    document.getElementById("notes").style.visibility="hidden";
                    console.log("startbutton note hidden")
                    },0);
                    setTimeout(function()
                    {
                    document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; top:409px;"
                    document.getElementById("notes").innerHTML="Press the button again to resume cutting.";
                    document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
                    },500);
                    document.getElementById('start').style.visibility="visible";
                    document.getElementById('pause').style.visibility="hidden";
                    document.getElementById("lasertop3").style.animationPlayState = 'paused';
                    document.getElementById("lasernozzle3").style.animationPlayState = 'paused';
                    document.getElementById("xaxis3").style.animationPlayState = 'paused';
                    document.getElementById("laservertical1").style.animationPlayState = 'paused';
                    document.getElementById("laserhorizontal").style.animationPlayState = 'paused';
                    document.getElementById(id2).style.animationPlayState = 'paused';

                    document.getElementById('laserpart1').style.visibility="hidden";
                    document.getElementById('laserhorizontalline2').style.visibility="hidden";
                    document.getElementById('laservertical1').style.visibility="hidden";
                    document.getElementById('laservertical2').style.visibility="hidden";
                    document.getElementById('laserfront1').style.visibility="hidden";
                    document.getElementById('laserhorizontalline').style.visibility="hidden";
                    document.getElementById('laserhorizontalfront2').style.visibility="hidden";

                    var lasernozzleleft = $("#lasernozzle3").position().left;
                    var lasernozzletop = $("#lasernozzle3").position().top;
                    var xaxisleft = $("#xaxis3").position().left;
                    var xaxistop = $("#xaxis3").position().top;
                    var lasertopleft = $("#lasertop3").position().left;
                    var lasertoptop = $("#lasertop3").position().top;

                    document.getElementById('lasernozzle3').style.visibility="hidden";
                    document.getElementById('xaxis3').style.visibility="hidden";
                    document.getElementById('lasertop3').style.visibility="hidden";

                    console.log("lasernozzleleft is ",lasernozzleleft);

                    document.getElementById("xaxis0").style.left = ""+(xaxisleft)+"px";
                    document.getElementById("xaxis0").style.top = ""+(xaxistop)+"px";
                    document.getElementById("lasernozzle0").style.left = ""+(lasernozzleleft)+"px";
                    document.getElementById("lasernozzle0").style.top = ""+(lasernozzletop)+"px";
                    document.getElementById("lasertop0").style.left = ""+(lasertopleft)+"px";
                    document.getElementById("lasertop0").style.top = ""+(lasertoptop)+"px";

                    console.log("lasernozzle3 is ",document.getElementById("lasernozzle3"),"and lasernozzle0 is",document.getElementById("lasernozzle0"));
                    console.log("xaxis3 is ",document.getElementById("xaxis3"),"and xaxis0 is",document.getElementById("xaxis0"));
                    document.getElementById('lasernozzle0').style.visibility="visible";
                    document.getElementById('xaxis0').style.visibility="visible";
                    document.getElementById('lasertop0').style.visibility="visible";
                }
                document.getElementById("start").onclick=function()
                {
                    document.getElementById("notes").style.visibility="hidden";
                    document.getElementById('pause').style.visibility="visible";
                    document.getElementById('start').style.visibility="hidden";
                    r.style.setProperty('--left', ''+left2+'px');
                    r.style.setProperty('--top', ''+top2+'px');
                    r.style.setProperty('--topaxis', ''+topaxis2+'px');
                    document.getElementById("lasertop3").style.animationPlayState = 'running';
                    document.getElementById("xaxis3").style.animationPlayState = 'running';
                    document.getElementById("lasernozzle3").style.animationPlayState = 'running';
                    document.getElementById("laservertical1").style.animationPlayState = 'running';
                    document.getElementById("laserhorizontal").style.animationPlayState = 'running';
                    document.getElementById(id2).style.animationPlayState = 'running';

                    document.getElementById('laserpart1').style.visibility="visible";
                    document.getElementById('laserhorizontalline2').style.visibility="visible";
                    document.getElementById('laservertical1').style.visibility="visible";
                    document.getElementById('laservertical2').style.visibility="visible";
                    document.getElementById('laserfront1').style.visibility="visible";
                    document.getElementById('laserhorizontalline').style.visibility="visible";
                    document.getElementById('laserhorizontalfront2').style.visibility="visible";

                    document.getElementById('lasernozzle0').style.visibility="hidden";
                    document.getElementById('xaxis0').style.visibility="hidden";
                    document.getElementById('lasertop0').style.visibility="hidden";
                    document.getElementById('lasernozzle3').style.visibility="visible";
                    document.getElementById('xaxis3').style.visibility="visible";
                    document.getElementById('lasertop3').style.visibility="visible";
                }
//3rd side
                document.getElementById("lasertop3").addEventListener("animationend",()=>
                {
                    document.getElementById('lasertop3').style.visibility="hidden";
                    document.getElementById('lasertop3').style.animation="";
                    document.getElementById("lasertop4").style.left = ""+left2+"px";
                    document.getElementById("lasertop4").style.top = ""+top2+"px";
                    document.getElementById('lasertop4').style.visibility="visible";

                    document.getElementById('lasernozzle3').style.visibility="hidden";
                    document.getElementById('lasernozzle4').style.visibility="visible";
                    document.getElementById("lasernozzle4").style.left = ""+left2+"px";
                    r.style.setProperty('--left', ''+leftcorner+'px');
                    //console.log("The value of --left is: " + rs.getPropertyValue('--left'));

                    var id3 = 'length2'+(repeat)+'';
                    var path3=document.createElementNS(svgNS,"path");
                    specimen2.appendChild(path3);
                    path3.setAttributeNS(null,'id',id3);
                    path3.setAttributeNS(null,'fill','none');
                    document.getElementById(id3).setAttribute('d',"M"+(390+(length/2))+", "+(169.942+(breadth/2))+" h-"+(length)+"") ;
                    document.getElementById(id3).style.strokeWidth = 2;
                    document.getElementById(id3).style.strokeDasharray = length;
                    document.getElementById(id3).style.strokeDashoffset = length;
                    document.getElementById(id3).style.zIndex = 10;
                    document.getElementById(id3).style.animation = "animate "+(length/cutspeed)+"s linear forwards";
                    document.getElementById('lasertop4').style.animation = "movelaser "+(length/cutspeed)+"s linear forwards";
                    document.getElementById("lasernozzle4").style.animation = "movenozzle "+(length/cutspeed)+"s linear forwards";

                    r.style.setProperty('--sdoffset', ''+length+'');
                    console.log("sdoffset is",+ rs.getPropertyValue('--sdoffset'))
                    document.getElementById("laserhorizontalline").style.animation = "animatelaserreverse "+(length/cutspeed)+"s linear forwards";
                    document.getElementById("laserhorizontalfront2").style.strokeDasharray = length;
                    document.getElementById("laserhorizontalfront2").style.zIndex = 11;
                    document.getElementById("laserhorizontalfront2").style.animation = "animatelaserreverse "+(length/cutspeed)+"s linear forwards";

                    console.log("DURING THIRD SIDE");
                    console.log("ANIMATION");
                    console.log("laserhorizontalline is ",document.getElementById("laserhorizontalline"));
                    console.log("laservertical1 is",document.getElementById("laservertical1"))
                    console.log("laserhorizontalfront2 is ",document.getElementById("laserhorizontalfront2"));
                    console.log("DRAW");
                    console.log("laserhorizontalline2 is",document.getElementById("laserhorizontalline2"))
                    console.log("laservertical3 is",document.getElementById("laservertical3"))
                    console.log("laserfront1 is",document.getElementById("laserfront1"))

                    document.getElementById('laservertical1').style.visibility="hidden";
                    document.getElementById('laservertical1').style.animation="";
                    document.getElementById("laservertical3").setAttribute('d',"M"+(160)+", "+(topaxis)+" v"+(breadth)+"") ;
                    document.getElementById("laservertical3").style.strokeWidth = 1.4;
                    document.getElementById("laservertical3").style.strokeDasharray = breadth;
                    document.getElementById("laservertical3").setAttribute("class","draw");
                    document.getElementById('laservertical3').style.visibility="visible";
//estop
                    document.getElementById("estop").onclick=function()
                    {
                        console.log("estop presed")
                        setTimeout(function()
                        {
                        document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; top:409px;"
                        document.getElementById("notes").innerHTML="Press the reset button to reset the values used in the cutting.";
                        document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
                        },250);
                        document.getElementById("lasertop4").style.animationPlayState = 'paused';
                        document.getElementById("lasernozzle4").style.animationPlayState = 'paused';
                        document.getElementById("laserhorizontalfront2").style.animationPlayState = 'paused';
                        document.getElementById("laserhorizontalline").style.animationPlayState = 'paused';
                        document.getElementById(id3).style.animationPlayState = 'paused';

                        document.getElementById('laserpart1').style.visibility="hidden";
                        document.getElementById('laserhorizontalline2').style.visibility="hidden";
                        document.getElementById('laservertical2').style.visibility="hidden";
                        document.getElementById('laservertical3').style.visibility="hidden";
                        document.getElementById('laserfront1').style.visibility="hidden";
                        document.getElementById('laserhorizontalline').style.visibility="hidden";
                        document.getElementById('laserhorizontalfront2').style.visibility="hidden";

                        var lasernozzleleft = $("#lasernozzle4").position().left;
                        var lasernozzletop = $("#lasernozzle4").position().top;
                        var xaxisleft = $("#xaxis3").position().left;
                        var xaxistop = $("#xaxis3").position().top;
                        var lasertopleft = $("#lasertop4").position().left;
                        var lasertoptop = $("#lasertop4").position().top;

                        document.getElementById('lasernozzle4').style.visibility="hidden";
                        document.getElementById('xaxis3').style.visibility="hidden";
                        document.getElementById('lasertop4').style.visibility="hidden";

                        console.log("lasernozzleleft is ",lasernozzleleft);

                        document.getElementById("xaxis0").style.left = ""+(xaxisleft)+"px";
                        document.getElementById("xaxis0").style.top = ""+(xaxistop)+"px";
                        document.getElementById("lasernozzle0").style.left = ""+(lasernozzleleft)+"px";
                        document.getElementById("lasernozzle0").style.top = ""+(lasernozzletop)+"px";
                        document.getElementById("lasertop0").style.left = ""+(lasertopleft)+"px";
                        document.getElementById("lasertop0").style.top = ""+(lasertoptop)+"px";

                        console.log("lasernozzle4 is ",document.getElementById("lasernozzle4"),"and lasernozzle0 is",document.getElementById("lasernozzle0"));
                        console.log("xaxis3 is ",document.getElementById("xaxis3"),"and xaxis0 is",document.getElementById("xaxis0"));
                        document.getElementById('lasernozzle0').style.visibility="visible";
                        document.getElementById('xaxis0').style.visibility="visible";
                        document.getElementById('lasertop0').style.visibility="visible";
                        document.getElementById('lasertop0').style.animation = "";
                        document.getElementById('xaxis0').style.animation = "";
                        document.getElementById("lasernozzle0").style.animation = "";

                        myInt = setInterval(animatearrow, 500);
                        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 563px; top: 368px; height: 30px; width: 30px; z-index: 10;";//for reset button
                        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                        //Code for IE9
                        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                        // Standard syntax
                        document.getElementById("arrow1").style.transform = "rotate(180deg)";
  //reset
                        document.getElementById("reset").onclick=function()
                        {
                            myStopFunction();
                            setTimeout(function()
                            {
                            document.getElementById("notes").style.visibility="hidden";
                            console.log("time for first note hiding in estop press is",(2+(t-0.5))*1000)
                            },(0));
                            setTimeout(function()
                            {
                            document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; top:409px;"
                            document.getElementById("notes").innerHTML="After changing values as required, press start-pause button again to resume cutting.";
                            document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
                            console.log("time is",new Date())
                            },250);
                            r.style.setProperty('--left', ''+191.740+'px');
                            r.style.setProperty('--top', ''+92.696+'px');
                            r.style.setProperty('--topaxis', ''+94.914+'px');
                            document.getElementById('start').style.visibility="visible";
                            document.getElementById('pause').style.visibility="hidden";
                            document.getElementById('lasertop0').style.animation = "movelaser 2s linear 2 alternate forwards ";
                            document.getElementById('xaxis0').style.animation = "moveaxis 2s linear 2 alternate forwards ";
                            document.getElementById("lasernozzle0").style.animation = "movenozzle 2s linear 2 alternate forwards ";
                            console.log("LASERTOP2 is ",document.getElementById("lasertop2"));
                            console.log("lasernozzle2 is ",document.getElementById("lasernozzle2"));
                        }
                    }
 //pause
                    document.getElementById("pause").onclick=function()
                    {
                        document.getElementById('start').style.visibility="visible";
                        document.getElementById('pause').style.visibility="hidden";
                        document.getElementById("lasertop4").style.animationPlayState = 'paused';
                        document.getElementById("lasernozzle4").style.animationPlayState = 'paused';
                        document.getElementById("laserhorizontalfront2").style.animationPlayState = 'paused';
                        document.getElementById("laserhorizontalline").style.animationPlayState = 'paused';
                        document.getElementById(id3).style.animationPlayState = 'paused';

                        document.getElementById('laserpart1').style.visibility="hidden";
                        document.getElementById('laserhorizontalline2').style.visibility="hidden";
                        document.getElementById('laservertical3').style.visibility="hidden";
                        document.getElementById('laservertical2').style.visibility="hidden";
                        document.getElementById('laserfront1').style.visibility="hidden";
                        document.getElementById('laserhorizontalline').style.visibility="hidden";
                        document.getElementById('laserhorizontalfront2').style.visibility="hidden";

                        var lasernozzleleft = $("#lasernozzle4").position().left;
                        var lasernozzletop = $("#lasernozzle4").position().top;
                        var xaxisleft = $("#xaxis3").position().left;
                        var xaxistop = $("#xaxis3").position().top;
                        var lasertopleft = $("#lasertop4").position().left;
                        var lasertoptop = $("#lasertop4").position().top;

                        document.getElementById('lasernozzle4').style.visibility="hidden";
                        document.getElementById('xaxis3').style.visibility="hidden";
                        document.getElementById('lasertop4').style.visibility="hidden";

                        console.log("lasernozzleleft is ",lasernozzleleft);

                        document.getElementById("xaxis0").style.left = ""+(xaxisleft)+"px";
                        document.getElementById("xaxis0").style.top = ""+(xaxistop)+"px";
                        document.getElementById("lasernozzle0").style.left = ""+(lasernozzleleft)+"px";
                        document.getElementById("lasernozzle0").style.top = ""+(lasernozzletop)+"px";
                        document.getElementById("lasertop0").style.left = ""+(lasertopleft)+"px";
                        document.getElementById("lasertop0").style.top = ""+(lasertoptop)+"px";

                        console.log("lasernozzle4 is ",document.getElementById("lasernozzle4"),"and lasernozzle0 is",document.getElementById("lasernozzle0"));
                        console.log("xaxis3 is ",document.getElementById("xaxis3"),"and xaxis0 is",document.getElementById("xaxis0"));
                        document.getElementById('lasernozzle0').style.visibility="visible";
                        document.getElementById('xaxis0').style.visibility="visible";
                        document.getElementById('lasertop0').style.visibility="visible";
                    }
//start
                    document.getElementById("start").onclick=function()
                    {
                        document.getElementById('pause').style.visibility="visible";
                        document.getElementById('start').style.visibility="hidden";
                        document.getElementById("notes").style.visibility="hidden";
                        r.style.setProperty('--left', ''+leftcorner+'px');
                        r.style.setProperty('--top', ''+top2+'px');
                        r.style.setProperty('--topaxis', ''+topaxis2+'px');
                        document.getElementById("lasertop4").style.animationPlayState = 'running';
                        document.getElementById("lasernozzle4").style.animationPlayState = 'running';
                        document.getElementById("laserhorizontalfront2").style.animationPlayState = 'running';
                        document.getElementById("laserhorizontalline").style.animationPlayState = 'running';
                        document.getElementById(id3).style.animationPlayState = 'running';

                        document.getElementById('laserpart1').style.visibility="visible";
                        document.getElementById('laserhorizontalline2').style.visibility="visible";
                        document.getElementById('laservertical2').style.visibility="visible";
                        document.getElementById('laservertical3').style.visibility="visible";
                        document.getElementById('laserfront1').style.visibility="visible";
                        document.getElementById('laserhorizontalline').style.visibility="visible";
                        document.getElementById('laserhorizontalfront2').style.visibility="visible";

                        document.getElementById('lasernozzle0').style.visibility="hidden";
                        document.getElementById('xaxis0').style.visibility="hidden";
                        document.getElementById('lasertop0').style.visibility="hidden";
                        document.getElementById('lasernozzle4').style.visibility="visible";
                        document.getElementById('xaxis3').style.visibility="visible";
                        document.getElementById('lasertop4').style.visibility="visible";
                    }
//4th side
                    document.getElementById("lasertop4").addEventListener("animationend",()=>
                    {
                        document.getElementById('lasertop4').style.visibility="hidden";
                        document.getElementById('lasertop4').style.animation="";
                        document.getElementById("lasertop5").style.left = ""+leftcorner+"px";
                        document.getElementById("lasertop5").style.top = ""+top2+"px";
                        document.getElementById('lasertop5').style.visibility="visible";

                        document.getElementById('lasernozzle4').style.visibility="hidden";
                        document.getElementById('lasernozzle5').style.visibility="visible";
                        document.getElementById("lasernozzle5").style.left = ""+leftcorner+"px";
                        document.getElementById("laserhorizontal2").style.top = ""+(top2+2.75)+"px";
                        document.getElementById('laserhorizontal').style.visibility="hidden";
                        document.getElementById('laserhorizontalline').style.visibility="hidden";
                        document.getElementById('laserhorizontal2').style.visibility="visible";
                        document.getElementById('laserhorizontalline2').style.visibility="hidden";
                        document.getElementById('laserhorizontalfront2').style.visibility="hidden";

                        document.getElementById('xaxis3').style.visibility="hidden";
                        document.getElementById('xaxis4').style.visibility="visible";
                        document.getElementById("xaxis4").style.top = ""+(top2+2.75)+"px";
                        r.style.setProperty('--top', ''+topcorner+'px');
                        r.style.setProperty('--topaxis', ''+(topcorner+2.75)+'px');
                        //console.log("The value of --topaxis is: " + rs.getPropertyValue('--topaxis'));
                        document.getElementById('laserhorizontalline22').style.visibility="visible";
                        document.getElementById("laserhorizontalline22").setAttribute('d',"M171.15, "+(169.942-(breadth/2)-topaxis)+" h"+(leftcorner-171.15)+"") ;
                        document.getElementById("laserhorizontalline22").style.strokeWidth = 1.4;
                        document.getElementById("laserhorizontalline22").setAttribute("class","draw");
                        var id4 = 'breadth2'+(repeat)+'';
                        var path4=document.createElementNS(svgNS,"path");
                        specimen2.appendChild(path4);
                        path4.setAttributeNS(null,'id',id4);
                        path4.setAttributeNS(null,'fill','none');
                        document.getElementById(id4).setAttribute('d',"M"+(390-(length/2))+", "+(169.942+(breadth/2))+" v-"+(breadth)+"") ;
                        document.getElementById(id4).style.strokeWidth = 2;
                        document.getElementById(id4).style.strokeDasharray = breadth;
                        document.getElementById(id4).style.strokeDashoffset = breadth;
                        document.getElementById(id4).style.zIndex = 10;
                        document.getElementById(id4).style.animation = "animate "+(breadth/cutspeed)+"s linear forwards";
                        document.getElementById('lasertop5').style.animation = "movelaser "+(breadth/cutspeed)+"s linear forwards";
                        document.getElementById('xaxis4').style.animation = "moveaxis "+(breadth/cutspeed)+"s linear forwards";
                        document.getElementById('laserhorizontal2').style.animation = "moveaxis "+(breadth/cutspeed)+"s linear forwards";

                        r.style.setProperty('--sdoffset', ''+breadth+'');
                        console.log("sdoffset is",+ rs.getPropertyValue('--sdoffset'))
                        document.getElementById("laservertical3").style.strokeDasharray = breadth;
                        document.getElementById("laservertical3").style.animation = "animatelaserreverse "+(breadth/cutspeed)+"s linear forwards";

                        console.log("DURING FOURTH SIDE");
                        console.log("ANIMATION");
                        console.log("laserhorizontalline is ",document.getElementById("laserhorizontalline"));
                        console.log("laservertical3 is",document.getElementById("laservertical3"))
                        console.log("laserhorizontalfront2 is ",document.getElementById("laserhorizontalfront2"));
                        console.log("DRAW");
                        console.log("laserhorizontalline2 is",document.getElementById("laserhorizontalline2"))
                        console.log("laserhorizontalline22 is",document.getElementById("laserhorizontalline22"))
                        console.log("laserfront1 is",document.getElementById("laserfront1"))
//estop
                        document.getElementById("estop").onclick=function()
                        {
                console.log("estop presed")
                setTimeout(function()
                {
                document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; top:409px;"
                document.getElementById("notes").innerHTML="Press the reset button to reset the values used in the cutting.";
                document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
                },250);
                            document.getElementById("lasertop5").style.animationPlayState = 'paused';
                            document.getElementById("lasernozzle5").style.animationPlayState = 'paused';
                            document.getElementById("laservertical3").style.animationPlayState = 'paused';
                            document.getElementById("xaxis4").style.animationPlayState = 'paused';
                            document.getElementById("laserhorizontal2").style.animationPlayState = 'paused';
                            document.getElementById(id4).style.animationPlayState = 'paused';

                            document.getElementById('laserpart1').style.visibility="hidden";
                            document.getElementById('laserhorizontalline22').style.visibility="hidden";
                            document.getElementById('laservertical1').style.visibility="hidden";
                            document.getElementById('laservertical2').style.visibility="hidden";
                            document.getElementById('laservertical3').style.visibility="hidden";
                            document.getElementById('laserfront1').style.visibility="hidden";
                            document.getElementById('laserhorizontalline').style.visibility="hidden";
                            document.getElementById('laserhorizontalfront2').style.visibility="hidden";

                            var lasernozzleleft = $("#lasernozzle5").position().left;
                            var lasernozzletop = $("#lasernozzle5").position().top;
                            var xaxisleft = $("#xaxis4").position().left;
                            var xaxistop = $("#xaxis4").position().top;
                            var lasertopleft = $("#lasertop5").position().left;
                            var lasertoptop = $("#lasertop5").position().top;

                            document.getElementById('lasernozzle5').style.visibility="hidden";
                            document.getElementById('xaxis4').style.visibility="hidden";
                            document.getElementById('lasertop5').style.visibility="hidden";

                            console.log("lasernozzleleft is ",lasernozzleleft);

                            document.getElementById("xaxis0").style.left = ""+(xaxisleft)+"px";
                            document.getElementById("xaxis0").style.top = ""+(xaxistop)+"px";
                            document.getElementById("lasernozzle0").style.left = ""+(lasernozzleleft)+"px";
                            document.getElementById("lasernozzle0").style.top = ""+(lasernozzletop)+"px";
                            document.getElementById("lasertop0").style.left = ""+(lasertopleft)+"px";
                            document.getElementById("lasertop0").style.top = ""+(lasertoptop)+"px";

                            console.log("lasernozzle5 is ",document.getElementById("lasernozzle5"),"and lasernozzle0 is",document.getElementById("lasernozzle0"));
                            console.log("xaxis4 is ",document.getElementById("xaxis4"),"and xaxis0 is",document.getElementById("xaxis0"));
                            document.getElementById('lasernozzle0').style.visibility="visible";
                            document.getElementById('xaxis0').style.visibility="visible";
                            document.getElementById('lasertop0').style.visibility="visible";
                            document.getElementById('lasertop0').style.animation = "";
                            document.getElementById('xaxis0').style.animation = "";
                            document.getElementById("lasernozzle0").style.animation = "";

                            myInt = setInterval(animatearrow, 500);
                            document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 563px; top: 368px; height: 30px; width: 30px; z-index: 10;";//for reset button
                            document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                            //Code for IE9
                            document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                            // Standard syntax
                            document.getElementById("arrow1").style.transform = "rotate(180deg)";
    //reset
                            document.getElementById("reset").onclick=function()
                            {
                                myStopFunction();
                                setTimeout(function()
                                {
                                document.getElementById("notes").style.visibility="hidden";
                                console.log("time for first note hiding in estop press is",(2+(t-0.5))*1000)
                                },(0));
                                setTimeout(function()
                                {
                                document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible;  top:409px;"
                                document.getElementById("notes").innerHTML="After changing values as required, press start-pause button again to resume cutting.";
                                document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
                                console.log("time is",new Date())
                                },250);
                                r.style.setProperty('--left', ''+191.740+'px');
                                r.style.setProperty('--top', ''+92.696+'px');
                                r.style.setProperty('--topaxis', ''+94.914+'px');
                                document.getElementById('start').style.visibility="visible";
                                document.getElementById('pause').style.visibility="hidden";
                                document.getElementById('lasertop0').style.animation = "movelaser 2s linear 2 alternate forwards ";
                                document.getElementById('xaxis0').style.animation = "moveaxis 2s linear 2 alternate forwards ";
                                document.getElementById("lasernozzle0").style.animation = "movenozzle 2s linear 2 alternate forwards ";
                                console.log("LASERTOP2 is ",document.getElementById("lasertop2"));
                                console.log("lasernozzle2 is ",document.getElementById("lasernozzle2"));
                            }
                        }
//pause
                        document.getElementById("pause").onclick=function()
                        {
                            document.getElementById('start').style.visibility="visible";
                            document.getElementById('pause').style.visibility="hidden";
                            document.getElementById("lasertop5").style.animationPlayState = 'paused';
                            document.getElementById("lasernozzle5").style.animationPlayState = 'paused';
                            document.getElementById("xaxis4").style.animationPlayState = 'paused';
                            document.getElementById("laservertical3").style.animationPlayState = 'paused';
                            document.getElementById("laserhorizontal2").style.animationPlayState = 'paused';
                            document.getElementById(id4).style.animationPlayState = 'paused';

                            document.getElementById('laserpart1').style.visibility="hidden";
                            document.getElementById('laserhorizontalline22').style.visibility="hidden";
                            document.getElementById('laservertical1').style.visibility="hidden";
                            document.getElementById('laservertical2').style.visibility="hidden";
                            document.getElementById('laservertical3').style.visibility="hidden";
                            document.getElementById('laserfront1').style.visibility="hidden";
                            document.getElementById('laserhorizontalline').style.visibility="hidden";
                            document.getElementById('laserhorizontalfront2').style.visibility="hidden";

                            var lasernozzleleft = $("#lasernozzle5").position().left;
                            var lasernozzletop = $("#lasernozzle5").position().top;
                            var xaxisleft = $("#xaxis4").position().left;
                            var xaxistop = $("#xaxis4").position().top;
                            var lasertopleft = $("#lasertop5").position().left;
                            var lasertoptop = $("#lasertop5").position().top;

                            document.getElementById('lasernozzle5').style.visibility="hidden";
                            document.getElementById('xaxis4').style.visibility="hidden";
                            document.getElementById('lasertop5').style.visibility="hidden";

                            console.log("lasernozzleleft is ",lasernozzleleft);

                            document.getElementById("xaxis0").style.left = ""+(xaxisleft)+"px";
                            document.getElementById("xaxis0").style.top = ""+(xaxistop)+"px";
                            document.getElementById("lasernozzle0").style.left = ""+(lasernozzleleft)+"px";
                            document.getElementById("lasernozzle0").style.top = ""+(lasernozzletop)+"px";
                            document.getElementById("lasertop0").style.left = ""+(lasertopleft)+"px";
                            document.getElementById("lasertop0").style.top = ""+(lasertoptop)+"px";

                            console.log("lasernozzle5 is ",document.getElementById("lasernozzle5"),"and lasernozzle0 is",document.getElementById("lasernozzle0"));
                            console.log("xaxis4 is ",document.getElementById("xaxis4"),"and xaxis0 is",document.getElementById("xaxis0"));
                            document.getElementById('lasernozzle0').style.visibility="visible";
                            document.getElementById('xaxis0').style.visibility="visible";
                            document.getElementById('lasertop0').style.visibility="visible";
                        }
//start
                        document.getElementById("start").onclick=function()
                        {
                            document.getElementById('pause').style.visibility="visible";
                            document.getElementById('start').style.visibility="hidden";
                            document.getElementById("notes").style.visibility="hidden";
                            r.style.setProperty('--left', ''+leftcorner+'px');
                            r.style.setProperty('--top', ''+topcorner+'px');
                            r.style.setProperty('--topaxis', ''+(topcorner+2.75)+'px');
                            document.getElementById("lasertop5").style.animationPlayState = 'running';
                            document.getElementById("xaxis4").style.animationPlayState = 'running';
                            document.getElementById("lasernozzle5").style.animationPlayState = 'running';
                            document.getElementById("laservertical3").style.animationPlayState = 'running';
                            document.getElementById("laserhorizontal2").style.animationPlayState = 'running';
                            document.getElementById(id4).style.animationPlayState = 'running';

                            document.getElementById('laserpart1').style.visibility="visible";
                            document.getElementById('laserhorizontalline22').style.visibility="visible";
                            document.getElementById('laservertical1').style.visibility="visible";
                            document.getElementById('laservertical2').style.visibility="visible";
                            document.getElementById('laservertical3').style.visibility="visible";
                            document.getElementById('laserfront1').style.visibility="visible";
                            // document.getElementById('laserhorizontalline').style.visibility="visible";
                            // document.getElementById('laserhorizontalfront2').style.visibility="visible";

                            document.getElementById('lasernozzle0').style.visibility="hidden";
                            document.getElementById('xaxis0').style.visibility="hidden";
                            document.getElementById('lasertop0').style.visibility="hidden";
                            document.getElementById('lasernozzle5').style.visibility="visible";
                            document.getElementById('xaxis4').style.visibility="visible";
                            document.getElementById('lasertop5').style.visibility="visible";
                        }
//return
                        document.getElementById("lasertop5").addEventListener("animationend",()=>
                        {
                            document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:60px; top:409px;"
                            document.getElementById("notes").innerHTML="After cutting is finished, the laser is switched off and nozzle moves back to home position. ";
                            setTimeout(function()
                            {
                            document.getElementById("notes").style.visibility="hidden";
                            },(1.9)*1000);
                            document.getElementById('estop1').style.visibility="visible";
                            document.getElementById('estop').style.visibility="hidden";
                            document.getElementById('laservertical2').style.visibility="hidden";
                            document.getElementById('laserhorizontalline22').style.visibility="hidden";
                            document.getElementById('laserpart1').style.visibility="hidden";
                            document.getElementById('laserfront1').style.visibility="hidden";
                            document.getElementById('laservertical3').style.visibility="hidden";


                            document.getElementById('lasertop5').style.visibility="hidden";
                            document.getElementById('lasertop5').style.animation="";
                            document.getElementById("lasertop6").style.left = ""+leftcorner+"px";
                            document.getElementById("lasertop6").style.top = ""+topcorner+"px";
                            document.getElementById('lasertop6').style.visibility="visible";

                            document.getElementById('lasernozzle5').style.visibility="hidden";
                            document.getElementById('lasernozzle6').style.visibility="visible";
                            document.getElementById("lasernozzle6").style.left = ""+leftcorner+"px";

                            document.getElementById('xaxis4').style.visibility="hidden";
                            document.getElementById('xaxis5').style.visibility="visible";
                            document.getElementById("xaxis5").style.top = ""+(topcorner+2.75)+"px";
                            r.style.setProperty('--left', ''+191.740+'px');
                            r.style.setProperty('--top', ''+92.696+'px');
                            r.style.setProperty('--topaxis', ''+94.914+'px');
                            document.getElementById('lasertop6').style.animation = "movelaser 2s linear forwards";
                            document.getElementById('xaxis5').style.animation = "moveaxis 2s linear forwards";
                            document.getElementById("lasernozzle6").style.animation = "movenozzle 2s linear forwards";
                            setTimeout(function()
                            {
                              document.getElementById('nextButton').style.visibility="visible";
                            },(2)*1000);
                        });
                    });
                });
            });
        },((((307.942-(breadth/2))/lenlaser)*t)+(lenlaserfront/lenlaser)*t)*1000);
        }
    }
    else if(shape==1)
    {
        if(!document.getElementById("squareside").value  || !document.getElementById("squareside").value!=" " )
        {
            alert("Enter the value to proceed ");
        }
        else
        {
            var side =  parseFloat(document.getElementById("squareside").value);
            console.log(side)
				}
				var r = document.querySelector(':root');
        var leftcorner = 390-(side/2)-19;
        var topcorner = 169.942-(side/2)-29;
        var topaxis = topcorner+2.75;
        console.log('corners=',leftcorner,topcorner)
        r.style.setProperty('--left', ''+leftcorner+'px');
        r.style.setProperty('--top', ''+topcorner+'px');
        r.style.setProperty('--topaxis', ''+topaxis+'px');
        var rs = getComputedStyle(r);				myInt = setInterval(animatearrow, 500);
        				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 618px; top: 372px; height: 30px; width: 30px; z-index: 10;";//for speed button
        				document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        				//Code for IE9
        				document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        				// Standard syntax
        				document.getElementById("arrow1").style.transform = "rotate(180deg)";
                document.getElementById("speed").onclick=function()
                {
                        myStopFunction();
                        if (repeat==1) {
                          document.getElementById("speedval").innerHTML= ""+(0)+"";
                        } else {
                          document.getElementById("speedval").innerHTML= ""+cuttingspeedvalues[repeat-2][0]+"";
                        }
                        document.getElementById("speedval").style.visibility="visible";
                        document.getElementById("unit").style.visibility="visible";
                        console.log( document.getElementById("speedval"))
                        document.getElementById('uparrow').style.visibility="visible";
                        myInt = setInterval(animatearrow, 500);
                        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 714px; top: 273.5px; height: 30px; width: 30px; z-index: 10;";//for uparrow button
                        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                        //Code for IE9
                        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                        // Standard syntax
                        document.getElementById("arrow1").style.transform = "rotate(180deg)";
                        document.getElementById("uparrow").onclick=function()
                        {
                            myStopFunction();
                            document.getElementById("speedval").innerHTML= ""+cuttingspeedvalues[repeat-1][0]+"";
                            document.getElementById("speedval").style.visibility="visible";
                            document.getElementById("unit").style.visibility="visible";
                            myInt = setInterval(animatearrow, 500);
                            document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 722px; top: 329px; height: 30px; width: 30px; z-index: 10;";//for enter button
                            document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                            //Code for IE9
                            document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                            // Standard syntax
                            document.getElementById("arrow1").style.transform = "rotate(180deg)";
                            document.getElementById("enter").onclick=function()
                            {
                                myStopFunction();
                                myInt = setInterval(animatearrow, 500);
                                document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 696px; top: 350.95px; height: 30px; width: 30px; z-index: 10;";//for origin button
                                document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                                //Code for IE9
                                document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                                // Standard syntax
                                document.getElementById("arrow1").style.transform = "rotate(180deg)";
                            }
                        }

                }
        document.getElementById("origin").onclick=function()
        {
            myStopFunction();
            setTimeout(function()
            {
            document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; top:409px;"
            document.getElementById("notes").innerHTML="The origin button moves the laser nozzle to the origin point of the shape to be made.";
            document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
            },0);
            setTimeout(function()
            {
            document.getElementById("notes").style.visibility="hidden";
            console.log("origin note hidden")
            },(2500));
            document.getElementById("lasertop1").style.animation = "movelaser 2s linear forwards";
            document.getElementById("xaxis1").style.animation = "moveaxis 2s linear forwards";
            document.getElementById("lasernozzle1").style.animation = "movenozzle 2s linear forwards";
            setTimeout(function()
            {
            myInt = setInterval(animatearrow, 500);
            document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 722px; top: 350px; height: 30px; width: 30px; z-index: 10;";//for frame button
            document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
            //Code for IE9
               document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
            // Standard syntax
            document.getElementById("arrow1").style.transform = "rotate(180deg)";
            },(2500));
            document.getElementById("lasertop1").style.animation = "movelaser 2s linear forwards";
            document.getElementById("xaxis1").style.animation = "moveaxis 2s linear forwards";
            document.getElementById("lasernozzle1").style.animation = "movenozzle 2s linear forwards";
            document.getElementById("frame").onclick=function()
            {
                myStopFunction();
                setTimeout(function()
                {
                document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; top:409px;"
                document.getElementById("notes").innerHTML="The frame button moves the laser nozzle to show the frame of the cut area without activating laser.";
                document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
                },0);
                setTimeout(function()
                {
                document.getElementById("notes").style.visibility="hidden";
                myInt = setInterval(animatearrow, 500);
                document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:722px; top: 372px; height: 30px; width: 30px; z-index: 10;";//for start0 button
                document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                //Code for IE9
                   document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                // Standard syntax
                document.getElementById("arrow1").style.transform = "rotate(180deg)";
                console.log("framebutton note hidden")
							},((side+side)/(framespeed/2))*1000);
                document.getElementById('lasertop1').style.visibility="hidden";
                document.getElementById('lasertop1').style.animation="";
                document.getElementById("lasertop01").style.left = ""+leftcorner+"px";
                document.getElementById("lasertop01").style.top = ""+topcorner+"px";
                document.getElementById('lasertop01').style.visibility="visible";
                document.getElementById('lasernozzle1').style.visibility="hidden";
                document.getElementById('lasernozzle01').style.visibility="visible";
                document.getElementById('xaxis1').style.visibility="hidden";
                document.getElementById('xaxis01').style.visibility="visible";
                document.getElementById("xaxis01").style.top = ""+(topcorner+2.75)+"px";
                document.getElementById("lasernozzle01").style.left = ""+leftcorner+"px";
                var left2 = leftcorner+side;
                //console.log('left2=',left2)
                r.style.setProperty('--left', ''+left2+'px');
                //console.log("side is ",document.getElementById(id1));
                document.getElementById('lasertop01').style.animation = "movelaser "+(side/framespeed)+"s linear forwards";
                document.getElementById("lasernozzle01").style.animation = "movenozzle "+(side/framespeed)+"s linear forwards";

                document.getElementById("lasertop01").addEventListener("animationend",()=>
                {
                    document.getElementById('lasertop01').style.visibility="hidden";
                    document.getElementById('lasertop01').style.animation="";
                    document.getElementById("lasertop02").style.left = ""+left2+"px";
                    document.getElementById("lasertop02").style.top = ""+topcorner+"px";
                    document.getElementById('lasertop02').style.visibility="visible";
                    document.getElementById('xaxis01').style.visibility="hidden";
                    document.getElementById('xaxis02').style.visibility="visible";
                    document.getElementById("xaxis02").style.top = ""+(topcorner+2.75)+"px";
                    var top2 = topcorner+side;
                    var topaxis2 = top2+2.75;
                    //console.log('top2=',top2)
                    r.style.setProperty('--top', ''+top2+'px');
                    r.style.setProperty('--topaxis', ''+topaxis2+'px');
                    //console.log("The value of --top is: " + rs.getPropertyValue('--top'));
                    document.getElementById('lasertop02').style.animation = "movelaser "+(side/framespeed)+"s linear forwards";
                    document.getElementById('xaxis02').style.animation = "moveaxis "+(side/framespeed)+"s linear forwards";

                    document.getElementById("lasertop02").addEventListener("animationend",()=>
                    {
                        document.getElementById('lasertop02').style.visibility="hidden";
                        document.getElementById('lasertop02').style.animation="";
                        document.getElementById("lasertop03").style.left = ""+left2+"px";
                        document.getElementById("lasertop03").style.top = ""+top2+"px";
                        document.getElementById('lasertop03').style.visibility="visible";
                        document.getElementById('lasernozzle01').style.visibility="hidden";
                        document.getElementById('lasernozzle02').style.visibility="visible";
                        document.getElementById("lasernozzle02").style.left = ""+left2+"px";
                        r.style.setProperty('--left', ''+leftcorner+'px');
                        document.getElementById('lasertop03').style.animation = "movelaser "+(side/framespeed)+"s linear forwards";
                        document.getElementById("lasernozzle02").style.animation = "movenozzle "+(side/framespeed)+"s linear forwards";

                        document.getElementById("lasertop03").addEventListener("animationend",()=>
                        {
                            document.getElementById('lasertop03').style.visibility="hidden";
                            document.getElementById('lasertop03').style.animation="";
                            document.getElementById("lasertop04").style.left = ""+leftcorner+"px";
                            document.getElementById("lasertop04").style.top = ""+top2+"px";
                            document.getElementById('lasertop04').style.visibility="visible";
                            document.getElementById('lasernozzle02').style.visibility="hidden";
                            document.getElementById('lasernozzle03').style.visibility="visible";
                            document.getElementById("lasernozzle03").style.left = ""+leftcorner+"px";
                            document.getElementById('xaxis02').style.visibility="hidden";
                            document.getElementById('xaxis03').style.visibility="visible";
                            document.getElementById("xaxis03").style.top = ""+(top2+2.75)+"px";
                            r.style.setProperty('--top', ''+topcorner+'px');
                            r.style.setProperty('--topaxis', ''+(topcorner+2.75)+'px');
                            //console.log("The value of --topaxis is: " + rs.getPropertyValue('--topaxis'))
                            document.getElementById('lasertop04').style.animation = "movelaser "+(side/framespeed)+"s linear forwards";
                            document.getElementById('xaxis03').style.animation = "moveaxis "+(side/framespeed)+"s linear forwards";
                        });
                    });
                });
            }
        }
        document.getElementById("start0").onclick=function()
        {
          if (repeat==1) {
              var cutspeed =10;
          } else if(repeat==2){
              var cutspeed = 12.5;
          }else if(repeat==3){
              var cutspeed = 15;
          }else if(repeat==4){
              var cutspeed = 17.5;
          }else if(repeat==5){
              var cutspeed = 20;
          }
            myStopFunction();
            document.getElementById('pause').style.visibility="visible";
            document.getElementById('start0').style.visibility="hidden";
            setTimeout(function()
            {
            document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible;  top:409px;"
            document.getElementById("notes").innerHTML="The tube generates the laser beam, which is deflected by the mirrors to the nozzle, where the lens focuses it into the material";
            document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
            },1000);
            setTimeout(function()
            {
            document.getElementById("notes").style.visibility="hidden";
            console.log("time for first note hiding after start button pressed is",(2+(t-0.5))*1000)
            },((((307.942-(breadth/2))/lenlaser)*t)+(lenlaserfront/lenlaser)*t)*1000);
            var side =  parseFloat(document.getElementById("squareside").value);
            document.getElementById("laser").setAttribute('d',"m339 48.5h-179v"+(169.942-(side/2)-48.5)+" h"+(leftcorner-160)+"");
            var lenlaser = document.getElementById("laser").getTotalLength();
            document.getElementById("laser").style.strokeDasharray = lenlaser;
            document.getElementById("laser").style.strokeDashoffset = lenlaser;
            document.getElementById("laser").style.strokeWidth = 1.4;
            document.getElementById("laser").style.animation = "animatelaser "+(t)+"s linear forwards";
            console.log("laser is",document.getElementById("laser"))

            document.getElementById("laserfront").setAttribute('d',"m168 303.5h"+(leftcorner-149.5)+"v84.468");
            var lenlaserfront = document.getElementById("laserfront").getTotalLength();
            document.getElementById("laserfront").style.strokeDasharray = lenlaserfront;
            document.getElementById("laserfront").style.strokeDashoffset = lenlaserfront;
            document.getElementById("laserfront").style.strokeWidth = 1.4;
            document.getElementById("laserfront").style.animation = "animatelaser "+((lenlaserfront/lenlaser)*t)+"s linear "+((((307.942-(side/2))/lenlaser)*t))+"s forwards";
            console.log("laserfront is",document.getElementById("laserfront"))
//1st side
            setTimeout(function()
            {
            document.getElementById('lasertop04').style.visibility="hidden";
            document.getElementById('lasertop04').style.animation="";
            document.getElementById('lasertop1').style.visibility="hidden";
            document.getElementById('lasertop1').style.animation="";
            document.getElementById("lasertop2").style.left = ""+leftcorner+"px";
            document.getElementById("lasertop2").style.top = ""+topcorner+"px";
            document.getElementById('lasertop2').style.visibility="visible";
            document.getElementById('lasernozzle03').style.visibility="hidden";
            document.getElementById('lasernozzle1').style.visibility="hidden";
            document.getElementById('lasernozzle2').style.visibility="visible";
            document.getElementById('laser').style.visibility="hidden";
            document.getElementById('laserfront').style.visibility="hidden";
            document.getElementById('laserpart1').style.visibility="visible";
            document.getElementById('xaxis03').style.visibility="hidden";
            document.getElementById('xaxis1').style.visibility="hidden";
            document.getElementById('xaxis2').style.visibility="visible";
            document.getElementById("xaxis2").style.top = ""+(topcorner+2.75)+"px";

            document.getElementById('laserhorizontalline2').style.visibility="visible";
            document.getElementById("laserhorizontalline2").setAttribute('d',"M171.15, "+(169.942-(side/2)-topaxis)+" h"+(leftcorner-171.15)+"") ;
            document.getElementById("laserhorizontalline2").style.strokeWidth = 1.4;
            document.getElementById("laserhorizontalline2").setAttribute("class","draw");

            document.getElementById('laservertical2').style.visibility="visible";
            document.getElementById("laservertical2").setAttribute('d',"M160, 89.1 v"+(topaxis-89.1)+"");
            document.getElementById("laservertical2").style.strokeWidth = 1.4;
            document.getElementById("laservertical2").setAttribute("class","draw");

            document.getElementById('laserfront1').style.visibility="visible";
            document.getElementById("laserfront1").setAttribute('d',"m168 303.5h"+(leftcorner-168.3)+"");
            document.getElementById("laserfront1").style.strokeWidth = 1.4;
            document.getElementById("laserfront1").setAttribute("class","draw");

            //console.log("lasertop2 is",document.getElementById("lasertop2"))
            //console.log("xaxis1 is",document.getElementById("xaxis1"))
            // document.getElementById('laser').style.visibility="hidden";
            // document.getElementById('laserfront').style.visibility="hidden";
            document.getElementById("lasernozzle2").style.left = ""+leftcorner+"px";
            var left2 = leftcorner+side;
            //console.log('left2=',left2)
            r.style.setProperty('--left', ''+left2+'px');
            //console.log("The value of --left is: " + rs.getPropertyValue('--left'));

            document.getElementById("laserhorizontal").style.top = ""+(topcorner+2.75)+"px";
            document.getElementById('laserhorizontal').style.visibility="visible";
            document.getElementById('laserhorizontalline').style.visibility="visible";
            document.getElementById("laserhorizontalline").setAttribute('d',"M"+(leftcorner)+", "+(169.942-(side/2)-topaxis)+" h"+(side)+"") ;
            document.getElementById("laserhorizontalline").style.strokeWidth = 1.4;
            document.getElementById("laserhorizontalline").style.strokeDasharray = side;
            document.getElementById("laserhorizontalline").style.strokeDashoffset = side;
            document.getElementById("laserhorizontalline").style.zIndex = 11;
            document.getElementById("laserhorizontalline").style.animation = "animatelaser "+(side/cutspeed)+"s linear forwards";

            document.getElementById('laserhorizontalfront1').style.visibility="visible";
            document.getElementById("laserhorizontalfront1").setAttribute('d',"M"+(leftcorner)+",303.5 h"+(side)+"") ;
            document.getElementById("laserhorizontalfront1").style.strokeWidth = 1.4;
            document.getElementById("laserhorizontalfront1").style.strokeDasharray = side;
            document.getElementById("laserhorizontalfront1").style.strokeDashoffset = side;
            document.getElementById("laserhorizontalfront1").style.zIndex = 11;
            document.getElementById("laserhorizontalfront1").style.animation = "animatelaser "+(side/cutspeed)+"s linear forwards";

            console.log("laserhorizontalline first is ",document.getElementById("laserhorizontalline"));

            var id1 = 'length1'+(repeat)+'';
            var path1=document.createElementNS(svgNS,"path");
            specimen2.appendChild(path1);
            path1.setAttributeNS(null,'id',id1);
            path1.setAttributeNS(null,'fill','none');
            document.getElementById(id1).setAttribute('d',"M"+(390-(side/2))+", "+(169.942-(side/2))+" h"+(side)+"") ;
            document.getElementById(id1).style.strokeWidth = 2;
            document.getElementById(id1).style.strokeDasharray = side;
            document.getElementById(id1).style.strokeDashoffset = side;
            document.getElementById(id1).style.zIndex = 10;
            document.getElementById(id1).style.animation = "animate "+(side/cutspeed)+"s linear forwards";


            console.log("laserhorizontal is ",document.getElementById("laserhorizontal"));
            //console.log("side is ",document.getElementById(id1));
            document.getElementById('lasertop2').style.animation = "movelaser "+(side/cutspeed)+"s linear forwards";
            document.getElementById("lasernozzle2").style.animation = "movenozzle "+(side/cutspeed)+"s linear forwards";
						setTimeout(function()
            {
            document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; top:409px;"
            document.getElementById("notes").innerHTML="The motors will have the nozzle move in the required path to cut the material using the focused laser beam.";
            document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
            console.log("motors note visible")
            },(100));
            setTimeout(function()
            {
            document.getElementById("notes").style.visibility="hidden";
            console.log("motors note hidden")
            },(3000));
            setTimeout(function()
            {
            document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible;  top:409px;"
            document.getElementById("notes").innerHTML="Press the start-pause button again to pause the cutting process.";
            document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
            console.log("startbutton note visible")
            },3100);
            document.getElementById("estop").onclick=function()
            {
                myStopFunction();
                console.log("estop presed")
                setTimeout(function()
                {
                document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; top:409px;"
                document.getElementById("notes").innerHTML="Press the reset button to reset the values used in the cutting.";
                document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
                },250);
                document.getElementById("lasertop2").style.animationPlayState = 'paused';
                document.getElementById("lasernozzle2").style.animationPlayState = 'paused';
                document.getElementById("laserhorizontalfront1").style.animationPlayState = 'paused';
                document.getElementById("laserhorizontalline").style.animationPlayState = 'paused';
                document.getElementById(id1).style.animationPlayState = 'paused';

                document.getElementById('laserpart1').style.visibility="hidden";
                document.getElementById('laserhorizontalline2').style.visibility="hidden";
                document.getElementById('laservertical2').style.visibility="hidden";
                document.getElementById('laserfront1').style.visibility="hidden";
                document.getElementById('laserhorizontalline').style.visibility="hidden";
                document.getElementById('laserhorizontalfront1').style.visibility="hidden";

                var lasernozzleleft = $("#lasernozzle2").position().left;
                var lasernozzletop = $("#lasernozzle2").position().top;
                var xaxisleft = $("#xaxis2").position().left;
                var xaxistop = $("#xaxis2").position().top;
                var lasertopleft = $("#lasertop2").position().left;
                var lasertoptop = $("#lasertop2").position().top;

                document.getElementById('lasernozzle2').style.visibility="hidden";
                document.getElementById('xaxis2').style.visibility="hidden";
                document.getElementById('lasertop2').style.visibility="hidden";

                console.log("lasernozzleleft is ",lasernozzleleft);

                document.getElementById("xaxis0").style.left = ""+(xaxisleft)+"px";
                document.getElementById("xaxis0").style.top = ""+(xaxistop)+"px";
                document.getElementById("lasernozzle0").style.left = ""+(lasernozzleleft)+"px";
                document.getElementById("lasernozzle0").style.top = ""+(lasernozzletop)+"px";
                document.getElementById("lasertop0").style.left = ""+(lasertopleft)+"px";
                document.getElementById("lasertop0").style.top = ""+(lasertoptop)+"px";

                console.log("lasernozzle2 is ",document.getElementById("lasernozzle2"),"and lasernozzle0 is",document.getElementById("lasernozzle0"));
                console.log("xaxis2 is ",document.getElementById("xaxis2"),"and xaxis0 is",document.getElementById("xaxis0"));
                document.getElementById('lasernozzle0').style.visibility="visible";
                document.getElementById('xaxis0').style.visibility="visible";
                document.getElementById('lasertop0').style.visibility="visible";

                myInt = setInterval(animatearrow, 500);
                document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 563px; top: 368px; height: 30px; width: 30px; z-index: 10;";//for reset button
                document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                //Code for IE9
                document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                // Standard syntax
                document.getElementById("arrow1").style.transform = "rotate(180deg)";

                document.getElementById("reset").onclick=function()
                {
                    myStopFunction();
                    setTimeout(function()
                    {
                    document.getElementById("notes").style.visibility="hidden";
                    console.log("time for first note hiding in estop press is",(2+(t-0.5))*1000)
                    },(0));
                    setTimeout(function()
                    {
                    document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; top:409px;"
                    document.getElementById("notes").innerHTML="After changing values as required, press start-pause button again to resume cutting.";
                    document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
                    console.log("time is",new Date())
                    },250);
                    r.style.setProperty('--left', ''+191.740+'px');
                    r.style.setProperty('--top', ''+92.696+'px');
                    r.style.setProperty('--topaxis', ''+94.914+'px');
                    document.getElementById('start').style.visibility="visible";
                    document.getElementById('pause').style.visibility="hidden";
                    document.getElementById('lasertop0').style.animation = "movelaser 2s linear 2 alternate forwards ";
                    document.getElementById('xaxis0').style.animation = "moveaxis 2s linear 2 alternate forwards ";
                    document.getElementById("lasernozzle0").style.animation = "movenozzle 2s linear 2 alternate forwards ";
                    console.log("LASERTOP2 is ",document.getElementById("lasertop2"));
                    console.log("lasernozzle2 is ",document.getElementById("lasernozzle2"));
                }
            }

            document.getElementById("pause").onclick=function()
            {
                setTimeout(function()
                {
                document.getElementById("notes").style.visibility="hidden";
                console.log("startbutton note hidden")
                },0);
                setTimeout(function()
                {
                document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; top:409px;"
                document.getElementById("notes").innerHTML="Press the button again to resume cutting.";
                document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
                },500);
                console.log("PAUSE pressed")
                document.getElementById('start').style.visibility="visible";
                document.getElementById('pause').style.visibility="hidden";
                document.getElementById("lasertop2").style.animationPlayState = 'paused';
                document.getElementById("lasernozzle2").style.animationPlayState = 'paused';
                document.getElementById("laserhorizontalfront1").style.animationPlayState = 'paused';
                document.getElementById("laserhorizontalline").style.animationPlayState = 'paused';
                document.getElementById(id1).style.animationPlayState = 'paused';
                document.getElementById('laserpart1').style.visibility="hidden";
                document.getElementById('laserhorizontalline2').style.visibility="hidden";
                document.getElementById('laservertical2').style.visibility="hidden";
                document.getElementById('laserfront1').style.visibility="hidden";
                document.getElementById('laserhorizontalline').style.visibility="hidden";
                document.getElementById('laserhorizontalfront1').style.visibility="hidden";

                var lasernozzleleft = $("#lasernozzle2").position().left;
                var lasernozzletop = $("#lasernozzle2").position().top;
                var xaxisleft = $("#xaxis2").position().left;
                var xaxistop = $("#xaxis2").position().top;
                var lasertopleft = $("#lasertop2").position().left;
                var lasertoptop = $("#lasertop2").position().top;

                document.getElementById('lasernozzle2').style.visibility="hidden";
                document.getElementById('xaxis2').style.visibility="hidden";
                document.getElementById('lasertop2').style.visibility="hidden";

                console.log("lasernozzleleft is ",lasernozzleleft);

                document.getElementById("xaxis0").style.left = ""+(xaxisleft)+"px";
                document.getElementById("xaxis0").style.top = ""+(xaxistop)+"px";
                document.getElementById("lasernozzle0").style.left = ""+(lasernozzleleft)+"px";
                document.getElementById("lasernozzle0").style.top = ""+(lasernozzletop)+"px";
                document.getElementById("lasertop0").style.left = ""+(lasertopleft)+"px";
                document.getElementById("lasertop0").style.top = ""+(lasertoptop)+"px";

                console.log("lasernozzle2 is ",document.getElementById("lasernozzle2"),"and lasernozzle0 is",document.getElementById("lasernozzle0"));
                console.log("xaxis2 is ",document.getElementById("xaxis2"),"and xaxis0 is",document.getElementById("xaxis0"));
                document.getElementById('lasernozzle0').style.visibility="visible";
                document.getElementById('xaxis0').style.visibility="visible";
                document.getElementById('lasertop0').style.visibility="visible";
            }
            document.getElementById("start").onclick=function()
            {
                document.getElementById("notes").style.visibility="hidden";
                n1++;
                console.log("START pressed and n1=",n1)
                if (n1==1) {
                setTimeout(function()
                {
                document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; top:409px;"
                document.getElementById("notes").innerHTML="At any point during cutting, the emergency stop button can be pressed to stop the process to reduce damage due to any accident.";
                document.getElementById("notes").style.textAlign = "center";
                document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
                myInt = setInterval(animatearrow, 500);
                document.getElementById('arrow1').style="visibility:visible ;position:absolute;left: 611px; top: 203px; height: 40px; width: 40px; z-index: 10;";//for estop button
                document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                //Code for IE9
                document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                // Standard syntax
                document.getElementById("arrow1").style.transform = "rotate(180deg)";
                },(100));
                setTimeout(function()
                {
                myStopFunction();
                document.getElementById("notes").style.visibility="hidden";
                },(4000));
                }
                console.log("START pressed")
                document.getElementById('pause').style.visibility="visible";
                document.getElementById('start').style.visibility="hidden";
                r.style.setProperty('--left', ''+left2+'px');
                r.style.setProperty('--top', ''+topcorner+'px');
                r.style.setProperty('--topaxis', ''+topaxis+'px');
                document.getElementById("lasertop2").style.animationPlayState = 'running';
                document.getElementById("lasernozzle2").style.animationPlayState = 'running';
                document.getElementById("laserhorizontalfront1").style.animationPlayState = 'running';
                document.getElementById("laserhorizontalline").style.animationPlayState = 'running';
                document.getElementById(id1).style.animationPlayState = 'running';

                document.getElementById('laserpart1').style.visibility="visible";
                document.getElementById('laserhorizontalline2').style.visibility="visible";
                document.getElementById('laservertical2').style.visibility="visible";
                document.getElementById('laserfront1').style.visibility="visible";
                document.getElementById('laserhorizontalline').style.visibility="visible";
                document.getElementById('laserhorizontalfront1').style.visibility="visible";

                document.getElementById('lasernozzle0').style.visibility="hidden";
                document.getElementById('xaxis0').style.visibility="hidden";
                document.getElementById('lasertop0').style.visibility="hidden";
                document.getElementById('lasernozzle2').style.visibility="visible";
                document.getElementById('xaxis2').style.visibility="visible";
                document.getElementById('lasertop2').style.visibility="visible";
            }
//2nd side
            document.getElementById("lasertop2").addEventListener("animationend",()=>
            {
                document.getElementById('lasertop2').style.visibility="hidden";
                document.getElementById('lasertop2').style.animation="";
                document.getElementById("lasertop3").style.left = ""+left2+"px";
                document.getElementById("lasertop3").style.top = ""+topcorner+"px";
                document.getElementById('lasertop3').style.visibility="visible";
                document.getElementById('xaxis2').style.visibility="hidden";
                document.getElementById('xaxis3').style.visibility="visible";
                document.getElementById("xaxis3").style.top = ""+(topcorner+2.75)+"px";


                document.getElementById('lasernozzle2').style.visibility="hidden";
                document.getElementById('lasernozzle3').style.visibility="visible";
                document.getElementById("lasernozzle3").style.left = ""+left2+"px";
                var top2 = topcorner+side;
                var topaxis2 = top2+2.75;
                //console.log('top2=',top2)
                r.style.setProperty('--top', ''+top2+'px');
                r.style.setProperty('--topaxis', ''+topaxis2+'px');
                //console.log("The value of --top is: " + rs.getPropertyValue('--top'));

                var id2 = 'breadth1'+(repeat)+'';
                var path2=document.createElementNS(svgNS,"path");
                specimen2.appendChild(path2);
                path2.setAttributeNS(null,'id',id2);
                path2.setAttributeNS(null,'fill','none');
                document.getElementById(id2).setAttribute('d',"M"+(390+(side/2))+", "+(169.942-(side/2))+" v"+(side)+"") ;
                document.getElementById(id2).style.strokeWidth = 2;
                document.getElementById(id2).style.strokeDasharray = side;
                document.getElementById(id2).style.strokeDashoffset = side;
                document.getElementById(id2).style.zIndex = 10;
                document.getElementById(id2).style.animation = "animate "+(side/cutspeed)+"s linear forwards";
                document.getElementById('lasertop3').style.animation = "movelaser "+(side/cutspeed)+"s linear forwards";
                document.getElementById('xaxis3').style.animation = "moveaxis "+(side/cutspeed)+"s linear forwards";
                document.getElementById('laserhorizontal').style.animation = "moveaxis "+(side/cutspeed)+"s linear forwards";

                document.getElementById('laserhorizontalfront1').style.visibility="hidden";
                document.getElementById('laserhorizontalfront1').style.animation="";
                document.getElementById("laserhorizontalfront2").setAttribute('d',"M"+(leftcorner)+",303.5 h"+(side)+"") ;
                document.getElementById("laserhorizontalfront2").style.strokeWidth = 1.4;
                document.getElementById("laserhorizontalfront2").style.strokeDasharray = side;
                document.getElementById("laserhorizontalfront2").setAttribute("class","draw");
                document.getElementById('laserhorizontalfront2').style.visibility="visible";

                document.getElementById('laservertical1').style.visibility="visible";
                document.getElementById("laservertical1").setAttribute('d',"M"+(160)+", "+(topaxis)+" v"+(side)+"") ;
                document.getElementById("laservertical1").style.strokeWidth = 1.4;
                document.getElementById("laservertical1").style.strokeDasharray = side;
                document.getElementById("laservertical1").style.strokeDashoffset = side;
                document.getElementById("laservertical1").style.zIndex = 11;
                document.getElementById("laservertical1").style.animation = "animatelaser "+(side/cutspeed)+"s linear forwards";

                document.getElementById("estop").onclick=function()
                {
                    console.log("estop pressed")
                    setTimeout(function()
                    {
                    document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; top:409px;"
                    document.getElementById("notes").innerHTML="Press the reset button to reset the values used in the cutting.";
                    document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
                    },250);
                    console.log("estop pressed")
                    document.getElementById("lasertop3").style.animationPlayState = 'paused';
                    document.getElementById("lasernozzle3").style.animationPlayState = 'paused';
                    document.getElementById("laservertical1").style.animationPlayState = 'paused';
                    document.getElementById("xaxis3").style.animationPlayState = 'paused';
                    document.getElementById("laserhorizontal").style.animationPlayState = 'paused';
                    document.getElementById(id2).style.animationPlayState = 'paused';

                    document.getElementById('laserpart1').style.visibility="hidden";
                    document.getElementById('laserhorizontalline2').style.visibility="hidden";
                    document.getElementById('laservertical1').style.visibility="hidden";
                    document.getElementById('laservertical2').style.visibility="hidden";
                    document.getElementById('laserfront1').style.visibility="hidden";
                    document.getElementById('laserhorizontalline').style.visibility="hidden";
                    document.getElementById('laserhorizontalfront2').style.visibility="hidden";

                    var lasernozzleleft = $("#lasernozzle3").position().left;
                    var lasernozzletop = $("#lasernozzle3").position().top;
                    var xaxisleft = $("#xaxis3").position().left;
                    var xaxistop = $("#xaxis3").position().top;
                    var lasertopleft = $("#lasertop3").position().left;
                    var lasertoptop = $("#lasertop3").position().top;

                    document.getElementById('lasernozzle3').style.visibility="hidden";
                    document.getElementById('xaxis3').style.visibility="hidden";
                    document.getElementById('lasertop3').style.visibility="hidden";

                    console.log("lasernozzleleft is ",lasernozzleleft);

                    document.getElementById("xaxis0").style.left = ""+(xaxisleft)+"px";
                    document.getElementById("xaxis0").style.top = ""+(xaxistop)+"px";
                    document.getElementById("lasernozzle0").style.left = ""+(lasernozzleleft)+"px";
                    document.getElementById("lasernozzle0").style.top = ""+(lasernozzletop)+"px";
                    document.getElementById("lasertop0").style.left = ""+(lasertopleft)+"px";
                    document.getElementById("lasertop0").style.top = ""+(lasertoptop)+"px";

                    console.log("lasernozzle3 is ",document.getElementById("lasernozzle3"),"and lasernozzle0 is",document.getElementById("lasernozzle0"));
                    console.log("xaxis3 is ",document.getElementById("xaxis3"),"and xaxis0 is",document.getElementById("xaxis0"));
                    document.getElementById('lasernozzle0').style.visibility="visible";
                    document.getElementById('xaxis0').style.visibility="visible";
                    document.getElementById('lasertop0').style.visibility="visible";

                    document.getElementById('lasertop0').style.animation = "";
                    document.getElementById('xaxis0').style.animation = "";
                    document.getElementById("lasernozzle0").style.animation = "";

                    myInt = setInterval(animatearrow, 500);
                    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 563px; top: 368px; height: 30px; width: 30px; z-index: 10;";//for reset button
                    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                    //Code for IE9
                    document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                    // Standard syntax
                    document.getElementById("arrow1").style.transform = "rotate(180deg)";

                    document.getElementById("reset").onclick=function()
                    {
                        myStopFunction();
                    	setTimeout(function()
                    	{
                    	document.getElementById("notes").style.visibility="hidden";
                    	console.log("time for first note hiding in estop press is",(2+(t-0.5))*1000)
                    	},(0));
                    	setTimeout(function()
                    	{
                    	document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:10px; top:409px;"
                    	document.getElementById("notes").innerHTML="After changing values as required, press start-pause button again to resume cutting.";
                    	document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
                    	console.log("time is",new Date())
                    	},250);
                        console.log("RESET pressed")
                        r.style.setProperty('--left', ''+191.740+'px');
                        r.style.setProperty('--top', ''+92.696+'px');
                        r.style.setProperty('--topaxis', ''+94.914+'px');
                        document.getElementById('start').style.visibility="visible";
                        document.getElementById('pause').style.visibility="hidden";
                        document.getElementById('lasertop0').style.animation = "movelaser 2s linear 2 alternate forwards ";
                        document.getElementById('xaxis0').style.animation = "moveaxis 2s linear 2 alternate forwards ";
                        document.getElementById("lasernozzle0").style.animation = "movenozzle 2s linear 2 alternate forwards ";
                        console.log("LASERTOP2 is ",document.getElementById("lasertop2"));
                        console.log("lasernozzle2 is ",document.getElementById("lasernozzle2"));
                    }
                }

                document.getElementById("pause").onclick=function()
                {
                    document.getElementById('start').style.visibility="visible";
                    document.getElementById('pause').style.visibility="hidden";
                    document.getElementById("lasertop3").style.animationPlayState = 'paused';
                    document.getElementById("lasernozzle3").style.animationPlayState = 'paused';
                    document.getElementById("xaxis3").style.animationPlayState = 'paused';
                    document.getElementById("laservertical1").style.animationPlayState = 'paused';
                    document.getElementById("laserhorizontal").style.animationPlayState = 'paused';
                    document.getElementById(id2).style.animationPlayState = 'paused';

                    document.getElementById('laserpart1').style.visibility="hidden";
                    document.getElementById('laserhorizontalline2').style.visibility="hidden";
                    document.getElementById('laservertical1').style.visibility="hidden";
                    document.getElementById('laservertical2').style.visibility="hidden";
                    document.getElementById('laserfront1').style.visibility="hidden";
                    document.getElementById('laserhorizontalline').style.visibility="hidden";
                    document.getElementById('laserhorizontalfront2').style.visibility="hidden";

                    var lasernozzleleft = $("#lasernozzle3").position().left;
                    var lasernozzletop = $("#lasernozzle3").position().top;
                    var xaxisleft = $("#xaxis3").position().left;
                    var xaxistop = $("#xaxis3").position().top;
                    var lasertopleft = $("#lasertop3").position().left;
                    var lasertoptop = $("#lasertop3").position().top;

                    document.getElementById('lasernozzle3').style.visibility="hidden";
                    document.getElementById('xaxis3').style.visibility="hidden";
                    document.getElementById('lasertop3').style.visibility="hidden";

                    console.log("lasernozzleleft is ",lasernozzleleft);

                    document.getElementById("xaxis0").style.left = ""+(xaxisleft)+"px";
                    document.getElementById("xaxis0").style.top = ""+(xaxistop)+"px";
                    document.getElementById("lasernozzle0").style.left = ""+(lasernozzleleft)+"px";
                    document.getElementById("lasernozzle0").style.top = ""+(lasernozzletop)+"px";
                    document.getElementById("lasertop0").style.left = ""+(lasertopleft)+"px";
                    document.getElementById("lasertop0").style.top = ""+(lasertoptop)+"px";

                    console.log("lasernozzle3 is ",document.getElementById("lasernozzle3"),"and lasernozzle0 is",document.getElementById("lasernozzle0"));
                    console.log("xaxis3 is ",document.getElementById("xaxis3"),"and xaxis0 is",document.getElementById("xaxis0"));
                    document.getElementById('lasernozzle0').style.visibility="visible";
                    document.getElementById('xaxis0').style.visibility="visible";
                    document.getElementById('lasertop0').style.visibility="visible";
                }
                document.getElementById("start").onclick=function()
                {
                    document.getElementById("notes").style.visibility="hidden";
                    document.getElementById('pause').style.visibility="visible";
                    document.getElementById('start').style.visibility="hidden";
                    r.style.setProperty('--left', ''+left2+'px');
                    r.style.setProperty('--top', ''+top2+'px');
                    r.style.setProperty('--topaxis', ''+topaxis2+'px');
                    document.getElementById("lasertop3").style.animationPlayState = 'running';
                    document.getElementById("xaxis3").style.animationPlayState = 'running';
                    document.getElementById("lasernozzle3").style.animationPlayState = 'running';
                    document.getElementById("laservertical1").style.animationPlayState = 'running';
                    document.getElementById("laserhorizontal").style.animationPlayState = 'running';
                    document.getElementById(id2).style.animationPlayState = 'running';

                    document.getElementById('laserpart1').style.visibility="visible";
                    document.getElementById('laserhorizontalline2').style.visibility="visible";
                    document.getElementById('laservertical1').style.visibility="visible";
                    document.getElementById('laservertical2').style.visibility="visible";
                    document.getElementById('laserfront1').style.visibility="visible";
                    document.getElementById('laserhorizontalline').style.visibility="visible";
                    document.getElementById('laserhorizontalfront2').style.visibility="visible";

                    document.getElementById('lasernozzle0').style.visibility="hidden";
                    document.getElementById('xaxis0').style.visibility="hidden";
                    document.getElementById('lasertop0').style.visibility="hidden";
                    document.getElementById('lasernozzle3').style.visibility="visible";
                    document.getElementById('xaxis3').style.visibility="visible";
                    document.getElementById('lasertop3').style.visibility="visible";
                }
//3rd side
                document.getElementById("lasertop3").addEventListener("animationend",()=>
                {
                    document.getElementById('lasertop3').style.visibility="hidden";
                    document.getElementById('lasertop3').style.animation="";
                    document.getElementById("lasertop4").style.left = ""+left2+"px";
                    document.getElementById("lasertop4").style.top = ""+top2+"px";
                    document.getElementById('lasertop4').style.visibility="visible";

                    document.getElementById('lasernozzle3').style.visibility="hidden";
                    document.getElementById('lasernozzle4').style.visibility="visible";
                    document.getElementById("lasernozzle4").style.left = ""+left2+"px";
                    r.style.setProperty('--left', ''+leftcorner+'px');
                    //console.log("The value of --left is: " + rs.getPropertyValue('--left'));

                    var id3 = 'length2'+(repeat)+'';
                    var path3=document.createElementNS(svgNS,"path");
                    specimen2.appendChild(path3);
                    path3.setAttributeNS(null,'id',id3);
                    path3.setAttributeNS(null,'fill','none');
                    document.getElementById(id3).setAttribute('d',"M"+(390+(side/2))+", "+(169.942+(side/2))+" h-"+(side)+"") ;
                    document.getElementById(id3).style.strokeWidth = 2;
                    document.getElementById(id3).style.strokeDasharray = side;
                    document.getElementById(id3).style.strokeDashoffset = side;
                    document.getElementById(id3).style.zIndex = 10;
                    document.getElementById(id3).style.animation = "animate "+(side/cutspeed)+"s linear forwards";
                    document.getElementById('lasertop4').style.animation = "movelaser "+(side/cutspeed)+"s linear forwards";
                    document.getElementById("lasernozzle4").style.animation = "movenozzle "+(side/cutspeed)+"s linear forwards";

                    r.style.setProperty('--sdoffset', ''+side+'');
                    console.log("sdoffset is",+ rs.getPropertyValue('--sdoffset'))
                    document.getElementById("laserhorizontalline").style.animation = "animatelaserreverse "+(side/cutspeed)+"s linear forwards";
                    document.getElementById("laserhorizontalfront2").style.strokeDasharray = side;
                    document.getElementById("laserhorizontalfront2").style.zIndex = 11;
                    document.getElementById("laserhorizontalfront2").style.animation = "animatelaserreverse "+(side/cutspeed)+"s linear forwards";

                    console.log("laserhorizontalline is",document.getElementById('laserhorizontalline'))
                    console.log("laserhorizontalfront2 is",document.getElementById('laserhorizontalfront2'))
                    console.log("laserhorizontalfront2 animation is",document.getElementById('laserhorizontalfront2').style.animation)
                    console.log("laserhorizontalfront1 is",document.getElementById('laserhorlaserhorizontalfront2izontalfront1'))

                    document.getElementById('laservertical1').style.visibility="hidden";
                    document.getElementById('laservertical1').style.animation="";
                    document.getElementById("laservertical3").setAttribute('d',"M"+(160)+", "+(topaxis)+" v"+(side)+"") ;
                    document.getElementById("laservertical3").style.strokeWidth = 1.4;
                    document.getElementById("laservertical3").style.strokeDasharray = side;
                    document.getElementById("laservertical3").setAttribute("class","draw");
                    document.getElementById('laservertical3').style.visibility="visible";
//estop
                    document.getElementById("estop").onclick=function()
                    {
                        console.log("estop presed")
                        setTimeout(function()
                        {
                        document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; top:409px;"
                        document.getElementById("notes").innerHTML="Press the reset button to reset the values used in the cutting.";
                        document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
                        },250);
                        document.getElementById("lasertop4").style.animationPlayState = 'paused';
                        document.getElementById("lasernozzle4").style.animationPlayState = 'paused';
                        document.getElementById("laserhorizontalfront2").style.animationPlayState = 'paused';
                        document.getElementById("laserhorizontalline").style.animationPlayState = 'paused';
                        document.getElementById(id3).style.animationPlayState = 'paused';

                        document.getElementById('laserpart1').style.visibility="hidden";
                        document.getElementById('laserhorizontalline2').style.visibility="hidden";
                        document.getElementById('laservertical2').style.visibility="hidden";
                        document.getElementById('laservertical3').style.visibility="hidden";
                        document.getElementById('laserfront1').style.visibility="hidden";
                        document.getElementById('laserhorizontalline').style.visibility="hidden";
                        document.getElementById('laserhorizontalfront2').style.visibility="hidden";

                        var lasernozzleleft = $("#lasernozzle4").position().left;
                        var lasernozzletop = $("#lasernozzle4").position().top;
                        var xaxisleft = $("#xaxis3").position().left;
                        var xaxistop = $("#xaxis3").position().top;
                        var lasertopleft = $("#lasertop4").position().left;
                        var lasertoptop = $("#lasertop4").position().top;

                        document.getElementById('lasernozzle4').style.visibility="hidden";
                        document.getElementById('xaxis3').style.visibility="hidden";
                        document.getElementById('lasertop4').style.visibility="hidden";

                        console.log("lasernozzleleft is ",lasernozzleleft);

                        document.getElementById("xaxis0").style.left = ""+(xaxisleft)+"px";
                        document.getElementById("xaxis0").style.top = ""+(xaxistop)+"px";
                        document.getElementById("lasernozzle0").style.left = ""+(lasernozzleleft)+"px";
                        document.getElementById("lasernozzle0").style.top = ""+(lasernozzletop)+"px";
                        document.getElementById("lasertop0").style.left = ""+(lasertopleft)+"px";
                        document.getElementById("lasertop0").style.top = ""+(lasertoptop)+"px";

                        console.log("lasernozzle4 is ",document.getElementById("lasernozzle4"),"and lasernozzle0 is",document.getElementById("lasernozzle0"));
                        console.log("xaxis3 is ",document.getElementById("xaxis3"),"and xaxis0 is",document.getElementById("xaxis0"));
                        document.getElementById('lasernozzle0').style.visibility="visible";
                        document.getElementById('xaxis0').style.visibility="visible";
                        document.getElementById('lasertop0').style.visibility="visible";
                        document.getElementById('lasertop0').style.animation = "";
                        document.getElementById('xaxis0').style.animation = "";
                        document.getElementById("lasernozzle0").style.animation = "";

                        myInt = setInterval(animatearrow, 500);
                        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 563px; top: 368px; height: 30px; width: 30px; z-index: 10;";//for reset button
                        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                        //Code for IE9
                        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                        // Standard syntax
                        document.getElementById("arrow1").style.transform = "rotate(180deg)";
  //reset
                        document.getElementById("reset").onclick=function()
                        {
                            myStopFunction();
                            setTimeout(function()
                            {
                            document.getElementById("notes").style.visibility="hidden";
                            console.log("time for first note hiding in estop press is",(2+(t-0.5))*1000)
                            },(0));
                            setTimeout(function()
                            {
                            document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; top:409px;"
                            document.getElementById("notes").innerHTML="After changing values as required, press start-pause button again to resume cutting.";
                            document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
                            console.log("time is",new Date())
                            },250);
                            r.style.setProperty('--left', ''+191.740+'px');
                            r.style.setProperty('--top', ''+92.696+'px');
                            r.style.setProperty('--topaxis', ''+94.914+'px');
                            document.getElementById('start').style.visibility="visible";
                            document.getElementById('pause').style.visibility="hidden";
                            document.getElementById('lasertop0').style.animation = "movelaser 2s linear 2 alternate forwards ";
                            document.getElementById('xaxis0').style.animation = "moveaxis 2s linear 2 alternate forwards ";
                            document.getElementById("lasernozzle0").style.animation = "movenozzle 2s linear 2 alternate forwards ";
                            console.log("LASERTOP2 is ",document.getElementById("lasertop2"));
                            console.log("lasernozzle2 is ",document.getElementById("lasernozzle2"));
                        }
                    }
 //pause
                    document.getElementById("pause").onclick=function()
                    {
                        setTimeout(function()
                        {
                        document.getElementById("notes").style.visibility="hidden";
                        console.log("startbutton note hidden")
                        },0);
                        setTimeout(function()
                        {
                        document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; top:409px;"
                        document.getElementById("notes").innerHTML="Press the button again to resume cutting.";
                        document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
                        },500);
                        document.getElementById('start').style.visibility="visible";
                        document.getElementById('pause').style.visibility="hidden";
                        document.getElementById("lasertop4").style.animationPlayState = 'paused';
                        document.getElementById("lasernozzle4").style.animationPlayState = 'paused';
                        document.getElementById("laserhorizontalfront2").style.animationPlayState = 'paused';
                        document.getElementById("laserhorizontalline").style.animationPlayState = 'paused';
                        document.getElementById(id3).style.animationPlayState = 'paused';

                        document.getElementById('laserpart1').style.visibility="hidden";
                        document.getElementById('laserhorizontalline2').style.visibility="hidden";
                        document.getElementById('laservertical3').style.visibility="hidden";
                        document.getElementById('laservertical2').style.visibility="hidden";
                        document.getElementById('laserfront1').style.visibility="hidden";
                        document.getElementById('laserhorizontalline').style.visibility="hidden";
                        document.getElementById('laserhorizontalfront2').style.visibility="hidden";

                        var lasernozzleleft = $("#lasernozzle4").position().left;
                        var lasernozzletop = $("#lasernozzle4").position().top;
                        var xaxisleft = $("#xaxis3").position().left;
                        var xaxistop = $("#xaxis3").position().top;
                        var lasertopleft = $("#lasertop4").position().left;
                        var lasertoptop = $("#lasertop4").position().top;

                        document.getElementById('lasernozzle4').style.visibility="hidden";
                        document.getElementById('xaxis3').style.visibility="hidden";
                        document.getElementById('lasertop4').style.visibility="hidden";

                        console.log("lasernozzleleft is ",lasernozzleleft);

                        document.getElementById("xaxis0").style.left = ""+(xaxisleft)+"px";
                        document.getElementById("xaxis0").style.top = ""+(xaxistop)+"px";
                        document.getElementById("lasernozzle0").style.left = ""+(lasernozzleleft)+"px";
                        document.getElementById("lasernozzle0").style.top = ""+(lasernozzletop)+"px";
                        document.getElementById("lasertop0").style.left = ""+(lasertopleft)+"px";
                        document.getElementById("lasertop0").style.top = ""+(lasertoptop)+"px";

                        console.log("lasernozzle4 is ",document.getElementById("lasernozzle4"),"and lasernozzle0 is",document.getElementById("lasernozzle0"));
                        console.log("xaxis3 is ",document.getElementById("xaxis3"),"and xaxis0 is",document.getElementById("xaxis0"));
                        document.getElementById('lasernozzle0').style.visibility="visible";
                        document.getElementById('xaxis0').style.visibility="visible";
                        document.getElementById('lasertop0').style.visibility="visible";
                    }
//start
                    document.getElementById("start").onclick=function()
                    {
                    document.getElementById("notes").style.visibility="hidden";
                        document.getElementById('pause').style.visibility="visible";
                        document.getElementById('start').style.visibility="hidden";
                        r.style.setProperty('--left', ''+leftcorner+'px');
                        r.style.setProperty('--top', ''+top2+'px');
                        r.style.setProperty('--topaxis', ''+topaxis2+'px');
                        document.getElementById("lasertop4").style.animationPlayState = 'running';
                        document.getElementById("lasernozzle4").style.animationPlayState = 'running';
                        document.getElementById("laserhorizontalfront2").style.animationPlayState = 'running';
                        document.getElementById("laserhorizontalline").style.animationPlayState = 'running';
                        document.getElementById(id3).style.animationPlayState = 'running';

                        document.getElementById('laserpart1').style.visibility="visible";
                        document.getElementById('laserhorizontalline2').style.visibility="visible";
                        document.getElementById('laservertical2').style.visibility="visible";
                        document.getElementById('laservertical3').style.visibility="visible";
                        document.getElementById('laserfront1').style.visibility="visible";
                        document.getElementById('laserhorizontalline').style.visibility="visible";
                        document.getElementById('laserhorizontalfront2').style.visibility="visible";

                        document.getElementById('lasernozzle0').style.visibility="hidden";
                        document.getElementById('xaxis0').style.visibility="hidden";
                        document.getElementById('lasertop0').style.visibility="hidden";
                        document.getElementById('lasernozzle4').style.visibility="visible";
                        document.getElementById('xaxis3').style.visibility="visible";
                        document.getElementById('lasertop4').style.visibility="visible";
                    }
//4th side
                    document.getElementById("lasertop4").addEventListener("animationend",()=>
                    {
                        document.getElementById('lasertop4').style.visibility="hidden";
                        document.getElementById('lasertop4').style.animation="";
                        document.getElementById("lasertop5").style.left = ""+leftcorner+"px";
                        document.getElementById("lasertop5").style.top = ""+top2+"px";
                        document.getElementById('lasertop5').style.visibility="visible";

                        document.getElementById('lasernozzle4').style.visibility="hidden";
                        document.getElementById('lasernozzle5').style.visibility="visible";
                        document.getElementById("lasernozzle5").style.left = ""+leftcorner+"px";
                        document.getElementById("laserhorizontal2").style.top = ""+(top2+2.75)+"px";
                        document.getElementById('laserhorizontal').style.visibility="hidden";
                        document.getElementById('laserhorizontalline').style.visibility="hidden";
                        document.getElementById('laserhorizontal2').style.visibility="visible";
                        document.getElementById('laserhorizontalline2').style.visibility="hidden";
                        document.getElementById('laserhorizontalfront2').style.visibility="hidden";

                        document.getElementById('xaxis3').style.visibility="hidden";
                        document.getElementById('xaxis4').style.visibility="visible";
                        document.getElementById("xaxis4").style.top = ""+(top2+2.75)+"px";
                        r.style.setProperty('--top', ''+topcorner+'px');
                        r.style.setProperty('--topaxis', ''+(topcorner+2.75)+'px');
                        //console.log("The value of --topaxis is: " + rs.getPropertyValue('--topaxis'));
                        document.getElementById('laserhorizontalline22').style.visibility="visible";
                        document.getElementById("laserhorizontalline22").setAttribute('d',"M171.15, "+(169.942-(side/2)-topaxis)+" h"+(leftcorner-171.15)+"") ;
                        document.getElementById("laserhorizontalline22").style.strokeWidth = 1.4;
                        document.getElementById("laserhorizontalline22").setAttribute("class","draw");
                        var id4 = 'breadth2'+(repeat)+'';
                        var path4=document.createElementNS(svgNS,"path");
                        specimen2.appendChild(path4);
                        path4.setAttributeNS(null,'id',id4);
                        path4.setAttributeNS(null,'fill','none');
                        document.getElementById(id4).setAttribute('d',"M"+(390-(side/2))+", "+(169.942+(side/2))+" v-"+(side)+"") ;
                        document.getElementById(id4).style.strokeWidth = 2;
                        document.getElementById(id4).style.strokeDasharray = side;
                        document.getElementById(id4).style.strokeDashoffset = side;
                        document.getElementById(id4).style.zIndex = 10;
                        document.getElementById(id4).style.animation = "animate "+(side/cutspeed)+"s linear forwards";
                        document.getElementById('lasertop5').style.animation = "movelaser "+(side/cutspeed)+"s linear forwards";
                        document.getElementById('xaxis4').style.animation = "moveaxis "+(side/cutspeed)+"s linear forwards";
                        document.getElementById('laserhorizontal2').style.animation = "moveaxis "+(side/cutspeed)+"s linear forwards";

                        r.style.setProperty('--sdoffset', ''+side+'');
                        console.log("sdoffset is",+ rs.getPropertyValue('--sdoffset'))
                        document.getElementById("laservertical3").style.strokeDasharray = side;
                        document.getElementById("laservertical3").style.animation = "animatelaserreverse "+(side/cutspeed)+"s linear forwards";
                        console.log("laservertical1 is",document.getElementById('laservertical1'))
                        console.log("laservertical3 is",document.getElementById('laservertical3'))
                        console.log("laservertical3 animation is",document.getElementById('laservertical3').style.animation)
//estop
                        document.getElementById("estop").onclick=function()
                        {
                console.log("estop presed")
                setTimeout(function()
                {
                document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; top:409px;"
                document.getElementById("notes").innerHTML="Press the reset button to reset the values used in the cutting.";
                document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
                },250);
                            document.getElementById("lasertop5").style.animationPlayState = 'paused';
                            document.getElementById("lasernozzle5").style.animationPlayState = 'paused';
                            document.getElementById("laservertical3").style.animationPlayState = 'paused';
                            document.getElementById("xaxis4").style.animationPlayState = 'paused';
                            document.getElementById("laserhorizontal2").style.animationPlayState = 'paused';
                            document.getElementById(id4).style.animationPlayState = 'paused';

                            document.getElementById('laserpart1').style.visibility="hidden";
                            document.getElementById('laserhorizontalline22').style.visibility="hidden";
                            document.getElementById('laservertical1').style.visibility="hidden";
                            document.getElementById('laservertical2').style.visibility="hidden";
                            document.getElementById('laservertical3').style.visibility="hidden";
                            document.getElementById('laserfront1').style.visibility="hidden";
                            document.getElementById('laserhorizontalline').style.visibility="hidden";
                            document.getElementById('laserhorizontalfront2').style.visibility="hidden";

                            var lasernozzleleft = $("#lasernozzle5").position().left;
                            var lasernozzletop = $("#lasernozzle5").position().top;
                            var xaxisleft = $("#xaxis4").position().left;
                            var xaxistop = $("#xaxis4").position().top;
                            var lasertopleft = $("#lasertop5").position().left;
                            var lasertoptop = $("#lasertop5").position().top;

                            document.getElementById('lasernozzle5').style.visibility="hidden";
                            document.getElementById('xaxis4').style.visibility="hidden";
                            document.getElementById('lasertop5').style.visibility="hidden";

                            console.log("lasernozzleleft is ",lasernozzleleft);

                            document.getElementById("xaxis0").style.left = ""+(xaxisleft)+"px";
                            document.getElementById("xaxis0").style.top = ""+(xaxistop)+"px";
                            document.getElementById("lasernozzle0").style.left = ""+(lasernozzleleft)+"px";
                            document.getElementById("lasernozzle0").style.top = ""+(lasernozzletop)+"px";
                            document.getElementById("lasertop0").style.left = ""+(lasertopleft)+"px";
                            document.getElementById("lasertop0").style.top = ""+(lasertoptop)+"px";

                            console.log("lasernozzle5 is ",document.getElementById("lasernozzle5"),"and lasernozzle0 is",document.getElementById("lasernozzle0"));
                            console.log("xaxis4 is ",document.getElementById("xaxis4"),"and xaxis0 is",document.getElementById("xaxis0"));
                            document.getElementById('lasernozzle0').style.visibility="visible";
                            document.getElementById('xaxis0').style.visibility="visible";
                            document.getElementById('lasertop0').style.visibility="visible";
                            document.getElementById('lasertop0').style.animation = "";
                            document.getElementById('xaxis0').style.animation = "";
                            document.getElementById("lasernozzle0").style.animation = "";

                            myInt = setInterval(animatearrow, 500);
                            document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 563px; top: 368px; height: 30px; width: 30px; z-index: 10;";//for reset button
                            document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                            //Code for IE9
                            document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                            // Standard syntax
                            document.getElementById("arrow1").style.transform = "rotate(180deg)";
    //reset
                            document.getElementById("reset").onclick=function()
                            {
                                myStopFunction();
                                setTimeout(function()
                                {
                                document.getElementById("notes").style.visibility="hidden";
                                console.log("time for first note hiding in estop press is",(2+(t-0.5))*1000)
                                },(0));
                                setTimeout(function()
                                {
                                document.getElementById("notes").style="position:absolute; font-size:12px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible;  top:409px;"
                                document.getElementById("notes").innerHTML="After changing values as required, press start-pause button again to resume cutting.";
                                document.getElementById("notes").style.left =  ""+(400-((parseFloat(document.getElementById('notes').offsetWidth))/2))+"px";
                                console.log("time is",new Date())
                                },250);
                                r.style.setProperty('--left', ''+191.740+'px');
                                r.style.setProperty('--top', ''+92.696+'px');
                                r.style.setProperty('--topaxis', ''+94.914+'px');
                                document.getElementById('start').style.visibility="visible";
                                document.getElementById('pause').style.visibility="hidden";
                                document.getElementById('lasertop0').style.animation = "movelaser 2s linear 2 alternate forwards ";
                                document.getElementById('xaxis0').style.animation = "moveaxis 2s linear 2 alternate forwards ";
                                document.getElementById("lasernozzle0").style.animation = "movenozzle 2s linear 2 alternate forwards ";
                                console.log("LASERTOP2 is ",document.getElementById("lasertop2"));
                                console.log("lasernozzle2 is ",document.getElementById("lasernozzle2"));
                            }
                        }
//pause
                        document.getElementById("pause").onclick=function()
                        {
                            document.getElementById('start').style.visibility="visible";
                            document.getElementById('pause').style.visibility="hidden";
                            document.getElementById("lasertop5").style.animationPlayState = 'paused';
                            document.getElementById("lasernozzle5").style.animationPlayState = 'paused';
                            document.getElementById("xaxis4").style.animationPlayState = 'paused';
                            document.getElementById("laservertical3").style.animationPlayState = 'paused';
                            document.getElementById("laserhorizontal2").style.animationPlayState = 'paused';
                            document.getElementById(id4).style.animationPlayState = 'paused';

                            document.getElementById('laserpart1').style.visibility="hidden";
                            document.getElementById('laserhorizontalline22').style.visibility="hidden";
                            document.getElementById('laservertical1').style.visibility="hidden";
                            document.getElementById('laservertical2').style.visibility="hidden";
                            document.getElementById('laservertical3').style.visibility="hidden";
                            document.getElementById('laserfront1').style.visibility="hidden";
                            document.getElementById('laserhorizontalline').style.visibility="hidden";
                            document.getElementById('laserhorizontalfront2').style.visibility="hidden";

                            var lasernozzleleft = $("#lasernozzle5").position().left;
                            var lasernozzletop = $("#lasernozzle5").position().top;
                            var xaxisleft = $("#xaxis4").position().left;
                            var xaxistop = $("#xaxis4").position().top;
                            var lasertopleft = $("#lasertop5").position().left;
                            var lasertoptop = $("#lasertop5").position().top;

                            document.getElementById('lasernozzle5').style.visibility="hidden";
                            document.getElementById('xaxis4').style.visibility="hidden";
                            document.getElementById('lasertop5').style.visibility="hidden";

                            console.log("lasernozzleleft is ",lasernozzleleft);

                            document.getElementById("xaxis0").style.left = ""+(xaxisleft)+"px";
                            document.getElementById("xaxis0").style.top = ""+(xaxistop)+"px";
                            document.getElementById("lasernozzle0").style.left = ""+(lasernozzleleft)+"px";
                            document.getElementById("lasernozzle0").style.top = ""+(lasernozzletop)+"px";
                            document.getElementById("lasertop0").style.left = ""+(lasertopleft)+"px";
                            document.getElementById("lasertop0").style.top = ""+(lasertoptop)+"px";

                            console.log("lasernozzle5 is ",document.getElementById("lasernozzle5"),"and lasernozzle0 is",document.getElementById("lasernozzle0"));
                            console.log("xaxis4 is ",document.getElementById("xaxis4"),"and xaxis0 is",document.getElementById("xaxis0"));
                            document.getElementById('lasernozzle0').style.visibility="visible";
                            document.getElementById('xaxis0').style.visibility="visible";
                            document.getElementById('lasertop0').style.visibility="visible";
                        }
//start
                        document.getElementById("start").onclick=function()
                        {
                    document.getElementById("notes").style.visibility="hidden";
                            document.getElementById('pause').style.visibility="visible";
                            document.getElementById('start').style.visibility="hidden";
                            r.style.setProperty('--left', ''+leftcorner+'px');
                            r.style.setProperty('--top', ''+topcorner+'px');
                            r.style.setProperty('--topaxis', ''+(topcorner+2.75)+'px');
                            document.getElementById("lasertop5").style.animationPlayState = 'running';
                            document.getElementById("xaxis4").style.animationPlayState = 'running';
                            document.getElementById("lasernozzle5").style.animationPlayState = 'running';
                            document.getElementById("laservertical3").style.animationPlayState = 'running';
                            document.getElementById("laserhorizontal2").style.animationPlayState = 'running';
                            document.getElementById(id4).style.animationPlayState = 'running';

                            document.getElementById('laserpart1').style.visibility="visible";
                            document.getElementById('laserhorizontalline22').style.visibility="visible";
                            document.getElementById('laservertical1').style.visibility="visible";
                            document.getElementById('laservertical2').style.visibility="visible";
                            document.getElementById('laservertical3').style.visibility="visible";
                            document.getElementById('laserfront1').style.visibility="visible";
                            // document.getElementById('laserhorizontalline').style.visibility="visible";
                            // document.getElementById('laserhorizontalfront2').style.visibility="visible";

                            document.getElementById('lasernozzle0').style.visibility="hidden";
                            document.getElementById('xaxis0').style.visibility="hidden";
                            document.getElementById('lasertop0').style.visibility="hidden";
                            document.getElementById('lasernozzle5').style.visibility="visible";
                            document.getElementById('xaxis4').style.visibility="visible";
                            document.getElementById('lasertop5').style.visibility="visible";
                        }
//return
                        document.getElementById("lasertop5").addEventListener("animationend",()=>
                        {
                            document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:60px; top:409px;"
                            document.getElementById("notes").innerHTML="After cutting is finished, the laser is switched off and nozzle moves back to home position. ";
                            setTimeout(function()
                            {
                            document.getElementById("notes").style.visibility="hidden";
                            },(1.9)*1000);
                            document.getElementById('estop1').style.visibility="visible";
                            document.getElementById('estop').style.visibility="hidden";
                            document.getElementById('laservertical2').style.visibility="hidden";
                            document.getElementById('laserhorizontalline22').style.visibility="hidden";
                            document.getElementById('laserpart1').style.visibility="hidden";
                            document.getElementById('laserfront1').style.visibility="hidden";
                            document.getElementById('laservertical3').style.visibility="hidden";


                            document.getElementById('lasertop5').style.visibility="hidden";
                            document.getElementById('lasertop5').style.animation="";
                            document.getElementById("lasertop6").style.left = ""+leftcorner+"px";
                            document.getElementById("lasertop6").style.top = ""+topcorner+"px";
                            document.getElementById('lasertop6').style.visibility="visible";

                            document.getElementById('lasernozzle5').style.visibility="hidden";
                            document.getElementById('lasernozzle6').style.visibility="visible";
                            document.getElementById("lasernozzle6").style.left = ""+leftcorner+"px";

                            document.getElementById('xaxis4').style.visibility="hidden";
                            document.getElementById('xaxis5').style.visibility="visible";
                            document.getElementById("xaxis5").style.top = ""+(topcorner+2.75)+"px";
                            r.style.setProperty('--left', ''+191.740+'px');
                            r.style.setProperty('--top', ''+92.696+'px');
                            r.style.setProperty('--topaxis', ''+94.914+'px');
                            document.getElementById('lasertop6').style.animation = "movelaser 2s linear forwards";
                            document.getElementById('xaxis5').style.animation = "moveaxis 2s linear forwards";
                            document.getElementById("lasernozzle6").style.animation = "movenozzle 2s linear forwards";
                            setTimeout(function()
                            {
                              document.getElementById('nextButton').style.visibility="visible";
                            },(2)*1000);
                        });
                    });
                });
            });
        },((((307.942-(side/2))/lenlaser)*t)+(lenlaserfront/lenlaser)*t)*1000);
        }
    }
    else if(shape==2)
    {
        if(!document.getElementById("circle").value  || !document.getElementById("circle").value!=" " )
        {
            alert("Enter the value to proceed ");
        }
        else
        {
            var diameter = parseFloat(document.getElementById("circle").value);
            var radius = diameter/2;
            console.log("radius=",radius)
            var r = document.querySelector(':root');
            var leftcorner = 390-19;
            var topcorner = 169.942-(radius)-29;
            var topaxis = topcorner+2.75;
            console.log('corners=',leftcorner,topcorner)
            r.style.setProperty('--left', ''+leftcorner+'px');
            r.style.setProperty('--top', ''+topcorner+'px');
            r.style.setProperty('--topaxis', ''+topaxis+'px');
            var rs = getComputedStyle(r);
            console.log("The value of --left is: " + rs.getPropertyValue('--left'));
            console.log("The value of --top is: " + rs.getPropertyValue('--top'));
            console.log("The value of --topaxis is: " + rs.getPropertyValue('--topaxis'));
            document.getElementById("lasertop1").style.animation = "movelaser 2s linear forwards";
            document.getElementById("xaxis1").style.animation = "moveaxis 2s linear forwards";
            document.getElementById("lasernozzle1").style.animation = "movenozzle 2s linear forwards";

            document.getElementById("laser").setAttribute('d',"m327.5 57.5h-223v"+(169.942-(radius)-57.5)+" h"+(leftcorner-103.5)+"");
            var lenlaser = document.getElementById("laser").getTotalside();
            document.getElementById("laser").style.strokeDasharray = lenlaser;
            document.getElementById("laser").style.strokeDashoffset = lenlaser;
            document.getElementById("laser").style.strokeWidth = 1.4;
            document.getElementById("laser").style.animation = "animatelaser "+(t)+"s linear 2s forwards";
            console.log("laser is",document.getElementById("laser"))

            document.getElementById("laserfront").setAttribute('d',"m114.75 303.5h"+(leftcorner-91.7)+"v104.7");
            var lenlaserfront = document.getElementById("laserfront").getTotalLength();
            document.getElementById("laserfront").style.strokeDasharray = lenlaserfront;
            document.getElementById("laserfront").style.strokeDashoffset = lenlaserfront;
            document.getElementById("laserfront").style.strokeWidth = 1.4;
            document.getElementById("laserfront").style.animation = "animatelaser "+((lenlaserfront/lenlaser)*t)+"s linear "+((((topaxis+206)/lenlaser)*t)+2)+"s forwards";
            console.log("laserfront is",document.getElementById("laserfront"))
            setTimeout(function()
            {
                document.getElementById('lasertop1').style.visibility="hidden";
                document.getElementById('lasertop1').style.animation="";
                document.getElementById("lasertopcir").style.left = ""+0+"px";
                document.getElementById("lasertopcir").style.top = ""+(0)+"px";
                document.getElementById('lasertopcir').style.visibility="visible";
                document.getElementById('laser').style.visibility="hidden";
                document.getElementById('laserfront').style.visibility="hidden";
                document.getElementById('laserpart1').style.visibility="visible";
                document.getElementById('lasernozzle1').style.visibility="hidden";
                document.getElementById('lasernozzle2').style.visibility="visible";
                document.getElementById("lasernozzle2").style.left = ""+(leftcorner)+"px";

                var topaxis2 = (169.942+radius-29)+2.75;
                r.style.setProperty('--topaxis', ''+topaxis2+'px');
                r.style.setProperty('--left', ''+(leftcorner+radius)+'px');

                document.getElementById('laserhorizontalline2').style.visibility="visible";//fixed
                document.getElementById("laserhorizontalline2").setAttribute('d',"M118.5, "+(169.942-(radius)-topaxis)+" h"+(leftcorner-radius-118.5)+"") ;
                document.getElementById("laserhorizontalline2").style.strokeWidth = 1.4;
                document.getElementById("laserhorizontalline2").setAttribute("class","draw");
                console.log("laserhorizontalline2 is",document.getElementById("laserhorizontalline2"))

                r.style.setProperty('--sdoffset', ''+radius+'');
                document.getElementById("laserhorizontalline3").setAttribute('d',"M"+(leftcorner)+", "+(169.942-(radius)-topaxis)+" h"+(radius)+"") ;//second
                document.getElementById("laserhorizontalline3").style.strokeWidth = 1.4;
                document.getElementById("laserhorizontalline3").style.strokeDasharray = radius;
                document.getElementById("laserhorizontalline3").style.strokeDashoffset = radius;
                document.getElementById("laserhorizontalline3").style.zIndex = 11;
                document.getElementById("laserhorizontalline3").style.animation = "animatelaser "+(t_circ/4)+"s ease-out alternate 2";
                console.log("laserhorizontalline3 is",document.getElementById("laserhorizontalline3"))
                setTimeout(function()
                {
                    document.getElementById('laserhorizontalline3').style.visibility="hidden";
                    document.getElementById('laserhorizontalline').style.visibility="hidden";
                    document.getElementById("laserhorizontalline1").setAttribute('d',"M"+(leftcorner-radius)+", "+(169.942-(radius)-topaxis)+" h"+(radius)+"") ;//first_
                    document.getElementById("laserhorizontalline1").style.strokeWidth = 1.4;
                    document.getElementById("laserhorizontalline1").style.strokeDasharray = radius;
                    document.getElementById("laserhorizontalline1").style.zIndex = 11;
                    document.getElementById('laserhorizontalline1').style.visibility="visible";
                    document.getElementById("laserhorizontalline1").style.animation = "animatelaserreverse "+(t_circ/4)+"s ease-in-out alternate 2";
                    console.log("laserhorizontalline1 is",document.getElementById("laserhorizontalline1"));

                    document.getElementById('laserhorizontalfront1').style.visibility="hidden";
                    document.getElementById('laserhorizontalfront2').style.visibility="hidden";
                    document.getElementById("laserhorizontalfront3").setAttribute('d',"M"+(leftcorner-radius)+",303.5 h"+(radius)+"") ;//first_
                    document.getElementById("laserhorizontalfront3").style.strokeWidth = 1.4;
                    document.getElementById("laserhorizontalfront3").style.strokeDasharray = radius;
                    document.getElementById("laserhorizontalfront3").style.zIndex = 11;
                    document.getElementById('laserhorizontalfront3').style.visibility="visible";
                    document.getElementById("laserhorizontalfront3").style.animation = "animatelaserreverse "+(t_circ/4)+"s ease-out alternate 2";
                    console.log("laserhorizontalfront3 is",document.getElementById("laserhorizontalfront3"));
                },(t_circ/2)*1000);

                document.getElementById("laserhorizontal").style.top = ""+(topcorner+2.75)+"px";
                document.getElementById('laserhorizontal').style.visibility="visible";
                document.getElementById('laserhorizontal').style.animation = "moveaxis "+(t_circ/2)+"s ease-in-out alternate 2";
                console.log("laserhorizontal is",document.getElementById("laserhorizontal"))

                document.getElementById("laserhorizontalline").setAttribute('d',"M"+(leftcorner-radius)+", "+(169.942-(radius)-topaxis)+" h"+(radius)+"") ;//first
                document.getElementById("laserhorizontalline").style.strokeWidth = 1.4;
                document.getElementById("laserhorizontalline").setAttribute("class","draw");
                console.log("laserhorizontalline is",document.getElementById("laserhorizontalline"))

                document.getElementById('laservertical2').style.visibility="visible";
                document.getElementById("laservertical2").setAttribute('d',"M104.5, 107v"+(topaxis-107)+"");
                document.getElementById("laservertical2").style.strokeWidth = 1.4;
                document.getElementById("laservertical2").setAttribute("class","draw");
                console.log("laservertical2 is",document.getElementById("laservertical2"))

                document.getElementById("laservertical1").setAttribute('d',"M104.5,"+(topaxis)+" v"+(2*radius)+"") ;
                document.getElementById("laservertical1").style.strokeWidth = 1.4;
                document.getElementById("laservertical1").style.strokeDasharray = (2*radius);
                document.getElementById("laservertical1").style.strokeDashoffset = (2*radius);
                document.getElementById("laservertical1").style.zIndex = 11;
                document.getElementById("laservertical1").style.animation = "animatelaser "+(t_circ/2)+"s ease-out alternate 2";
                console.log("laservertical1 is",document.getElementById("laservertical1"))

                document.getElementById('forcircle').style.visibility="visible";
                document.getElementById("forcircle").style.left=""+(389-radius)+"px";
                document.getElementById("forcircle").style.top=""+(169.942-radius)+"px";
                document.getElementById("forcircle").style.width=""+(diameter)+"px";
                document.getElementById("forcircle").style.height=""+(diameter)+"px";
                document.getElementById("forcircle").style.borderRadius= "50%";

                document.getElementById("forcirclechild").style.left=""+(radius-23)+"px";
                document.getElementById("forcirclechild").style.top= ""+(-36)+"px";
                console.log("lasertopcir is",document.getElementById('lasertopcir'));
                console.log("forcircle is",document.getElementById('forcircle'));

                document.getElementById("laserfront1").setAttribute('d',"m114.75 303.5h"+(leftcorner-radius-114.75)+"");
                document.getElementById("laserfront1").style.strokeWidth = 1.4;
                document.getElementById("laserfront1").setAttribute("class","draw");

                document.getElementById("laserhorizontalfront1").setAttribute('d',"M"+(leftcorner-radius)+",303.5 h"+(radius)+"") ;
                document.getElementById("laserhorizontalfront1").style.strokeWidth = 1.4;
                document.getElementById("laserhorizontalfront1").style.zIndex = 11;
                document.getElementById("laserhorizontalfront1").setAttribute("class","draw");
                console.log("laserhorizontalfront1 first is ",document.getElementById("laserhorizontalfront1"));

                document.getElementById("laserhorizontalfront2").setAttribute('d',"M"+(leftcorner)+",303.5 h"+(radius)+"") ;//second
                document.getElementById("laserhorizontalfront2").style.strokeWidth = 1.4;
                document.getElementById("laserhorizontalfront2").style.strokeDasharray = radius;
                document.getElementById("laserhorizontalfront2").style.strokeDashoffset = radius;
                document.getElementById("laserhorizontalfront2").style.zIndex = 11;
                document.getElementById("laserhorizontalfront2").style.animation = "animatelaser "+(t_circ/4)+"s ease-out alternate 2";
                console.log("laserhorizontalfront2 is",document.getElementById("laserhorizontalfront2"))

                $("#forcircle").css({ transform: 'rotate(360deg)' });
                $("#forcirclechild").css({ transform: 'rotate(-360deg)' });

                var circle = (2*(Math.PI)*radius);
                document.getElementById("circ").setAttribute('r',""+(radius)+"") ;
                document.getElementById("circ").style.strokeDasharray = circle;
                document.getElementById("circ").style.strokeDashoffset = circle;
                document.getElementById("circ").style.strokeWidth = 1;
                document.getElementById("circ").style.animation = "animate "+(t_circ)+"s linear forwards";

                document.getElementById('xaxis1').style.visibility="hidden";
                document.getElementById('xaxis2').style.visibility="visible";
                document.getElementById("xaxis2").style.top = ""+(topcorner+2.75)+"px";

                console.log("The value of --topaxis is: " + rs.getPropertyValue('--topaxis'));
                document.getElementById('xaxis2').style.animation = "moveaxis "+(t_circ/2)+"s ease-in-out alternate 2";
                document.getElementById("lasernozzle2").style.animation = "movenozzle "+(t_circ/4)+"s ease-out alternate 2";
                document.getElementById("lasernozzle2").addEventListener("animationend",()=>{
                    document.getElementById('lasernozzle2').style.visibility="hidden";
                    document.getElementById('lasernozzle3').style.visibility="visible";
                    document.getElementById("lasernozzle3").style.left = ""+leftcorner+"px";
                    r.style.setProperty('--left', ''+(leftcorner-radius)+'px');
                    document.getElementById("lasernozzle3").style.animation = "movenozzle "+(t_circ/4)+"s ease-out alternate 2";
                })
                setTimeout(function()
                {
                    document.getElementById('laserhorizontalline1').style.visibility="hidden";
                    document.getElementById('laserhorizontalfront3').style.visibility="hidden";
                    document.getElementById('laserpart1').style.visibility="hidden";
                    document.getElementById('laserhorizontalline2').style.visibility="hidden";
                    document.getElementById('laservertical2').style.visibility="hidden";
                    document.getElementById('laserfront1').style.visibility="hidden";

                    document.getElementById('lasertopcir').style.visibility="hidden";
                    document.getElementById('lasertopcir').style.animation="";
                    document.getElementById("lasertop6").style.left = ""+leftcorner+"px";
                    document.getElementById("lasertop6").style.top = ""+topcorner+"px";
                    document.getElementById('lasertop6').style.visibility="visible";

                    document.getElementById('lasernozzle3').style.visibility="hidden";
                    document.getElementById('lasernozzle6').style.visibility="visible";
                    document.getElementById("lasernozzle6").style.left = ""+leftcorner+"px";

                    document.getElementById('xaxis2').style.visibility="hidden";
                    document.getElementById('xaxis5').style.visibility="visible";
                    document.getElementById("xaxis5").style.top = ""+(topcorner+2.75)+"px";
                    r.style.setProperty('--left', ''+144.25+'px');
                    r.style.setProperty('--top', ''+111.25+'px');
                    r.style.setProperty('--topaxis', ''+114+'px');
                    document.getElementById('lasertop6').style.animation = "movelaser 2s linear forwards";
                    document.getElementById('xaxis5').style.animation = "moveaxis 2s linear forwards";
                    document.getElementById("lasernozzle6").style.animation = "movenozzle 2s linear forwards";
                },(t_circ)*1000);
            },(2+(((topaxis+206)/lenlaser)*t)+(lenlaserfront/lenlaser)*t)*1000);
        }
    }
}

{/* <html>
<head>
<style>
:root {
  --left: 0px;
  --top: 0px;
}
div {
  width: 100px;
  height: 100px;
  background-color: red;
  position: relative;
}
var leftcorner = 390-(length/2);
var topcorner = 169.942-(breadth/2);
@keyframes myfirst {
  0%   {left:var(--left); top:var(--top);}
  100%  {left:200px; top:200px;}
}
</style>

<script>
// Get the root element
var r = document.querySelector(':root');

// Create a function for getting a variable value
function myFunction_get() {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
  // Alert the value of the --blue variable
  alert("The value of --left is: " + rs.getPropertyValue('--left'));
}

// Create a function for setting a variable value
function myFunction_set() {
  // Set the value of variable --blue to another value (in this case "lightblue")
  r.style.setProperty('--left', '100px');
}
function start() {
document.getElementById("box").style.animation = "myfirst 5s linear"
}
</script>
</head>
<body>

<h1>Get and Change CSS Variable With JavaScript</h1>
<div id="box"></div>



<button type="button" onclick="myFunction_get()">Get CSS Variable with JavaScript</button>
<button type="button" onclick="myFunction_set()">Change CSS Variable with JavaScript</button>
<button type="button" onclick="start()">start</button>
</body>
</html> */}

// document.getElementById("lasertop1").style.animation = "movelaser 2s linear forwards";
// document.getElementById('lasertop1').style.animation="";
// document.getElementById('lasertop2').style.animation = "movelaser "+(length/10)+"s linear forwards";
// document.getElementById('lasertop2').style.animation="";
// document.getElementById('lasertop3').style.animation = "movelaser "+(breadth/10)+"s linear forwards";
// document.getElementById('lasertop3').style.animation="";
// document.getElementById('lasertop4').style.animation = "movelaser "+(length/10)+"s linear forwards";
// document.getElementById('lasertop4').style.animation="";
// document.getElementById('lasertop5').style.animation = "movelaser "+(breadth/10)+"s linear forwards";
// document.getElementById('lasertop5').style.animation="";


// document.getElementById("xaxis1").style.animation = "moveaxis 2s linear forwards";
// document.getElementById('xaxis3').style.animation = "moveaxis "+(breadth/10)+"s linear forwards";
// document.getElementById('xaxis4').style.animation = "moveaxis "+(breadth/10)+"s linear forwards";
// document.getElementById('xaxis5').style.animation = "moveaxis 2s linear forwards";

// document.getElementById("lasernozzle1").style.animation = "movenozzle 2s linear forwards";
// document.getElementById("lasernozzle2").style.animation = "movenozzle "+(length/10)+"s linear forwards";
// document.getElementById("lasernozzle4").style.animation = "movenozzle "+(length/10)+"s linear forwards";
// document.getElementById("lasernozzle6").style.animation = "movenozzle 2s linear forwards";

// document.getElementById("laser").style.animation = "animatelaser "+(t)+"s linear 2s forwards";
// document.getElementById("laserfront").style.animation = "animatelaser "+((lenlaserfront/lenlaser)*t)+"s linear "+((((307.942-(breadth/2))/lenlaser)*t)+2)+"s forwards";


// document.getElementById("laserhorizontalline").style.animation = "animatelaser "+(length/10)+"s linear forwards";
// document.getElementById("laserhorizontalline").style.animation = "animatelaserreverse "+(length/10)+"s linear forwards";


// document.getElementById("laserhorizontalfront1").style.animation = "animatelaser "+(length/10)+"s linear forwards";

// document.getElementById("laserhorizontalfront2").style.animation = "animatelaserreverse "+(length/10)+"s linear forwards";


// document.getElementById(id1).style.animation = "animate "+(length/10)+"s linear forwards";
// document.getElementById(id2).style.animation = "animate "+(breadth/10)+"s linear forwards";
// document.getElementById(id3).style.animation = "animate "+(length/10)+"s linear forwards";
// document.getElementById(id4).style.animation = "animate "+(breadth/10)+"s linear forwards";

// document.getElementById('laserhorizontal').style.animation = "moveaxis "+(breadth/10)+"s linear forwards";
// document.getElementById('laserhorizontal2').style.animation = "moveaxis "+(breadth/10)+"s linear forwards";


// document.getElementById("laservertical1").style.animation = "animatelaser "+(breadth/10)+"s linear forwards";

// document.getElementById("laservertical3").style.animation = "animatelaserreverse "+(breadth/10)+"s linear forwards";

// document.getElementById('lasertop6').style.animation = "movelaser 2s linear forwards";


// for (let index1 = 1; index1 < 7; index1++) {
//     document.getElementById('lasertop'+index1+'').style.animation="";
// }
// for (let index2 = 1; index2 < 7; index2++) {
//     document.getElementById('xaxis'+index2+'').style.animation="";
// }

// for (let index3 = 1; index3 < 7; index3++) {
//     document.getElementById('lasernozzle'+index3+'').style.animation="";
// }

// document.getElementById('laserfront').style.animation="";
// document.getElementById('laser').style.animation="";
// document.getElementById('laserhorizontalline').style.animation="";
// document.getElementById('laserhorizontalfront1').style.animation="";
// document.getElementById('laserhorizontalfront2').style.animation="";
// document.getElementById('laserhorizontal').style.animation="";
// document.getElementById('laserhorizontal2').style.animation="";
// document.getElementById('laservertical1').style.animation="";
// for (let index4 = 1; index4 < 4; index4++) {
//     document.getElementById('laservertical'+index4+'').style.animation="";
// }
