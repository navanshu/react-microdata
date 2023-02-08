import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'trainName',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const TrainName: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'trainName',
   ...props
  },
  children
 );
};

TrainName.Text = TextType;

export { TrainName };
