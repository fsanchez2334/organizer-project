$(document).ready(function() {
    console.log( "ready!" );
    function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

function updateClock() {
    var t = getTimeRemaining(endtime);

    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
if(hoursSpan<='1'){
alert("COMPLETE HOMEWORK");
};

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
    
});

$(document).ready(function() {
    //alert("works");
    $("#clockdiv").click(function(){
        var part1= "https://api.giphy.com/v1/gifs/search?q=";
        var part2="&api_key=dc6zaTOxFJmzC";
        var url= part1 + searchVal + part2;
        $.getJSON(url, function(response){
            var imgURL= response.data[0].images.downsized.url;
            var img= "<img src='" + imgURL + " '/> ";
            $("#clockdiv").append(img);
        });
    });
});

function myFunction() {
    var x = document.getElementById("#error");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//var myStringArray = ["Hello","World"];
//var arrayLength = myStringArray.length;
//for (var i = 0; i < arrayLength; i++) {
  //  alert(myStringArray[i]);
    //Do something
//}


//while(minutesSpan.innerHTML<50){
  
//$(document).ready(function() {
    //alert("works");
  //  $("#plus").click(function(){
     //  var searchVal= $("#plus").val();
       // var part1= "https://api.giphy.com/v1/gifs/search?q=";
        //var part2="&api_key=dc6zaTOxFJmzC";
        //var url= part1 + searchVal + part2;
    //    $.getJSON(url, function(response){
       //     var imgURL= response.data[90].images.downsized.url;
         //   var img= "<img src='" + imgURL + " '/> ";
           // $("body").append(img);
       //}
        //});
    //});
//}); 
//$(document).ready(function() {
    //$("#alert alert-danger").click(function(){
        
   // });
//});
