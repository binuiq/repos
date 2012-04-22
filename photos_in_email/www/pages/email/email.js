$('#email_page').live('pageinit', function() {
  Email.setUsername();
  Email.setPassword();
  Email.setServices();
  $('#add_email_button').bind('vclick', function() {
    Email.addEmail();
  });
});

var Email = function() {
};

Email.defaultUsername = 'username';
Email.defaultPassword = 'password';

Email.setUsername = function() {
	Email.setString('#user', Email.defaultUsername);
};

Email.setPassword = function() {
	Email.setString('#pass', Email.defaultPassword);
};

Email.setString = function(id, default_value) {
  $(id).val(default_value);
  $(id).focus(function() {
    if ($(this).val() == default_value) {
      $(this).val('');
    }
  });
  $(id).blur(function() {
    if ($(this).val() == '') {
      $(this).val(default_value);
    }
  });
}

Email.setServices = function() {
  $('#service').html(
    '<option value="gmail">gmail.com</option>'
  );
  $('#service').selectmenu('refresh');
};

Email.addEmail = function() {
	$.mobile.changePage('../photo/photo.html', {transition: 'slide'});
};
