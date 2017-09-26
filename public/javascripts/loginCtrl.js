$(document).ready(function() {
  $(".loginForm").submit(function(e) {
    $.ajax({
      url: '/auth/login',
      type: 'POST',
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      data: JSON.stringify({
        username: ""
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
