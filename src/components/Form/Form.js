import React from 'react'
import submitForm from './submitForm';

const Form = () =>  {
  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      onSubmit={submitForm}
      action="https://www.greatfrontend.com/api/questions/contact-form"
      method="post">
      <div>
        <label htmlFor="name-input">Name</label>
        <input className='border p-2 m-1' id="name-input" name="name" type="text" />
      </div>
      <div>
        <label htmlFor="email-input">Email</label>
        <input className='border p-2  m-1' id="email-input" name="email" type="email" />
      </div>
      <div>
        <label htmlFor="message-input">Message</label>
        <textarea className='border p-2 m-1'
          id="message-input"
          name="message"></textarea>
      </div>
      <div>
        <button className='text-white rounded-lg bg-purple-700 p-2 m-1'>Send</button>
      </div>
    </form>
  );
}
export default Form