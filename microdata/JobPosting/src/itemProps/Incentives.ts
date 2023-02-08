import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'incentives',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Incentives: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'incentives',
   ...props
  },
  children
 );
};

Incentives.Text = TextType;

export { Incentives };
