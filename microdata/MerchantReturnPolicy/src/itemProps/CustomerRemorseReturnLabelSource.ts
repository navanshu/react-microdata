import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ReturnLabelSourceEnumerationType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'customerRemorseReturnLabelSource',
   itemScope: true,
   itemType: 'https://schema.org/ReturnLabelSourceEnumeration',
   ...props
  },
  children
 );
};

const CustomerRemorseReturnLabelSource: Type & {
 ReturnLabelSourceEnumeration: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'customerRemorseReturnLabelSource',
   ...props
  },
  children
 );
};

CustomerRemorseReturnLabelSource.ReturnLabelSourceEnumeration =
 ReturnLabelSourceEnumerationType;

export { CustomerRemorseReturnLabelSource };
