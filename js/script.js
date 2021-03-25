$(document).ready(function () {
  const q1 = parseInt($('#question1').val());
  const q2 = parseInt($('#question2').val());
  const q3 = parseInt($('#question3').val());
  const q4 = parseInt($('#question4').val());
  const q5 = parseInt($('#question5').val());
  const result = $('.form-group').submit(function (event) {
    const result = q1 + q2 + q3 + q4 + q5;
    $(".form-group").text(result);
    event.preventDefault()
    console.log(result)
  })



  if (q1 && q2 && q3 && q4 && q5 === 0) {
    return "You are a DEMOCRAT!"
  }
  else if (q1 && q2 && q3 && q4 && q5 === 5) {
    return "You're a TRUMP supporter"
  }
  else { return "do you even follow politics?" }

  // const result = $('.form-group').submit(function (event) {
  alert("result")
  event.preventDefault()
  // const q1 = $('#question1').val();
  // const q2 = $('#question2').val();
  // const q3 = $('#question3').val();
  // const q4 = $('#question4').val();
  // const q5 = $('#question5').val();

})

// $(document).ready(function () {
//   $(".form-group").submit(function (event) {
//     event.preventDefault();

    // const result = q1 + q2 + q3 + q4 + q5;
    // $(".form-group").text(result);




// $(document).ready(function () {
//     const age = parseInt(prompt("How old are you?"));
//     if (age > 21) {
//         $('#drinks').show();
//     } else if (age === 21) {
//         alert('Now do not go crazy here');
//         $('#drinks').show();
//     }
//     else {
//         $('#under-21').show()
//     }
//     const receipt = $("form#user-receipt").submit(function (event) {
//         const beverage = parseInt($("#name-entry").val());
//         const date = parseInt($("#date-entry").val());
//         const address = parseInt($("#address-entry").val());

//         const beer = $("#beer").parseInt(val());
//         const wine = $("#wine").parseInt(val());
//         const nonAl = $("#non-al").parseInt(val());
//     })
// });