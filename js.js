// Start the script when the page is fully downloaded

$(document).ready(function() {
// Global variable to keep track of citations
  var counter = 1;
// Handler for BCLOCKQUOTE button
    $("button#unlock").click(function () {
      console.log(counter);
      if (counter <= 3) {
          $("blockquote").addClass("hidden");
          $("blockquote#cite" + counter).removeClass("hidden").addClass("visible");
          $(this).html("Want more?");
          counter += 1;
          console.log(counter);
      }
      else {
        // if we run of citations, say farewell
        $(this).html("That's it!").css("backgroundColor", "transparent");
      }
    });

}); // end of ready
