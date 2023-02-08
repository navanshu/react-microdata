import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ServiceArea: Type & {
 GeoShape: Type;
 AdministrativeArea: Type;
 Place: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'serviceArea',
   ...props
  },
  children
 );
};

ServiceArea.GeoShape = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'serviceArea',
   itemScope: true,
   itemType: 'https://schema.org/GeoShape',
   ...props
  },
  children
 );
};

ServiceArea.AdministrativeArea = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'serviceArea',
   itemScope: true,
   itemType: 'https://schema.org/AdministrativeArea',
   ...props
  },
  children
 );
};

ServiceArea.Place = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'serviceArea',
   itemScope: true,
   itemType: 'https://schema.org/Place',
   ...props
  },
  children
 );
};

export { ServiceArea };
