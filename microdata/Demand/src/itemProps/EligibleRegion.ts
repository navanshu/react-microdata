import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EligibleRegion: Type & {
 GeoShape: Type;
 Place: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'eligibleRegion',
   ...props
  },
  children
 );
};

EligibleRegion.GeoShape = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'eligibleRegion',
   itemScope: true,
   itemType: 'https://schema.org/GeoShape',
   ...props
  },
  children
 );
};

EligibleRegion.Place = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'eligibleRegion',
   itemScope: true,
   itemType: 'https://schema.org/Place',
   ...props
  },
  children
 );
};

export { EligibleRegion };
