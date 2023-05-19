
    document.getElementById('myForm').addEventListener('submit', function (event) {
      event.preventDefault();
      validateForm();
    });

    function validateForm() {
      const fullName = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      const gender = document.getElementById('gender').value;
      const robotVerification = document.getElementById('robotVerification').checked;

      let isValid = true;

      // Validate Full Name
      if (fullName.length < 5) {
        document.getElementById('fullNameError').textContent = 'Name must have at least 5 characters';
        isValid = false;
      } else {
        document.getElementById('fullNameError').textContent = '';
      }

      // Validate Email
      if (!email.includes('@')) {
        document.getElementById('emailError').textContent = 'Enter a valid email';
        isValid = false;
      } else {
        document.getElementById('emailError').textContent = '';
      }

      // Validate Phone Number
      if (phone === '123456789' || phone.length !== 10 || isNaN(phone)) {
        document.getElementById('phoneError').textContent = 'Enter a valid 10-digit phone number';
        isValid = false;
      } else {
        document.getElementById('phoneError').textContent = '';
      }

      // Validate Password
      if (password === 'password' || password.length < 8 || password === fullName) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long and not be "password" or user name';
        isValid = false;
      } else {
        document.getElementById('passwordError').textContent = '';
      }

      // Validate Confirm Password
      if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
      } else {
        document.getElementById('confirmPasswordError').textContent = '';
      }

      // Validate Gender
      if (gender === '') {
        document.getElementById('gender').classList.add('is-invalid');
        isValid = false;
      } else {
        document.getElementById('gender').classList.remove('is-invalid');
      }

      // Validate Robot Verification
      if (!robotVerification) {
        document.getElementById('robotError').textContent = 'Please verify that you are not a robot';
        isValid = false;
      } else {
        document.getElementById('robotError').textContent = ''
            }

      if (isValid) {
        // Form is valid, submit the data or perform further actions
        document.getElementById('submissionMessage').textContent = 'Form submitted successfully!';
      }else{
        document.getElementById('submissionMessage').textContent = '';
      }
    }

    function resetForm() {
      document.getElementById('myForm').reset();
      document.getElementById('submissionMessage').textContent = '';
    }
  
    