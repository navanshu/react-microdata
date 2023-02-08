import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'frequency',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Frequency: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'frequency',
   ...props
  },
  children
 );
};

Frequency.Text = TextType;

export { Frequency };
