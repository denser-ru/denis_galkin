import { useTranslation } from 'react-i18next';
// import { Bitcoin, Ethereum, Litecoin } from 'crypto-icons';

function Tokens() {
  const { t } = useTranslation();

  return (
    <div className="tokens">
      <div className="container">
        <h2>{t('tokens.tokensPage')}</h2>
        <p>{t('tokens.tokensDescription')}</p>
        <div className="row">
          <div className="col-md-4">
            <div className="token-card">
              {/* <Bitcoin size={64} /> */}
              <h3>Bitcoin</h3>
              <p>{t('tokens.btcDescription')}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="token-card">
              {/* <Ethereum size={64} /> */}
              <h3>Ethereum</h3>
              <p>{t('tokens.ethDescription')}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="token-card">
              {/* <Litecoin size={64} /> */}
              <h3>Litecoin</h3>
              <p>{t('tokens.ltcDescription')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokens;
