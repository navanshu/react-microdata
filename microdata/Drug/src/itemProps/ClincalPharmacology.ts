import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'clincalPharmacology',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ClincalPharmacology: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'clincalPharmacology',
   ...props
  },
  children
 );
};

ClincalPharmacology.Text = TextType;

export { ClincalPharmacology };
