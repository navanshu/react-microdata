import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const SoftwareApplicationType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'softwareAddOn',
   itemScope: true,
   itemType: 'https://schema.org/SoftwareApplication',
   ...props
  },
  children
 );
};

const SoftwareAddOn: Type & { SoftwareApplication: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'softwareAddOn',
   ...props
  },
  children
 );
};

SoftwareAddOn.SoftwareApplication = SoftwareApplicationType;

export { SoftwareAddOn };
