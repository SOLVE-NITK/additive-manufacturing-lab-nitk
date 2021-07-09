p1="";
p2="";
p3="";
p4="";
p5="";
p6="";
var i=0;
var x1=1.5;
var x2=0.75;
var t = 6;
var z,sw,v,n;
var impactvalues = [[0.5,9.26,5.99],[0.4,10.99,7.73],[0.3,12.73,9.47],[0.2,14.47,11.21],[0.1,16.21,12.95]]

var svg= document.getElementById('specimen');
var svgNS = "http://www.w3.org/2000/svg";

for (i = 0; i < 14; i++) {
    p1 += "h392.5v-1.6h-392.5v-1.6";
}
for (j = 0; j < 124; j++) {
    p4 += "v42.5h1.6v-42.5h1.6";
}


function layer(v) {
    console.log('layer is running');
    var lh = document.getElementById("lh").innerHTML;
    console.log('layer lh =',lh);
    var ln = Math.round(4/lh);
    var id1 = 'layer'+(v+1)+'';
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
    console.log('path for front view is',path);
    document.getElementById(id1).setAttribute('d',"M25,"+(272.5-(v*sw))+" l400 0.001") ;
    //console.log(document.getElementById(id1).getAttribute('d'));
    var len = 400;
    document.getElementById(id1).style.strokeWidth = sw;
    document.getElementById(id1).style.strokeLinecap = 'round';
    document.getElementById(id1).style.strokeDasharray = len;
    document.getElementById(id1).style.strokeDashoffset = len;
    document.getElementById(id1).style.zIndex = v+1;
    document.getElementById(id1).style.stroke = "url(#myGradient)";
    document.getElementById(id1).style.animation = "animate "+(0.0363*t)+"s linear "+v*t+"s forwards";
    if (v<(ln-1)) {
        v++;
       // console.log('new v is',v)
        layer(v);
    }

}
function layerrepeat(v1,v2) {
    console.log('layerrepeat is running');
    var lh = document.getElementById("lh").innerHTML;
    console.log('layerepeat lh =',lh);
    var ln = Math.round(4/lh);
    var id4 = 'layerrepeat'+(v1+1)+''+v2+'';
    var sw=lh*5;
    //console.log('sw is',sw);
    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    path.setAttributeNS(null,'id',id4);
    path.setAttributeNS(null,'fill','none');
    //console.log('id for front view is',id1);
    //console.log('path for front view is',path);
    document.getElementById(id4).setAttribute('d',"M25,"+(272.5-(v1*sw))+" l400 0.001") ;
    //console.log(document.getElementById(id1).getAttribute('d'));
    document.getElementById(id4).style.strokeWidth = sw;
    document.getElementById(id4).style.strokeLinecap = 'round';
    document.getElementById(id4).style.zIndex = v1+1;
    document.getElementById(id4).style.stroke = "url(#myGradient)";
    document.getElementById(id4).setAttribute("class","drawrepeat");
    if (v1<(ln-1)) {
        v1++;
       // console.log('new v is',v)
        layerrepeat(v1,v2);
    }

}
function imgmove(n)
{
    var lh =document.getElementById("lh").innerHTML;
    console.log('imgmove lh =',lh);
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
    if ((n<2)  || (n>(ln-3)))
    {
      if ((n+1)%2==0)
      {
        document.getElementById(id3).style.animation = "animateimgtb "+t+"s linear "+(t*n)+"s  forwards";
        img.addEventListener("animationstart",()=>{         img.style.visibility ='visible';        })
        img.addEventListener("animationend",()=>{         img.style.visibility = "hidden";		})
      }
      else
      {
        document.getElementById(id3).style.animation = "animateimgtbhorizontal "+(0.1963*t)+"s linear "+(t*n)+"s  forwards";
        img.addEventListener("animationstart",()=>{
          img.style.visibility ='visible';
          document.getElementById("img0").style.animation = "";        })
        img.addEventListener("animationend",()=>{
          console.log('img is',document.getElementById(id3));
          img.style.visibility = "hidden";
          document.getElementById("img0").style.position = "absolute";
          document.getElementById("img0").style.bottom = ''+(130+((n)*sw*1.5))+'px';
          document.getElementById("img0").style.animation = "animateimginfill "+((1-0.1963)*t/28)+"s linear 28 alternate";
          document.getElementById("img0").addEventListener("animationstart",()=>{
            document.getElementById("img0").style.visibility ='visible';        })
            document.getElementById("img0").addEventListener("animationend",()=>{
              document.getElementById("img0").style.visibility = "hidden";	})		})
      }
    }
    else
    {
      if ((n+1)%2==0)
      {
        document.getElementById(id3).style.animation = "animateimg "+t+"s linear "+(t*n)+"s  forwards";
        img.addEventListener("animationstart",()=>{ img.style.visibility ='visible';    })
        img.addEventListener("animationend",()=>  { img.style.visibility = "hidden";		})
      }
      else
      {
        document.getElementById(id3).style.animation = "animateimghorizontal "+(0.1343*t)+"s linear "+(t*n)+"s  forwards";
        img.addEventListener("animationstart",()=>{
          img.style.visibility ='visible';
          document.getElementById("img0").style.animation = "";      })
        img.addEventListener("animationend",()=>  {
          img.style.visibility = "hidden";
          document.getElementById("img0").style.position = "absolute";
          document.getElementById("img0").style.bottom = ''+(130+((n)*sw*1.5))+'px';
          document.getElementById("img0").style.animation = "animateimginfill "+((1-0.1343)*t/28)+"s linear 28 alternate";
          document.getElementById("img0").addEventListener("animationstart",()=>{   document.getElementById("img0").style.visibility ='visible';        })
          document.getElementById("img0").addEventListener("animationend",()=>  {   document.getElementById("img0").style.visibility = "hidden";	})		})
      }
    }
    if (n<(ln-1))
    {
        n++;
        imgmove(n);

    }
}

function first(z) {
    console.log('first is running');
    document.getElementById('drawlayer1').setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5 l1.5 -1.5h395.5v-45.5h-395.5v45.5l1.5 -1.5h392.5v-42.5h-392.5v42.5"+p1+" "+p2+""+p3+"");
    var path1 = document.querySelector(".svg path[id = 'drawlayer1']");
    var len1 = path1.getTotalLength();
    document.getElementById('drawlayer1').style.strokeDasharray = len1;
    document.getElementById('drawlayer1').style.strokeDashoffset = len1;
    document.getElementById('drawlayer1').style.strokeWidth = 1.4;
    document.getElementById('drawlayer1').style.zIndex=z;
    document.getElementById('drawlayer1').style.animation = "animate1 "+t+"s linear forwards";


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
    },(((t*2)+3)*1000));
    setTimeout(function()
    {
    document.getElementById("notes").style.visibility="hidden";
    },(((t*3)+2)*1000));
    setTimeout(function()
    {
    document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:30px; top:250px;"
    document.getElementById("notes").innerHTML="The extruder nozzle deposits the material in each layer and moves up a distance equal to layer height.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The deposited material bonds with the previous layer and solidifies.";
    },(((t*3)+7)*1000));
    setTimeout(function()
    {
    document.getElementById("notes").style.visibility="hidden";
    },(((t*3)+13)*1000));

    setTimeout(function()
    {
    document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:150px; top:250px;"
    if($("input[name='d']:checked").val()==0){	document.getElementById('notes').innerHTML="For ABS, the extruder is kept at a temperature of around 200–250°C";		}
    if($("input[name='d']:checked").val()==1){	document.getElementById('notes').innerHTML="For PLA, the extruder is kept at a temperature of around 180–220°C";		}	
    },(((t*3)+18)*1000));
    setTimeout(function()
    {
    document.getElementById("notes").style.visibility="hidden";
    },(((t*3)+23)*1000));
    setTimeout(function()
    {
    document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:150px; top:250px;"
    document.getElementById("notes").innerHTML="The layer height should not be more than the nozzle diameter.";
    },(((t*3)+26)*1000));
    setTimeout(function()
    {
    document.getElementById("notes").style.visibility="hidden";
    },(((t*3)+30)*1000));

}
function middle1(z,callback) {
    console.log('middle1 is running');
    var lh = document.getElementById("lh").innerHTML;
    console.log('middle1 lh =',lh);
    var ln = Math.round(4/lh);
    //console.log("ln in middle1 is",ln);
    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    var id2 = 'drawlayer'+(z+5)+'';
    path.setAttributeNS(null,'id',id2);
    //console.log('id is',id2);
    path.setAttributeNS(null,'fill','transparent');
    document.getElementById(id2).setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5 l1.5 -1.5h395.5v-45.5h-395.5v45.5 l1.5 -1.5"+p1+" "+p2+""+p3+"");
    //console.log('path3',path);
    var len3 = document.getElementById(id2).getTotalLength();
    document.getElementById(id2).style.strokeDasharray = len3;
    document.getElementById(id2).style.strokeDashoffset = len3;
    document.getElementById(id2).style.strokeWidth = 1.5;
    document.getElementById(id2).style.zIndex=z;
    document.getElementById(id2).style.animation = "animate1 "+t+"s linear "+(z*t)+"s forwards";
    //console.log(len3);

    if (z<(ln-3)) {
        z++;
      //  console.log("new z for middle2 is",z);
        callback(z);

    }

}
function middle2(z) {
    console.log('middle2 is running');
    var lh = document.getElementById("lh").innerHTML;
    console.log('middle2 lh =',lh);
    var ln = Math.round(4/lh);
    //console.log("ln in middle2 is",ln);
    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    var id2 = 'drawlayer'+(z+5)+'';
    path.setAttributeNS(null,'id',id2);
    //console.log('id is',id2);
    path.setAttributeNS(null,'fill','transparent');
    document.getElementById(id2).setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5l1.5 -1.5h395.5v-45.5h-395.5v45.5v-45.5 l1.5 1.5"+p4+" "+p5+""+p6+"");
    //console.log('path4',path);
    var len4 = document.getElementById(id2).getTotalLength();
    document.getElementById(id2).style.strokeDasharray = len4;
    document.getElementById(id2).style.strokeDashoffset = len4;
    document.getElementById(id2).style.strokeWidth = 1.5;
    document.getElementById(id2).style.zIndex=z;
    document.getElementById(id2).style.animation = "animate1 "+t+"s linear "+(z*t)+"s forwards";
    if (z<(ln-3)) {
        z++;
      //  console.log("new z for middle1 is",z);
        middle1(z,middle2);

    }

}


function last(z) {
    console.log('last is running');
    document.getElementById('drawlayer5').setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5 l1.5 -1.5h395.5v-45.5h-395.5v45.5l1.5 -1.5h392.5v-42.5h-392.5v42.5"+p1+" "+p2+""+p3+"");
    var path5 = document.querySelector(".svg path[id = 'drawlayer5']");
    var len5= path5.getTotalLength();
    document.getElementById('drawlayer5').style.strokeDasharray = len5;
    document.getElementById('drawlayer5').style.strokeDashoffset = len5;
    document.getElementById('drawlayer5').style.strokeWidth = 1.4;
    document.getElementById('drawlayer5').style.zIndex=z;
    document.getElementById('drawlayer5').style.animation = "animate1 "+t+"s linear "+(z*t)+"s forwards";

    document.getElementById('drawlayer6').setAttribute('d',"M25.75 111.75h398.5v-48.5h-398.5v48.5l1.5 -1.5h395.5v-45.5h-395.5v45.5l1.5 -1.5h392.5v-42.5h-392.5v42.5v-42.5"+p4+" "+p5+""+p6+"");
    var path6 = document.querySelector(".svg path[id = 'drawlayer6']");
    var len6 = path6.getTotalLength();
    document.getElementById('drawlayer6').style.strokeDasharray = len6;
    document.getElementById('drawlayer6').style.strokeDashoffset = len6;
    document.getElementById('drawlayer6').style.strokeWidth = 1.4;
    document.getElementById('drawlayer6').style.zIndex=z+1;
    document.getElementById('drawlayer6').style.animation = "animatelast "+t+"s linear "+((z+1)*t)+"s forwards";

}


function print()
{
    myStopFunction();
    var lh = document.getElementById("lh").innerHTML;
    console.log('print lh =',lh);
    var ln = Math.round(4/lh);
    //console.log("ln is",ln);
    layer(0);
    imgmove(0);
    first(0);
    middle1(2,middle2);
    last((ln-2));

}
