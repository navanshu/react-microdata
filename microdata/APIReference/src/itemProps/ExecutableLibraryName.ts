import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'executableLibraryName',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ExecutableLibraryName: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'executableLibraryName',
   ...props
  },
  children
 );
};

ExecutableLibraryName.Text = TextType;

export { ExecutableLibraryName };
