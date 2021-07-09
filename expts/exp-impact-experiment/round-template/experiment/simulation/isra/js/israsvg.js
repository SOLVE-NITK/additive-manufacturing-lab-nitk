
var i=0;
var x1=1.5;
var x2=0.75;
var t = 6;
var z,sw,v,n;
var impactvalues = [[0,12.73,9.47],[45,15.41,12.15]]

var svg= document.getElementById('specimen');
var svgNS = "http://www.w3.org/2000/svg";

function layer(v) {
    console.log('layer is running');
    var lh = 0.3
    console.log('layer lh =',lh);
    var ln = Math.round(4/lh);
    var id1 = 'layer'+(v+1)+(repeat)+'';
    var sw=lh*5;
    //console.log('sw is',sw);
    document.getElementById('base').setAttribute('d',"m15 "+(272.5+(sw/2)+(0.5/2))+"h420v10h-420v-10")
    //console.log(document.getElementById('base').getAttribute('d'));
    document.getElementById('base').style.strokeWidth = 0.5;
    document.getElementById('base').setAttribute('class','draw');

    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    path.setAttributeNS(null,'id',id1);
    path.setAttributeNS(null,'fill','none');
    document.getElementById(id1).setAttribute('d',"M25,"+(272.5-(v*sw))+" l400 0.001") ;
    //console.log(document.getElementById(id1).getAttribute('d')); 
    var len = 400;
    document.getElementById(id1).style.strokeWidth = sw;
    document.getElementById(id1).style.strokeLinecap = 'round';
    document.getElementById(id1).style.strokeDasharray = len;
    document.getElementById(id1).style.strokeDashoffset = len;
    document.getElementById(id1).style.zIndex = v+1;
    document.getElementById(id1).style.stroke = "url(#myGradient)";
    document.getElementById(id1).style.animation = "animate "+(0.03283*t)+"s linear "+v*t+"s forwards";
    console.log('layer is',document.getElementById(id1));
    if (v<(ln-1)) {
        v++;
        layer(v);     
    }
    
}

function imgmove(n)
{
    var lh =0.3
    var ln = Math.round(4/lh);
    var sw=lh*5;
    document.getElementById('img0').style.visibility="hidden";
    console.log('imgmove is running');
    var id3 = 'img'+(n+1)+''+(repeat)+'';
    var img = document.createElement('img');
    img.src="Images/extruder.png";
    img.setAttribute('id',id3);
    img.setAttribute('width','50px');
    img.setAttribute('position','absolute');
    img.setAttribute('left','170px');
    img.setAttribute('height','75px');
    img.style.visibility='hidden';
    document.getElementById('step-2').appendChild(img); 
    document.getElementById('step-2').appendChild(document.getElementById("img0")); 
    document.getElementById(id3).style.zIndex = n+ln;
    document.getElementById(id3).style.position = "absolute";
    document.getElementById(id3).style.bottom = ''+(130+((n+1)*sw*1.5))+'px';
    if (repeat==1) {
        if ((n<2)  || (n>(ln-3))) {
            console.log('n is',n);
            if ((n+1)%2==0) {
                document.getElementById(id3).style.animation = "animateimgtb "+t+"s linear "+(t*n)+"s  forwards";
                img.addEventListener("animationstart",()=>{         img.style.visibility ='visible';        })
                img.addEventListener("animationend",()=>{         img.style.visibility = "hidden";		})
            } else {
                console.log('n NOW IS',n);
                document.getElementById(id3).style.animation = "animateimgtbhorizontal "+(0.1963*t)+"s linear "+(t*n)+"s  forwards";
                img.addEventListener("animationstart",()=>{
                    img.style.visibility ='visible'; 
                    document.getElementById("img0").style.animation = "";        })
                img.addEventListener("animationend",()=>{ 
                    console.log('img is',document.getElementById(id3));
                    console.log('n NOW REALLY IS',n);
                    img.style.visibility = "hidden";
                    document.getElementById("img0").style.position = "absolute";
                    document.getElementById("img0").style.bottom = ''+(130+((n)*sw*1.5))+'px'; 
                    document.getElementById("img0").style.animation = "animateimginfill "+((1-0.1963)*t/28)+"s linear 28 alternate";
                    document.getElementById("img0").addEventListener("animationstart",()=>{
                        console.log("n AT THIS STEP IS ",n);
                        document.getElementById("img0").style.visibility ='visible';        })
                    document.getElementById("img0").addEventListener("animationend",()=>{  document.getElementById("img0").style.visibility = "hidden";	})		})
            }
        } else {
            if ((n+1)%2==0) {
                document.getElementById(id3).style.animation = "animateimg "+t+"s linear "+(t*n)+"s  forwards";
                img.addEventListener("animationstart",()=>{         img.style.visibility ='visible';        })
                img.addEventListener("animationend",()=>  {         img.style.visibility = "hidden";		})
            } else {
                document.getElementById(id3).style.animation = "animateimghorizontal "+(0.1343*t)+"s linear "+(t*n)+"s  forwards";
                img.addEventListener("animationstart",()=>{
                    img.style.visibility ='visible';  
                    document.getElementById("img0").style.animation = "";      })
                img.addEventListener("animationend",()=>  {
                    console.log('img is',document.getElementById(id3));
                    img.style.visibility = "hidden";
                    document.getElementById("img0").style.position = "absolute";
                    document.getElementById("img0").style.bottom = ''+(130+((n)*sw*1.5))+'px'; 
                    document.getElementById("img0").style.animation = "animateimginfill "+((1-0.1343)*t/28)+"s linear 28 alternate";
                    document.getElementById("img0").addEventListener("animationstart",()=>{   document.getElementById("img0").style.visibility ='visible';        })
                    document.getElementById("img0").addEventListener("animationend",()=>  {   document.getElementById("img0").style.visibility = "hidden";	})		})
            }
        }
    }
    else if (repeat==2){
        if ((n<2)  || (n>(ln-3))) {
            console.log('%c repeat is',  "color: red; font-style: italic;",repeat);
            document.getElementById(id3).style.animation = "animateimgtb2 "+t+"s linear "+(t*n)+"s  forwards";
            img.addEventListener("animationstart",()=>{     img.style.visibility='visible';  })
            img.addEventListener("animationend",()=>{       img.style.visibility = "hidden"; })
        } else {
            document.getElementById(id3).style.animation = "animateimg2 "+t+"s linear "+(t*n)+"s  forwards"; 
            img.addEventListener("animationstart",()=>{     img.style.visibility='visible';  })
            img.addEventListener("animationend",()=>{       img.style.visibility = "hidden"; })    
        }}
        if (n<(ln-1)) 
        {
            n++;
            imgmove(n);
        } 
}

function first(z) {
    if (repeat==1) {
        console.log('%c p is new and  repeat is',  "color: red; font-style: italic;",repeat);
        p1="";p2="";p3="";p4="";p5="";p6="";
        for (i = 0; i < 14; i++) {
            p1 += "h392.5v-1.6h-392.5v-1.6";
        }
        for (j = 0; j < 124; j++) {
            p4 += "v42.5h1.6v-42.5h1.6";
        }
    }
    if (repeat==2) {
        console.log('%c p has to change and  repeat is',  "color: red; font-style: italic;",repeat);
        p1="";p2="";p3="";p4="";p5="";p6="";
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
    }
    
    //console.log('first is running',p1);
    document.getElementById('drawlayer1').setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5 l1.5 -1.5h395.5v-45.5h-395.5v45.5l1.5 -1.5h392.5v-42.5h-392.5v42.5"+p1+" "+p2+""+p3+"");
    var path1 = document.querySelector(".svg path[id = 'drawlayer1']");
    var len1 = path1.getTotalLength();
    document.getElementById('drawlayer1').style.strokeDasharray = len1;
    document.getElementById('drawlayer1').style.strokeDashoffset = len1;
    document.getElementById('drawlayer1').style.strokeWidth = 1.4;
    document.getElementById('drawlayer1').style.zIndex=z;
    document.getElementById('drawlayer1').style.animation = "animate1 "+t+"s linear forwards";
    //console.log(document.getElementById('drawlayer1'));


    document.getElementById('drawlayer2').setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5l1.5 -1.5h395.5v-45.5h-395.5v45.5l1.5 -1.5h392.5v-42.5h-392.5v42.5v-42.5"+p4+" "+p5+""+p6+"");
    var path2 = document.querySelector(".svg path[id = 'drawlayer2']");
    var len2 = path2.getTotalLength();
    document.getElementById('drawlayer2').style.strokeDasharray = len2;
    document.getElementById('drawlayer2').style.strokeDashoffset = len2;
    document.getElementById('drawlayer2').style.strokeWidth = 1.4;
    document.getElementById('drawlayer2').style.zIndex=z+1;
    document.getElementById('drawlayer2').style.animation = "animate1 "+t+"s linear "+t+"s forwards";
    setTimeout(function()
		{
		document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:200px; top:250px;"
        document.getElementById("notes").innerHTML="For the top and bottom layers, the infill is always 100%.";
        },3000);
    setTimeout(function()
	    {
	    document.getElementById("notes").style.visibility="hidden";
        },((t-1)*1000));

    setTimeout(function()
    {
    document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:200px; top:250px;"
    document.getElementById("notes").innerHTML="For each layer, the outer shell is printed first.";
    },(t*1000));
    setTimeout(function()
    {
    document.getElementById("notes").style.visibility="hidden";
    },((t*1.2295)*1000));

    setTimeout(function()
    {
    document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:200px; top:250px;"
    document.getElementById("notes").innerHTML="Then the inner cavity is filled with infill material.";
    },((t*1.25)*1000));
    setTimeout(function()
    {
    document.getElementById("notes").style.visibility="hidden";
    },(t*2*1000));

    setTimeout(function()
    {
    document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:150px; top:250px;"
    document.getElementById("notes").innerHTML="For the inner layers, the infill is determined by the infill density value.";
    },(((t*2)+4)*1000));
    setTimeout(function()
    {
    document.getElementById("notes").style.visibility="hidden";
    },(((t*3)+3)*1000));
    setTimeout(function()
    {
    document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:30px; top:250px;"
    document.getElementById("notes").innerHTML="The extruder nozzle deposits the material in each layer and moves up a distance equal to layer height.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The deposited material bonds with the previous layer and solidifies.";
    },(((t*3)+8)*1000));
    setTimeout(function()
    {
    document.getElementById("notes").style.visibility="hidden";
    },(((t*3)+14)*1000));

    setTimeout(function()
    {
    document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:150px; top:250px;"
    if($("input[name='d']:checked").val()==0){	document.getElementById('notes').innerHTML="For ABS, the extruder is kept at a temperature of around 200–250°C";		}
    if($("input[name='d']:checked").val()==1){	document.getElementById('notes').innerHTML="For PLA, the extruder is kept at a temperature of around 180–220°C";		}	
    },(((t*3)+19)*1000));
    setTimeout(function()
    {
    document.getElementById("notes").style.visibility="hidden";
    },(((t*3)+24)*1000));
   
}
function middle1(z,callback) {
    //console.log('middle1 is running');
    var lh = 0.3
    //console.log('middle1 lh =',lh);
    var ln = Math.round(4/lh);
    //console.log("ln in middle1 is",ln);
    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    var id2 = 'drawlayer'+(z+3)+'';
    path.setAttributeNS(null,'id',id2);
    //console.log('id is',id2);
    path.setAttributeNS(null,'fill','transparent');
    document.getElementById(id2).setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5 l1.5 -1.5h395.5v-45.5h-395.5v45.5 l1.5 -1.5"+p1+" "+p2+""+p3+"");
    //console.log('path3',path);
    var len3 = document.getElementById(id2).getTotalLength();
    console.log('speed = ',(len3/t));
    document.getElementById(id2).style.strokeDasharray = len3;
    document.getElementById(id2).style.strokeDashoffset = len3;
    document.getElementById(id2).style.strokeWidth = 1.45;
    document.getElementById(id2).style.zIndex=z;
    document.getElementById(id2).style.animation = "animate1 "+t+"s linear "+(z*t)+"s forwards";
    if (z<(ln-3)) {
        z++;
      //  console.log("new z for middle2 is",z);
        callback(z);
    }
   
}
function middle2(z) {
    //console.log('middle2 is running');
    var lh = 0.3
    //console.log('middle2 lh =',lh);
    var ln = Math.round(4/lh);
    //console.log("ln in middle2 is",ln);
    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    var id2 = 'drawlayer'+(z+3)+'';
    path.setAttributeNS(null,'id',id2);
    //console.log('id is',id2);
    path.setAttributeNS(null,'fill','transparent');
    document.getElementById(id2).setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5l1.5 -1.5h395.5v-45.5h-395.5v45.5v-45.5 l1.5 1.5"+p4+" "+p5+""+p6+"");
    var len4 = document.getElementById(id2).getTotalLength();
    document.getElementById(id2).style.strokeDasharray = len4;
    document.getElementById(id2).style.strokeDashoffset = len4;
    document.getElementById(id2).style.strokeWidth = 1.45;
    document.getElementById(id2).style.zIndex=z;
    document.getElementById(id2).style.animation = "animate1 "+t+"s linear "+(z*t)+"s forwards";
    if (z<(ln-3)) {
        z++;
        middle1(z,middle2);
    }
}

function last(z) {
    //console.log('last is running');
    document.getElementById('drawlayer3').setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5l1.5 -1.5h395.5v-45.5h-395.5v45.5l1.5 -1.5h392.5v-42.5h-392.5v42.5v-42.5"+p4+" "+p5+""+p6+"");
    var path5 = document.querySelector(".svg path[id = 'drawlayer3']");
    var len5= path5.getTotalLength();
    document.getElementById('drawlayer3').style.strokeDasharray = len5;
    document.getElementById('drawlayer3').style.strokeDashoffset = len5;
    document.getElementById('drawlayer3').style.strokeWidth = 1.4;
    document.getElementById('drawlayer3').style.zIndex=z;
    document.getElementById('drawlayer3').style.animation = "animate1 "+t+"s linear "+(z*t)+"s forwards";

    document.getElementById('drawlayer4').setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5 l1.5 -1.5h395.5v-45.5h-395.5v45.5l1.5 -1.5h392.5v-42.5h-392.5v42.5"+p1+" "+p2+""+p3+"");
    var path6 = document.querySelector(".svg path[id = 'drawlayer4']");
    var len6 = path6.getTotalLength();
    document.getElementById('drawlayer4').style.strokeDasharray = len6;
    document.getElementById('drawlayer4').style.strokeDashoffset = len6;
    document.getElementById('drawlayer4').style.strokeWidth = 1.4;
    document.getElementById('drawlayer4').style.zIndex=z+1;
    document.getElementById('drawlayer4').style.animation = "animatelast "+t+"s linear "+((z+1)*t)+"s forwards";
}


function print() 
{
    myStopFunction();
    var lh = 0.3
    console.log('print lh =',lh);
    var ln = Math.round(4/lh);
    //console.log("ln is",ln);
    layer(0);
    imgmove(0);
    first(0);
    middle1(2,middle2);
    last((ln-2));
}

