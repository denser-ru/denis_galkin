import React, { useState, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import ProfessionalExperience from './ProfessionalExperience';
import Hobbies from './Hobbies';
import Contacts from './Contacts';
import Support from './Support';
import Footer from './Footer';
import './index.css';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import translationEN from '../translations/en.json';
import translationRU from '../translations/ru.json';
import translationES from '../translations/es.json';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ThemeProvider, Form } from 'react-bootstrap';

// добавляем словари
const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  },
  es: {
    translation: translationES
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  interpolation: {
    escapeValue: false
  }
});

const defaulttoggleLightMode = true;

function App() {
  const [language, setLanguage] = useState('ru');
  const { t } = useTranslation();

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  }

  const [lightMode, setLightMode] = useState('navbar-light bg-light');
  document.body.classList.add('navbar-light', 'bg-light');
  const toggleLightMode = () => {
    setLightMode(lightMode === 'navbar-dark bg-dark' ? 'navbar-light bg-light' : 'navbar-dark bg-dark');
    if (lightMode === 'navbar-dark bg-dark') {
      document.body.classList.remove('navbar-dark', 'bg-dark');
      document.body.classList.add('navbar-light', 'bg-light');
    } else {
      document.body.classList.remove('navbar-light', 'bg-light');
      document.body.classList.add('navbar-dark', 'bg-dark');
    }
  };

  const [theme, setTheme] = useState('darkly');
  const handleTheme = (event) => {
    setTheme(event.target.value);
    if ( defaulttoggleLightMode )
      toggleLightMode();
  }

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `https://bootswatch.com/5/${theme}/bootstrap.min.css`;
    document.head.appendChild(link);

    if ( defaulttoggleLightMode )
      toggleLightMode();
  
    return () => {
      document.head.removeChild(link);
    };
  }, [theme]);

  const navigate = useNavigate();
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        navigate(`/${hash}`);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [navigate]);


  // Вычисляем basename с учетом псевдопапки
  // const baseUrl = 'https://denser-ru.github.io/denis_galkin/';
  const pathName = window.location.pathname;
  const basename = pathName.startsWith('/denis_galkin') ? '/denis_galkin' : '';
  console.log("basename: " + basename);

  return (
    <ThemeProvider>
      <Container className={lightMode}>
        <Header basename={basename} />

        <Container  style={{ position: 'absolute', top: '10px' }}>
          <Row>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="lightModeSwitch"
                checked={lightMode === 'navbar-dark bg-dark'}
                onChange={toggleLightMode}
              />
              <label className="form-check-label" htmlFor="lightModeSwitch">
                {lightMode === 'navbar-light bg-light' ? t('header.toDark') : t('header.toLight')}
              </label>
            </div>
          </Row>
          <Row>
            <Col>
              <Form.Select className='w-auto' onChange={handleTheme} value={theme} size="sm">
                <option value="darkly">Darkly</option>
                <option value="sketchy">Sketchy</option>
                <option value="slate">Slate</option>
                <option value="solar">Solar</option>
                <option value="spacelab">Spacelab</option>
                <option value="zephyr">Zephyr</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Select className='w-auto' onChange={handleLanguageChange} value={language} size="sm">
                <option value="ru">Русский</option>
                <option value="es">Español</option>
                <option value="en">English</option>
              </Form.Select>
            </Col>
          </Row>
        </Container>

        <Container>
        <Routes basename={`${basename}`}>
            <Route exact path={`${basename}/`} element={<Home />} />
            <Route path={`${basename}/experience`} element={<ProfessionalExperience />} />
            <Route path={`${basename}/hobbies`} element={<Hobbies />} />
            <Route path={`${basename}/contacts`} element={<Contacts />} />
            <Route path={`${basename}/support`} element={<Support />} />
          </Routes>
        </Container>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
