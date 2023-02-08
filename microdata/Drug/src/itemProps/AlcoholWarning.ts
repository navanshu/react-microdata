import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'alcoholWarning',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const AlcoholWarning: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'alcoholWarning',
   ...props
  },
  children
 );
};

AlcoholWarning.Text = TextType;

export { AlcoholWarning };
