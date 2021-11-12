// $(document).ready(function(){
//     $('.listheader').click(function(){
//         $('.list .listbody').slideUp();
//         $(this).next('.listbody').slideDown();
//         $('.list .listheader span').text('+');
//         $(this).children('span').text('-');
//       });

// });

function openDescription(evt, main) {
  // Declare all variables
  var i, listbody, listheader;

  // Get all elements with class="tabcontent" and hide them
  listbody = document.getElementsByClassName("listbody");
  for (i = 0; i < listbody.length; i++) {
    listbody[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  listheader = document.getElementsByClassName("listheader");
  for (i = 0; i < listheader.length; i++) {
    listheader[i].className = listheader[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(main).style.display = "block";
  evt.currentTarget.className += " active";
}