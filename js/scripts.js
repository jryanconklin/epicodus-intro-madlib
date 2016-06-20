$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

// Refactored Madlib

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });


// Deleted Version Without Looping

    // var person1Input = $("input#person1").val();
    // var person2Input = $("input#person2").val();
    // var animalInput = $("input#animal").val();
    // var exclamationInput = $("input#exclamation").val();
    // var verbInput = $("input#verb").val();
    // var nounInput = $("input#noun").val();
    //
    // $(".person1").append(person1Input);
    // $(".person2").append(person2Input);
    // $(".animal").append(animalInput);
    // $(".exclamation").append(exclamationInput);
    // $(".verb").append(verbInput.toLowerCase());
    // $(".noun").append(nounInput.toLowerCase());

    $("#story").show();
    event.preventDefault();
  });
});
