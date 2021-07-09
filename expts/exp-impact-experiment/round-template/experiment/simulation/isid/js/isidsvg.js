p1="";
p2="";
p3="";
p4="";
p5="";
p6="";

var x1=1.5;
var x2=0.75;
var i=0;
var h=0;
var t = 6;
var z1 = 0;
var z2=0;
var z,sw,v,n;
var impactvalues = [[20,9.66,7.24],[40,10.97,8.56],[60,12.29,9.88],[80,13.61,11.19],[100,14.92,12.51]];
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


function layer(t_,t1,t2,v,v1,v2,v_,frac) {
    console.log('layer is running');
    var lh = 0.3;
    console.log('layer lh =',lh);
    var ln = Math.round(4/lh);
    var id1 = 'layer'+(v_+1)+'';
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
    //console.log('id for front view is',id1);
    //console.log('path for front view is',path);
    document.getElementById(id1).setAttribute('d',"M25,"+(272.5-(v_*sw))+" l400 0.001") ;
    //console.log(document.getElementById(id1).getAttribute('d')); 
    var len = 400;
    document.getElementById(id1).style.strokeWidth = sw;
    document.getElementById(id1).style.strokeLinecap = 'round';
    document.getElementById(id1).style.strokeDasharray = len;
    document.getElementById(id1).style.strokeDashoffset = len;
    document.getElementById(id1).style.zIndex = v_+1;
    document.getElementById(id1).style.stroke = "url(#myGradient)";
    document.getElementById(id1).style.animation = "animate "+(frac*t_)+"s linear "+((v*t)+(v1*t1)+(v2*t2))+"s forwards";
    console.log('id1 is',document.getElementById(id1));
}
function lastrepeat(v1) {
    console.log('lastrepeat is running');
    var lh = 0.3;
    console.log('lastrepeat lh =',lh);
    var ln = Math.round(4/lh);
    var id4 = 'lastrepeat'+(v1+1)+''+repeat+'';
    var id5 = 'lastrepeat'+(v1+2)+''+repeat+'';
    var sw=lh*5;
    //console.log('sw is',sw);
    var path7=document.createElementNS(svgNS,"path");
    svg.appendChild(path7);
    path7.setAttributeNS(null,'id',id4);
    path7.setAttributeNS(null,'fill','none');
    var path8=document.createElementNS(svgNS,"path");
    svg.appendChild(path8);
    path8.setAttributeNS(null,'id',id5);
    path8.setAttributeNS(null,'fill','none');
    //console.log('id for front view is',id1);
    //console.log('path for front view is',path);
    console.log('pathlast1',path7);
    console.log('pathlast2',path8);
    document.getElementById(id4).setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5 l1.5 -1.5h395.5v-45.5h-395.5v45.5l1.5 -1.5h392.5v-42.5h-392.5v42.5"+p1+" "+p2+""+p3+"") ;
    document.getElementById(id5).setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5l1.5 -1.5h395.5v-45.5h-395.5v45.5l1.5 -1.5h392.5v-42.5h-392.5v42.5v-42.5"+p4+" "+p5+""+p6+"");

    //console.log(document.getElementById(id1).getAttribute('d')); 
    document.getElementById(id4).style.strokeWidth = 1.4;
    document.getElementById(id4).style.zIndex = v1+1;
    document.getElementById(id5).style.strokeWidth = 1.4;
    document.getElementById(id5).style.zIndex = v1+2;
    document.getElementById(id4).setAttribute("class","drawrepeat"); 
    document.getElementById(id5).setAttribute("class","drawrepeat");      
}
function imgmove(t_,t1,t2,n1,n2,n3,n)
{
    var lh =0.3;
    var ln = Math.round(4/lh);
    var sw=lh*5;
    document.getElementById('img0').style.visibility="hidden";   
    console.log('cond is false');
    console.log('imgmove is running'); 
    var id3 = 'img'+(n+1)+'';
    //console.log('id3 is',id3);
    var img = document.createElement('img');
    img.src="Images/extruder.png";
    img.setAttribute('id',id3);
    img.setAttribute('width','50px');
    img.setAttribute('position','absolute');
    img.setAttribute('left','170px');
    img.setAttribute('height','75px');
    img.style.visibility='hidden';
    document.getElementById('step-2').appendChild(img); 
    //console.log('visiblity',document.getElementById(id3).style.visibility);
    //console.log(document.getElementById(id3).getAttribute('id')); 
    document.getElementById(id3).style.zIndex = n+ln;
    document.getElementById(id3).style.position = "absolute";
    document.getElementById(id3).style.bottom = ''+(130+((n+1)*sw*1.5))+'px';
    //console.log('bottom is',document.getElementById(id3).style.bottom); 
    if ((n<2)  || (n>(ln-3))) {
        document.getElementById(id3).style.animation = "animateimgtb "+t_+"s linear "+((n1*t)+(n2*t1)+(n3*t2))+"s  forwards";
        img.addEventListener("animationstart",()=>{
            console.log('animationimgtb has started');
            img.style.visibility='visible';
        })
        img.addEventListener("animationend",()=>{
            console.log('animationimgtb has ended');
            document.getElementById(id3).style.visibility = "hidden";			}) 
    } else {
        document.getElementById(id3).style.animation = "animateimg "+t_+"s linear "+((n1*t)+(n2*t1)+(n3*t2))+"s  forwards"; 
        img.addEventListener("animationstart",()=>{
            console.log('animationimgtb has started');
            img.style.visibility='visible';           })
        img.addEventListener("animationend",()=>{
            console.log('animationimgtb has ended');
            img.style.visibility = "hidden";			})
    }
}

function first(z) {
    console.log('first is running');
    document.getElementById('drawlayer1').setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5 l1.5 -1.5h395.5v-45.5h-395.5v45.5l1.5 -1.5h392.5v-42.5h-392.5v42.5"+p1+" "+p2+""+p3+"");
    var path1 = document.querySelector(".svg path[id = 'drawlayer1']");
    var len1 = path1.getTotalLength();
    console.log('len1 is',len1);
    document.getElementById('drawlayer1').style.strokeDasharray = len1;
    document.getElementById('drawlayer1').style.strokeDashoffset = len1;
    document.getElementById('drawlayer1').style.strokeWidth = 1.4;
    document.getElementById('drawlayer1').style.zIndex=z;
    document.getElementById('drawlayer1').style.animation = "animate1 "+t+"s linear forwards";
    layer(t,0,0,0,0,0,0,0.0363);
    imgmove(t,0,0,0,0,0,0);

    document.getElementById('drawlayer2').setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5l1.5 -1.5h395.5v-45.5h-395.5v45.5l1.5 -1.5h392.5v-42.5h-392.5v42.5v-42.5"+p4+" "+p5+""+p6+"");
    var path2 = document.querySelector(".svg path[id = 'drawlayer2']");
    var len2 = path2.getTotalLength();
    console.log('len2 is',len2);
    document.getElementById('drawlayer2').style.strokeDasharray = len2;
    document.getElementById('drawlayer2').style.strokeDashoffset = len2;
    document.getElementById('drawlayer2').style.strokeWidth = 1.4;
    document.getElementById('drawlayer2').style.zIndex=z+1;
    document.getElementById('drawlayer2').style.animation = "animate1 "+t+"s linear "+t+"s forwards";
    layer(t,0,0,1,0,0,1,0.0363);
    imgmove(t,0,0,1,0,0,1);
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
    },(((t*2)+3)*1000));
    setTimeout(function()
    {
    document.getElementById("notes").style.visibility="hidden";
    },(((t*3)+2)*1000));
    setTimeout(function()
    {
    document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:30px; top:250px;"
    document.getElementById("notes").innerHTML="The extruder nozzle deposits the material in each layer and moves up a distance equal to layer height.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The deposited material bonds with the previous layer and solidifies.";
    },(((t*3)+6)*1000));
    setTimeout(function()
    {
    document.getElementById("notes").style.visibility="hidden";
    },(((t*3)+12)*1000));

    setTimeout(function()
    {
    document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:150px; top:250px;"
    if($("input[name='d']:checked").val()==0){	document.getElementById('notes').innerHTML="For ABS, the extruder is kept at a temperature of around 200–250°C";		}
    if($("input[name='d']:checked").val()==1){	document.getElementById('notes').innerHTML="For PLA, the extruder is kept at a temperature of around 180–220°C";		}	
    },(((t*3)+17)*1000));
    setTimeout(function()
    {
    document.getElementById("notes").style.visibility="hidden";
    },(((t*3)+21)*1000));
   
 }
function middle1(z,callback,t2) {
    console.log('middle1 is running');
    if (document.getElementById("infill").innerHTML==20) 
    {     h=12.5;     }
    else if (document.getElementById("infill").innerHTML==40) 
    {     h=7.5;      } 
    else if (document.getElementById("infill").innerHTML==60) 
    {     h=5.5;      } 
    else if (document.getElementById("infill").innerHTML==80) 
    {     h=3.75;     } 
    else
    {     h=2.75;     } 
    p11 = "";
    p21 = "";
    p31 = "";       
    var m = Math.floor(42.5/h);
    console.log('h is',h)
    console.log('m is',m)
    var h_=42.5-(Math.floor(42.5/h))*h;
    console.log('h_ is',h_)
    for (m1 = 0; m1 < m; m1=m1+2) {
        if (((m1+2)*h)<42.5) {
            p11+= "h"+h+" l"+(m1+1)*-h+" "+(m1+1)*-h+ "v-"+h+" l"+(m1+2)*h+" "+(m1+2)*h+"";
        } else {    
            p11+= "h"+h+" l"+(m1+1)*-h+" "+(m1+1)*-h+ "v-"+h_+"";
        }        
    }
    console.log('p11 is',p11);
    var x11 =h-h_;
    console.log('x11 is',x11)
    var m_=Math.ceil((392.5-m*h)/(2*h));
    console.log('m_ is',m_)
    for (m2 = 0; m2 <m_; m2++) {
        if (m2<(m_-1)) {
            p21+="h"+x11+" l42.5 42.5 h"+h+" l-42.5 -42.5";
            x11 =h;
        } else {
            if (392.5<=(m*h+(m_-1)*h*2+h)) {
                p21+="h"+x11+"l"+(42.5-((m*h+(m_-1)*h*2+h)-392.5))+" "+(42.5-((m*h+(m_-1)*h*2+h)-392.5))+" ";
            } else {
                p21+="h"+x11+"l42.5 42.5h"+(392.5-(m*h+(m_-1)*h*2+h))+"";
            }
            
        }    
    }
    console.log('p21 is',p21);
    if (392.5<=(m*h+(m_-1)*h*2+h)) {
        var x21 = h;
        var x21_= 42.5-((m*h+(m_-1)*h*2+h)-392.5)-h;
        console.log('x21 for case1 is',x21)
        console.log('x21_ for case1 is',x21_)
        for ( m3 = 0; m3 < m; m3=m3+2) {
            if (m3<m-1) {
                p31 += "v-"+x21+" l"+(-(x21_-m3*h))+" "+(-(x21_-m3*h))+"h"+h+" l"+(x21_-(m3+1)*h)+" "+(x21_-(m3+1)*h)+" ";
                x21= h;
            } else {
                p31 += "v-"+x21+"l"+(-(x21_-m3*h))+" "+(-(x21_-m3*h))+" ";
                
            }
        }
    } else {
        var x21 = h-(392.5-(m*h+(m_-1)*h*2+h));
        var x21_= 42.5-(h-(392.5-(m*h+(m_-1)*h*2+h)));
        console.log('x21 for case2 is',x21)
        console.log('x21_ for case2 is',x21_)
        for ( m3 = 0; m3 < m+1; m3=m3+2) {
            if (m3<m) {
                p31 += "v-"+x21+" l"+(-(x21_-m3*h))+" "+(-(x21_-m3*h))+"h"+h+" l"+(x21_-(m3+1)*h)+" "+(x21_-(m3+1)*h)+" ";
                x21= h;
            } else {
                p31 += "v-"+x21+"l"+(-(x21_-m3*h))+" "+(-(x21_-m3*h))+" ";
                
            }
        }
    }
    
    console.log('x21 is',x21)
    console.log('x21_ is',x21_)
    
    console.log('p31 is',p31);
    var lh = 0.3;
    console.log('middle1 lh =',lh);
    var ln = Math.round(4/lh);
    //console.log("ln in middle1 is",ln);
    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    var id2 = 'drawlayer'+(z+5)+(repeat)+'';
    path.setAttributeNS(null,'id',id2);
    //console.log('id is',id2);
    path.setAttributeNS(null,'fill','transparent');
    document.getElementById(id2).setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5 l1.5 -1.5h395.5v-45.5h-395.5v45.5 l1.5 -1.5"+p11+" "+p21+""+p31+"");
    console.log('path3',path);
    if (repeat==1) {
        var path3 = document.getElementById(id2);
        var len3= path3.getTotalLength();
        var t1 = len3/(11662.668945/t);
        console.log('t1 is ',t1)
        //var len3 = 10792.662109375;
        document.getElementById(id2).style.strokeDasharray = len3;
        document.getElementById(id2).style.strokeDashoffset = len3;
        document.getElementById(id2).style.strokeWidth = 1.5;
        document.getElementById(id2).style.zIndex=z;
        document.getElementById(id2).style.animation = "animate1 "+t1+"s linear "+(2*t+z1*t1+z2*t2)+"s forwards";
        //console.log(len3);
        layer(t1,t1,t2,2,z1,z2,z,0.0908);
        imgmove(t1,t1,t2,2,z1,z2,z); 
    }
    if (z<(ln-3)) {
        z++;
        z1++;
        callback(z,t1);  
    } 
    else{
        if (repeat==1) {
            last(z,z1,z2,t1,t2);
        }
    }
}
function middle2(z,t1) {
    console.log('middle2 is running');
    if (document.getElementById("infill").innerHTML==20) 
    {     h=12.5;     }
    else if (document.getElementById("infill").innerHTML==40) 
    {     h=7.5;      } 
    else if (document.getElementById("infill").innerHTML==60) 
    {     h=5.5;      } 
    else if (document.getElementById("infill").innerHTML==80) 
    {     h=3.75;     } 
    else
    {     h=2.75;     } 
    p41 = "";
    p51 = "";
    p61 = "";
    var m = Math.floor(42.5/h);
    console.log('h is',h)
    console.log('m is',m)
    var h_=42.5-(Math.floor(42.5/h))*h;
    console.log('h_ is',h_);
    for (m1 = 0; m1 < m; m1=m1+2) {
        if (((m1+2)*h)<42.5) {
            p41+= "h"+h+" l"+(m1+1)*-h+" "+(m1+1)*h+ "v"+h+" l"+(m1+2)*h+" "+(m1+2)*-h+"";
        } else {
            h_=42.5-(Math.floor(42.5/h))*h;
            p41+= "h"+h+" l"+(m1+1)*-h+" "+(m1+1)*h+ "v"+h_+"";
        }        
    }
    console.log('p41 is',p41);
    var x11 =h-h_;
    console.log('x11 for p51 is',x11);
    var m_=Math.ceil((392.5-m*h)/(2*h));
    console.log('m_ is',m_);
    for (m2 = 0; m2 <m_; m2++) {
        if (m2<(m_-1)) {
            p51+="h"+x11+" l42.5 -42.5 h"+h+" l-42.5 42.5";
            x11 =h;
        } else {
            if (392.5<=(m*h+(m_-1)*h*2+h)) {
                p51+="h"+x11+" l"+(42.5-((m*h+(m_-1)*h*2+h)-392.5))+" "+(-(42.5-((m*h+(m_-1)*h*2+h)-392.5)))+" ";
            } else {
                console.log('THIS IS RUNNINGG');
                p51+="h"+x11+" l42.5 -42.5h"+(392.5-(m*h+(m_-1)*h*2+h))+"";
            }        
        }    
    }
    console.log('p51 is',p51);
    if (392.5<=(m*h+(m_-1)*h*2+h)) {
        var x21 = h;
        var x21_= 42.5-((m*h+(m_-1)*h*2+h)-392.5)-h;
        for ( m3 = 0; m3 < m; m3=m3+2) {
            if (m3<m-1) {
                p61 += "v"+x21+" l"+(-(x21_-m3*h))+" "+(x21_-m3*h)+"h"+h+" l"+(x21_-(m3+1)*h)+" "+(-(x21_-(m3+1)*h))+" ";
                x21= h;
            } else {
                p61 += "v"+x21+"l"+(-(x21_-m3*h))+" "+(x21_-m3*h)+" ";
                
            }
        }
    } else {
        var x21 = h-(392.5-(m*h+(m_-1)*h*2+h));
        var x21_= 42.5-(h-(392.5-(m*h+(m_-1)*h*2+h)));
        for ( m3 = 0; m3 < m+1; m3=m3+2) {
            if (m3<m) {
                p61 += "v"+x21+" l"+(-(x21_-m3*h))+" "+(x21_-m3*h)+"h"+h+" l"+(x21_-(m3+1)*h)+" "+(-(x21_-(m3+1)*h))+" ";
                x21= h;
            } else {
                p61 += "v"+x21+"l"+(-(x21_-m3*h))+" "+(x21_-m3*h)+" ";
                
            }
        }
    }
    
    console.log('p61 is',p61);
    var lh =0.3;
    console.log('middle2 lh =',lh);
    var ln = Math.round(4/lh);
    //console.log("ln in middle2 is",ln);
    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    var id2 = 'drawlayer'+(z+5)+(repeat)+'';
    path.setAttributeNS(null,'id',id2);
    //console.log('id is',id2);
    path.setAttributeNS(null,'fill','transparent');
    document.getElementById(id2).setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5l1.5 -1.5h395.5v-45.5h-395.5v45.5v-45.5 l1.5 1.5"+p41+" "+p51+""+p61+"");
    console.log('path4',path);
    if (repeat==1){
        var path4 = document.querySelector(".svg path[id = 'drawlayer81']");
        var len4= path4.getTotalLength();
        var t2 = len4/(11662.668945/t);
        console.log('t2 is ',t2)
        //var len4 = 10838.162109375;
        document.getElementById(id2).style.strokeDasharray = len4;
        document.getElementById(id2).style.strokeDashoffset = len4;
        document.getElementById(id2).style.strokeWidth = 1.5;
        document.getElementById(id2).style.zIndex=z;
        document.getElementById(id2).style.animation = "animate1 "+t2+"s linear "+(2*t+z1*t1+z2*t2)+"s forwards";
        layer(t2,t1,t2,2,z1,z2,z,0.0908);
        imgmove(t2,t1,t2,2,z1,z2,z);
    }
    if (z<(ln-3)) {
        z++;
        z2++;
      //  console.log("new z for middle1 is",z);
        middle1(z,middle2,t2);
    }
}


function last(z,z1,z2,t1,t2) {
    console.log('last is running');
    document.getElementById('drawlayer5').setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5 l1.5 -1.5h395.5v-45.5h-395.5v45.5l1.5 -1.5h392.5v-42.5h-392.5v42.5"+p1+" "+p2+""+p3+"");
    console.log('path5',document.getElementById('drawlayer5'));
    if (repeat==1) {
        var path5 = document.querySelector(".svg path[id = 'drawlayer5']");
        var len5= path5.getTotalLength();
        console.log('len5 is',len5);
        document.getElementById('drawlayer5').style.strokeDasharray = len5;
        document.getElementById('drawlayer5').style.strokeDashoffset = len5;
        document.getElementById('drawlayer5').style.strokeWidth = 1.4;
        document.getElementById('drawlayer5').style.zIndex=z;
        document.getElementById('drawlayer5').style.animation = "animate1 "+t+"s linear "+(2*t+z1*t1+(z2+1)*t2)+"s forwards";
        layer(t,t1,t2,2,z1,z2+1,11,0.0363);
        imgmove(t,t1,t2,2,z1,z2+1,11);
    }
    document.getElementById('drawlayer6').setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5l1.5 -1.5h395.5v-45.5h-395.5v45.5l1.5 -1.5h392.5v-42.5h-392.5v42.5v-42.5"+p4+" "+p5+""+p6+"");
    console.log('path6',document.getElementById('drawlayer6'));
    if (repeat==1) {
        var path6 = document.querySelector(".svg path[id = 'drawlayer6']");
        var len6 = path6.getTotalLength();
        console.log('len6 is',len6);
        document.getElementById('drawlayer6').style.strokeDasharray = len6;
        document.getElementById('drawlayer6').style.strokeDashoffset = len6;
        document.getElementById('drawlayer6').style.strokeWidth = 1.4;
        document.getElementById('drawlayer6').style.zIndex=z+1;
        document.getElementById('drawlayer6').style.animation = "animatelast "+t+"s linear "+(3*t+z1*t1+((z2+1)*t2))+"s forwards";
        layer(t,t1,t2,3,z1,z2+1,12,0.0363);
        imgmove(t,t1,t2,3,z1,z2+1,12);
    }
}

function print() 
{
    myStopFunction();
    var lh = 0.3;
    console.log('print lh =',lh);
    var ln = Math.round(4/lh);
    console.log("ln is",ln);
    //imgmove(0);
    first(0);
    middle1(2,middle2,0);   
}

