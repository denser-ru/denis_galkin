import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Contacts() {
  const { t } = useTranslation();

  return (
    <Container>
      <Row className="justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>{t('contacts.title')}</h3>
            </div>
            <div className="card-body">
              <p>{t('contacts.description')}</p>
              ...
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default Contacts;
