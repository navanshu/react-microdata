import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'recipeCategory',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const RecipeCategory: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'recipeCategory',
   ...props
  },
  children
 );
};

RecipeCategory.Text = TextType;

export { RecipeCategory };
