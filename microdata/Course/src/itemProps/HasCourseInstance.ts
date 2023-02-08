import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const CourseInstanceType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasCourseInstance',
   itemScope: true,
   itemType: 'https://schema.org/CourseInstance',
   ...props
  },
  children
 );
};

const HasCourseInstance: Type & { CourseInstance: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hasCourseInstance',
   ...props
  },
  children
 );
};

HasCourseInstance.CourseInstance = CourseInstanceType;

export { HasCourseInstance };
