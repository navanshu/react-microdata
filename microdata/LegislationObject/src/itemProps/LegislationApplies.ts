import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const LegislationType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'legislationApplies',
   itemScope: true,
   itemType: 'https://schema.org/Legislation',
   ...props
  },
  children
 );
};

const LegislationApplies: Type & { Legislation: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'legislationApplies',
   ...props
  },
  children
 );
};

LegislationApplies.Legislation = LegislationType;

export { LegislationApplies };
