import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'alignmentType',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const AlignmentType: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'alignmentType',
   ...props
  },
  children
 );
};

AlignmentType.Text = TextType;

export { AlignmentType };
