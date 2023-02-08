import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'incentiveCompensation',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const IncentiveCompensation: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'incentiveCompensation',
   ...props
  },
  children
 );
};

IncentiveCompensation.Text = TextType;

export { IncentiveCompensation };
