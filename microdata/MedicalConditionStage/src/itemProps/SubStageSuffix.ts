import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'subStageSuffix',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const SubStageSuffix: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'subStageSuffix',
   ...props
  },
  children
 );
};

SubStageSuffix.Text = TextType;

export { SubStageSuffix };
