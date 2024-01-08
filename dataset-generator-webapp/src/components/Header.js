import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './css/Header.css';

const Header = () => {
    return (
        <div className='header'>
            <Container fluid className="bg-dark text-light py-3">
                <Row>
                    <Col md={6} className="d-flex align-items-center">
                        <div className='text-wrapper'>
                            <p className="name">Dataset Generator</p>
                            <div className="vert-separator"></div>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;