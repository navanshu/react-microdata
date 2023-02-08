import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ExifData: Type & {
 PropertyValue: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'exifData',
   ...props
  },
  children
 );
};

ExifData.PropertyValue = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'exifData',
   itemScope: true,
   itemType: 'https://schema.org/PropertyValue',
   ...props
  },
  children
 );
};

export { ExifData };
