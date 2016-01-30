$(document).ready(function(){
  var colors={
    color1 : '#1CC4CC',
    color2 : '#439599',
    color3 : '#0AFF80',
    color4 : '#FF4A65',
    color5 : '#CC1C8E'
  }

  var laws={
    law1 : ' If anything can go wrong, it will. ',
    law2 : ' If there is a possibility of several things going wrong, the one that will cause the most damage will be the one to go wrong. ',
    law3 : ' If anything just cannot go wrong, it will anyway. ',
    law4 : ' Left to themselves, things tend to go from bad to worse. ',
    law5 : ' If everything seems to be going well, you have obviously overlooked something. '
  }

 
  
  function changeColor(){
    var randomColor = Math.random();
    var select;
  
    if(randomColor <= 0.2){
      select = colors.color1;
    }
    else if(randomColor <= 0.4){
      select = colors.color2;
    }
    else if(randomColor <= 0.6){
      select = colors.color3;
    }

    else if(randomColor <= 0.8){
      select = colors.color4;
    }
    else{
      select = colors.color5;
    }
    return select;
  }
  
  function changeLaw(){
    var randomLaw = Math.random();
    var select;
    
    if(randomLaw <= 0.2){
      select = laws.law1;
    }
    else if(randomLaw <= 0.4){
      select = laws.law2;
    }
    else if(randomLaw <= 0.6){
      select = laws.law3;
    }
    else if(randomLaw <= 0.8){
      select = laws.law4;
    }
    else{
      select = laws.law5;
    }
    return select;
  }
  
  var selectLaw = changeLaw();

  $("#quote").click(function(){
    $("a, body").css("background-color", changeColor());
    $("cite").html(changeLaw());
  });
  
  var link = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + selectLaw;

  $("#twitter").click(function(){
    $(this).attr("href"); 
    window.open(link, "_blank");
  });
});