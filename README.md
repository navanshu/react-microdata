# react-microdata

This repo provides 200+ react wrappers for the [microdata](<https://en.wikipedia.org/wiki/Microdata_(HTML)>) format.
Wrappers are auto generated based on the latest [schema.org](https://schema.org/) [jsonld](https://schema.org/version/latest/schemaorg-all-https.jsonld) schema.

## Example

This HTML:

```html
<div itemscope itemtype="https://schema.org/Person">
  <span itemprop="name">Jane Doe</span>

  <img src="janedoe.jpg" itemprop="image" alt="Photo of Jane Doe" />

  <span itemprop="jobTitle">Professor</span>

  <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
    <span itemprop="streetAddress">
      20341 Whitworth Institute 405 N. Whitworth
    </span>

    <span itemprop="addressLocality">Seattle</span>,
    <span itemprop="addressRegion">WA</span>
    <span itemprop="postalCode">98052</span>
  </div>

  <span itemprop="telephone">(425) 123-4567</span>

  <a href="mailto:jane-doe@xyz.edu" itemprop="email"> jane-doe@xyz.edu </a>

  Jane's home page:
  <a href="http://www.janedoe.com" itemprop="url"> janedoe.com </a>

  Graduate students:
  <a href="http://www.xyz.edu/students/alicejones.html" itemprop="colleague">
    Alice Jones
  </a>

  <a href="http://www.xyz.edu/students/bobsmith.html" itemprop="colleague">
    Bob Smith
  </a>
</div>
```

can be replicated with react-microdata:

```jsx
import {
  StreetAddress,
  AddressLocality,
  AddressRegion,
  PostalCode,
} from "@react-microdata/postal-address";
import {
  Name,
  Person,
  Image,
  JobTitle,
  Address,
  Telephone,
  Email,
  Url,
  Colleague,
} from "@react-microdata/person";

const Person = () => {
  return (
    <Person>
      <Name as={"span"}>Jane Doe</Name>
      <Image as={"img"} src={"janedoe.jpg"} />
      <JobTitle as={"span"}>Professor</JobTitle>
      <Address.PostalAddress>
        <StreetAddress>
          20341 Whitworth Institute 405 N. Whitworth
        </StreetAddress>

        <AddressLocality>Seattle</AddressLocality>
        <AddressRegion>WA</AddressRegion>
        <PostalCode>98052</PostalCode>
      </Address.PostalAddress>
      <Telephone>(425) 123-4567</Telephone>
      <Email as={"a"} href="mailto:jane-doe@xyz.edu">
        jane-doe@xyz.edu
      </Email>
      Jane's home page:
      <Url as={"a"} href="http://www.janedoe.com">
        janedoe.com
      </Url>
      Graduate students:
      <Colleague as={"a"} href="http://www.xyz.edu/students/alicejones.html">
        Alice Jones
      </Colleague>
      <Colleague as={"a"} href="http://www.xyz.edu/students/bobsmith.html">
        Bob Smith
      </Colleague>
    </Person>
  );
};
```
