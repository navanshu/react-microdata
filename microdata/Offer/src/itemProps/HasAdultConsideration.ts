import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AdultOrientedEnumerationType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hasAdultConsideration',
   itemScope: true,
   itemType: 'https://schema.org/AdultOrientedEnumeration',
   ...props
  },
  children
 );
};

const HasAdultConsideration: Type & { AdultOrientedEnumeration: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hasAdultConsideration',
   ...props
  },
  children
 );
};

HasAdultConsideration.AdultOrientedEnumeration = AdultOrientedEnumerationType;

export { HasAdultConsideration };
