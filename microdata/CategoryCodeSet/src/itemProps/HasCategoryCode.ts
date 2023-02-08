import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const CategoryCodeType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasCategoryCode',
   itemScope: true,
   itemType: 'https://schema.org/CategoryCode',
   ...props
  },
  children
 );
};

const HasCategoryCode: Type & { CategoryCode: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hasCategoryCode',
   ...props
  },
  children
 );
};

HasCategoryCode.CategoryCode = CategoryCodeType;

export { HasCategoryCode };
