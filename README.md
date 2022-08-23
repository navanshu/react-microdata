# react-microdata

This repo provides 895 [^1] [schema.org types](https://schema.org/docs/full.html) as react wrappers for the [microdata](<https://en.wikipedia.org/wiki/Microdata_(HTML)>) format.
Wrappers are auto generated based on the latest [schema.org](https://schema.org/) [jsonld](https://schema.org/version/latest/schemaorg-all-https.jsonld) schema.

[^1]: "DownloadAction" and "DataDownload" are not available. NPM does not allow packages which have the word "download" in its name.

## Example

### Product
Product schema taken from the [google example](https://developers.google.com/search/docs/advanced/structured-data/product#examples).
#### HTML
```html
  <div>
    <div itemtype="https://schema.org/Product" itemscope>
      <meta itemprop="mpn" content="925872" />
      <meta itemprop="name" content="Executive Anvil" />
      <link itemprop="image" href="https://example.com/photos/16x9/photo.jpg" />
      <link itemprop="image" href="https://example.com/photos/4x3/photo.jpg" />
      <link itemprop="image" href="https://example.com/photos/1x1/photo.jpg" />
      <meta itemprop="description" content="Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height." />
      <div itemprop="offers" itemtype="https://schema.org/Offer" itemscope>
        <link itemprop="url" href="https://example.com/anvil" />
        <meta itemprop="availability" content="https://schema.org/InStock" />
        <meta itemprop="priceCurrency" content="USD" />
        <meta itemprop="itemCondition" content="https://schema.org/UsedCondition" />
        <meta itemprop="price" content="119.99" />
        <meta itemprop="priceValidUntil" content="2020-11-20" />
      </div>
      <div itemprop="aggregateRating" itemtype="https://schema.org/AggregateRating" itemscope>
        <meta itemprop="reviewCount" content="89" />
        <meta itemprop="ratingValue" content="4.4" />
      </div>
      <div itemprop="review" itemtype="https://schema.org/Review" itemscope>
        <div itemprop="author" itemtype="https://schema.org/Person" itemscope>
          <meta itemprop="name" content="Fred Benson" />
        </div>
        <div itemprop="reviewRating" itemtype="https://schema.org/Rating" itemscope>
          <meta itemprop="ratingValue" content="4" />
          <meta itemprop="bestRating" content="5" />
        </div>
      </div>
      <meta itemprop="sku" content="0446310786" />
      <div itemprop="brand" itemtype="https://schema.org/Brand" itemscope>
        <meta itemprop="name" content="ACME" />
      </div>
    </div>
  </div>
```
the equivalent translation to jsx is
#### JSX
```jsx
import {
  Product, // The type has the same name as the package.
  Mpn, // Type props can be imported from the same package.
  Name,
  Image,
  Description,
  Offers,
  Review,
  Sku,
  Brand,
} from "@react-microdata/product";

import {
  Url,
  Availability,
  PriceCurrency,
  ItemCondition,
  Price,
  PriceValidUntil,
  AggregateRating,
} from "@react-microdata/offer";

import {
  ReviewCount,
  RatingValue,
  BestRating,
} from "@react-microdata/aggregate-rating";

import {
  Author,
  Name as AuthorName,
  ReviewRating,
} from "@react-microdata/review";

import { Name as BrandName } from "@react-microdata/brand";

const ProductComponent = () => {
  return (
    <Product>
      {/* 
        The "as" props can be any HTML tag. If no tag is pased,
        "div" is the default. 
      */}
      <Mpn as={"meta"} content="925872" />
      <Name as={"meta"} content="Executive Anvil" />
      {/*
        Although the "image" property on the "Product" type
        expects 2 types "URL" and "ImageObject", the itemprop="image" is still a 
        valid schema.
      */}
      <Image as={"link"} href="https://example.com/photos/16x9/photo.jpg" />
      <Image as={"link"} href="https://example.com/photos/4x3/photo.jpg" />
      <Image as={"link"} href="https://example.com/photos/1x1/photo.jpg" />
      <Description
        as={"meta"}
        content="Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height."
      />
      <Offers.Offer>
        {/* 
          The property "offers" on the "Product" type has two expected types:
          "Offer" as "Demand" and can be accesed as a static property though
          the .(dot) syntax.
        */}
        <Url as={"meta"} href="https://example.com/anvil" />
        <Availability as={"meta"} content="https://schema.org/InStock" />
        <PriceCurrency as={"meta"} content="USD" />
        <ItemCondition as={"meta"} content="https://schema.org/UsedCondition" />
        <Price as={"meta"} content="119.99" />
        <PriceValidUntil as={"meta"} content="2020-11-20" />
      </Offers.Offer>
      <AggregateRating>
        <ReviewCount as={"meta"} content="89" />
        <RatingValue as={"meta"} content="4.4" />
      </AggregateRating>
      <Review>
        <Author>
          <AuthorName as={"meta"} content="Fred Benson" />
        </Author>
        <ReviewRating.Rating>
          <RatingValue as={"meta"} content="4" />
          <BestRating as={"meta"} content="5" />
        </ReviewRating.Rating>
      </Review>
      <Sku as={"meta"} content="0446310786" />
      <Brand>
        <BrandName as={"meta"} content="ACME" />
      </Brand>
    </Product>
  );
};
```
