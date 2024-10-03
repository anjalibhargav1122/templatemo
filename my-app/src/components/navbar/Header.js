import React from 'react'
import "./Header.css"
import logo from "../../assets/logo.png"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div><Container fluid className="p-5 bgimg shadow"><Row>
            <Col sm={12} md={6} lg={6} >
                <img src={logo} alt='logo' />
                <p className='text-white fs-6 ps-2 pt-3'>Free HTML CSS Website Templates</p></Col>
            <Col sm={12} md={6} lg={6} className='mp d-flex align-items-end'>
                <div >


                    <Button className='btbg text-primary p-3 ps-4 pe-4 rounded-0 me-2' onClick={() => navigate("/template")}>Free Templates</Button>

                    <Button className='btbg text-primary p-3 ps-4 pe-4 rounded-0 me-2' onClick={() => navigate("/templates")}>HTML Templates</Button>

                    <Button className='btbg text-primary p-3 ps-4 pe-4 rounded-0 me-2' onClick={() => navigate("/link")}>Links</Button>

                    <Button className='btbg text-primary p-3 ps-4 pe-4 rounded-0' onClick={() => navigate("/contact")}>Contact</Button>
                </div>
            </Col>
        </Row>
        </Container></div>
    )
}

export default Header