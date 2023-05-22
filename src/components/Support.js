import React from 'react';
import { useTranslation } from 'react-i18next';

function Support() {
    const { t } = useTranslation();

    return (
        <div className="support">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3>{t('support.title')}</h3>
                            </div>
                            <div className="card-body">
                                <p>{t('support.DearCustomer')}</p>
                                <p>{t('support.HigherPower')}</p>
                                <p>{t('support.Patience')}</p>
                                <p>{t('support.CatPicture')}</p>
                                <img src="https://placekitten.com/200/300" alt={t('support.CatAltText')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Support;
