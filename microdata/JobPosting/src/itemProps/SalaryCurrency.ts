import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'salaryCurrency',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const SalaryCurrency: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'salaryCurrency',
   ...props
  },
  children
 );
};

SalaryCurrency.Text = TextType;

export { SalaryCurrency };
