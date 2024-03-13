import { FC } from 'react';

import CertificateAdding from '../../components/CertificateAdding';
import { Certificate } from '../../types/types';
import './Home.scss';

const handleCertificateAdded = (cert: Certificate) => {
  console.log('Додано сертификат:', cert);
};

const Home: FC = () => {
  return (
    <main>
      <div className="home">
        <div className="home-wrap">
          <div className="home__adding">
            <button className="general-btn home__adding-btn">Додати</button>
            <p className="home__adding-text--empty">
              Немає жодного сертифікату
            </p>
          </div>
          <div>
            <CertificateAdding onCertificateAdded={handleCertificateAdded} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
