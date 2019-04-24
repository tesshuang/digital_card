var background1 = document.getElementById('background1');
var background2 = document.getElementById('background2');

var fullmoon = document.getElementById('Fullmoon');
var clickmoon = 0;
var allmoon = document.getElementById('shape_of_moon');

    fullmoon.addEventListener('click', function(){
        console.log(456);
        clickmoon++;
        if (clickmoon ==1){
            document.getElementById('fivesixthmoon').style.visibility = "visible"; 
        }
        else if (clickmoon ==2){
            document.getElementById('twothirdmoon').style.visibility = "visible"; 
        }
        else if (clickmoon ==3){
            document.getElementById('twofifthmoon').style.visibility = "visible"; 
        }
        else if (clickmoon ==4){
            document.getElementById('onesixthmoon').style.visibility = "visible"; 
        }
        else if (clickmoon >= 5){
            document.getElementById('fivesixthmoon').style.visibility = "hidden";
            document.getElementById('twothirdmoon').style.visibility = "hidden"; 
            document.getElementById('twofifthmoon').style.visibility = "hidden"; 
            document.getElementById('onesixthmoon').style.visibility = "hidden"; 
            fullmoon.style.visibility = "hidden"; 
        }
    });
     
    allmoon.addEventListener('click', function(){
       console.log("hi"); 
    });
    
    
    background1.addEventListener('click', function(){
            console.log(123);
            var bgtimer = null;
            var tx = 0;
            var time = 0;
            bgtimer = setInterval(function(){
                
                if(time < 300){
                    tx -= 15;  background1.setAttribute("transform", "translate("+tx+", 0)");
                    time+=1;
                    
                } else {
                    clearInterval(bgtimer);
                }
                
            }, 35);
            allmoon.style.visibility = "hidden";
           /*background1.innerHTML = '<animateTransform attributeName="transform" type="translate" from="0 0" to="-700 0" begin="0s" dur="5s" repeatCount="1" fill="freeze"/>' + background1.innerHTML;*/
           
       });
        
    background2.addEventListener('click', function(){
        
            var bgtimer = null;
            var tx = 0;
            var time = 0;
            bgtimer = setInterval(function(){
                
                if(time < 300){
                    tx += 15;  background2.setAttribute("transform", "translate("+tx+", 0)");
                    time+=1;
                    
                } else {
                    clearInterval(bgtimer);
                }
                
            }, 30);
            /*background2.innerHTML = '<animateTransform attributeName="transform" type="translate" from="0 0" to="500 0" begin="0s" dur="5s" repeatCount="1" fill="freeze"/>' + background2.innerHTML;*/
        
        });

var Laternvessel = document.getElementById('Laternvessel');
var box1 = document.getElementById('box1');
    
    Laternvessel.addEventListener('click', function(){
       console.log('hi');
       var bgtimer = null;
            var tx = 0;
            var time = 0;
            bgtimer = setInterval(function(){
                
                if(time < 20){
                    tx -= 3;  
                    Laternvessel.setAttribute("transform", "translate("+tx+", 0)");
                    time+=1;
                    
                } else {
                    clearInterval(bgtimer);
                }
                
            }, 15);    
    });

// this is a git trial.
    box1.addEventListener('click', function(){
            var bgtimer = null;
            var tx = 0;
            var time = 0;
            bgtimer = setInterval(function(){
                
                if(time < 20){
                    tx -= 3;  
                    box1.setAttribute("transform", "translate("+tx+", 0)");
                    time+=1;
                    
                } else {
                    clearInterval(bgtimer);
                }
                
            }, 15);     
    });

var mooncakegroup = document.getElementById('mooncakegroup');
var funfact1 = document.getElementById('funfact1');
var funclick = 0;


    mooncakegroup.addEventListener('click',function(){
            console.log('funfact');
            funfact1.style.visibility = "visible";
        
            funfact1.addEventListener("click", function(){
            console.log("funfact clicked");
            funfact1.style.visibility = "hidden";
            
        });
         
    });

var musicbox = document.getElementById('musicbox');
var mymusic = document.getElementById('mymusic'), 
    m_src = "1.mp3";
var musicclick = 0;
    
    musicbox.addEventListener('click',function(){
       console.log('music');
       musicclick++;
        if(musicclick%2 == 1){
            mymusic.src = m_src;
            mymusic.pause();
        } else{
            mymusic.src = m_src;
            mymusic.play();
        }   
    });

var table = document.getElementById('table');
var funfact2 = document.getElementById('funfact2');

    table.addEventListener('click',function(){
       console.log('heytable');
        
        funfact2.style.visibility = "visible";
        
            funfact2.addEventListener("click", function(){
            console.log("funfact clicked");
            funfact2.style.visibility = "hidden";
            
        });
        
       /* var funfact = document.createElement('div');
            funfact.style.width = "580px";
            funfact.style.height = "280px";
            funfact.style.position= "fixed";
            funfact.style.top = "0";
            funfact.style.left = "0";
            funfact.style.right = "0";
            funfact.style.bottom = "0";
            funfact.style.margin = "auto";
            funfact.style.color = "#212F3C";
            funfact.style.backgroundColor = "rgba(256,256,256, 0.5)";
            funfact.style.textAlign = "left";
            funfact.style.fontSize = "18pt";
            funfact.style.fontFamily = "Helvetica";
            funfact.innerHTML = "<span style= 'font-size:30px; color:#117A65;' >Meaning of Festival</span>" + "<br/>" + "<br/>"+"- Gathering, such as family and friends coming together, or harvesting crops for the festival. It's said the moon is the brightest and roundest on this day which means family reunion."+ "<br/>" + "<br/>" +"- Thanksgiving, to give thanks for the harvest, or for harmonious unions." +"<br/>";
            document.body.appendChild(funfact);

            funfact.addEventListener("click", function(){
                console.log("funfact clicked");
                document.body.removeChild(funfact);

            });*/
    });

var lanternbook = document.getElementById('lanternbook');
var funfact4 = document.getElementById('funfact4');

    lanternbook.addEventListener('click',function(){
       console.log('hey book');
       funfact4.style.visibility = "visible";
        
            funfact4.addEventListener("click", function(){
            console.log("funfact clicked");
            funfact4.style.visibility = "hidden";
            
        });
    });

var lantern1 = document.getElementById('lantern1');
var funfact3 = document.getElementById('funfact3');
    lantern1.addEventListener('click',function(){
        console.log('hey lantern');
        funfact3.style.visibility = "visible";
        
        funfact3.addEventListener("click", function(){
            console.log("funfact clicked");
            funfact3.style.visibility = "hidden";
            
        });
    });


var teapot = document.getElementById('teapot');
var funfact6 = document.getElementById('funfact6');

    teapot.addEventListener('click',function(){
       console.log('hey tea'); 
        
        funfact6.style.visibility = "visible";
        
        funfact6.addEventListener("click", function(){
            console.log("funfact clicked");
            funfact6.style.visibility = "hidden";
            
        });
    });

var window2 = document.getElementById('window2');
var funfact5 = document.getElementById('funfact5');

    window2.addEventListener('click', function(){
        console.log("hey window");
        funfact5.style.visibility = "visible";
        
        funfact5.addEventListener("click", function(){
            console.log("funfact clicked");
            funfact5.style.visibility = "hidden";
            
        });
    });


var lantern2 = document.getElementById('lantern2');
var msg1 = false;
var clicklan = 0;
var hiddenlantern2 = document.getElementById('hiddenlantern2');
var hiddenlantern1 = document.getElementById('hiddenlantern1');
var hintclick = 0;


    lantern2.addEventListener('click', function(){
       console.log('Find Your Lucky Lattern.');
        clicklan++;
         var winner = Math.round(Math.random()*1) + 1;
         var hint = document.createElement('button');
            hint.style.position = 'fixed';
            hint.style.width = '50px';
            hint.style.height = '30px';
            hint.style.top = '28px';
            hint.style.right = '30px';
            hint.style.borderRadius = '15px';
            hint.innerHTML = "HINTS!";
            hint.style.textAlign = "center";
            hint.style.fontFamily = "Helvetica";
            document.body.appendChild(hint);
            
            hint.addEventListener('click',function(){
                hintclick++;
                if(hintclick==1){
                    console.log(winner);
                    var hintText = document.createElement('p');
                    hintText.style.position = "absolute";
                    hintText.style.right = '30px';
                    hintText.style.top = '40px';
                    hintText.style.fontSize = '12pt';
                    hintText.style.fontWeight = "bold";
                    hintText.style.color = "rgba(0, 0, 0,)";
                    hintText.style.backgroundColor = "F07055";
                    document.body.appendChild(hintText);

                    if (winner == 1){
                        hintText.innerHTML = "Move the vessel.";
                    }

                    if (winner == 2){
                        hintText.innerHTML = "Move the Drawer.";
                    }
                    hintText.addEventListener('click', function(){
                       hintText.style.display = "none"; 
                    });
                }
                if (hintclick ==2){
                    hint.style.display = "none";
                }
                
            });
            hiddenlantern1.addEventListener('click',function(){
                console.log('hidden1');
                if(winner==1){
                    var winimg = document.createElement('img');
                    winimg.src = "winwin.png";
                    winimg.style.width = '200px';
                    winimg.style.height = '200px';
                    winimg.style.position = "absolute";
                    winimg.style.right = '0px';
                    winimg.style.left = '0px';
                    winimg.style.top = '300px';
                    winimg.style.margin = 'auto';
                    document.body.appendChild(winimg);
                    
                    winimg.addEventListener('click',function(){
                       winimg.style.display = "none"; 
                    });
                }
                
            });
            
            hiddenlantern2.addEventListener('click',function(){
                console.log('hidden2');
                if(winner==2){
                    var winimg = document.createElement('img');
                    winimg.src = "winwin.png";
                    winimg.style.width = '200px';
                    winimg.style.height = '200px';
                    winimg.style.position = "absolute";
                    winimg.style.right = '0px';
                    winimg.style.left = '0px';
                    winimg.style.top = '300px';
                    winimg.style.margin = 'auto';
                    document.body.appendChild(winimg);
                    
                    winimg.addEventListener('click',function(){
                       winimg.style.display = "none"; 
                    });
                }
                
            });
        
        if (msg1==false){
            var msg = document.createElement('div');
                msg.style.position = 'fixed';
                msg.style.right = '40px';
                msg.style.top = '75px';
                msg.style.fontSize = "24px";
                msg.style.fontFamily = 'Helvetica';
                msg.style.color = '#F77B75';
                msg.style.backgroundColor = "white";
                msg.style.padding = '6px';
                msg.style.borderRadius = '12px';
                msg.innerHTML = "Find Your Lucky Lattern!";
                document.body.appendChild(msg);
                       msg1=true;
                       msg.addEventListener("click", function(){
                          document.body.removeChild(msg);
                       });
       
            
            
        } });


    
    lantern5.addEventListener('click', function(){
       console.log("look for another place"); 
    });



var Scene2 = document.getElementById('Scene2');
var linkmoon = document.getElementById('linkmoon');

    linkmoon.addEventListener('click', function(){
        console.log('link');
        Scene2.style.visibility = "hidden";
        funfact1.style.visibility = "hidden";
        funfact2.style.visibility = "hidden";
        funfact3.style.visibility = "hidden";
        funfact4.style.visibility = "hidden";
        funfact5.style.visibility = "hidden";
        funfact6.style.visibility = "hidden";
        
        
    });

var bigmoon = document.getElementById('bigmoon');
var Ctext = document.getElementById('Ctext');
var Etext = document.getElementById('Etext');

    bigmoon.addEventListener('click',function(){
        console.log('fit final'); 
        
        Ctext.style.opacity = '0';
        Ctext.style.position = 'fixed';
        Ctext.style.transition = 'opacity 0.8s';
        Etext.style.opacity = '0';
        Etext.style.position = 'fixed';
        Etext.style.transition = 'opacity 0.8s';
        
            setTimeout(function(){
               Ctext.style.opacity = '1'; 
            }, 500);
            setTimeout(function(){
                Etext.style.opacity = '0.8';
            }, 1000);
        
        
        
    });