import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const NonprofitTypeType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'nonprofitStatus',
   itemScope: true,
   itemType: 'https://schema.org/NonprofitType',
   ...props
  },
  children
 );
};

const NonprofitStatus: Type & { NonprofitType: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'nonprofitStatus',
   ...props
  },
  children
 );
};

NonprofitStatus.NonprofitType = NonprofitTypeType;

export { NonprofitStatus };
