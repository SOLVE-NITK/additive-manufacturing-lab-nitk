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


var z1 = 0;
var z2=0;
var z,sw,v,n,t_tot;
var infillvalues = [[20,27.5],[40,33.3],[60,39.1],[80,44.8],[100,50.6]];
var frac_val = [0.0908,0.0696, 0.0573, 0.0438, 0.0345];
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

    sec = sec + 3;
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
        if (min!=27 || sec!=30) {
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
        if (min!=33 || sec!=18) {
            mytime=setTimeout(function(){timerCycle(t_val);},t_val);
        }
        else{ var elapsed1 = new Date().getTime() - start1;
            console.log('timetime is',elapsed1);
            clearTimeout(mytime);}
    }
    else if (repeat==3) {
        if (min!=39 || sec!=6) {
            mytime=setTimeout(function(){timerCycle(t_val);},t_val);         }
           else{var elapsed1 = new Date().getTime() - start1;
            console.log('timetime is',elapsed1);
             clearTimeout(mytime);}
    }
    else if (repeat==4) {
        if (min!=44 || sec!=48) {
            mytime=setTimeout(function(){timerCycle(t_val);},t_val);         }
           else{var elapsed1 = new Date().getTime() - start1;
            console.log('timetime is',elapsed1);
            clearTimeout(mytime);}
    }
    else if (repeat==5) {
        if (min!=50 || sec!=36) {
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
function layer(t_,t1,t2,v,v1,v2,v_,frac) {
    if (repeat==1) {
        var t = 10; 
    } else {
        var t = 6;
    }
    console.log('layer is running');
    console.log('t_=',t_,'t1=',t1,'t2=',t2,'v=',v,'v1=',v1,'v2=',v2,'v_=',v_,'frac=',frac)
    var id0 = 'layer'+(v_+1)+(repeat)+'';
    //console.log('sw is',sw);
    document.getElementById('base').setAttribute('d',"m15 "+(272.5+(0.3*2.5)+(0.5/2))+"h420v10h-420v-10")
    //console.log(document.getElementById('base'));
    document.getElementById('base').style.strokeWidth = 0.5;
    document.getElementById('base').setAttribute('class','draw');

    var path0=document.createElementNS(svgNS,"path");
    svg.appendChild(path0);
    path0.setAttributeNS(null,'id',id0);
    path0.setAttributeNS(null,'fill','none');
    //console.log('id for front view is',id0);
    //console.log('path for front view is',path);
    document.getElementById(id0).setAttribute('d',"M25,"+(272.5-(v_*0.3*5))+" l400 0.001") ;
    var len = 400;
    document.getElementById(id0).style.strokeWidth = 1.5;
    document.getElementById(id0).style.strokeLinecap = 'round';
    document.getElementById(id0).style.strokeDasharray = len;
    document.getElementById(id0).style.strokeDashoffset = len;
    document.getElementById(id0).style.zIndex = v_+1;
    document.getElementById(id0).style.stroke = "url(#myGradient)";
    document.getElementById(id0).style.animation = "animate "+(frac*t_)+"s linear "+((v*t)+(v1*t1)+(v2*t2))+"s forwards";
    console.log('%c layer animation is equal to ', "color: green; font-style: italic;",document.getElementById(id0).style.animation);
}
function imgmove(t_,t1,t2,n1,n2,n3,n)
{
    if (repeat==1) {
        var t = 10; 
    } else {
 var t = 6;
    }
    var lh =0.3
    var ln = Math.round(4/lh);
    var sw=lh*5;
    document.getElementById('img0').style.visibility="hidden";
    //console.log('cond is false');
    console.log('imgmove is running');
    var idimg = 'img'+(n+1)+'';
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
    document.getElementById(idimg).style.bottom = ''+(130+((n+1)*sw*1.5))+'px';
    //console.log('bottom is',document.getElementById(idimg).style.bottom);
    if ((n<2)  || (n>(ln-3))) {

        document.getElementById(idimg).style.animation = "animateimgtb "+t_+"s linear "+((n1*t)+(n2*t1)+(n3*t2))+"s  forwards";
        console.log(document.getElementById(idimg).style.animation);
        img.addEventListener("animationstart",()=>{
            //console.log('animationimgtb has started');
            img.style.visibility='visible';
        })
        img.addEventListener("animationend",()=>{
           // console.log('animationimgtb has ended');
            document.getElementById(idimg).style.visibility = "hidden";			})
    } else {

        document.getElementById(idimg).style.animation = "animateimg"+repeat+" "+t_+"s linear "+((n1*t)+(n2*t1)+(n3*t2))+"s  forwards";
        img.addEventListener("animationstart",()=>{
            //console.log('animationimgtb has started');
            img.style.visibility='visible';           })
        img.addEventListener("animationend",()=>{
            //console.log('animationimgtb has ended');
            img.style.visibility = "hidden";			})

        //console.log(document.getElementById(idimg).style.animation);

    }
}

function first(z) {
    if (repeat==1) {
        var t = 10; 
    } else {
 var t = 6;
    }
    console.log('first is running');
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
    console.log('%c first1=', "color: red; font-style: italic;", document.getElementById(id1).style.animation);
    layer(t,0,0,0,0,0,0,0.0363);
    imgmove(t,0,0,0,0,0,0);
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
    console.log('%c first2=',  "color: red; font-style: italic;",document.getElementById(id2).style.animation)
    layer(t,0,0,1,0,0,1,0.0363);
    imgmove(t,0,0,1,0,0,1);
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

function middle1(z,z1,z2,callback,t2) {
    if (repeat==1) {
        var t = 10; 
    } else {
 var t = 6;
    }
    console.log('middle1 is running');
    if (document.getElementById("id").innerHTML==20) {
        h=12.5;
    }
    else if (document.getElementById("id").innerHTML==40)
    {
        h=7.5;
    }
    else if (document.getElementById("id").innerHTML==60)
    {
        h=5.5;
    }
    else if (document.getElementById("id").innerHTML==80)
    {
        h=3.75;
    }
    else
    {
        h=2.75;
    }
    p11 = "";
    p21 = "";
    p31 = "";
    var m = Math.floor(42.5/h);
    //console.log('h is',h)
    //console.log('m is',m)
    var h_=42.5-(Math.floor(42.5/h))*h;
    //console.log('h_ is',h_)
    for (m1 = 0; m1 < m; m1=m1+2) {
        if (((m1+2)*h)<42.5) {
            p11+= "h"+h+" l"+(m1+1)*-h+" "+(m1+1)*-h+ "v-"+h+" l"+(m1+2)*h+" "+(m1+2)*h+"";
        } else {
            p11+= "h"+h+" l"+(m1+1)*-h+" "+(m1+1)*-h+ "v-"+h_+"";
        }
    }
    //console.log('p11 is',p11);
    var x11 =h-h_;
    //console.log('x11 is',x11)
    var m_=Math.ceil((392.5-m*h)/(2*h));
    //console.log('m_ is',m_)
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
    //console.log('p21 is',p21);
    if (392.5<=(m*h+(m_-1)*h*2+h)) {
        var x21 = h;
        var x21_= 42.5-((m*h+(m_-1)*h*2+h)-392.5)-h;
        //console.log('x21 for case1 is',x21)
        //console.log('x21_ for case1 is',x21_)
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
        ////console.log('x21 for case2 is',x21)
        //console.log('x21_ for case2 is',x21_)
        for ( m3 = 0; m3 < m+1; m3=m3+2) {
            if (m3<m) {
                p31 += "v-"+x21+" l"+(-(x21_-m3*h))+" "+(-(x21_-m3*h))+"h"+h+" l"+(x21_-(m3+1)*h)+" "+(x21_-(m3+1)*h)+" ";
                x21= h;
            } else {
                p31 += "v-"+x21+"l"+(-(x21_-m3*h))+" "+(-(x21_-m3*h))+" ";
            }
        }
    }

    //console.log('x21 is',x21)
    //console.log('x21_ is',x21_)
    //console.log('p31 is',p31);
    var lh = 0.3;
    //console.log('middle1 lh =',lh);
    var ln = Math.round(4/lh);
    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    var id3 = 'drawlayer'+(z+3)+(repeat)+'';
    path.setAttributeNS(null,'id',id3);
    path.setAttributeNS(null,'fill','transparent');
    document.getElementById(id3).setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5 l1.5 -1.5h395.5v-45.5h-395.5v45.5 l1.5 -1.5"+p11+" "+p21+""+p31+"");
    //console.log('path3',path);
    var path3 = document.getElementById(id3);
    var len3= path3.getTotalLength();
    console.log('len3=',len3);
    var t1 = len3/(11662.668945/t);
    //console.log('t1 is ',t1)
    //var len3 = 10792.662109375;
    document.getElementById(id3).style.strokeDasharray = len3;
    document.getElementById(id3).style.strokeDashoffset = len3;
    document.getElementById(id3).style.strokeWidth = 1.5;
    document.getElementById(id3).style.zIndex=z;
    document.getElementById(id3).style.animation = "animate1 "+t1+"s linear "+(2*t+z1*t1+z2*t2)+"s forwards";
    console.log('t is',t,'z1=',z1,'z2=',z2,'t1=',t1,'t2=',t2);
    console.log('%c middle1=', "color: red; font-style: italic;", document.getElementById(id3).style.animation);
    layer(t1,t1,t2,2,z1,z2,z,frac_val[repeat-1]);
    imgmove(t1,t1,t2,2,z1,z2,z);
    if (z<(ln-3)) {
        z++;
        z1++;
        callback(z,z1,z2,t1);
    }else{    last(z,z1,z2,t1,t2);}
}
function middle2(z,z1,z2,t1) {
    if (repeat==1) {
        var t = 10; 
    } else {
 var t = 6;
    }
    ////console.log('middle2 is running');
    if (document.getElementById("id").innerHTML==20) {
        h=12.5;
    }
    else if (document.getElementById("id").innerHTML==40)
    {
        h=7.5;
    }
    else if (document.getElementById("id").innerHTML==60)
    {
        h=5.5;
    }
    else if (document.getElementById("id").innerHTML==80)
    {
        h=3.75;
    }
    else
    {
        h=2.75;
    }
    p41 = "";
    p51 = "";
    p61 = "";
    var m = Math.floor(42.5/h);
    //console.log('h is',h)
    //console.log('m is',m)
    var h_=42.5-(Math.floor(42.5/h))*h;
    //console.log('h_ is',h_);
    for (m1 = 0; m1 < m; m1=m1+2) {
        if (((m1+2)*h)<42.5) {
            p41+= "h"+h+" l"+(m1+1)*-h+" "+(m1+1)*h+ "v"+h+" l"+(m1+2)*h+" "+(m1+2)*-h+"";
        } else {
            h_=42.5-(Math.floor(42.5/h))*h;
            p41+= "h"+h+" l"+(m1+1)*-h+" "+(m1+1)*h+ "v"+h_+"";
        }
    }
    //console.log('p41 is',p41);
    var x11 =h-h_;
    //console.log('x11 for p51 is',x11);
    var m_=Math.ceil((392.5-m*h)/(2*h));
    //console.log('m_ is',m_);
    for (m2 = 0; m2 <m_; m2++) {
        if (m2<(m_-1)) {
            p51+="h"+x11+" l42.5 -42.5 h"+h+" l-42.5 42.5";
            x11 =h;
        } else {
            if (392.5<=(m*h+(m_-1)*h*2+h)) {
                p51+="h"+x11+" l"+(42.5-((m*h+(m_-1)*h*2+h)-392.5))+" "+(-(42.5-((m*h+(m_-1)*h*2+h)-392.5)))+" ";
            } else {
                //console.log('THIS IS RUNNINGG');
                p51+="h"+x11+" l42.5 -42.5h"+(392.5-(m*h+(m_-1)*h*2+h))+"";
            }
        }
    }
    //console.log('p51 is',p51);
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
    //console.log('p61 is',p61);
    var lh =0.3;
    //console.log('middle2 lh =',lh);
    var ln = Math.round(4/lh);
    //console.log("ln in middle2 is",ln);
    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    var id4 = 'drawlayer'+(z+3)+(repeat)+'';
    path.setAttributeNS(null,'id',id4);
    //console.log('id is',id4);
    path.setAttributeNS(null,'fill','transparent');
    document.getElementById(id4).setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5l1.5 -1.5h395.5v-45.5h-395.5v45.5v-45.5 l1.5 1.5"+p41+" "+p51+""+p61+"");
    //console.log('path4',path);
    var path4 = document.getElementById(id4);
    var len4= path4.getTotalLength();
    console.log('len4=',len4);
    var t2 = len4/(11662.668945/t);
    //console.log('t2 is ',t2)
    //var len4 = 10838.162109375;
    document.getElementById(id4).style.strokeDasharray = len4;
    document.getElementById(id4).style.strokeDashoffset = len4;
    document.getElementById(id4).style.strokeWidth = 1.5;
    document.getElementById(id4).style.zIndex=z;
    document.getElementById(id4).style.animation = "animate1 "+t2+"s linear "+(2*t+z1*t1+z2*t2)+"s forwards";
    console.log('t is',t,'z1=',z1,'z2=',z2,'t1=',t1,'t2=',t2);
    console.log('%c middle2=',  "color: red; font-style: italic;",document.getElementById(id4).style.animation);
    layer(t2,t1,t2,2,z1,z2,z,frac_val[repeat-1]);
    imgmove(t2,t1,t2,2,z1,z2,z);
    if (z<(ln-3)) {
        z++;
        z2++;
        middle1(z,z1,z2,middle2,t2);}
    else{    last(z,z1,z2,t1,t2);}
}


function last(z,z1,z2,t1,t2) {
    if (repeat==1) {
        var t = 10; 
    } else {
 var t = 6;
    }
    console.log('last is running');
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
    document.getElementById(id5).style.animation = "animate1 "+t+"s linear "+(2*t+z1*t1+(z2+1)*t2)+"s forwards";
    console.log('%c last1=',  "color: red; font-style: italic;",document.getElementById(id5).style.animation);
    layer(t,t1,t2,2,z1,z2+1,11,0.0363);
    imgmove(t,t1,t2,2,z1,z2+1,11);

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
    document.getElementById(id6).style.animation = "animatelast "+t+"s linear "+(3*t+z1*t1+((z2+1)*t2))+"s forwards";
    console.log('%c last2=', "color: red; font-style: italic;", document.getElementById(id6).style.animation);
    t_tot = 4*t+z1*t1+((z2+1)*t2);
    console.log('t is',t,'z1=',z1,'z2=',z2,'t1=',t1,'t2=',t2);
    console.log('t_tot  =',t_tot);
    layer(t,t1,t2,3,z1,z2+1,12,0.0363);
    imgmove(t,t1,t2,3,z1,z2+1,12);

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
    var lh = 0.3;
    var ln = Math.round(4/lh);
    var t_sec = Math.floor((infillvalues[repeat-1][1])*60);
    console.log('print t_sec =',t_sec);
    console.log('t_tot print=',t_tot);
    if (repeat==1) {
        len3 = 4105.71630859375;
        len4 = 4151.2158203125
        var t_total=(4*t+4*(len3*t/11662.668945)+5*(len4*t/11662.668945));
    } else if (repeat==2) {
        len3 = 5358.3291015625;
        len4 = 5403.8291015625;
        var t_total=(4*t+4*(len3*t/11662.668945)+5*(len4*t/11662.668945));
    } else if (repeat==3) {
        len3 = 6502.6337890625;
        len4 = 6548.1337890625;
        var t_total=(4*t+4*(len3*t/11662.668945)+5*(len4*t/11662.668945));
    } else if (repeat==4) {
        len3 = 8504.951171875;
        len4 = 8550.451171875;
        var t_total=(4*t+4*(len3*t/11662.668945)+5*(len4*t/11662.668945));
    } else if(repeat==5){
        len3 = 10792.662109375;
        len4 = 10838.162109375;
        var t_total=(4*t+4*(len3*t/11662.668945)+5*(len4*t/11662.668945));
    }
    console.log(t_total)
    var t_val = Math.floor((t_total*3*1000)/t_sec);
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
        first(0);
        middle1(2,0,0,middle2,0);
        console.log('drawlayer',document.getElementById('drawlayer4'+(repeat)+'').style.animation);
        const anim1 = document.getElementById('drawlayer4'+(repeat)+'');
        anim1.addEventListener("animationend",()=>{
            document.getElementById("stopwatch0_").style.visibility="hidden";
            document.getElementById("stopwatch0").style.visibility="visible";
            var elapsed = new Date().getTime() - start;
            console.log('time is ',elapsed);
            console.log('timediff is',elapsed-((t_total[repeat-1])*1000))
            myInt = setInterval(animatearrow, 500);
            if (timer.innerHTML=="00:27:30" || timer.innerHTML=="00:33:18" || timer.innerHTML=="00:39:06" || timer.innerHTML=="00:44:48" || timer.innerHTML=="00:50:36") {
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
                            validateAnswer(0,0,"500px","275px");
                        },500);
                }
                else if (repeat==3) {
                    setTimeout(function()
                    {
                        validateAnswer(1,1,"500px","275px");
                    },500);
                }
                else if (repeat==4){
                    setTimeout(function()
                    {
                        validateAnswer(2,3,"500px","275px");
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
