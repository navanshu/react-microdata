import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ProgramPrerequisites: Type & {
 AlignmentObject: Type;
 Course: Type;
 EducationalOccupationalCredential: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'programPrerequisites',
   ...props
  },
  children
 );
};

ProgramPrerequisites.AlignmentObject = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'programPrerequisites',
   itemScope: true,
   itemType: 'https://schema.org/AlignmentObject',
   ...props
  },
  children
 );
};

ProgramPrerequisites.Course = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'programPrerequisites',
   itemScope: true,
   itemType: 'https://schema.org/Course',
   ...props
  },
  children
 );
};

ProgramPrerequisites.EducationalOccupationalCredential = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'programPrerequisites',
   itemScope: true,
   itemType: 'https://schema.org/EducationalOccupationalCredential',
   ...props
  },
  children
 );
};

export { ProgramPrerequisites };
