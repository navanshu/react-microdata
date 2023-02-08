import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BooleanType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'experienceInPlaceOfEducation',
   itemScope: true,
   itemType: 'https://schema.org/Boolean',
   ...props
  },
  children
 );
};

const ExperienceInPlaceOfEducation: Type & { Boolean: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'experienceInPlaceOfEducation',
   ...props
  },
  children
 );
};

ExperienceInPlaceOfEducation.Boolean = BooleanType;

export { ExperienceInPlaceOfEducation };
