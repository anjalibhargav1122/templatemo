import React from 'react'
import "./Buttons.css"
import facebookbtn from "../../assets/facebook.svg"
import twitterbtn from "../../assets/twitter.svg"
import messanger from "../../assets/messenger.svg"
import pinterest from "../../assets/pinterest.svg"
import email from "../../assets/email.svg"
import share from "../../assets/sharethis.svg"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container"

const Buttons = ({ f, t, m, p, e, s }) => {
    return (
        <div>
            <Container className='p-5  mt-5 mb-3'>
                <Row>
                    <Col sm={1} md={1} lg={1}></Col>
                    <Col sm={10} md={10} lg={10} className='d-flex align-items-center justify-content-center'> <div className='d-flex flex-column justify-content-center align-items-center me-2'><strong > {s}</strong>
                        <span className='fss '>Shares</span></div><Button variant="primary" className=' d-flex me-2 pds align-items-center justify-content-center'><img alt='facebook' className='mi' src={facebookbtn} /><span className='dn'>{f}</span></Button>
                        <Button variant="dark" className=' d-flex me-2 align-items-center pds justify-content-center'><img alt='facebook' className='mi' src={twitterbtn} /><span className='dn'>{t}</span></Button>
                        <Button variant="primary" className=' d-flex me-2 align-items-center pds justify-content-center'><img alt='facebook' className='mi' src={messanger} /><span className='dn'>{m}</span></Button>
                        <Button variant="danger" className=' d-flex me-2 align-items-center pds justify-content-center'><img alt='facebook' className='mi' src={pinterest} /><span className='dn'>{p}</span></Button>
                        <Button variant="secondary" className=' d-flex me-2 align-items-center justify-content-center pds'><img alt='facebook' className='mi ' src={email} /><span className='dn'>{e}</span></Button>
                        <Button variant="success" className='pdss'><img alt='facebook' src={share} /></Button></Col>
                    <Col sm={1} md={1} lg={1}></Col>
                </Row>
            </Container>
            <Container className='text-center  fw-bold  bg-primary pt-4 pb-4 text-white fsb' fluid>Copyright © 2008 - 2023<a href='/' className='undrln text-white ms-1 me-1 fsb'> TemplateMo</a> - <a href='https://templatemo.com/about' className='undrln text-white ms-1 me-1 fsb'>About</a> - <a href='https://templatemo.com/privacy-policy' className='undrln text-white ms-1 me-1 fsb'>Privacy Policy</a> - <a href='/contact' className='undrln text-white ms-1 me-1 fsb'>Contact</a> - <a href='https://templatemo.com/sitemap.xml' className='undrln text-white ms-1 fsb'>XML Sitemap</a></Container>
            <Container className='bg-light p-5' fluid>

            </Container></div>
    )
}

export default Buttons