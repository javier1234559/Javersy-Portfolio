import "./styles.scss";

const Form = () => {
  function handleSubmit(event) {
    event.preventDefault();
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      from_name: event.target.name.value,
      from_email: event.target.email.value,
      message: event.target.message.value,
    }, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <input type="text" name="name" placeholder='Your name' />
      <input type="email" name="email" placeholder='Your email address' required />
      <input type="text" name="message" placeholder='Your description' required  />
      <button type="submit" className="self-end">Send</button>
    </form>
  );
}

export default Form