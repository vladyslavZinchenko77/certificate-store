import { FC, useState } from 'react';

import CertificateAdding from '../../components/CertificateAdding';
import { Certificate } from '../../types/types';
import './Home.scss';

const handleCertificateAdded = (cert: Certificate) => {
  console.log('Додано сертификат:', cert);
};

const Home: FC = () => {
  const [isCert, setIsCert] = useState<boolean>(false);

  return (
    <main>
      <div className="home">
        <div className="home-wrap">
          <div className="home__adding">
            <button
              onClick={() => setIsCert(!isCert)}
              className="general-btn home__adding-btn"
            >
              {isCert ? 'Назад' : 'Додати'}
            </button>
            {isCert ? (
              ''
            ) : (
              <p className="home__adding-text--empty">
                Немає жодного сертифікату
              </p>
            )}
          </div>
          <div>
            {isCert && (
              <CertificateAdding onCertificateAdded={handleCertificateAdded} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
