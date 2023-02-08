import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'breastfeedingWarning',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const BreastfeedingWarning: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'breastfeedingWarning',
   ...props
  },
  children
 );
};

BreastfeedingWarning.Text = TextType;

export { BreastfeedingWarning };
