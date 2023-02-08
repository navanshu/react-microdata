import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalEvidenceLevelType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'evidenceLevel',
   itemScope: true,
   itemType: 'https://schema.org/MedicalEvidenceLevel',
   ...props
  },
  children
 );
};

const EvidenceLevel: Type & { MedicalEvidenceLevel: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'evidenceLevel',
   ...props
  },
  children
 );
};

EvidenceLevel.MedicalEvidenceLevel = MedicalEvidenceLevelType;

export { EvidenceLevel };
