p1="";
p2="";
p3="";
p4="";
p5="";
p6="";
var i=0;
var x1=1.5;
var x2=0.75;

var z,sw,v,n;
var values = [[0.5,28.1],[0.4,33.1],[0.3,39.6],[0.2,55.1]]
const timer = document.getElementById('dispres');
var hr = 0;
var min = 0;
var sec = 0;
var q=0;
var stoptime = true;
function starttimer(t_val) {
    var start1 = new Date().getTime();
    console.log('timetimestart is ',start1);
    timerCycle(t_val,start1); 
}

function timerCycle(t_val,start1) {
    console.log('timerCycle running');
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 2;
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }
    timer.innerHTML = hr + ':' + min + ':' + sec;
    if (repeat==1) {
        if (min!=28 || sec!=6) {
            mytime=setTimeout(function(){timerCycle(t_val);},t_val);
            q++; 
        } 
        else{ 
            var elapsed1 = new Date().getTime() - start1;
            console.log('elapsed',new Date().getTime());
            console.log('timetimestart is ',start1);
            console.log('timetime is',elapsed1);
            clearTimeout(mytime);} 
    }
    else if (repeat==2) {
        if (min!=33 || sec!=6) {
            mytime=setTimeout(function(){timerCycle(t_val);},t_val); 
                   }  
        else{ var elapsed1 = new Date().getTime() - start1;    
            console.log('timetime is',elapsed1);
            clearTimeout(mytime);}
    }
    else if (repeat==3) {
        if (min!=39 || sec!=36) {
            mytime=setTimeout(function(){timerCycle(t_val);},t_val);         }  
           else{var elapsed1 = new Date().getTime() - start1;    
            console.log('timetime is',elapsed1);
             clearTimeout(mytime);} 
    }
    else if (repeat==4) {
        if (min!=55 || sec!=6) {
            mytime=setTimeout(function(){timerCycle(t_val);},t_val);         }  
           else{var elapsed1 = new Date().getTime() - start1;    
            console.log('timetime is',elapsed1);
            clearTimeout(mytime);} 
    }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
}
var svg= document.getElementById('specimen');
var svgNS = "http://www.w3.org/2000/svg";

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


function layer(v) {
    if (repeat==1) {
        var t = 10; 
    } else {
 var t = 6;
    }
    //console.log('layer is running');
    var lh = document.getElementById("lh").innerHTML;
    //console.log('layer lh =',lh);
    var ln = Math.round(4/lh);
    var id0 = 'layer'+(v+1)+(repeat)+'';
    var sw=lh*5;
    //console.log('sw is',sw);
    document.getElementById('base').setAttribute('d',"m15 "+(272.5+(sw/2)+(0.5/2))+"h420v10h-420v-10")
    //console.log(document.getElementById('base'));
    document.getElementById('base').style.strokeWidth = 0.5;
    document.getElementById('base').setAttribute('class','draw');

    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    path.setAttributeNS(null,'id',id0);
    path.setAttributeNS(null,'fill','none');
    //console.log('id for front view is',id0);
    //console.log('path for front view is',path);
    document.getElementById(id0).setAttribute('d',"M25,"+(272.5-(v*sw))+" l400 0.001") ;
    var len = 400;
    document.getElementById(id0).style.strokeWidth = sw;
    document.getElementById(id0).style.strokeLinecap = 'round';
    document.getElementById(id0).style.strokeDasharray = len;
    document.getElementById(id0).style.strokeDashoffset = len;
    document.getElementById(id0).style.zIndex = v+1;
    document.getElementById(id0).style.stroke = "url(#myGradient)";
    document.getElementById(id0).style.animation = "animate "+(0.0363*t)+"s linear "+v*t+"s forwards";
    //console.log(document.getElementById(id0)); 
    if (v<(ln-1)) {
        v++;
       // console.log('new v is',v)
        layer(v);     
    }
    
}

function imgmove(n)
{
    if (repeat==1) {
        var t = 10; 
    } else {
 var t = 6;
    }
    //console.log('imgmove is running');
    //console.log("t is",t); 
    var lh =document.getElementById("lh").innerHTML;
    //console.log('imgmove lh =',lh);
    var ln = Math.round(4/lh);
    var sw=lh*5;
    document.getElementById('img0').style.visibility="hidden";   
    //console.log('cond is false');
    var idimg = 'img'+(n+1)+'';
    //console.log('idimg is',idimg);
    var img = document.createElement('img');
    img.src="Images/extruder.png";
    img.setAttribute('id',idimg);
    img.setAttribute('width','50px');
    img.setAttribute('position','absolute');
    img.setAttribute('left','170px');
    img.setAttribute('height','75px');
    img.style.visibility='hidden';
    document.getElementById('step-2').appendChild(img); 
    //console.log('visiblity',document.getElementById(idimg).style.visibility);
    //console.log(document.getElementById(idimg).getAttribute('id')); 
    document.getElementById(idimg).style.zIndex = n+ln;
    document.getElementById(idimg).style.position = "absolute";
    document.getElementById(idimg).style.bottom = ''+(133.6+(n*sw*1.5))+'px';
    //console.log(document.getElementById(idimg));
    //console.log('bottom is',document.getElementById(idimg).style.bottom); 
    if ((n<2)  || (n>(ln-3))) {
     
        document.getElementById(idimg).style.animation = "animateimgtb "+t+"s linear "+(t*n)+"s  forwards";
        img.addEventListener("animationstart",()=>{
            //console.log('animationimgtb has started');
            img.style.visibility='visible';
           
        })
        img.addEventListener("animationend",()=>{
            //console.log('animationimgtb has ended');
            document.getElementById(idimg).style.visibility = "hidden";			})
       
        //console.log(document.getElementById(idimg).style.animation); 
        
    } else {
       
        document.getElementById(idimg).style.animation = "animateimg "+t+"s linear "+(t*n)+"s  forwards"; 
        img.addEventListener("animationstart",()=>{
            //console.log('animationimgtb has started');
            img.style.visibility='visible';           })
        img.addEventListener("animationend",()=>{
            //console.log('animationimgtb has ended');
            img.style.visibility = "hidden";			})
        //console.log(document.getElementById(idimg).style.animation);  
    }
    if (n<(ln-1)) 
    {
        n++;
        //console.log("new n for img is",n);
        imgmove(n);
    }
}
function first(z) {
    if (repeat==1) {
        var t = 10; 
    } else {
 var t = 6;
    }
    //console.log('first is running');
    var path1=document.createElementNS(svgNS,"path");
    svg.appendChild(path1);
    var id1 = 'drawlayer1'+(repeat)+'';
    path1.setAttributeNS(null,'id',id1);
    //console.log('id is',id2);
    path1.setAttributeNS(null,'fill','transparent');
    document.getElementById(id1).setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5 l1.5 -1.5h395.5v-45.5h-395.5v45.5l1.5 -1.5h392.5v-42.5h-392.5v42.5"+p1+" "+p2+""+p3+"");
    var len1 = 11662.6689453125;
    document.getElementById(id1).style.strokeDasharray = len1;
    document.getElementById(id1).style.strokeDashoffset = len1;
    document.getElementById(id1).style.strokeWidth = 1.4;
    document.getElementById(id1).style.zIndex=z;
    document.getElementById(id1).style.animation = "animate1 "+t+"s linear forwards";
    //console.log(document.getElementById(id1)); 
    var path2=document.createElementNS(svgNS,"path");
    svg.appendChild(path2);
    var id2 = 'drawlayer2'+(repeat)+'';
    path2.setAttributeNS(null,'id',id2);
    //console.log('id is',id2);
    path2.setAttributeNS(null,'fill','transparent');
    document.getElementById(id2).setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5l1.5 -1.5h395.5v-45.5h-395.5v45.5l1.5 -1.5h392.5v-42.5h-392.5v42.5v-42.5"+p4+" "+p5+""+p6+"");
    var len2 = 11705.1689453125;
    document.getElementById(id2).style.strokeDasharray = len2;
    document.getElementById(id2).style.strokeDashoffset = len2;
    document.getElementById(id2).style.strokeWidth = 1.4;
    document.getElementById(id2).style.zIndex=z+1;
    document.getElementById(id2).style.animation = "animate1 "+t+"s linear "+t+"s forwards";  
    //console.log(document.getElementById(id2));  
    setTimeout(function()
		{
		document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:200px; top:500px;"
        document.getElementById("notes").innerHTML="For the top and bottom layers, the infill is always 100%.";
        },3000);
    setTimeout(function()
	    {
	    document.getElementById("notes").style.visibility="hidden";
        },((t-1)*1000));

    setTimeout(function()
    {
    document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:200px; top:500px;"
    document.getElementById("notes").innerHTML="For each layer, the outer shell is printed first.";
    },(t*1000));
    setTimeout(function()
    {
    document.getElementById("notes").style.visibility="hidden";
    },((t*1.2295)*1000));

    setTimeout(function()
    {
    document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:200px; top:500px;"
    document.getElementById("notes").innerHTML="Then the inner cavity is filled with infill material.";
    },((t*1.25)*1000));
    setTimeout(function()
    {
    document.getElementById("notes").style.visibility="hidden";
    },(t*2*1000));

    setTimeout(function()
    {
    document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:150px; top:500px;"
    document.getElementById("notes").innerHTML="For the inner layers, the infill is determined by the infill density value.";
    },(((t*2)+1)*1000));
    setTimeout(function()
    {
    document.getElementById("notes").style.visibility="hidden";
    },(((t*3)-1)*1000));
    setTimeout(function()
    {
    document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:40px; top:500px;"
    document.getElementById("notes").innerHTML="The extruder nozzle deposits the material in each layer and moves up a distance equal to layer height.";
    },(((t*3))*1000));
    setTimeout(function()
    {
    document.getElementById("notes").style.visibility="hidden";
    },(((t*3.75))*1000));

    setTimeout(function()
    {
    document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:150px; top:500px;"
    document.getElementById("notes").innerHTML="The deposited material bonds with the previous layer and solidifies.";
    },(((t*3.75)+1)*1000));
    setTimeout(function()
    {
    document.getElementById("notes").style.visibility="hidden";
    },(((t*4.75))*1000));
   
}
function middle1(z,callback) {
    if (repeat==1) {
        var t = 10; 
    } else {
 var t = 6;
    }
    //console.log('middle1 is running');
    var lh = document.getElementById("lh").innerHTML;
    //console.log('middle1 lh =',lh);
    var ln = Math.round(4/lh);
    //console.log("ln in middle1 is",ln);
    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    var id3 = 'drawlayer'+(z+3)+(repeat)+'';
    path.setAttributeNS(null,'id',id3);
    //console.log('id is',id2);
    path.setAttributeNS(null,'fill','transparent');
    document.getElementById(id3).setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5 l1.5 -1.5h395.5v-45.5h-395.5v45.5 l1.5 -1.5"+p1+" "+p2+""+p3+"");
    //console.log('path3',path);
    var len3 = 10792.662109375;
    document.getElementById(id3).style.strokeDasharray = len3;
    document.getElementById(id3).style.strokeDashoffset = len3;
    document.getElementById(id3).style.strokeWidth = 1.5;
    document.getElementById(id3).style.zIndex=z;
    document.getElementById(id3).style.animation = "animate1 "+t+"s linear "+(z*t)+"s forwards";
    //console.log(document.getElementById(id3)); 
    if (z<(ln-3)) {
        z++;
      //  console.log("new z for middle2 is",z);
        callback(z);
    }
}
function middle2(z) {
    if (repeat==1) {
        var t = 10; 
    } else {
 var t = 6;
    }
    //console.log('middle2 is running');
    var lh = document.getElementById("lh").innerHTML;
    //console.log('middle2 lh =',lh);
    var ln = Math.round(4/lh);
    //console.log("ln in middle2 is",ln);
    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    var id4 = 'drawlayer'+(z+3)+(repeat)+'';
    path.setAttributeNS(null,'id',id4);
    //console.log('id is',id4);
    path.setAttributeNS(null,'fill','transparent');
    document.getElementById(id4).setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5l1.5 -1.5h395.5v-45.5h-395.5v45.5v-45.5 l1.5 1.5"+p4+" "+p5+""+p6+"");
    //console.log('path4',path);
    var len4 = 10838.162109375;
    document.getElementById(id4).style.strokeDasharray = len4;
    document.getElementById(id4).style.strokeDashoffset = len4;
    document.getElementById(id4).style.strokeWidth = 1.5;
    document.getElementById(id4).style.zIndex=z;
    document.getElementById(id4).style.animation = "animate1 "+t+"s linear "+(z*t)+"s forwards";
    //console.log(document.getElementById(id4)); 
    if (z<(ln-3)) {
        z++;
      //  console.log("new z for middle1 is",z);
        middle1(z,middle2);   
    }   
}


function last(z) {
    if (repeat==1) {
        var t = 10; 
    } else {
 var t = 6;
    }
    //console.log('last is running');
    var path5=document.createElementNS(svgNS,"path");
    svg.appendChild(path5);
    var id5 = 'drawlayer3'+(repeat)+'';
    path5.setAttributeNS(null,'id',id5);
    //console.log('id is',id2);
    path5.setAttributeNS(null,'fill','transparent');
    document.getElementById(id5).setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5 l1.5 -1.5h395.5v-45.5h-395.5v45.5l1.5 -1.5h392.5v-42.5h-392.5v42.5"+p1+" "+p2+""+p3+"");
    var len5 = 11662.6689453125;
    document.getElementById(id5).style.strokeDasharray = len5;
    document.getElementById(id5).style.strokeDashoffset = len5;
    document.getElementById(id5).style.strokeWidth = 1.4;
    document.getElementById(id5).style.zIndex=z;
    document.getElementById(id5).style.animation = "animate1 "+t+"s linear "+(z*t)+"s forwards";
    //console.log(document.getElementById(id5)); 
    var path6=document.createElementNS(svgNS,"path");
    svg.appendChild(path6);
    var id6 = 'drawlayer4'+(repeat)+'';
    path6.setAttributeNS(null,'id',id6);
    //console.log('id is',id6);
    path6.setAttributeNS(null,'fill','transparent');
    document.getElementById(id6).setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5l1.5 -1.5h395.5v-45.5h-395.5v45.5l1.5 -1.5h392.5v-42.5h-392.5v42.5v-42.5"+p4+" "+p5+""+p6+"");
    var len6 = 11705.1689453125;
    document.getElementById(id6).style.strokeDasharray = len6;
    document.getElementById(id6).style.strokeDashoffset = len6;
    document.getElementById(id6).style.strokeWidth = 1.4;
    document.getElementById(id6).style.zIndex=z+1;
    document.getElementById(id6).style.animation = "animatelast "+t+"s linear "+((z+1)*t)+"s forwards";
    console.log(document.getElementById(id6).style.animation); 
    document.getElementById(id6).addEventListener("animationend",()=>{
        clearTimeout(mytime);
        })
}


function print() 
{
    if (repeat==1) {
        var t = 10; 
    } else {
 var t = 6;
    }
    var lh = document.getElementById("lh").innerHTML;
    console.log('print lh =',lh);
    var ln = Math.round(4/lh);
    var t_sec = Math.floor((values[repeat-1][1])*60);
    console.log('print t_sec =',t_sec);
    var t_val = ((((t*ln)*2)*1000)/t_sec);
    console.log('print t_val =',t_val);
    console.log(t_sec*t_val);
    myStopFunction();
    myInt = setInterval(animatearrow, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 238px; top: 245px; height: 40px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	//Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";
    document.getElementById("stopwatch0").onclick=function()
    {
        var start = new Date().getTime();
        console.log('timestart is ',start);
        myStopFunction();
        starttimer(t_val);
        setTimeout(function()
	    {
            document.getElementById("stopwatch0").style.visibility="hidden";
            document.getElementById("stopwatch1").style.visibility="visible";
            setTimeout(function()
	        {
                document.getElementById("stopwatch1").style.visibility="hidden";
                document.getElementById("stopwatch0_").style.visibility="visible";
	        },100);	
        },100);	
        layer(0);
        imgmove(0);
        first(0);
        middle1(2,middle2);
        last((ln-2));
        const anim1 = document.getElementById('drawlayer4'+(repeat)+'');
        anim1.addEventListener("animationend",()=>{
            document.getElementById("stopwatch0_").style.visibility="hidden";
            document.getElementById("stopwatch0").style.visibility="visible";
            var elapsed = new Date().getTime() - start;
            console.log('time is ',elapsed);
            console.log('timediff is',elapsed-(t*ln*1000))
            myInt = setInterval(animatearrow, 500);
            if (timer.innerHTML=="00:28:06" || timer.innerHTML=="00:33:06" || timer.innerHTML=="00:39:36" || timer.innerHTML=="00:55:06") {
                document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 238px; top: 245px; height: 40px; z-index: 10;";
	        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	        //Code for IE9
	        document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	        // Standard syntax
            document.getElementById("arrow1").style.transform = "rotate(180deg)";
            }
            document.getElementById("stopwatch0").onclick=function()
            {
                myStopFunction();
                if (repeat==1) {
                    setTimeout(function()
                        {
                            validateAnswer(0,1,"500px","275px");
                        },500);				
                }
                else if (repeat==3) {
                    setTimeout(function()
                    {
                        validateAnswer(1,0,"500px","275px");
                    },500);	
                }
                else if (repeat==4){
                    setTimeout(function()
                    {
                        validateAnswer(2,1,"500px","275px");
                    },500);	
                }
                else { setTimeout(function()
	                {
                        document.getElementById('nextButton').style.visibility="visible";
                    },100);}	
                setTimeout(function()
	            {
                    document.getElementById("stopwatch0").style.visibility="hidden";
                    document.getElementById("stopwatch1").style.visibility="visible";
                    setTimeout(function()
	                {
                        document.getElementById("stopwatch1").style.visibility="hidden";
                        document.getElementById("stopwatch0").style.visibility="visible";
                    },100);
                },100);	
            }       })      
	}	
}


