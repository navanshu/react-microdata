import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalStudyType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'study',
   itemScope: true,
   itemType: 'https://schema.org/MedicalStudy',
   ...props
  },
  children
 );
};

const Study: Type & { MedicalStudy: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'study',
   ...props
  },
  children
 );
};

Study.MedicalStudy = MedicalStudyType;

export { Study };
