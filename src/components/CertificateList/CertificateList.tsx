import { FC } from 'react';

import { CertificateList, Certificate } from '../../types/types';

interface Props {
  certificates: CertificateList;
  certificateOnclick: (cert: Certificate) => void;
}

const CertificateList: FC<Props> = ({ certificates, certificateOnclick }) => {
  return (
    <div>
      <ul>
        {certificates.map((cert, index) => {
          return (
            <li key={index} onClick={() => certificateOnclick(cert)}>
              {cert.commonName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CertificateList;
