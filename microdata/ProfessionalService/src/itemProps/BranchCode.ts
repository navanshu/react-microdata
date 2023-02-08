import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'branchCode',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const BranchCode: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'branchCode',
   ...props
  },
  children
 );
};

BranchCode.Text = TextType;

export { BranchCode };
