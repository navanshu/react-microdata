import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ItemListType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'accessModeSufficient',
   itemScope: true,
   itemType: 'https://schema.org/ItemList',
   ...props
  },
  children
 );
};

const AccessModeSufficient: Type & { ItemList: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'accessModeSufficient',
   ...props
  },
  children
 );
};

AccessModeSufficient.ItemList = ItemListType;

export { AccessModeSufficient };
