import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const GovernmentServiceType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'governmentBenefitsInfo',
   itemScope: true,
   itemType: 'https://schema.org/GovernmentService',
   ...props
  },
  children
 );
};

const GovernmentBenefitsInfo: Type & { GovernmentService: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'governmentBenefitsInfo',
   ...props
  },
  children
 );
};

GovernmentBenefitsInfo.GovernmentService = GovernmentServiceType;

export { GovernmentBenefitsInfo };
