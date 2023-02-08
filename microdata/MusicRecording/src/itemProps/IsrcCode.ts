import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'isrcCode',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const IsrcCode: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'isrcCode',
   ...props
  },
  children
 );
};

IsrcCode.Text = TextType;

export { IsrcCode };
