import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const GeoCoordinatesType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'geoMidpoint',
   itemScope: true,
   itemType: 'https://schema.org/GeoCoordinates',
   ...props
  },
  children
 );
};

const GeoMidpoint: Type & { GeoCoordinates: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'geoMidpoint',
   ...props
  },
  children
 );
};

GeoMidpoint.GeoCoordinates = GeoCoordinatesType;

export { GeoMidpoint };
