import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'pregnancyWarning',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const PregnancyWarning: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'pregnancyWarning',
   ...props
  },
  children
 );
};

PregnancyWarning.Text = TextType;

export { PregnancyWarning };
