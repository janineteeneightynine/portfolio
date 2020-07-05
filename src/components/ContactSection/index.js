import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ig4 from './Instagram_font_awesome.svg';
import li3 from './linkedin.svg';

import './ContactSection.css';

function ContactSection() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const templateParams =  {
    from_name: email,
    reply_to: email,
    to_name: 'Janine',
    message_html: message
  }

  function sendEmail(e) {
    e.preventDefault();
    emailjs.send('janineteeneightynine', 'template_ohYW4Djq', templateParams, 'user_tkLXlNfLDSsTsMrxlmuVn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  
  function handleEmail(event) {
    console.log(event.target.value)
    setEmail(event.target.value)
  }
  
  function handleMessage(event) {
    console.log(event.target.value)
    setMessage(event.target.value)
  }

  return (
    <div id='contactSection'>
      <div id='contactTitleMobile'> Contact Janine </div>
      <div id='contactInfo'>
        <div id='contactBox'>
          <div id='contactTitle'> Contact Janine </div>
          <div id='socialMediaLinks' >
            <div id='ig' onClick={() => window.open('https://www.instagram.com/janineteeneightynine/', '_blank')}> <img src={ig4}/> Follow  </div>
            <div id='linkedIn' onClick={() => window.open('https://www.linkedin.com/in/janine-sleem-21985a32', '_blank')}> <img src={li3}/> Link Up </div>
          </div>
        </div>
      </div>
      <div id='contactInfoMobile'>
        <div id='socialMediaLinksMobile'>
          <div id='ig' onClick={() => window.open('https://www.instagram.com/janineteeneightynine/', '_blank')}> <img src={ig4}/> Follow  </div>
          <div id='linkedIn' onClick={() => window.open('https://www.linkedin.com/in/janine-sleem-21985a32', '_blank')}> <img src={li3}/> Link Up </div>
        </div>
      </div>
      <div id='inputSection'>
        <form className='contact-form' onSubmit={sendEmail}>
          {/* <div id='email'> */}
          <input name='user_email' onChange = {handleEmail} value={email} id='email' type='text' placeholder='Email'></input>
        {/* </div> */}
        {/* <div id='textArea'> */}
          <textarea name='message' onChange = {handleMessage} value={message} id='message' placeholder='Start a conversation'></textarea>
        {/* </div> */}
          <button type='submit' id='button'> Send </button>
        </form>
      </div>
    </div>
  )
}

export default ContactSection;