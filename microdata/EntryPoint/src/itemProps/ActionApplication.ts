import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const SoftwareApplicationType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'actionApplication',
   itemScope: true,
   itemType: 'https://schema.org/SoftwareApplication',
   ...props
  },
  children
 );
};

const ActionApplication: Type & { SoftwareApplication: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'actionApplication',
   ...props
  },
  children
 );
};

ActionApplication.SoftwareApplication = SoftwareApplicationType;

export { ActionApplication };
