import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AlignmentObjectType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'educationalAlignment',
   itemScope: true,
   itemType: 'https://schema.org/AlignmentObject',
   ...props
  },
  children
 );
};

const EducationalAlignment: Type & { AlignmentObject: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'educationalAlignment',
   ...props
  },
  children
 );
};

EducationalAlignment.AlignmentObject = AlignmentObjectType;

export { EducationalAlignment };
