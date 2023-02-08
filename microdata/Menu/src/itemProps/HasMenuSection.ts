import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MenuSectionType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasMenuSection',
   itemScope: true,
   itemType: 'https://schema.org/MenuSection',
   ...props
  },
  children
 );
};

const HasMenuSection: Type & { MenuSection: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hasMenuSection',
   ...props
  },
  children
 );
};

HasMenuSection.MenuSection = MenuSectionType;

export { HasMenuSection };
