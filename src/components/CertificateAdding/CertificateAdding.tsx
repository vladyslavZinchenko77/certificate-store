import { FC, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import * as asn1js from 'asn1js';
import { Certificate } from '../../types/types';

import './CertificateAdding.scss';

interface Props {
  onCertificateAdded: (cert: Certificate) => void;
}

const CertificateAdding: FC<Props> = ({ onCertificateAdded }) => {
  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) {
        return;
      }

      const file = acceptedFiles[0];
      const fileData = await file.arrayBuffer();
      const asn1Data = asn1js.fromBER(fileData);
      const certificate = parseCertificate(asn1Data.result);

      if (certificate) {
        onCertificateAdded(certificate);
      }
    },
    [onCertificateAdded]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="drop">
      <input {...getInputProps()} />
      <p className="drop_text">
        Перетягніть файл сертифікату сюди <br /> або
      </p>
      <button className="general-btn drop_btn">
        Виберіть через стандартний діалог
      </button>
    </div>
  );
};

const parseCertificate = (asn1Data: any): Certificate | undefined => {
  return undefined;
};

export default CertificateAdding;
