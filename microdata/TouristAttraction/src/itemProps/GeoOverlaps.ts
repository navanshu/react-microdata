import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const GeoOverlaps: Type & {
 GeospatialGeometry: Type;
 Place: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'geoOverlaps',
   ...props
  },
  children
 );
};

GeoOverlaps.GeospatialGeometry = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'geoOverlaps',
   itemScope: true,
   itemType: 'https://schema.org/GeospatialGeometry',
   ...props
  },
  children
 );
};

GeoOverlaps.Place = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'geoOverlaps',
   itemScope: true,
   itemType: 'https://schema.org/Place',
   ...props
  },
  children
 );
};

export { GeoOverlaps };
