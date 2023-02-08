import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const LegislationType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'legislationChanges',
   itemScope: true,
   itemType: 'https://schema.org/Legislation',
   ...props
  },
  children
 );
};

const LegislationChanges: Type & { Legislation: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'legislationChanges',
   ...props
  },
  children
 );
};

LegislationChanges.Legislation = LegislationType;

export { LegislationChanges };
