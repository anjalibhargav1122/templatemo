import React from 'react'
import "./Contact.css"
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import Container from "react-bootstrap/Container"
import Header from '../../components/navbar/Header'
import Buttons from '../../components/footer/Buttons'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  const listItems = [
    {
      "question": "How to make Contact Form to send email?",
      'answer': "You can use this contact form scripts for any template."
    },
    {
      "question": "Are all website templates absolutely free for any kind of use?",
      'answer': "Yes, they are 100% free and there is no hidden charge. They can be used for your commercial websites."
    },
    {
      "question": "Can I modify and use free templates for my client websites and charge (sell) them?",
      'answer': "Yes, you can do that."
    },
    {
      "question": "How shall I contribute TemplateMo?",
      'answer': "You can support a little contribution via PayPal and please tell your friends about our website."
    },
    {
      "question": "Can I remove credit links from templates?",
      'answer': "Yes, you can remove all credit links."
    },
    {
      "question": "Do I need to pay for a link removal?",
      'answer': "No, you do not need to pay for it. Templates are 100% FREE."
    },
    {
      "question": "Can I request new template for my need?",
      'answer': "Yes, please tell us what you need. We will try our best to fulfill it."
    },
    {
      "question": "Can I use sample images from templates on my websites?",
      'answer': "Yes, you can use them."
    },
    {
      "question": "Can I redistribute your templates on my website?",
      'answer': "No, this is NOT allowed. Please do not redistribute our templates."
    }
  ]
  return (
    <div>
      <Header />
      <Container className='fs-3 text-success  ps-0  p-5'>
        <NavLink to="/" className='undrlin text-success text-decoration-none'>TemplateMo</NavLink> › <span className='undrlin '>Contact</span>
      </Container>
      <Container>
        <p className='text-danger fs-4 mb-4'>Questions and Answers about free CSS templates</p>
        <ol>
          {
            listItems.map((v, i) => {
              return (
                <li key={i} className='mb-5'><strong>{v.question}</strong><p>{v.answer}</p></li>
              )
            })
          }
        </ol>
        <p className='text-danger fs-4 '>Site Updates and LIVE Chat on Facebook</p>
        <div className='mb-5'>  <a href='https://www.facebook.com/templatemo'><img alt='facebook' src={facebook} className='me-2 crsrpointr' /></a>
          <img alt='twitter' src={twitter} className='crsrpointr' /></div>

        <p className='text-danger fs-4 '>Contact Email</p>
        <p>Please send us a message if you have any other question. Email: info [at] templatemo [dot] com</p>
      </Container>

      <Buttons f="823" t="99" m="105" p="52" e="238" s="1.7k" />
    </div>
  )
}

export default Contact
