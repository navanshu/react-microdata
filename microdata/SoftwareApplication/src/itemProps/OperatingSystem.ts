import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'operatingSystem',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const OperatingSystem: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'operatingSystem',
   ...props
  },
  children
 );
};

OperatingSystem.Text = TextType;

export { OperatingSystem };
