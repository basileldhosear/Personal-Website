
$(document).ready(function () {
    $("#signup-form").validate({
        rules: {
            yourname: {
                required: true,
                minlength: 4,
                maxlength: 15,
                namevalidation: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            yourname: {
                required: "Please enter your name",
                minlength: "At least 4 characters required",
                maxlength: "Maximum 15 characters are allowed"
            },
            email: {
                required: "Please enter your email id",
                email: "Enter a valid email"
            }


        }
    })
    $.validator.addMethod("namevalidation", function (value, element) {
        return /^[A-Za-z]+$/.test(value);
    },
        "Sorry,only alphabets are allowed"
    );
})