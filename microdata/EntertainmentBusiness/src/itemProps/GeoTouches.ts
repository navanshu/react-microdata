import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const GeoTouches: Type & {
 Place: Type;
 GeospatialGeometry: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'geoTouches',
   ...props
  },
  children
 );
};

GeoTouches.Place = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'geoTouches',
   itemScope: true,
   itemType: 'https://schema.org/Place',
   ...props
  },
  children
 );
};

GeoTouches.GeospatialGeometry = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'geoTouches',
   itemScope: true,
   itemType: 'https://schema.org/GeospatialGeometry',
   ...props
  },
  children
 );
};

export { GeoTouches };
