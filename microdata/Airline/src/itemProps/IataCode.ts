import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'iataCode',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const IataCode: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'iataCode',
   ...props
  },
  children
 );
};

IataCode.Text = TextType;

export { IataCode };
