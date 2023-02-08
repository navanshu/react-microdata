import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const OccupationType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasOccupation',
   itemScope: true,
   itemType: 'https://schema.org/Occupation',
   ...props
  },
  children
 );
};

const HasOccupation: Type & { Occupation: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hasOccupation',
   ...props
  },
  children
 );
};

HasOccupation.Occupation = OccupationType;

export { HasOccupation };
