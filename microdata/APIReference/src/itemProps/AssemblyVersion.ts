import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'assemblyVersion',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const AssemblyVersion: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'assemblyVersion',
   ...props
  },
  children
 );
};

AssemblyVersion.Text = TextType;

export { AssemblyVersion };
