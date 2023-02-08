import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'courseCode',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const CourseCode: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'courseCode',
   ...props
  },
  children
 );
};

CourseCode.Text = TextType;

export { CourseCode };
