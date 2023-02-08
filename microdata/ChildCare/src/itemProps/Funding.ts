import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const GrantType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'funding',
   itemScope: true,
   itemType: 'https://schema.org/Grant',
   ...props
  },
  children
 );
};

const Funding: Type & { Grant: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'funding',
   ...props
  },
  children
 );
};

Funding.Grant = GrantType;

export { Funding };
