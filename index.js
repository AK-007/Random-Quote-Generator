var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
var colour=["#ED6A5A","#5ca4a9","#ff5666","#0C0A3E","#F9564F","#55286F","#3BC14A","#DE6E35"];
var Quote;
var Author;
function getQuote(a)
{
	     $(".quote-text").animate({opacity: 0}, 400,
        function() {
          $(this).animate({opacity: 1}, 400);
          $(this).text(a.quoteText);});
  		 
  		 if (a.quoteAuthor === '') {
           a.quoteAuthor = 'Unknown';
           }
         Quote=a.quoteText;
         Author=a.quoteAuthor;
         $(".quote-author").animate({opacity: 0}, 400,
        function() {
          $(this).animate({opacity: 1}, 400);
          $(this).text(a.quoteAuthor);});
         
         var c=Math.floor(Math.random()*8);
 
        $("body").animate({backgroundColor: colour[c]}, 400);
         $('.quote').animate({color: colour[c]},400);
         $('.author').animate({color : colour[c]},400);
         $('#newquote').animate({ backgroundColor: colour[c]},400);
         $('.twitter').animate({color : colour[c]},400);
         $('.facebook').animate({color : colour[c]},400);

}
$(document).ready(function() {
	 $.ajaxSetup({cache : false});
	 $.getJSON(url,getQuote,'jsonp');
});
$(function() {
$("#newquote").on('click', function(){
	 $.ajaxSetup({cache : false});
	 $.getJSON(url,getQuote,'jsonp');
});
$('.twitter').on('click', function() {
      var tweetLink = 'http://twitter.com/home?status=' +encodeURIComponent('"' + Quote + '" ' + Author);
      window.open(tweetLink,'_blank');
  });
});
