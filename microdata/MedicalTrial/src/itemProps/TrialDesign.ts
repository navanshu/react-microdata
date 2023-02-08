import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalTrialDesignType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'trialDesign',
   itemScope: true,
   itemType: 'https://schema.org/MedicalTrialDesign',
   ...props
  },
  children
 );
};

const TrialDesign: Type & { MedicalTrialDesign: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'trialDesign',
   ...props
  },
  children
 );
};

TrialDesign.MedicalTrialDesign = MedicalTrialDesignType;

export { TrialDesign };
