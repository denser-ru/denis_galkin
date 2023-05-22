import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import DenisGalkin from '../assets/img/photo_for_main_page.png';
import ReactHtmlParser from 'react-html-parser';

function Home() {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="row">
        <div className="col">
          <h1>{t('home.welcome')}</h1>
          <p style={{ textAlign: 'justify' }}>
          <Image src={DenisGalkin} alt="Denis Galkin" rounded className="shadow" width="30%" style={{ verticalAlign: 'middle', display: 'block', float: 'left', marginRight: '15px' }} thumbnail />
            {ReactHtmlParser(t('home.description'))}
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Home;
