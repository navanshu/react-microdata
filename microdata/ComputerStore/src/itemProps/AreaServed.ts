import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AreaServed: Type & {
 AdministrativeArea: Type;
 GeoShape: Type;
 Place: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'areaServed',
   ...props
  },
  children
 );
};

AreaServed.AdministrativeArea = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'areaServed',
   itemScope: true,
   itemType: 'https://schema.org/AdministrativeArea',
   ...props
  },
  children
 );
};

AreaServed.GeoShape = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'areaServed',
   itemScope: true,
   itemType: 'https://schema.org/GeoShape',
   ...props
  },
  children
 );
};

AreaServed.Place = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'areaServed',
   itemScope: true,
   itemType: 'https://schema.org/Place',
   ...props
  },
  children
 );
};

export { AreaServed };
