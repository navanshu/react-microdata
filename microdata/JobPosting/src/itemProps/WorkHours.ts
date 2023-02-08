import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'workHours',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const WorkHours: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'workHours',
   ...props
  },
  children
 );
};

WorkHours.Text = TextType;

export { WorkHours };
