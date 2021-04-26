import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function Header() {
    return (
        <div className="bt-header">
            <Container>
                <div className="bt-header-top">
                    <Row className="h-36">
                        <Col sm='6' className="d-flex justify-content-start d-flex align-items-center">
                            <div className="hd-contact">
                                <a href="https://www.facebook.com/dongphivnn/" target="_blank" rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i> </a>
                                <a href="https://www.facebook.com/dongphivnn/" target="_blank" rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i> </a>
                                <a href="https://www.facebook.com/dongphivnn/" target="_blank" rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i> </a>
                                <a href="https://www.facebook.com/dongphivnn/" target="_blank" rel="noreferrer"><i className="fa fa-phone" aria-hidden="true"></i> </a>
                                <i className="pl-1">0582.565.855</i>
                            </div>
                        </Col>
                        <Col sm='6' className="d-flex justify-content-end d-flex align-items-center">
                            <div className="hd-contact">
                                <div className="btn-login ml-3">
                                    <Link to="/">ĐĂNG NHẬP</Link>
                                </div>
                                <div className="btn-lang">
                                    <Link to="#" className="">VIE</Link>
                                    <i>|</i>
                                    <Link to="#" className="">ENG</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>  
                </div>
                <div className="bt-header-bot">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/">BOtravel</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/">TOUR DU LỊCH</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/">KHÁCH SẠN</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/">DI CHUYỂN</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/">BÀI VIẾT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/">KHUYẾN MÃI</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/">LIÊN HỆ</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </Container>
        </div>
    )
}

export default Header
