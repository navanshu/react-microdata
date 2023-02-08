import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'programName',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ProgramName: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'programName',
   ...props
  },
  children
 );
};

ProgramName.Text = TextType;

export { ProgramName };
