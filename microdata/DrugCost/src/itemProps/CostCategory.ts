import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DrugCostCategoryType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'costCategory',
   itemScope: true,
   itemType: 'https://schema.org/DrugCostCategory',
   ...props
  },
  children
 );
};

const CostCategory: Type & { DrugCostCategory: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'costCategory',
   ...props
  },
  children
 );
};

CostCategory.DrugCostCategory = DrugCostCategoryType;

export { CostCategory };
