$(document).ready(function() {
  $(".registerForm").submit(function(e) {
    $.ajax({
      url: '/auth/register',
      type: 'POST',
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      data: JSON.stringify({
        username: "",
        phonenumber: 123,
        password: ""
      }),
      success: function(response) {
        console.log(response);
      },
      error: function(response) {
        console.log(response);
      }
    });
    return false;
  });
});
