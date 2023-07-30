const otpInputs = document.querySelectorAll(".otpinput");
otpInputs.forEach((input, index) => {
    input.addEventListener('input', function() {
        if (input.value.length === 1) {
            if (index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        } else if (input.value.length === 0) {
            if (index > 0) {
                otpInputs[index - 1].focus();
            }
        }
    });
});