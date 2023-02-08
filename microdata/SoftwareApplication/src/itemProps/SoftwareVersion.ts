import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'softwareVersion',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const SoftwareVersion: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'softwareVersion',
   ...props
  },
  children
 );
};

SoftwareVersion.Text = TextType;

export { SoftwareVersion };
