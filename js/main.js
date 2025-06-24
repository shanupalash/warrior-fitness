// Smooth scrolling
$("#navbar a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate({ scrollTop: $(hash).offset().top - 100 }, 800);
  }
});

// navbar Opacity

window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector("#navbar");

  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("show");
  });
});

    const form = document.querySelector('.contact-us');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const contactNumberInput = document.getElementById('contactNumber');
    const messageInput = document.getElementById('message');

    // Get error message elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const contactNumberError = document.getElementById('contactNumber-error');
    const messageError = document.getElementById('message-error');

    // Validation functions
    function validateName(value) {
      const nameRegex = /^[A-Za-z\s]{2,50}$/;
      return nameRegex.test(value);
    }

    function validateEmail(value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    }

    function validateContactNumber(value) {
      const phoneRegex = /^\+?[\d\s-]{10,15}$/;
      return phoneRegex.test(value);
    }

    function validateMessage(value) {
      return value.length >= 10 && value.length <= 500;
    }

    // Function to show/hide error messages
    function setError(input, errorElement, isValid) {
      if (isValid) {
        input.classList.remove('invalid');
        errorElement.classList.remove('show');
      } else {
        input.classList.add('invalid');
        errorElement.classList.add('show');
      }
    }

    // Real-time validation on input
    nameInput.addEventListener('input', () => {
      setError(nameInput, nameError, validateName(nameInput.value));
    });

    emailInput.addEventListener('input', () => {
      setError(emailInput, emailError, validateEmail(emailInput.value));
    });

    contactNumberInput.addEventListener('input', () => {
      setError(contactNumberInput, contactNumberError, validateContactNumber(contactNumberInput.value));
    });

    messageInput.addEventListener('input', () => {
      setError(messageInput, messageError, validateMessage(messageInput.value));
    });

    // Optional: Validate on blur (when user leaves the input field)
    nameInput.addEventListener('blur', () => {
      setError(nameInput, nameError, validateName(nameInput.value));
    });

    emailInput.addEventListener('blur', () => {
      setError(emailInput, emailError, validateEmail(emailInput.value));
    });

    contactNumberInput.addEventListener('blur', () => {
      setError(contactNumberInput, contactNumberError, validateContactNumber(contactNumberInput.value));
    });

    messageInput.addEventListener('blur', () => {
      setError(messageInput, messageError, validateMessage(messageInput.value));
    });

    // Form submission handling
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent form submission for demo
      const isNameValid = validateName(nameInput.value);
      const isEmailValid = validateEmail(emailInput.value);
      const isContactNumberValid = validateContactNumber(contactNumberInput.value);
      const isMessageValid = validateMessage(messageInput.value);

      setError(nameInput, nameError, isNameValid);
      setError(emailInput, emailError, isEmailValid);
      setError(contactNumberInput, contactNumberError, isContactNumberValid);
      setError(messageInput, messageError, isMessageValid);

      if (isNameValid && isEmailValid && isContactNumberValid && isMessageValid) {
        alert('Form is valid! Ready to submit.');
        // Uncomment the next line to allow actual form submission
        // form.submit();
      }
    });
  </script>
