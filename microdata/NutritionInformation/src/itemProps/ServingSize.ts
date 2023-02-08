import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'servingSize',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ServingSize: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'servingSize',
   ...props
  },
  children
 );
};

ServingSize.Text = TextType;

export { ServingSize };
