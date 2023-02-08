import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const SuggestedGender: Type & {
 GenderType: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'suggestedGender',
   ...props
  },
  children
 );
};

SuggestedGender.GenderType = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'suggestedGender',
   itemScope: true,
   itemType: 'https://schema.org/GenderType',
   ...props
  },
  children
 );
};

export { SuggestedGender };
