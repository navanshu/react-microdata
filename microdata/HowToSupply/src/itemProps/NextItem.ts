import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ListItemType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'nextItem',
   itemScope: true,
   itemType: 'https://schema.org/ListItem',
   ...props
  },
  children
 );
};

const NextItem: Type & { ListItem: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'nextItem',
   ...props
  },
  children
 );
};

NextItem.ListItem = ListItemType;

export { NextItem };
