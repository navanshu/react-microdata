import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'biomechnicalClass',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const BiomechnicalClass: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'biomechnicalClass',
   ...props
  },
  children
 );
};

BiomechnicalClass.Text = TextType;

export { BiomechnicalClass };
