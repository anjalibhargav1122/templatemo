import React from 'react'
import "./Templates.css"
import Container from "react-bootstrap/Container"
import too from "../../assets/too.png"
import Button from 'react-bootstrap/Button'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import cafe from "../../assets/cafe.jpg"
import login from "../../assets/login.jpg"
import grafh from "../../assets/grafh.jpg"
import circle from "../../assets/circle.jpg"
import sofa from "../../assets/sofa.jpg"
import men from "../../assets/men.jpg"
import couple from "../../assets/couple.jpg"
import prithvi from "../../assets/prithvi.jpg"
import Character from "../../assets/character.jpg"
import dashboard from "../../assets/dashboard.jpg"
import Spot from "../../assets/spot.jpg"
import landing from "../../assets/landing.jpg"
import Central from "../../assets/central.jpg"
import Artist from "../../assets/artist.jpg"
import Health from "../../assets/health.jpg"
import Individual from "../../assets/individual.jpg"
import Card from 'react-bootstrap/Card';
import facebookbtn from "../../assets/facebook.svg"
import twitterbtn from "../../assets/twitter.svg"
import messanger from "../../assets/messenger.svg"
import pinterest from "../../assets/pinterest.svg"
import email from "../../assets/email.svg"
import share from "../../assets/sharethis.svg"

const Templates = () => {
    const cards = [
        {
            "text": "This is a Bootstrap 5 HTML layout for cafe businesses. There is a zoom effect image slider on the homepage. Cafe menu, customer..",
            "title": "Barista Cafe",
            "img": cafe
        },
        {
            "text": "Kool Form Pack features a black theme video background with the use of Bootstrap 5 CSS. It includes 6 HTML pages for login,..",
            "title": "Kool Form Pack",
            "img": login
        },
        {
            "text": "Mini Finance is a small admin dashboard template for personal finance websites. It consists of total 6 HTML pages with..",
            "title": "Mini Finance",
            "img": grafh
        },
        {
            "text": "Gotto is free HTML template for job portal websites. Simple Job search form and Advanced Job search form are included. This..",
            "title": "Gotto Job",
            "img": circle
        },
        {
            "title": "Moso Interior",
            "text": "Moso Interior HTML CSS template can be used for your company website. It is based on Bootstrap v5.1.3 layout. Main menu..",
            "img": sofa
        },
        {
            "title": "Clean Work",
            "text": "This is a lightblue color theme for cleaning service companies. Clean Work is a professional design website layout using..",
            "img": men
        },
        {
            "title": "Wedding Lite",
            "text": "This is a wedding HTML template for couples who are about to get married. This template is suitable for simple one-page..",
            "img": couple
        },
        {
            "title": "Waso Strategy",
            "text": "Waso is free Bootstrap 5 HTML template for your business website. There are 2 pages included in this layout. Content tabs are..",
            "img": prithvi
        }

    ];
    const cards2 = [
        {
            "text": "Character is a modern one-page design HTML5 template. You can easily alter text and images. Alternating images made this layout..",
            "title": "Character",
            "img": Character
        },
        {
            "text": "This is an admin HTML template. Dashboard shows bar chart, pie chart, graphs, calendar, to-do list, etc. Product List includes..",
            "title": "Admin Dashboard",
            "img": dashboard
        },
        {
            "text": "New Spot HTML5 Theme is using simple circular spots. Different content sections are separated by sloping backgrounds. Just put..",
            "title": "New Spot One-page",
            "img": Spot
        },
        {
            "text": "This soft landing HTML page is clean and minimal design. It has simple content tabs, carousel, pricing tables, and contact form.",
            "title": "Soft Landing Page",
            "img": landing
        },
        {
            "title": "Central Bootstrap 4",
            "text": "Central is one-page Bootstrap 4 layout. It is simple HTML template that can be used for any kind of website. It has a dropdown..",
            "img": Central
        },
        {
            "title": "Artist Minimal Page",
            "text": "Artist is a minimal Bootstrap theme with a subtle parallax effect. It has animated contents with a slide up effect. This is a..",
            "img": Artist
        },
        {
            "title": "Health Center",
            "text": "Health HTML Template includes 2 pages. Main page features different sections and news page is a 2-column content page.",
            "img": Health
        },
        {
            "title": "Individual",
            "text": "Individual is a parallax HTML template with different background images for different sections. Gallery is included.",
            "img": Individual
        }

    ];

    const button = [
        {
            "text": "Free HTML Templates"
        },
        {
            "text": "580+ CSS Templates"
        },
        {
            "text": "Contact"
        }
    ]

    return (
        <div>
            <Container className='pt-4 pb-4 border-bottom border-dark'>
                <Row>
                    <Col sm={12} md={6} lg={6}><img alt='logo' src={too} />
                        <p className='text-secondary'>free HTML templates for your websites</p>
                    </Col>
                    <Col sm={12} md={6} lg={6} className='d-flex align-items-center justify-content-between'>{
                        button.map((v, i) => {
                            return (
                                <Button key={i} variant='' className='bo '>
                                    {v.text}
                                </Button>
                            )
                        })
                    }</Col>
                </Row>
            </Container>
            <Container className='mt-4'>
                <h2 className='tx fs-1'>60+ Free HTML Website Templates</h2><p className='pw lh-lg'>Tooplate provides 60+ free <a className='text-decoration-none lkcr' href='#'>HTML website templates</a> which are mobile-friendly & responsive layouts using the most popular Boostrap CSS and JS libraries. All of our HTML website templates are easy to edit and apply for your website. You can use any kind of HTML code editor to modify our templates. If you have any question or comment, please feel free to <a href='#' className='lkcr text-decoration-none'>contact us</a>. Thank you for visiting Tooplate.</p>
            </Container>
            <Container className='mt-5'>
                <h3 className='text-primary mb-4'>Latest HTML Templates</h3>
                <Row>
                    {
                        cards.map((v, i) => {
                            return (
                                <Col key={i} sm={12} md={3} lg={3} className='mb-4'>
                                    <Card className='border-0'>
                                        <Card.Img variant="top" src={v.img} />
                                        <Card.Body  >
                                            <Card.Title className='text-primary text-center mb-3 text-decoration-none undr'>{v.title}</Card.Title>
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
            </Container>
            <Container className='mt-5'>
                <h3 className='text-primary mb-4'>Featured HTML Templates</h3>
                <Row>
                    {
                        cards2.map((v, i) => {
                            return (
                                <Col key={i} sm={12} md={3} lg={3} className='mb-4'>
                                    <Card className='border-0'>
                                        <Card.Img variant="top" src={v.img} />
                                        <Card.Body  >
                                            <Card.Title className='text-primary text-center mb-3 text-decoration-none undr'>{v.title}</Card.Title>
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
            </Container>
            <Container className='  mt-5 mb-3'>
                <Row>
                    <Col sm={1} md={1} lg={1}></Col>
                    <Col sm={10} md={10} lg={10} className='d-flex align-items-center justify-content-center'> <div className='d-flex flex-column justify-content-center align-items-center me-2'><strong > 24k</strong>
                        <span className='fss '>Shares</span></div><Button variant="primary" className=' d-flex rounded-pill me-2 pds align-items-center justify-content-center'><img alt='facebook' className='mi' src={facebookbtn} /><span className='dn'>7.4k</span></Button>
                        <Button variant="dark" className=' d-flex rounded-pill me-2 align-items-center pds justify-content-center'><img alt='facebook' className='mi' src={twitterbtn} /><span className='dn'>3.8k</span></Button>
                        <Button variant="primary" className=' d-flex rounded-pill me-2 align-items-center pds justify-content-center'><img alt='facebook' className='mi' src={messanger} /><span className='dn'>184</span></Button>
                        <Button variant="danger" className=' d-flex rounded-pill me-2 align-items-center pds justify-content-center'><img alt='facebook' className='mi' src={pinterest} /><span className='dn'>474</span></Button>
                        <Button variant="success" className='pdss me-2 rounded-pill'><img alt='facebook' src={share} /></Button>
                        <Button variant="secondary" className=' d-flex rounded-pill align-items-center justify-content-center pds'><img alt='facebook' className='mi ' src={email} /><span className='dn'>208</span></Button></Col>
                    <Col sm={1} md={1} lg={1}></Col>
                </Row>
            </Container>
            <Container className='mt-5'>

                <Row>
                    <Col sm={12} md={8} lg={8}>  <h3 className='text-primary mb-4'>About Tooplate Website</h3><p className='lh-lg'>Tooplate brings you a variety of <a href='#' className='text-decoration-none lkcr'>free HTML templates</a> for your business or corporate websites, digital marketing pages, image galleries and personal portfolios. Tooplate used open-source Bootstrap UI kit for latest HTML CSS layouts. You can download any template instantly for free. No need to login or register to use our templates.</p></Col><Col sm={12} md={4} lg={4} className='text-end'><Button variant='primary' className='p-3 pe-4 ps-4'>All HTML Templates</Button></Col>
                </Row>
            </Container >
            <Container className='mt-5 border-top border-dark pt-3 pb-5 mb-5 text-center'>Copyright © 2024 <a href='https://www.tooplate.com/free-templates' className='text-decoration-none lkcr'>free HTML templates</a> by Tooplate - <a href='#' className='text-decoration-none lkcr'>About</a> - <a href='#' className='text-decoration-none lkcr'>Privacy Policy</a> - <a href='#' className='text-decoration-none lkcr'>Sitemap</a></Container>
        </div>
    )
}

export default Templates
