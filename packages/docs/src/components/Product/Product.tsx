import React from 'react';
import {
 Product,
 Mpn,
 Name,
 Image,
 Description,
 Offers,
 Review,
 Sku,
 Brand
} from '@react-microdata/product';
import {
 Url,
 Availability,
 PriceCurrency,
 ItemCondition,
 Price,
 PriceValidUntil,
 AggregateRating
} from '@react-microdata/offer';

import {
 ReviewCount,
 RatingValue,
 BestRating
} from '@react-microdata/aggregate-rating';
import {
 Author,
 Name as AuthorName,
 ReviewRating
} from '@react-microdata/review';
import { Name as BrandName } from '@react-microdata/brand';

const ProductComponent = () => {
 return (
  <Product>
   <Mpn as={'meta'} content="925872" />
   <Name as={'meta'} content="Executive Anvil" />
   <Image as={'link'} href="https://example.com/photos/16x9/photo.jpg" />
   <Image as={'link'} href="https://example.com/photos/4x3/photo.jpg" />
   <Image as={'link'} href="https://example.com/photos/1x1/photo.jpg" />
   <Description
    as={'meta'}
    content="Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height."
   />
   <Offers.Offer>
    <Url as={'meta'} href="https://example.com/anvil" />
    <Availability as={'meta'} content="https://schema.org/InStock" />
    <PriceCurrency as={'meta'} content="USD" />
    <ItemCondition as={'meta'} content="https://schema.org/UsedCondition" />
    <Price as={'meta'} content="119.99" />
    <PriceValidUntil as={'meta'} content="2020-11-20" />
   </Offers.Offer>
   <AggregateRating>
    <ReviewCount as={'meta'} content="89" />
    <RatingValue as={'meta'} content="4.4" />
   </AggregateRating>
   <Review>
    <Author>
     <AuthorName as={'meta'} content="Fred Benson" />
    </Author>
    <ReviewRating.Rating>
     <RatingValue as={'meta'} content="4" />
     <BestRating as={'meta'} content="5" />
    </ReviewRating.Rating>
   </Review>
   <Sku as={'meta'} content="0446310786" />
   <Brand>
    <BrandName as={'meta'} content="ACME" />
   </Brand>
  </Product>
 );
};

export default ProductComponent;
