import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const HealthAspectEnumerationType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hasHealthAspect',
   itemScope: true,
   itemType: 'https://schema.org/HealthAspectEnumeration',
   ...props
  },
  children
 );
};

const HasHealthAspect: Type & { HealthAspectEnumeration: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hasHealthAspect',
   ...props
  },
  children
 );
};

HasHealthAspect.HealthAspectEnumeration = HealthAspectEnumerationType;

export { HasHealthAspect };
