import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const GeoWithin: Type & {
 Place: Type;
 GeospatialGeometry: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'geoWithin',
   ...props
  },
  children
 );
};

GeoWithin.Place = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'geoWithin',
   itemScope: true,
   itemType: 'https://schema.org/Place',
   ...props
  },
  children
 );
};

GeoWithin.GeospatialGeometry = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'geoWithin',
   itemScope: true,
   itemType: 'https://schema.org/GeospatialGeometry',
   ...props
  },
  children
 );
};

export { GeoWithin };
