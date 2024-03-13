import { FC } from 'react';

import { Certificate } from '../../types/types';

interface Props {
  certificate?: Certificate;
}

const CertificateInfo: FC<Props> = ({ certificate }) => {
  return (
    <div>
      <p>Common Name: {certificate?.commonName}</p>
      <p>Issuer CN: {certificate?.issuerName}</p>
      <p>Valid From: {certificate?.validFrom.toLocaleString()}</p>
      <p>Valid To: {certificate?.validTo.toLocaleString()}</p>
    </div>
  );
};

export default CertificateInfo;
