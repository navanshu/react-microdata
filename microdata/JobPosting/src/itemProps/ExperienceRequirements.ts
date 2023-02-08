import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ExperienceRequirements: Type & {
 OccupationalExperienceRequirements: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'experienceRequirements',
   ...props
  },
  children
 );
};

ExperienceRequirements.OccupationalExperienceRequirements = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'experienceRequirements',
   itemScope: true,
   itemType: 'https://schema.org/OccupationalExperienceRequirements',
   ...props
  },
  children
 );
};

export { ExperienceRequirements };
