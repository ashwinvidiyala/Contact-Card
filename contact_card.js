$(document).ready(function () {
  $('#form').submit(function() {
    var formSubmit = $(this).serializeArray();
    console.log(formSubmit);
    $('.contacts').append("<div class='contact-card-front'>");

      formSubmit.forEach(function(value, index) {
        // console.log(value.value);
        var firstName;
        var lastName;
        var description;
        if (index == 0) {
          //The problem with this class approach is that this is
          //appended to EVERY occurrence of the class. Not good.
          $('.contact-card-front').append(value.value);
          // console.log(value.value);
        }
        if (index == 1) {
          $('.contact-card-front').append(value.value);
          // console.log(value.value);
        }
      });
    $('.contacts').append("</div>");
    return false;
  });
})
