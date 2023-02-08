import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const CourseType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasCourse',
   itemScope: true,
   itemType: 'https://schema.org/Course',
   ...props
  },
  children
 );
};

const HasCourse: Type & { Course: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hasCourse',
   ...props
  },
  children
 );
};

HasCourse.Course = CourseType;

export { HasCourse };
