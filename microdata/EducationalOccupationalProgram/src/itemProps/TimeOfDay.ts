import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'timeOfDay',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const TimeOfDay: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'timeOfDay',
   ...props
  },
  children
 );
};

TimeOfDay.Text = TextType;

export { TimeOfDay };
