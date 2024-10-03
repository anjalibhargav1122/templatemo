import React from 'react'
import Header from '../../components/navbar/Header'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from 'react-bootstrap/Button'
import one from "../../assets/one.jpg"
import two from "../../assets/two.jpg"
import three from "../../assets/three.jpg"
import four from "../../assets/four.jpg"
import club from "../../assets/club.jpg"
import scholer from "../../assets/scholar.jpg"
import shop from "../../assets/shop.jpg"
import talk from "../../assets/talk.jpg"
import live from "../../assets/live.jpg"
import agency from "../../assets/agency.jpg"
import charity from "../../assets/charity.jpg"
import twelfth from "../../assets/twelfth.jpg"
import loop from "../../assets/loop.jpg"
import character from "../../assets/character.jpg"
import level from "../../assets/level.jpg"
import pop from "../../assets/pop.jpg"
import Card from 'react-bootstrap/Card';
import Buttons from '../../components/footer/Buttons'

const Template = () => {

    const button = [
        {
            "text": "Previous"
        },
        {
            "text": "1"
        },
        {
            "text": "2"
        },
        {
            "text": "3"
        },
        {
            "text": "4"
        },
        {
            "text": "5"
        },
        {
            "text": "6"
        },
        {
            "text": "7"
        },
        {
            "text": "8"
        },
        {
            "text": "Next"
        },
        {
            "text": "Page 1 of 51"
        },
        {
            "text": "Template Tags"
        },
        {
            "text": " One-Page"
        },
        {
            "text": " Landing Pages"
        },
        {
            "text": "Photography"
        },
        {
            "text": "Corporate"
        },
        {
            "text": "HTML5"
        },
        {
            "text": "Parallax"
        }
    ]

    const cards = [
        {
            "text": "Villa Agency is a professional HTML CSS template with Bootstrap v5.3.0 responsive framework. There are Property Listing page and...",
            "title": "591 Villa Agency",
            "img": one
        },
        {
            "text": "Topic Listing includes 4 HTML pages for home, listing, detail and contact. Homepage features many sections such as search bar,...",
            "title": "590 Topic Listing",
            "img": two
        },
        {
            "text": "Lugx Gaming Shop Template is based on Bootstrap 5 CSS library. This blue color layout used Bootstrap v5.3.0 alpha 1 specifically....",
            "title": "589 Lugx Gaming",
            "img": three
        },
        {
            "text": "This template is an ebook landing page or one-page layout for digital books. There are 6 different sections including content...",
            "title": "588 Ebook Landing",
            "img": four
        },
        {
            "title": "587 Tiya Golf Club",
            "text": "Tiya Golf Club includes 3 HTML pages with Bootstrap v5.3.0 CSS. This template is suitable for your golf course websites. There...",
            "img": club
        },
        {
            "title": "586 Scholar",
            "text": "Scholar is designed for educational or online learning websites. This layout is based on Bootstrap v5.3.0 framework. Template...",
            "img": scholer
        },
        {
            "title": "585 Barber Shop",
            "text": "Gentlemen's Barber Shop is free Bootstrap Bootstrap v5.2.2 HTML CSS template for your business. This one-page layout has a...",
            "img": shop
        },
        {
            "title": "584 Pod Talk",
            "text": "Pod Talk features a beautiful ocean blue gradient waves in the header and footer designs. There are 5 HTML pages in this template...",
            "img": talk
        },
        {
            "title": "583 Festava Live",
            "text": "Festava Live has a full size video banner on the homepage. There are artists, schedule table, pricing, HTML contact form and maps...",
            "img": live
        },
        {
            "title": "582 Tale Seo Agency",
            "text": "Tale is the best SEO agency website template for your digital marketing companies. It is based on Bootstrap v5.2.2 CSS for your...",
            "img": agency
        },
        {
            "title": "581 Kind Heart Charity",
            "text": "Kind Heart Charity can be used as either one page layout or multiple pages. This CSS template is based on Boostrap 5.2.2...",
            "img": charity
        },
        {
            "title": "580 Woox Travel",
            "text": "Woox Travel is a professional HTML CSS layout for your website. Bootstrap 5.2.0 is used for this template. There are 4 different...",
            "img": twelfth
        },
        ,
        {
            "title": "Level",
            "text": "Level template is suitable for hotels or travel websites. Form Check-in / Check-out uses a date picker. You can edit anything in this layout to fit your website needs.",
            "img": level
        },
        {
            "title": "Pop Design",
            "text": "Pop Design is simple and elegant HTML5 template featuring pop-up pages. Background is a stylish modern architecture dark gray full-sized image.",
            "img": pop
        },
        {
            "title": "Infinity Loop",
            "text": "Infinite Loop is a Bootstrap 4.0 HTML Template with a parallax effect. It has a fast scroll easing from section to section. Carousel items are included.",
            "img": loop
        },
        {
            "title": "Character",
            "text": "Character is a one-page HTML5 website template. You can replace text and images. Alternating images made this layout attractive and stylish.",
            "img": character
        }
    ];
    return (
        <div>
            <Header />
            <Container className='fs-3 text-success  ps-0  p-5'>590+ Free CSS Website Templates
            </Container>
            <Container className='mt-5 pt-3'>
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


            </Container>
            <Container className='text-center mt-5 pt-4'>
                {button.map((v, i) => {
                    return (
                        <React.Fragment key={i}>
                            <Button
                                variant={i === 1 ? 'secondary' : 'outline-secondary'}
                                className={i === 0 ? 'me-2 text-dark ps-3 pe-3 disabled' : i > 10 ? 'me-2 text-dark ps-3 pe-3 mt-4' : 'me-2 text-dark ps-3 pe-3'}
                            >
                                {v.text}
                            </Button>
                            {i === 10 && <br />}
                        </React.Fragment>
                    )
                })}

            </Container>

            <Buttons f="3k" t="322" m="264" p="148" e="237" s="8.5k" />
        </div>
    )
}

export default Template