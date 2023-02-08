import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const SoftwareApplicationType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'targetProduct',
   itemScope: true,
   itemType: 'https://schema.org/SoftwareApplication',
   ...props
  },
  children
 );
};

const TargetProduct: Type & { SoftwareApplication: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'targetProduct',
   ...props
  },
  children
 );
};

TargetProduct.SoftwareApplication = SoftwareApplicationType;

export { TargetProduct };
