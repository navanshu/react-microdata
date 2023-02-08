import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PhysicalExamType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'identifyingExam',
   itemScope: true,
   itemType: 'https://schema.org/PhysicalExam',
   ...props
  },
  children
 );
};

const IdentifyingExam: Type & { PhysicalExam: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'identifyingExam',
   ...props
  },
  children
 );
};

IdentifyingExam.PhysicalExam = PhysicalExamType;

export { IdentifyingExam };
