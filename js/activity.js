// $(document).ready(function () {
//   $("td")
//     .not(':contains("Not Available")')
//     .click(function () {
//       $(this).toggleClass("highlight");
//     });
// });

$(document).ready(function(){
  $('td').click(function(){
      var content = $(this).text();
      var colIndex = $(this).index();
      var colTitle = $('th:eq(' + colIndex + ')').text();
      if (content !="Not Available"){
          $(this).toggleClass('highlight');

      if($(this).hasClass('highlight')){
          $('#displaySelected').css('visibility','visible');
          $('#result').append('<p>'+ content+' at '+ colTitle +'</p>');
      } else{
          $('#result p:contains('+content+')').remove();

          if($('#result').has('p').length == false) {
              $('#displaySelected').css('visiblity','hidden');
              $('#displaySelected').css('margin-top','0');
          }
      }
  }
  });
});
