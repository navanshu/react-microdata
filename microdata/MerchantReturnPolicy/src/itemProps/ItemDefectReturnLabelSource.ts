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
   itemProp: 'itemDefectReturnLabelSource',
   itemScope: true,
   itemType: 'https://schema.org/ReturnLabelSourceEnumeration',
   ...props
  },
  children
 );
};

const ItemDefectReturnLabelSource: Type & {
 ReturnLabelSourceEnumeration: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'itemDefectReturnLabelSource',
   ...props
  },
  children
 );
};

ItemDefectReturnLabelSource.ReturnLabelSourceEnumeration =
 ReturnLabelSourceEnumerationType;

export { ItemDefectReturnLabelSource };
