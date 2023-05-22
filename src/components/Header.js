import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo_home_header.svg';
import { House } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import { Navbar, Nav } from 'react-bootstrap';

function Header( props ) {
  const { t } = useTranslation();
  const { basename } = props;

  return (
    <Navbar expand="lg">
      <Navbar.Brand as={Link} to={`${basename}/`}>
        <img src={logo} alt={t('header.name') + " Logo"} width="512" height="200" className="d-inline-block align-text-top" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to={`${basename}/`}><House />{t('header.home')}</Nav.Link>
          <Nav.Link as={Link} to={`${basename}/experience`}>{t('header.experience')}</Nav.Link>
          <Nav.Link as={Link} to={`${basename}/hobbies`}>{t('header.hobbies')}</Nav.Link>
          <Nav.Link as={Link} to={`${basename}/contacts`}>{t('header.contacts')}</Nav.Link>
          <Nav.Link as={Link} to={`${basename}/support`}>{t('header.support')}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
