import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AdministrativeAreaType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'studyLocation',
   itemScope: true,
   itemType: 'https://schema.org/AdministrativeArea',
   ...props
  },
  children
 );
};

const StudyLocation: Type & { AdministrativeArea: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'studyLocation',
   ...props
  },
  children
 );
};

StudyLocation.AdministrativeArea = AdministrativeAreaType;

export { StudyLocation };
