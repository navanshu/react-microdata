import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ClaimType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'interpretedAsClaim',
   itemScope: true,
   itemType: 'https://schema.org/Claim',
   ...props
  },
  children
 );
};

const InterpretedAsClaim: Type & { Claim: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'interpretedAsClaim',
   ...props
  },
  children
 );
};

InterpretedAsClaim.Claim = ClaimType;

export { InterpretedAsClaim };
