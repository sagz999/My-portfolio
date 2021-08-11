$(document).ready(function () {
    $.validator.addMethod("alpha", function (value, element) {
        return this.optional(element) || value == value.match(/^[a-zA-Z\s]+$/);
    });

    $.validator.addMethod("isEmail", function (value, element) {
        return this.optional(element) || value == value.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i);
    });


    $("#submit-form").validate({
        rules: {
            name: {
                required: true,
                alpha: true,
                minlength: 3

            },

            email: {
                required: true,
                email: true,
                isEmail: true
            },

            subject: {
                required: true
            },

            message: {
                required: true,
                minlength: 10
            }

        },
        messages: {

            name: {
                required: "Enter your full name",
                alpha: "Name must only contain alphabets",
                minlength: "Name must be atleast of 3 characters"

            },

            email: {
                required: "Enter your E-mail id",
                email: "Invalid E-mail id",
                isEmail: "Invalid E-mail id"
            },

            subject: {
                required: "Subject field must not be blank"
            },

            message: {
                required: "Message field must not be blank",
                minlength: "Message too short"
            }

        },
        submitHandler: function (form) {

            $("#submit-form").submit((e) => {
                e.preventDefault()
                $.ajax({
                    url: "https://script.google.com/macros/s/AKfycbwB1fLngX2grlMFxZuDRIz_GyxXMRy4QktLGObP/exec",
                    data: $("#submit-form").serialize(),
                    method: "post",
                    success: function (response) {
                        alert("Form submitted successfully. Thank you!")
                        window.location.reload()
                    },
                    error: function (err) {
                        alert("Something Error")

                    }
                })
            })
        }

    })

})