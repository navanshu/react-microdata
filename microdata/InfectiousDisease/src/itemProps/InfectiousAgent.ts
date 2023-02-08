import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'infectiousAgent',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const InfectiousAgent: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'infectiousAgent',
   ...props
  },
  children
 );
};

InfectiousAgent.Text = TextType;

export { InfectiousAgent };
