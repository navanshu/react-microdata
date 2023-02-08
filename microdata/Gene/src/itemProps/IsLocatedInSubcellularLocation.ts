import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const IsLocatedInSubcellularLocation: Type & {
 PropertyValue: Type;
 DefinedTerm: Type;
 URL: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isLocatedInSubcellularLocation',
   ...props
  },
  children
 );
};

IsLocatedInSubcellularLocation.PropertyValue = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'isLocatedInSubcellularLocation',
   itemScope: true,
   itemType: 'https://schema.org/PropertyValue',
   ...props
  },
  children
 );
};

IsLocatedInSubcellularLocation.DefinedTerm = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'isLocatedInSubcellularLocation',
   itemScope: true,
   itemType: 'https://schema.org/DefinedTerm',
   ...props
  },
  children
 );
};

IsLocatedInSubcellularLocation.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isLocatedInSubcellularLocation',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

export { IsLocatedInSubcellularLocation };
