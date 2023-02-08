import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'doseUnit',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const DoseUnit: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'doseUnit',
   ...props
  },
  children
 );
};

DoseUnit.Text = TextType;

export { DoseUnit };
