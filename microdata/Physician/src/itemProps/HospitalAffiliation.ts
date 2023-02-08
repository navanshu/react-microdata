import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const HospitalType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hospitalAffiliation',
   itemScope: true,
   itemType: 'https://schema.org/Hospital',
   ...props
  },
  children
 );
};

const HospitalAffiliation: Type & { Hospital: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hospitalAffiliation',
   ...props
  },
  children
 );
};

HospitalAffiliation.Hospital = HospitalType;

export { HospitalAffiliation };
