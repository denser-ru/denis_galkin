import React from 'react';
import { useTranslation } from 'react-i18next';

function Hobbies() {
    const { t } = useTranslation();

    return (
        <div className="hobbies">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3>{t('hobbies.title')}</h3>
                            </div>
                            <div className="card-body">
                                <p>{t('hobbies.description')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hobbies;
