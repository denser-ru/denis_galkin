import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();
    return (
            <Container fluid className="mt-5">
                <p className="text-muted">{t('header.name')} © {new Date().getFullYear()}</p>
            </Container>
    );
}

export default Footer;
