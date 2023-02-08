import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'transitTimeLabel',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const TransitTimeLabel: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'transitTimeLabel',
   ...props
  },
  children
 );
};

TransitTimeLabel.Text = TextType;

export { TransitTimeLabel };
