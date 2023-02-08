import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DrugPregnancyCategoryType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'pregnancyCategory',
   itemScope: true,
   itemType: 'https://schema.org/DrugPregnancyCategory',
   ...props
  },
  children
 );
};

const PregnancyCategory: Type & { DrugPregnancyCategory: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'pregnancyCategory',
   ...props
  },
  children
 );
};

PregnancyCategory.DrugPregnancyCategory = DrugPregnancyCategoryType;

export { PregnancyCategory };
