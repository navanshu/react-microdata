import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TouristAttractionType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'includesAttraction',
   itemScope: true,
   itemType: 'https://schema.org/TouristAttraction',
   ...props
  },
  children
 );
};

const IncludesAttraction: Type & { TouristAttraction: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'includesAttraction',
   ...props
  },
  children
 );
};

IncludesAttraction.TouristAttraction = TouristAttractionType;

export { IncludesAttraction };
