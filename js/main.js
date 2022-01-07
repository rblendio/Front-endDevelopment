    // Change the type of input to password or text
        function Toggle() {
            var temp = document.getElementById("pass");
            if (temp.type == "password") {
                temp.type = "password";
            }
            else {
                temp.type = "text";
            }
        }
