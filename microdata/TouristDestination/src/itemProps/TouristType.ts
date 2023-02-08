import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TouristType: Type & {
 Audience: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'touristType',
   ...props
  },
  children
 );
};

TouristType.Audience = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'touristType',
   itemScope: true,
   itemType: 'https://schema.org/Audience',
   ...props
  },
  children
 );
};

export { TouristType };
