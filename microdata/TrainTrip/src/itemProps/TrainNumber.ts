import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'trainNumber',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const TrainNumber: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'trainNumber',
   ...props
  },
  children
 );
};

TrainNumber.Text = TextType;

export { TrainNumber };
