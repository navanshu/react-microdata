import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'clinicalPharmacology',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ClinicalPharmacology: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'clinicalPharmacology',
   ...props
  },
  children
 );
};

ClinicalPharmacology.Text = TextType;

export { ClinicalPharmacology };
