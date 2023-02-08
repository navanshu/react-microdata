import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Geo: Type & {
 GeoCoordinates: Type;
 GeoShape: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'geo',
   ...props
  },
  children
 );
};

Geo.GeoCoordinates = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'geo',
   itemScope: true,
   itemType: 'https://schema.org/GeoCoordinates',
   ...props
  },
  children
 );
};

Geo.GeoShape = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'geo',
   itemScope: true,
   itemType: 'https://schema.org/GeoShape',
   ...props
  },
  children
 );
};

export { Geo };
