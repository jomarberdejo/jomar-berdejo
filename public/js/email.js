document.addEventListener("DOMContentLoaded",(function(){emailjs.init("UNI1nVMwdHInsoN8I"),document.getElementById("send-email-btn").addEventListener("click",(function(e){e.preventDefault();const t=document.querySelector('input[type="button"]');t.disabled=!0,t.value="...";const a=document.getElementById("fullname"),l=document.getElementById("email_id"),n=document.getElementById("message");if(""===a.value.trim())return alert("Please enter your name."),a.focus(),t.disabled=!1,void(t.value="Send");if(""===l.value.trim())return alert("Please enter your email."),l.focus(),t.disabled=!1,void(t.value="Send");if(!function(e){return/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e)}(l.value.trim()))return alert("Please enter a valid email address."),l.focus(),t.disabled=!1,void(t.value="Send");if(""===n.value.trim())return alert("Please enter your message."),n.focus(),t.disabled=!1,void(t.value="Send");const u={from_name:a.value.trim(),email_id:l.value.trim(),message:n.value.trim()};emailjs.send("service_nl41j9z","template_4wwfc5i",u).then((e=>{alert(`Hello ${a.value.trim()}, thank you for contacting us, your message was sent successfully. Kindly wait and we'll get back to you as soon as possible. Thank you!`),a.value="",l.value="",n.value=""}),(e=>{alert("Error:",e)})).finally((()=>{t.disabled=!1,t.value="Send"}))}))}));