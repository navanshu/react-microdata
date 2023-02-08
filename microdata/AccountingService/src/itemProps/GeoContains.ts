import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const GeoContains: Type & {
 Place: Type;
 GeospatialGeometry: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'geoContains',
   ...props
  },
  children
 );
};

GeoContains.Place = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'geoContains',
   itemScope: true,
   itemType: 'https://schema.org/Place',
   ...props
  },
  children
 );
};

GeoContains.GeospatialGeometry = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'geoContains',
   itemScope: true,
   itemType: 'https://schema.org/GeospatialGeometry',
   ...props
  },
  children
 );
};

export { GeoContains };
