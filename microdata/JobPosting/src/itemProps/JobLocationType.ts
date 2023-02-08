import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'jobLocationType',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const JobLocationType: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'jobLocationType',
   ...props
  },
  children
 );
};

JobLocationType.Text = TextType;

export { JobLocationType };
