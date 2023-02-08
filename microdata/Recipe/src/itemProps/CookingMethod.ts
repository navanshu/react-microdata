import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'cookingMethod',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const CookingMethod: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'cookingMethod',
   ...props
  },
  children
 );
};

CookingMethod.Text = TextType;

export { CookingMethod };
