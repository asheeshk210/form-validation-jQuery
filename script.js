$(function(){
    $("#fname_error_message").hide();
    $("#sname_error_message").hide();
    $("#email_error_message").hide();
    $("#password_error_message").hide();
    $("#retype_password_error_message").hide();

    var error_fname = false;
    var error_sname = false;
    var error_email = false;
    var error_password = false;
    var error_retype_password = false;

    $("#form_fname").on('input', function() {
        var pattern = /^[a-zA-Z]*$/;
        var fname = $("#form_fname").val();
        if (pattern.test(fname) && fname !== '') {
           $("#fname_error_message").hide();
           $("#form_fname").css("border-bottom","2px solid #34F458");
        } else {
           $("#fname_error_message").html("Only Characters allow");
           $("#fname_error_message").show();
           $("#form_fname").css("border-bottom","2px solid #F90A0A");
        //    error_fname = true;
        }
      });

      $("#form_sname").on('input', function() {
        var pattern = /^[a-zA-Z]*$/;
        var sname = $("#form_sname").val()
        if (pattern.test(sname) && sname !== '') {
           $("#sname_error_message").hide();
           $("#form_sname").css("border-bottom","2px solid #34F458");
        } else {
           $("#sname_error_message").html("Only Characters allow");
           $("#sname_error_message").show();
           $("#form_sname").css("border-bottom","2px solid #F90A0A");
           error_fname = true;
        }
      });

     $("#form_email").on('input', function() {
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $("#form_email").val();
        if (pattern.test(email) && email !== '') {
           $("#email_error_message").hide();
           $("#form_email").css("border-bottom","2px solid #34F458");
        } else {
           $("#email_error_message").html("Invalid Email");
           $("#email_error_message").show();
           $("#form_email").css("border-bottom","2px solid #F90A0A");
           error_email = true;
        }
      });
   
      $("#form_password").on('input', function() {
        var password_length = $("#form_password").val().length;
        if (password_length < 8) {
           $("#password_error_message").html("Atleast 8 Characters");
           $("#password_error_message").show();
           $("#form_password").css("border-bottom","2px solid #F90A0A");
           error_password = true;
        } else {
           $("#password_error_message").hide();
           $("#form_password").css("border-bottom","2px solid #34F458");
        }
      });
   
      $("#form_retype_password").on('input', function() {
        var password = $("#form_password").val();
        var retype_password = $("#form_retype_password").val();
        if (password !== retype_password) {
           $("#retype_password_error_message").html("Passwords Did not Matched");
           $("#retype_password_error_message").show();
           $("#form_retype_password").css("border-bottom","2px solid #F90A0A");
           error_retype_password = true;
           $("#btn").removeAttr('disabled');
            

        } else {
           $("#retype_password_error_message").hide();
           $("#form_retype_password").css("border-bottom","2px solid #34F458");
           $("#btn").css("background","#04aa6d");
        }
      });
   
    $("#btn").click(function() {
        alert("Your name is : "+ $("input[name='fname']").val() +" "+ $("input[name='sname']").val() +
        "\nYour email id is : "+ $("input[name='email']").val() +
        "\nYour password is : "+ $("input[name='pw']").val()

        
        );

    })
})