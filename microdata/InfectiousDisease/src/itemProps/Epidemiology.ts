import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'epidemiology',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Epidemiology: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'epidemiology',
   ...props
  },
  children
 );
};

Epidemiology.Text = TextType;

export { Epidemiology };
