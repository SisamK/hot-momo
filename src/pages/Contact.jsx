import "./../assets/syle.css";

import { Button, Label, TextInput } from 'flowbite-react';

export default function Contact() {
  return (
    <div className="contact-container">
      
        <h2 className="text-2xl font-bold mb-4">Share Your Stories</h2>
        <div className="mb-4">
          <Label htmlFor="email4" value="Your Email" />
          <TextInput id="email4" type="email" placeholder="" required />
        </div>
        <div className="mb-4">
          <Label htmlFor="message" value="Your Message" />
          <textarea id="message" rows="5" className="border border-gray-300 rounded-lg w-full p-2" placeholder="Write your message here..." required />
        </div>
        <Button gradientDuoTone="greenToBlue" className="btn-send">
          Send Message
        </Button>
      </div>
  );
}
