import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AdministrativeAreaType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'applicantLocationRequirements',
   itemScope: true,
   itemType: 'https://schema.org/AdministrativeArea',
   ...props
  },
  children
 );
};

const ApplicantLocationRequirements: Type & { AdministrativeArea: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'applicantLocationRequirements',
   ...props
  },
  children
 );
};

ApplicantLocationRequirements.AdministrativeArea = AdministrativeAreaType;

export { ApplicantLocationRequirements };
