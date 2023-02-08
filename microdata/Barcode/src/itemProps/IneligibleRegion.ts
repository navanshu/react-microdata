import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const IneligibleRegion: Type & {
 Place: Type;
 GeoShape: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'ineligibleRegion',
   ...props
  },
  children
 );
};

IneligibleRegion.Place = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'ineligibleRegion',
   itemScope: true,
   itemType: 'https://schema.org/Place',
   ...props
  },
  children
 );
};

IneligibleRegion.GeoShape = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'ineligibleRegion',
   itemScope: true,
   itemType: 'https://schema.org/GeoShape',
   ...props
  },
  children
 );
};

export { IneligibleRegion };
