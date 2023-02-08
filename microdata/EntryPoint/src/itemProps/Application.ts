import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const SoftwareApplicationType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'application',
   itemScope: true,
   itemType: 'https://schema.org/SoftwareApplication',
   ...props
  },
  children
 );
};

const Application: Type & { SoftwareApplication: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'application',
   ...props
  },
  children
 );
};

Application.SoftwareApplication = SoftwareApplicationType;

export { Application };
