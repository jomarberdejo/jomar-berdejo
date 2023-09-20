document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("UNI1nVMwdHInsoN8I");

  const loadCont = document.querySelector(".loader-container");

  loadCont.style.display = "none";

  const loader = document.querySelector(".loader");

  loader.classList.remove("loader");

  
  function SendMail(event) {
    event.preventDefault();

    const submitButton = document.querySelector('input[type="submit"]');
    submitButton.disabled = true;
    submitButton.value = "...";

    const name = document.getElementById("fullname");
    const email = document.getElementById("email_id");
    const message = document.getElementById("message");

    if (name.value.trim() === "") {
      alert("Please enter your name.");
      name.focus();
      submitButton.disabled = false;
      submitButton.value = "Send";
      return;
    }

    if (email.value.trim() === "") {
      alert("Please enter your email.");
      email.focus();
      submitButton.disabled = false;
      submitButton.value = "Send";
      return;
    }

    if (!isValidEmail(email.value.trim())) {
      alert("Please enter a valid email address.");
      email.focus();
      submitButton.disabled = false;
      submitButton.value = "Send";
      return;
    }

    if (message.value.trim() === "") {
      alert("Please enter your message.");
      message.focus();
      submitButton.disabled = false;
      submitButton.value = "Send";
      return;
    }

    const params = {
      from_name: name.value.trim(),
      email_id: email.value.trim(),
      message: message.value.trim(),
    };

    emailjs
      .send("service_nl41j9z", "template_4wwfc5i", params)
      .then(
        (res) => {
          alert(
            `Hello ${name.value.trim()}, thank you for contacting us, your message was sent successfully. Kindly wait and we'll get back to you as soon as possible. Thank you!`
          );
          name.value = "";
          email.value = "";
          message.value = "";
        },
        (error) => {
          alert("Error:", error);
        }
      )
      .finally(() => {
        submitButton.disabled = false;
        submitButton.value = "Send";
      });
  }
  function isValidEmail(email) {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  }

  const sendBtn = document.getElementById("send-email-btn");

  sendBtn.addEventListener("click", SendMail);
});
