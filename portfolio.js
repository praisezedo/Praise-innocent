const contactForm = document.getElementById('contactForm');
const Name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission

  const data = {
    name: Name.value,
    email: email.value,
    subject: subject.value,
    messaage:message.value
  };

  fetch('https://formspree.io/f/xkgzqoyn', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    alert('Message sent!');
  })
  .catch(error => {
    alert('Error sending message.');
  });
  Name.value = '';
email.value = '';
subject.value = '';
message.value = '';
});




