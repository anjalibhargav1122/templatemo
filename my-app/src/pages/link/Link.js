import React from 'react'
import "./Link.css"
import Header from '../../components/navbar/Header'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Buttons from '../../components/footer/Buttons'
import { NavLink } from 'react-router-dom'

const Link = () => {
    const templates = [
        {
            "href": "#",
            "text": "Too CSS"
        },
        {
            "href": "#",
            "text": "BootstrapMade"
        },
        {
            "href": "#",
            "text": "Tooplate"
        },
        {
            "href": "#",
            "text": "Start Bootstrap"
        },
        {
            "href": "#",
            "text": "One Page Love"
        },
        {
            "href": "#",
            "text": "Theme Wagon"
        },
        {
            "href": "#",
            "text": "Theme Fisher"
        },
        {
            "href": "#",
            "text": "UX-Centered Bootstrap Themes"
        },
        {
            "href": "#",
            "text": "Blogger Templates"
        },
        {
            "href": "#",
            "text": "Template Monster"
        }
    ];

    const videos = [
        {
            "href": "#",
            "text": "Videvo"
        },
        {
            "href": "#",
            "text": "Unsplash"
        },
        {
            "href": "#",
            "text": "Pexels"
        },
        {
            "href": "#",
            "text": "Pixabay"
        },
        {
            "href": "#",
            "text": "Good Free Photos"
        },
        {
            "href": "#",
            "text": "Canva"
        },
        {
            "href": "#",
            "text": "Public Domain Pictures"
        }

    ];

    const site = [
        {
            "href": "#",
            "text": "XML Sitemaps Generator"
        },
        {
            "href": "#",
            "text": "Neil Patel SEO Analyzer"
        },
        {
            "href": "#",
            "text": "Ahrefs Backlink Checker"
        },
        {
            "href": "#",
            "text": "SEO Check"
        },
        {
            "href": "#",
            "text": "Varvy SEO Tools"
        },
        {
            "href": "#",
            "text": "SEO Site Checkup"
        },
        {
            "href": "#",
            "text": "CSS Minifier"
        },
        {
            "href": "#",
            "text": "HTML Formatter"
        }

    ];

    const blogs = [

        {
            "href": "#",
            "text": "Smashing Magazine"
        },
        {
            "href": "#",
            "text": "Web Resources Depot"
        },
        {
            "href": "#",
            "text": "1st Web Designer"
        },
        {
            "href": "#",
            "text": "Web Designer Depot"
        },
        {
            "href": "#",
            "text": "Abduzeedo Design Inspiration"
        },
        {
            "href": "#",
            "text": "Fresh Design Web"
        }

    ];

    const css = [

        {
            "href": "#",
            "text": "HTML5 Periodical Table"
        },
        {
            "href": "#",
            "text": "W3 Schools"
        },
        {
            "href": "#",
            "text": "Tutorial Republic"
        },
        {
            "href": "#",
            "text": "Bootstrap"
        }

    ];

    const Graphics = [

        {
            "href": "#",
            "text": "FreePik Vector Graphics"
        },
        {
            "href": "#",
            "text": "Free brushes, Photoshop Fonts"
        },
        {
            "href": "#",
            "text": "Free PSD Flyer Templates"
        },
        {
            "href": "#",
            "text": "Free Photoshop Brushes"
        },
        {
            "href": "#",
            "text": "Free Vector Arts"
        }

    ];


    return (
        <div>
            <Header />

            <Container className='fs-3 text-success  ps-0  p-4 pt-5 '>

                <NavLink to="/" className='undrlin text-success text-decoration-none'>TemplateMo</NavLink> › <span className='undrlin'>Web Design Links</span>
            </Container>
            <Container><div className='w-75 lh-lg'>This page provides you a list of useful websites for your web design and development stuffs. There are good websites for free CSS templates, free stock images and videos, website optimizations, HTML CSS tutorials, free vectors and graphics, etc. We can put your link here if your website has a good value for users. If you have any suggestion, please <a className="text-decoration-none" href='/contact'>contact</a> us.</div></Container>
            <Container >
                <Row>
                    <Col sm={12} md={3} lg={3} className='mt-5'>
                        <p className='text-danger fs-4 mb-4'>Free Templates</p>{
                            templates.map((v, i) => {
                                return (
                                    <div key={i} className='mb-2'>

                                        <a className='undrlnLink ' href={v.href}>{v.text}</a>
                                    </div>
                                )
                            })
                        }

                        <p className='text-danger fs-4 mb-4 mt-5'>HTML CSS Tutorials</p>
                        {
                            css.map((v, i) => {
                                return (
                                    <div key={i} className='mb-2'>

                                        <a className='undrlnLink ' href={v.href}>{v.text}</a>
                                    </div>
                                )
                            })
                        }
                    </Col>
                    <Col sm={12} md={3} lg={3} className='mt-5'>
                        <p className='text-danger fs-4 mb-4'>Free Images and Videos</p>
                        {
                            videos.map((v, i) => {
                                return (
                                    <div key={i} className='mb-2'>

                                        <a className='undrlnLink ' href={v.href}>{v.text}</a>
                                    </div>
                                )
                            })
                        }
                        <p className='text-danger fs-4 mb-4 mt-5'>Free Graphics</p>
                        {
                            Graphics.map((v, i) => {
                                return (
                                    <div key={i} className='mb-2'>

                                        <a className='undrlnLink ' href={v.href}>{v.text}</a>
                                    </div>
                                )
                            })
                        }
                    </Col>
                    <Col sm={12} md={3} lg={3} className='mt-5'>
                        <p className='text-danger fs-4 mb-4'>Site Optimizations</p>
                        {
                            site.map((v, i) => {
                                return (
                                    i == 3 ? <div key={i} className='mb-4'>

                                        <a className='undrlnLink ' href={v.href}>{v.text}</a>
                                    </div> : <div key={i} className='mb-2'>

                                        <a className='undrlnLink ' href={v.href}>{v.text}</a>
                                    </div>
                                )
                            })
                        }
                    </Col>
                    <Col sm={12} md={3} lg={3} className='mt-5'>
                        <p className='text-danger fs-4 mb-4'>Web Design Blogs</p>
                        {
                            blogs.map((v, i) => {
                                return (
                                    i == 2 ? <div key={i} className='mb-4'>

                                        <a className='undrlnLink ' href={v.href}>{v.text}</a>
                                    </div> : <div key={i} className='mb-2'>

                                        <a className='undrlnLink ' href={v.href}>{v.text}</a>
                                    </div>
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>
            <Buttons f="120" t="25" m="31" p="24" e="50" s="276" />
        </div>
    )
}

export default Link