const SUBMIT_URL =
  'https://www.greatfrontend.com/api/questions/contact-form';

export default async function submitForm(event) {
  event.preventDefault();
  const form = event.target;

  try {
    if (form.action !== SUBMIT_URL) {
      alert('Incorrect form action value');
      return;
    }

    if (form.method.toLowerCase() !== 'post') {
      alert('Incorrect form method value');
      return;
    }

    const formData = new FormData(form);
    const response = await fetch(SUBMIT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }),
    });
    console.log(JSON.stringify(response) + " jjj");
    const text = await response.text();
    // const json = await response.json();
    console.log(text + " jjj");
    alert(text);
  } catch (_) {
    alert('Error submitting form!');
  }
}



// https://mithilahaat.org/ticket/book?date=2024-05-20&name=Hari&mobile=8051644043&email=nmsirlec1%40gmail.com&adult=3&child=0&total=60


//  ccavRequestHandler