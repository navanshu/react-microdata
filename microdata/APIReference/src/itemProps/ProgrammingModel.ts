import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'programmingModel',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ProgrammingModel: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'programmingModel',
   ...props
  },
  children
 );
};

ProgrammingModel.Text = TextType;

export { ProgrammingModel };
