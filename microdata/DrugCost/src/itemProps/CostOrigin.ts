import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'costOrigin',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const CostOrigin: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'costOrigin',
   ...props
  },
  children
 );
};

CostOrigin.Text = TextType;

export { CostOrigin };
