import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const CoursePrerequisites: Type & {
 AlignmentObject: Type;
 Course: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'coursePrerequisites',
   ...props
  },
  children
 );
};

CoursePrerequisites.AlignmentObject = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'coursePrerequisites',
   itemScope: true,
   itemType: 'https://schema.org/AlignmentObject',
   ...props
  },
  children
 );
};

CoursePrerequisites.Course = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'coursePrerequisites',
   itemScope: true,
   itemType: 'https://schema.org/Course',
   ...props
  },
  children
 );
};

export { CoursePrerequisites };
