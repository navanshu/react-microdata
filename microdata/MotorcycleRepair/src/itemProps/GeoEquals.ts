import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const GeoEquals: Type & {
 Place: Type;
 GeospatialGeometry: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'geoEquals',
   ...props
  },
  children
 );
};

GeoEquals.Place = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'geoEquals',
   itemScope: true,
   itemType: 'https://schema.org/Place',
   ...props
  },
  children
 );
};

GeoEquals.GeospatialGeometry = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'geoEquals',
   itemScope: true,
   itemType: 'https://schema.org/GeospatialGeometry',
   ...props
  },
  children
 );
};

export { GeoEquals };
