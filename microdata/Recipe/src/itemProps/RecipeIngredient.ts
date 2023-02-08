import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'recipeIngredient',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const RecipeIngredient: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'recipeIngredient',
   ...props
  },
  children
 );
};

RecipeIngredient.Text = TextType;

export { RecipeIngredient };
