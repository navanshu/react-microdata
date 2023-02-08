import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const GeoRadius: Type & {
 Number: Type;
 Distance: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'geoRadius',
   ...props
  },
  children
 );
};

GeoRadius.Number = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'geoRadius',
   itemScope: true,
   itemType: 'https://schema.org/Number',
   ...props
  },
  children
 );
};

GeoRadius.Distance = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'geoRadius',
   itemScope: true,
   itemType: 'https://schema.org/Distance',
   ...props
  },
  children
 );
};

export { GeoRadius };
