import React from 'react'
import "./Main.css"
import Header from '../../components/navbar/Header'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import scan from "../../assets/scan.png"
import one from "../../assets/one.jpg"
import two from "../../assets/two.jpg"
import three from "../../assets/three.jpg"
import four from "../../assets/four.jpg"
import five from "../../assets/five.jpg"
import six from "../../assets/six.jpg"
import seven from "../../assets/seven.jpg"
import eight from "../../assets/eight.jpg"
import nine from "../../assets/nine.jpg"
import ten from "../../assets/ten.jpg"
import eleven from "../../assets/eleven.jpg"
import twelfth from "../../assets/twelfth.jpg"
import Card from 'react-bootstrap/Card';
import Buttons from '../../components/footer/Buttons'
import { NavLink } from 'react-router-dom'

const Main = () => {

    const links = [
        {
            "href": "#",
            "text": "50+ Portfolio Templates"
        },
        {
            "href": "#",
            "text": "40+ Multi-page"
        },
        {
            "href": "#",
            "text": "36+ Business"
        },
        {
            "href": "#",
            "text": "31+ Bootstrap 5"
        },
        {
            "href": "#",
            "text": "14+ Landing Pages"
        }
    ];

    const btn = [
        {
            "text": "60+ One-Page"
        },
        {
            "text": "26+ Digital Marketing "
        },
        {
            "text": "590+ All Templates"
        }
    ];

    const cards = [
        {
            "text": "Villa Agency is a professional HTML CSS template with Bootstrap v5.3.0 responsive framework. There are Property Listing page and...",
            "title": "Villa Agency",
            "img": one
        },
        {
            "text": "Topic Listing includes 4 HTML pages for home, listing, detail and contact. Homepage features many sections such as search bar,...",
            "title": "Topic Listing",
            "img": two
        },
        {
            "text": "Lugx Gaming Shop Template is based on Bootstrap 5 CSS library. This blue color layout used Bootstrap v5.3.0 alpha 1 specifically....",
            "title": "Lugx Gaming",
            "img": three
        },
        {
            "text": "This template is an ebook landing page or one-page layout for digital books. There are 6 different sections including content...",
            "title": "Ebook Landing",
            "img": four
        },
        {
            "title": "Catalog Z",
            "text": "Catalog-Z is free photo video HTML template based on Bootstrap 5 Alpha 2. There are 6 HTML pages including photo detail, video...",
            "img": five
        },
        {
            "title": "Zay Shop",
            "text": "Zay Shop is a Bootstrap 5 beta 1 HTML CSS eCommerce Template for your online stores. This green color template included listing...",
            "img": six
        },
        {
            "title": "Space Dynamic",
            "text": "Space Dynamic is a digital marketing HTML5 template based on Bootstrap 5 beta 2. This layout used animated CSS for page element...",
            "img": seven
        },
        {
            "title": "Plot Listing",
            "text": "Plot List Bootstrap 5 template includes content tabs and carousel item lists. This template has 4 different HTML pages which can...",
            "img": eight
        },
        {
            "title": "Chain App Dev",
            "text": "Chain App Dev is an app landing page HTML5 template based on Bootstrap v5.1.3 CSS layout. You can use this for your digital...",
            "img": nine
        },
        {
            "title": "Mexant",
            "text": "Mexant is a financial HTML CSS template suitable to apply for digital currency or crypto related websites. However, this can also...",
            "img": ten
        },
        {
            "title": "First Portfolio",
            "text": "First Portfolio is one-page layout CSS template for your personal portfolio page. This template uses green, purple, white, and...",
            "img": eleven
        },
        {
            "title": "Woox Travel",
            "text": "Woox Travel is a professional HTML CSS layout for your website. Bootstrap 5.2.0 is used for this template. There are 4 different...",
            "img": twelfth
        }
    ];

    const listItems = [
        {
            "que": "What is Free CSS Template?",
            "ans": "Free CSS Template is a ready-made web page layout design based on CSS (Cascading Style Sheet) that formats HTML web pages."
        },
        {
            "que": "What are the best HTML & CSS code editors?",
            "ans": "Most popular code editors are Visual Studio Code, Dreamweaver, Notepad++, Rapid CSS, Komodo Edit, Brackets, Sublime Text, Bluefish and Atom to edit the codes and put in your own contents. After that, you can publish your own website on any web hosting platform."
        },
        {
            "que": "Are all CSS templates free to download?",
            "ans": "Yes, all templates are 100% free to download instantly without asking your email or login account. You can browse and download 588+ free CSS templates from TemplateMo website. You can also use them to learn coding HTML, CSS, and JavaScripts."
        }
    ]

    return (
        <div><Header />
            <Container className='bg-dark text-white p-5 shadow border border-5 border-white mt-5'>
                <h2 className='display-5 fw-bold'>Free HTML CSS Templates</h2>
                <p className='lh-lg mt-5 mb-4 wdp'>Latest 200<sup>+</sup> Templates are responsive HTML<sub>5</sub> mobile-ready CSS layouts with Bootstrap framework. All 588<sup>+</sup> CSS templates are absolutely 100% free download for your web design. You can use free templates for your commercial or personal or learning purposes. Please <a href='/contact' className='text-decoration-none udr'>contact</a> us if you have any question.</p>
                <p>We have a variety of CSS templates in different categories. You may start from ...</p>
                {
                    links.map((v, i) => {
                        return (
                            <a className='text-decoration-none udr me-4' key={i} href={v.href}>{v.text}</a>
                        )
                    })
                }
                <br /><br /><br />
                {
                    btn.map((v, i) => {
                        return (
                            <Button className='btlk text-white p-3 ps-4 pe-4 me-4' variant='' key={i}>
                                {v.text}
                            </Button>
                        )
                    })
                }

            </Container>

            <Container className='mt-5 pt-4'>
                <Row>
                    {
                        cards.map((v, i) => {
                            return (
                                <Col key={i} sm={12} md={3} lg={3} className='mb-4'>
                                    <Card className='bor'>
                                        <Card.Img variant="top" src={v.img} />
                                        <Card.Body className='bg-light bor' >
                                            <Card.Title className='text-primary text-center mb-3 undrlncard'>{v.title}</Card.Title>
                                            <Card.Text>
                                                {v.text}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }

                </Row>

                <div className='d-flex justify-content-end'>

                    <Button variant='' className=' text-center wid  pt-3 pb-3 border-secondary fw-bold'><NavLink className=' text-decoration-none clr' to="/template">View All Templates</NavLink></Button>
                </div>
            </Container>

            <Container className='text-center mt-4'>
                <a className='text-decoration-none ' href='#'>
                    <img alt='scan' src={scan} /></a>
            </Container>
            <Container className='mt-5 pt-3'>
                {
                    listItems.map((v, i) => {
                        return (
                            <div key={i}>
                                <h3 className='text-success mb-3'>{v.que}</h3>
                                <p className='lh-lg wdp'>{v.ans}</p>                </div>
                        )
                    })
                }
            </Container>


            <Buttons f="9.8k" t="5.8k" m="478" p="438" e="339" s="71.2k" />
        </div>
    )
}

export default Main
