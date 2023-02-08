import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MapCategoryTypeType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'mapType',
   itemScope: true,
   itemType: 'https://schema.org/MapCategoryType',
   ...props
  },
  children
 );
};

const MapType: Type & { MapCategoryType: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'mapType',
   ...props
  },
  children
 );
};

MapType.MapCategoryType = MapCategoryTypeType;

export { MapType };
