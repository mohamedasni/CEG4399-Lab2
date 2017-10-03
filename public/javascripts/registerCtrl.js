$(document).ready(function() {
  $(".registerForm").submit(function(e) {

		e.preventDefault();

		var asciiVal = false;
		var pass = $("#password").val();

		for (var i = 0; i < pass.length; i++) {
			if (asciiVal === false) {
				asciiVal = pass.charCodeAt(i);
			} else {
				asciiVal += pass.charCodeAt(i);
			}
		}

		var alpha = Math.pow(0.9, asciiVal) % 1;

    $.ajax({
      url: '/auth/register',
      type: 'POST',
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      data: JSON.stringify({
        username: $('#username').val(),
        phonenumber: $('#phonenumber').val(),
        password: alpha
      }),
      success: function(response) {
        alert("Your verification key is: " + response.verKey);
      },
      error: function(response) {
        alert("An error occured.");
      }
    });
    return false;
  });
});
