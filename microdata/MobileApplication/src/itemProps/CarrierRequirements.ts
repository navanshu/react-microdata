import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'carrierRequirements',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const CarrierRequirements: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'carrierRequirements',
   ...props
  },
  children
 );
};

CarrierRequirements.Text = TextType;

export { CarrierRequirements };
