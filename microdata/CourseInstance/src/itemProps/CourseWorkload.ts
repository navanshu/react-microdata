import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'courseWorkload',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const CourseWorkload: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'courseWorkload',
   ...props
  },
  children
 );
};

CourseWorkload.Text = TextType;

export { CourseWorkload };
