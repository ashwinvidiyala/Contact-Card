$(document).ready(function () {
  $('#form').submit(function() {
    var formSubmit = $(this).serializeArray();
    console.log(formSubmit);
    var random = Math.floor(Math.random() * 200);
    var newClass = "contact-card-front " + random;
    // var last_name = fromSubmit.foreach(function(value, index) {
    //   if (index == 1) {return value.value;}});
    //   console.log(last_name);
    $('.contacts').append("<div class='" + newClass + "'>");

      formSubmit.forEach(function(value, index) {
        // console.log(value.value);
        var firstName;
        var lastName;
        var description;
        if (index == 0) {
          //The problem with this class approach is that this is
          //appended to EVERY occurrence of the class. Not good.
          $('.contact-card-front' + "." + random).append(value.value);
          // console.log(value.value);
        }
        if (index == 1) {
          $('.contact-card-front' + "." + random).append(" " + value.value);
          // console.log(value.value);
        }
        if (index == 2) {
          $('.contact-card-front' + "." + random).append("<p>" + value.value + "</p>");
        }
      });
    $('.contacts').append("</div>");
    return false;
  });
})
