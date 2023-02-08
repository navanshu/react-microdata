import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ReturnPolicyCountry: Type & {
 Country: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'returnPolicyCountry',
   ...props
  },
  children
 );
};

ReturnPolicyCountry.Country = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'returnPolicyCountry',
   itemScope: true,
   itemType: 'https://schema.org/Country',
   ...props
  },
  children
 );
};

export { ReturnPolicyCountry };
