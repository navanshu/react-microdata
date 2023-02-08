import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'arrivalPlatform',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ArrivalPlatform: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'arrivalPlatform',
   ...props
  },
  children
 );
};

ArrivalPlatform.Text = TextType;

export { ArrivalPlatform };
