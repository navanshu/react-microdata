import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalEntityType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'guidelineSubject',
   itemScope: true,
   itemType: 'https://schema.org/MedicalEntity',
   ...props
  },
  children
 );
};

const GuidelineSubject: Type & { MedicalEntity: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'guidelineSubject',
   ...props
  },
  children
 );
};

GuidelineSubject.MedicalEntity = MedicalEntityType;

export { GuidelineSubject };
