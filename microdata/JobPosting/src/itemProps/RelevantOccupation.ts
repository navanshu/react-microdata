import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const OccupationType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'relevantOccupation',
   itemScope: true,
   itemType: 'https://schema.org/Occupation',
   ...props
  },
  children
 );
};

const RelevantOccupation: Type & { Occupation: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'relevantOccupation',
   ...props
  },
  children
 );
};

RelevantOccupation.Occupation = OccupationType;

export { RelevantOccupation };
