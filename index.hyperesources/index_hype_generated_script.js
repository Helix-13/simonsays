//	HYPE.documents["index"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="index.hyperesources",f="index",g="index_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/index_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_654F||null!=window.HYPE_dtl_654F)||true==!0||null!=c&&10>c;a=!0==d?"HYPE-654.full.min.js":"HYPE-654.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_654"+c,"HYPE_dtl_654"+c,a,d),false==!0&&(a=a||k("HYPE_w_654","HYPE_wdtl_654","HYPE-654.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_654","HYPE-654.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"colorClicked",source:"function(hypeDocument, element, event) {\t\t\t\n\tif (BUTTONSCLICKABLE == true) {\n\t\n\t\tif (element.id == \"redDetect\") {\n\t\t\tif (COLORSEQUENCE[CURRENTELEMENT] == \"red\") {\n\t\t\t\thypeDocument.startTimelineNamed('redBeep');\n\t\t\t\tCURRENTELEMENT++;\n\t\t\t} else {\n\t\t\t\tGAMEOVER = true;\n\t\t\t}\n\t\t} else if (element.id == \"greenDetect\") {\n\t\t\tif (COLORSEQUENCE[CURRENTELEMENT] == \"green\") {\n\t\t\t\thypeDocument.startTimelineNamed('greenBeep');\n\t\t\t\tCURRENTELEMENT++;\n\t\t\t} else {\n\t\t\t\tGAMEOVER = true;\n\t\t\t}\n\t\t} else if (element.id == \"blueDetect\") {\n\t\t\tif (COLORSEQUENCE[CURRENTELEMENT] == \"blue\") {\n\t\t\t\thypeDocument.startTimelineNamed('blueBeep');\n\t\t\t\tCURRENTELEMENT++;\n\t\t\t} else {\n\t\t\t\tGAMEOVER = true;\n\t\t\t}\n\t\t} else if (element.id == \"yellowDetect\") {\n\t\t\tif (COLORSEQUENCE[CURRENTELEMENT] == \"yellow\") {\n\t\t\t\thypeDocument.startTimelineNamed('yellowBeep');\n\t\t\t\tCURRENTELEMENT++;\n\t\t\t} else {\n\t\t\t\tGAMEOVER = true;\n\t\t\t}\t\n\t\t}\n\n\t\tif (GAMEOVER == true ) { // USER CLICKED THE WRONG VALUE\n\t\t\tBUTTONSCLICKABLE = false;\n\t\t\thypeDocument.startTimelineNamed('gameOver');\n\t\t}\n\n\t\tif ((CURRENTELEMENT) == SEQUENCECOUNT) {\n\t\t\tCURRENTELEMENT = 0;\n\t\t\t\n\t\t\tdocument.getElementById(\"sequenceValue\").innerHTML = \"SCORE<br/>\" + SEQUENCECOUNT;\n\t\t\tBUTTONSCLICKABLE = false;\n\t\t\t\n\t\t\tif ((SEQUENCECOUNT % 5) != 0) {\n\t\t\t\tSEQUENCECOUNT++;\n\t\t\t\tsetTimeout(function(){ hypeDocument.startTimelineNamed('roundComplete'); }, 500);\n\t\t\t\tsetTimeout(function(){ PLAYINTERVAL = setInterval(SELECTCOLOR, INTERVALSPEED); }, 1500);\n\t\t\t} else {\n\t\t\t\n\t\t\t\tvar tempString = SEQUENCECOUNT + \" ROUNDS<br/>\";\n\t\t\t\tif (SEQUENCECOUNT == (5 || 25 || 50 || 75 || 100)) { \n\t\t\t\t\ttempString += \"BRILLIANT!\";\n\t\t\t\t} else if (SEQUENCECOUNT == (10 || 30 || 55 || 80)) {\n\t\t\t\t\ttempString += \"AMAZING!\";\n\t\t\t\t} else if (SEQUENCECOUNT == (15 || 35 || 60 || 85)) {\n\t\t\t\t\ttempString += \"GENIUS!\";\n\t\t\t\t} else if (SEQUENCECOUNT == (20 || 40 || 65 || 90)) {\n\t\t\t\t\ttempString += \"OUTSTANDING!\";\n\t\t\t\t} else if (SEQUENCECOUNT == (25 || 45 || 70 || 95)) {\n\t\t\t\t\ttempString += \"EXTRAOURDINARY!\";\n\t\t\t\t} \n\t\t\t\tdocument.getElementById(\"badgeMessage\").innerHTML = tempString;\n\t\t\t\n\t\t\t\tSEQUENCECOUNT++;\n\t\t\t\tsetTimeout(function(){ hypeDocument.startTimelineNamed('showBadge'); }, 500);\n\t\t\t}\n\t\t\t\n\t\t}\n\t}\t\t\n\t\t\t\t\t\n}",identifier:"49"},{name:"initializeMain",source:"function(hypeDocument, element, event) {\t\n\tSELECTCOLOR = function() {\n\t\tvar color = COLORSEQUENCE[CURRENTELEMENT];\n\t\tif (color == \"blue\") { \n\t\t\thypeDocument.startTimelineNamed('blueBeep');   \n\t\t} else if (color == \"red\") { \n\t\t\thypeDocument.startTimelineNamed('redBeep');    \n\t\t} else if (color == \"green\") { \n\t\t\thypeDocument.startTimelineNamed('greenBeep');  \n\t\t} else if (color == \"yellow\") { \n\t\t\thypeDocument.startTimelineNamed('yellowBeep'); \n\t\t}\n\t\tif (CURRENTELEMENT < (SEQUENCECOUNT - 1)) {\n\t\t\tCURRENTELEMENT++;\n\t\t} else {\n\t\t\tclearInterval(PLAYINTERVAL);\n\t\t\tLISTENSEQUENCE();\n\t\t}\n\t};\n\n\tLISTENSEQUENCE = function() {\n\t\tBUTTONSCLICKABLE = true;\n\t\tCURRENTELEMENT = 0;\n\t};\n\n\tclearInterval(PLAYINTERVAL);\n\tvar i; \n\tvar temp1;\n\tvar temp2 = new Array();\n\tfor (i = 0; i < 100; i++) {\n\t\ttemp1 = Math.floor(Math.random()*4);\n\t\tif (temp1 == 0) { \t\ttemp2[i] = \"red\"; }\n\t\telse if (temp1 == 1) {\ttemp2[i] = \"blue\"; }\n\t\telse if (temp1 == 2) {\ttemp2[i] = \"yellow\"; }\n\t\telse if (temp1 == 3) {\ttemp2[i] = \"green\"; }\n\t}\n\tCOLORSEQUENCE = temp2;\n\tconsole.log(\"The color sequence is \" + COLORSEQUENCE);\n\n\tif (GAMEOVER == true) {\n\t\tGAMEOVER = false;\n\t\tBUTTONSCLICKABLE = false;\n\t\tdocument.getElementById(\"sequenceValue\").innerHTML = \"SCORE<br/>\" + SEQUENCECOUNT;\n\t\tconsole.log(\"Play The Sequence For The User\");\n\t\tPLAYINTERVAL = setInterval(SELECTCOLOR, INTERVALSPEED);\n\t}\n\n\t\t\n}",identifier:"52"},{name:"resumeGame",source:"function(hypeDocument, element, event) {\t\n\thypeDocument.startTimelineNamed('hideBadge');\n\tsetTimeout(function(){ PLAYINTERVAL = setInterval(SELECTCOLOR, INTERVALSPEED); }, 1500);\n\t\n}",identifier:"93"},{name:"chooseSpeed",source:"function(hypeDocument, element, event) {\t\n\t\n\tif (element.id == \"easyButton\") {\n\t\tINTERVALSPEED = 1000;\n\t} else {\n\t\tINTERVALSPEED = 400;\n\t}\n\thypeDocument.showSceneNamed('main');\n\t\n}",identifier:"96"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_654"+c](f,g,{"10":{p:2,n:"boop3.mp3",g:"29",t:"audio/mpeg"},"2":{p:1,n:"blue.png",g:"11",t:"@1x"},"-2":{n:"blank.gif"},"3":{p:1,n:"green.png",g:"13",t:"@1x"},"11":{p:2,n:"boop4.mp3",g:"30",t:"audio/mpeg"},"4":{p:1,n:"yellow.png",g:"15",t:"@1x"},"5":{p:2,n:"gameOver.mp3",g:"58",t:"audio/mpeg"},"12":{p:2,n:"load.mp3",g:"123",t:"audio/mpeg"},"6":{p:2,n:"badgeFanfare.mp3",g:"75",t:"audio/mpeg"},"13":{p:2,n:"load.ogg",g:"123",t:"audio/ogg"},"7":{p:1,n:"badge.png",g:"111",t:"@1x"},"-1":{n:"PIE.htc"},"0":{p:1,n:"outline.png",g:"5",t:"@1x"},"8":{p:2,n:"boop1.mp3",g:"27",t:"audio/mpeg"},"14":{p:2,n:"roundClear.mp3",g:"60",t:"audio/mpeg"},"1":{p:1,n:"red.png",g:"9",t:"@1x"},"9":{p:2,n:"boop2.mp3",g:"28",t:"audio/mpeg"}},l,[],e,[{n:"splash",o:"61",X:[0]},{n:"main",o:"1",X:[1]}],
[{o:"63",p:"600px",cA:false,Y:800,Z:600,L:[],c:"#000",bY:1,d:800,U:{},T:{"68_hover":{q:false,z:1,i:"68_hover",n:"68_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#FFFB00",s:"#FF2600",o:"126"},{f:"c",y:0,z:1,i:"B",e:"#FFFB00",s:"#FF2600",o:"126"},{f:"c",y:0,z:1,i:"C",e:"#FFFB00",s:"#FF2600",o:"126"},{f:"c",y:0,z:1,i:"D",e:"#FFFB00",s:"#FF2600",o:"126"},{f:"c",y:0,z:1,i:"A",e:"#FFFB00",s:"#FF2600",o:"126"},{y:1,i:"G",s:"#FFFB00",z:0,o:"126",f:"c"},{y:1,i:"B",s:"#FFFB00",z:0,o:"126",f:"c"},{y:1,i:"C",s:"#FFFB00",z:0,o:"126",f:"c"},{y:1,i:"D",s:"#FFFB00",z:0,o:"126",f:"c"},{y:1,i:"A",s:"#FFFB00",z:0,o:"126",f:"c"}],f:30,b:[]},"97_hover":{q:false,z:1,i:"97_hover",n:"97_hover",a:[{f:"c",y:0,z:1,i:"A",e:"#FFFB00",s:"#FF2600",o:"125"},{f:"c",y:0,z:1,i:"G",e:"#FFFB00",s:"#FF2600",o:"125"},{f:"c",y:0,z:1,i:"C",e:"#FFFB00",s:"#FF2600",o:"125"},{f:"c",y:0,z:1,i:"B",e:"#FFFB00",s:"#FF2600",o:"125"},{f:"c",y:0,z:1,i:"D",e:"#FFFB00",s:"#FF2600",o:"125"},{y:1,i:"A",s:"#FFFB00",z:0,o:"125",f:"c"},{y:1,i:"G",s:"#FFFB00",z:0,o:"125",f:"c"},{y:1,i:"C",s:"#FFFB00",z:0,o:"125",f:"c"},{y:1,i:"B",s:"#FFFB00",z:0,o:"125",f:"c"},{y:1,i:"D",s:"#FFFB00",z:0,o:"125",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:16,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",y:0,z:16,i:"c",e:522,s:522,o:"124"},{f:"c",y:0,z:4,i:"cQ",e:-1,s:1,o:"124"},{f:"c",y:0,z:2,i:"G",e:"#00F",s:"#F00",o:"124"},{f:"f",y:0,z:2,i:"a",e:100,s:800,o:"127"},{y:0,i:"b",s:220,z:0,o:"127",f:"f"},{f:"c",y:2,z:2,i:"G",e:"#0F0",s:"#00F",o:"124"},{y:2,i:"a",s:100,z:0,o:"127",f:"c"},{f:"c",y:4,z:4,i:"cQ",e:1,s:-1,o:"124"},{f:"c",y:4,z:2,i:"G",e:"#FF0",s:"#0F0",o:"124"},{f:"c",y:6,z:2,i:"G",e:"#F00",s:"#FF0",o:"124"},{f:"c",p:2,y:8,z:8,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"62"}]},s:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"62"}]},o:"kTimelineDefaultIdentifier"},{y:8,i:"cQ",s:1,z:0,o:"124",f:"e"},{y:8,i:"G",s:"#F00",z:0,o:"124",f:"c"},{f:"c",p:2,y:16,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"62"}]},o:"kTimelineDefaultIdentifier"},{y:16,i:"c",s:522,z:0,o:"124",f:"c"}],f:30,b:[]}},bZ:180,O:["124","127","126","125"],n:"Untitled Layout","_":0,v:{"126":{b:450,z:4,K:"Solid",c:168,L:"Solid",d:68,aS:6,M:10,bD:"none",N:10,aT:6,dB:"button",O:10,aU:6,P:10,aV:6,i:"easyButton",j:"absolute",k:"div",aI:0,aJ:0,aK:0,aL:0,A:"#FF2600",B:"#FF2600",aM:"68_hover",r:"inline",C:"#FF2600",Z:"break-word",s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",D:"#FF2600",t:60,F:"center",aA:{a:[{p:4,h:"96"}]},G:"#FF2600",aP:"pointer",w:"EASY",x:"visible",I:"Solid",a:150,y:"preserve",J:"Solid"},"127":{aU:8,G:"#FFF",c:584,aV:8,r:"inline",d:184,s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",t:48,Z:"break-word",i:"splashDirections",w:"Can You Do What Simon Says And Follow The Pattern Of Lights And Sounds?",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:800,F:"center",b:220},"124":{aU:8,G:"#F00",aV:8,r:"inline",cQ:1,s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",t:96,cR:1,Z:"break-word",w:"SIMON SAYS\n",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:6,aS:8,aT:8,a:131,b:64},"125":{b:450,z:5,K:"Solid",c:168,L:"Solid",d:68,aS:6,M:10,bD:"none",N:10,aT:6,dB:"button",O:10,aU:6,P:10,aV:6,i:"hardButton",j:"absolute",k:"div",aI:0,aJ:0,aK:0,aL:0,A:"#FF2600",B:"#FF2600",aM:"97_hover",r:"inline",C:"#FF2600",Z:"break-word",s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",D:"#FF2600",t:60,F:"center",aA:{a:[{p:4,h:"96"}]},G:"#FF2600",aP:"pointer",w:"HARD",x:"visible",I:"Solid",a:450,y:"preserve",J:"Solid"}}},{A:{a:[{p:4,h:"52"},{p:12,o:"123",q:false}]},o:"3",p:"600px",cA:false,Y:800,Z:600,c:"#FF77C8",L:[],bY:1,d:800,U:{},T:{"31":{q:false,z:0.1,i:"31",n:"blueBeep",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"27",q:false}]},o:"31"},{f:"a",y:0,z:0.01,i:"b",e:-900,s:-300,o:"129"},{f:"a",y:0.01,z:0.08,i:"b",e:-900,s:-900,o:"129"},{f:"a",y:0.09,z:0.01,i:"b",e:-300,s:-900,o:"129"},{y:0.1,i:"b",s:-300,z:0,o:"129",f:"c"}],f:30,b:[]},"88":{q:false,z:1,i:"88",n:"hideBadge",a:[{f:"e",y:0,z:1,i:"b",e:-500,s:25,o:"131"},{f:"e",y:0,z:1,i:"b",e:-500,s:25,o:"135"},{f:"e",y:0,z:1,i:"b",e:-217,s:308,o:"134"},{f:"e",y:0,z:1,i:"b",e:-90,s:435,o:"139"},{y:1,i:"b",s:-500,z:0,o:"135",f:"c"},{y:1,i:"b",s:-90,z:0,o:"139",f:"c"},{y:1,i:"b",s:-217,z:0,o:"134",f:"c"},{y:1,i:"b",s:-500,z:0,o:"131",f:"c"}],f:30,b:[]},"73_hover":{q:false,z:1,i:"73_hover",n:"73_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#00C5FB",o:"139"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#00B3FB",o:"139"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#00B3FB",o:"139"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#00B3FB",o:"139"},{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#00B3FB",o:"139"},{y:1,i:"G",s:"#FF2600",z:0,o:"139",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"139",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"139",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"139",f:"c"},{y:1,i:"A",s:"#FF2600",z:0,o:"139",f:"c"}],f:30,b:[]},"45":{q:false,z:0.1,i:"45",n:"yellowBeep",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"30",q:false}]},o:"45"},{f:"a",y:0,z:0.01,i:"b",e:-900,s:-300,o:"144"},{f:"a",y:0.01,z:0.08,i:"b",e:-900,s:-900,o:"144"},{f:"a",y:0.09,z:0.01,i:"b",e:-300,s:-900,o:"144"},{y:0.1,i:"b",s:-300,z:0,o:"144",f:"c"}],f:30,b:[]},"95_hover":{q:false,z:1,i:"95_hover",n:"95_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#8000FF",o:"137"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#8000FF",o:"137"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#8000FF",o:"137"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#8000FF",o:"137"},{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#8000FF",o:"137"},{y:1,i:"G",s:"#FF2600",z:0,o:"137",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"137",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"137",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"137",f:"c"},{y:1,i:"A",s:"#FF2600",z:0,o:"137",f:"c"}],f:30,b:[]},"35":{q:false,z:0.1,i:"35",n:"redBeep",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"28",q:false}]},o:"35"},{f:"a",y:0,z:0.01,i:"b",e:-600,s:0,o:"133"},{f:"a",y:0.01,z:0.08,i:"b",e:-600,s:-600,o:"133"},{f:"a",y:0.09,z:0.01,i:"b",e:0,s:-600,o:"133"},{y:0.1,i:"b",s:0,z:0,o:"133",f:"c"}],f:30,b:[]},"74":{q:false,z:1,i:"74",n:"showBadge",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"75",q:false}]},o:"74"},{f:"f",y:0,z:1,i:"b",e:25,s:-500,o:"131"},{f:"f",y:0,z:1,i:"b",e:25,s:-500,o:"135"},{f:"f",y:0,z:1,i:"b",e:308,s:-217,o:"134"},{f:"f",y:0,z:1,i:"b",e:435,s:-90,o:"139"},{y:1,i:"b",s:25,z:0,o:"135",f:"c"},{y:1,i:"b",s:25,z:0,o:"131",f:"c"},{y:1,i:"b",s:308,z:0,o:"134",f:"c"},{y:1,i:"b",s:435,z:0,o:"139",f:"c"}],f:30,b:[]},"59":{q:false,z:0,i:"59",n:"roundComplete",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"60",q:false}]},o:"59"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:16,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",y:0,z:2,i:"G",e:"#FFF",s:"#FF2600",o:"136"},{f:"c",y:0,z:16,i:"f",e:360,s:0,o:"136"},{f:"c",y:2,z:2,i:"G",e:"#0433FF",s:"#FFF",o:"136"},{f:"c",y:4,z:2,i:"G",e:"#FFF",s:"#0433FF",o:"136"},{f:"c",y:6,z:2,i:"G",e:"#FFFB00",s:"#FFF",o:"136"},{f:"c",y:8,z:2,i:"G",e:"#FFF",s:"#FFFB00",o:"136"},{f:"c",y:10,z:2,i:"G",e:"#00F900",s:"#FFF",o:"136"},{f:"c",y:12,z:2,i:"G",e:"#FFF",s:"#00F900",o:"136"},{f:"c",y:14,z:2,i:"G",e:"#FF2600",s:"#FFF",o:"136"},{f:"c",p:2,y:16,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"2"}]},o:"kTimelineDefaultIdentifier"},{y:16,i:"f",s:360,z:0,o:"136",f:"c"},{y:16,i:"G",s:"#FF2600",z:0,o:"136",f:"c"}],f:30,b:[]},"41":{q:false,z:0.1,i:"41",n:"greenBeep",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"29",q:false}]},o:"41"},{f:"a",y:0,z:0.01,i:"b",e:-600,s:0,o:"146"},{f:"a",y:0.01,z:0.08,i:"b",e:-600,s:-600,o:"146"},{f:"a",y:0.09,z:0.01,i:"b",e:0,s:-600,o:"146"},{y:0.1,i:"b",s:0,z:0,o:"146",f:"c"}],f:30,b:[]},"57":{q:false,z:0,i:"57",n:"gameOver",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"58",q:false}]},o:"57"}],f:30,b:[]}},bZ:180,O:["135","131","134","139","130","142","144","146","129","133","132","138","145","147","136","140","128","141","143","137","148"],n:"Untitled Layout","_":1,v:{"136":{aU:8,bB:2,G:"#FF2600",b:216,c:184,aV:8,r:"inline",d:164,bC:2,s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",f:0,t:56,Y:79,Z:"break-word",aY:0,w:"SIMON<br>SAYS\n",i:"title",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:17,aS:8,aT:8,a:200,bA:"#000",F:"center",bR:0},"128":{x:"hidden",k:"div",c:300,d:300,z:3,i:"blueGroup",a:0,j:"absolute",b:300},"140":{c:300,d:300,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,i:"blueDetect",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:11,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"49"}]},k:"div",a:0,b:300},"132":{x:"hidden",k:"div",c:300,d:300,z:1,i:"redGroup",a:0,j:"absolute",b:0},"145":{x:"hidden",k:"div",c:300,d:300,z:5,i:"greenGroup",a:300,j:"absolute",b:0},"137":{b:420,z:22,K:"Solid",c:122,L:"Solid",d:32,aS:6,M:8,bD:"none",N:8,aT:6,dB:"button",O:8,aU:6,P:8,aV:6,i:"quitButton",j:"absolute",k:"div",aI:30,aJ:30,aK:30,aL:30,A:"#8000FF",Y:31,B:"#8000FF",aM:"95_hover",r:"inline",C:"#8000FF",Z:"break-word",s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",D:"#8000FF",t:30,F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"61"}]},G:"#8000FF",aP:"pointer",w:"QUIT\n",x:"visible",I:"Solid",a:625,y:"preserve",J:"Solid"},"129":{h:"11",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:1,bF:"128",b:-300,d:1200,i:"blue",k:"div",c:600},"141":{c:300,d:300,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,i:"yellowDetect",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",O:0,aB:{a:[{p:0},{p:0}]},C:"#D8DDE4",z:13,dB:"button",D:"#D8DDE4",P:0,aA:{a:[{p:4,h:"49"}]},k:"div",a:300,b:300},"133":{h:"9",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:1,bF:"132",b:0,d:1200,i:"red",k:"div",c:600},"146":{h:"13",p:"no-repeat",x:"visible",a:-300,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:1,bF:"145",b:0,d:1200,i:"green",k:"div",c:600},"138":{c:300,d:300,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,i:"greenDetect",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:12,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"49"}]},k:"div",a:300,b:0},"142":{h:"5",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:9,i:"outline",b:0,d:600,k:"div",c:600},"134":{aU:8,bB:2,G:"#00B6FB",c:348,aV:8,r:"inline",d:104,bC:2,s:"Copperplate,sans-serif",t:48,Z:"break-word",i:"badgeMessage",w:"5 ROUNDS<br>BRILLIANT\n",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:20,aS:8,aT:8,a:118,bA:"#000",F:"center",b:-217},"147":{aU:8,G:"#8000FF",c:184,aV:8,r:"inline",d:144,s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",t:48,Z:"break-word",i:"sequenceValue",w:"SCORE<br>0\n",j:"absolute",x:"visible",k:"div",y:"preserve",z:15,aS:8,aT:8,a:600,F:"center",b:0},"139":{b:-90,z:21,K:"Solid",c:58,L:"Solid",d:58,aS:6,M:5,bD:"none",N:5,aT:6,dB:"button",O:5,aU:6,P:5,aV:6,i:"badgeButton",j:"absolute",k:"div",aI:50,aJ:50,aK:50,aL:50,A:"#00B3FB",Y:55,B:"#00B3FB",aM:"73_hover",r:"inline",C:"#00B3FB",Z:"break-word",s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",D:"#00B3FB",t:22,F:"center",aA:{a:[{p:4,h:"93"}]},G:"#00C5FB",aP:"pointer",w:"NEXT",x:"visible",I:"Solid",a:260,y:"preserve",J:"Solid"},"130":{c:300,d:300,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,i:"redDetect",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:10,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"49"}]},k:"div",a:1,b:0},"143":{x:"hidden",k:"div",c:300,d:300,z:7,i:"yellowGroup",a:300,j:"absolute",b:300},"135":{h:"111",p:"no-repeat",x:"visible",a:65,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:19,k:"div",b:-500,d:500,c:470},"148":{aU:8,G:"#7E00FF",c:156,aV:8,r:"inline",d:76,s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",t:24,Z:"break-word",w:"by Lukas Mundt\n<br>(sort of)",j:"absolute",x:"visible",k:"div",y:"preserve",z:16,aS:8,aT:8,a:614,F:"center",b:522},"131":{p:"no-repeat",x:"visible",a:65,dB:"img",q:"100% 100%",j:"absolute",r:"inline",c:470,k:"div",z:18,d:500,b:-500},"144":{h:"15",p:"no-repeat",x:"visible",a:-300,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:1,bF:"143",b:-300,d:1200,i:"yellow",k:"div",c:600}}}],{},h,{f:{p:0,q:[[0,0,0.1971,0,0.3391,0.8944,0.3636,1],[0.3636,1,0.3636,1,0.4425,0.75,0.5455,0.75],[0.5455,0.75,0.6519,0.75,0.7273,1,0.7273,1],[0.7273,1,0.7273,1,0.7718,0.9375,0.8182,0.9375],[0.8182,0.9375,0.8646,0.9375,0.9091,1,0.9091,1],[0.9091,1,0.9091,1,0.9294,0.9844,0.9546,0.9844],[0.9546,0.9844,0.9798,0.9844,1,1,1,1]]}},null,false,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
