import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'risks',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Risks: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'risks',
   ...props
  },
  children
 );
};

Risks.Text = TextType;

export { Risks };
