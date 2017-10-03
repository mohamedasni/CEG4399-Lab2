$(document).ready(function() {
  $(".loginForm").submit(function(e) {
    $.ajax({
      url: '/auth/login',
      type: 'POST',
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      data: JSON.stringify({
        username: $("#username").val()
      }),
      success: function(response) {
        console.log(response);
				window.location.href  = '/loginStep2';
      },
      error: function(response) {
        console.log(response);
      }
    });
    return false;
  });

	$(".login2Form").submit(function(e) {
		var beta = $("#beta").val();
		var pass = $("#password").val();

		var asciiVal = false;

		for (var i = 0; i < pass.length; i++) {
			if (asciiVal === false) {
				asciiVal = pass.charCodeAt(i);
			} else {
				asciiVal += pass.charCodeAt(i);
			}
		}

		var alpha = Math.pow(0.9, asciiVal) % 1;

		$.ajax({
      url: '/auth/login/step2',
      type: 'POST',
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      data: JSON.stringify({
        beta: $('#beta').val(),
        password: alpha
      }),
      success: function(response) {
        alert("Your verification is successful!");
      },
      error: function(response) {
        alert("Your verification is unsuccessful...");
      }
    });

		return false;

	});
});
