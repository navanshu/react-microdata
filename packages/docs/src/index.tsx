import React from "react";
import ReactDOM from "react-dom/client";

//@ts-ignore
import { Name, Person, Address } from "schema/Person";

//@ts-ignore
import {AddressLocality} from 'schema/PostalAddress'

//@ts-ignore
import {Winery, ServesCuisine} from 'schema/Winery';

//@ts-ignore
import { Restaurant, StarRating } from 'schema/Restaurant';

import { RatingValue } from "schema/Rating";


const Index = () => {
  return (
    <div>

      <Winery>
        <ServesCuisine>Greek</ServesCuisine>
        <StarRating>
          <RatingValue content={"4"}>****</RatingValue>
        </StarRating>
      </Winery>
      <Person>
        <Name>Stan</Name>
        <Address.PostalAddress>
          <AddressLocality>Address</AddressLocality>
        </Address.PostalAddress>
      </Person>
      <Restaurant>
        <StarRating>
            <RatingValue content={"4"}>****</RatingValue>
        </StarRating>
      </Restaurant>
    </div>
  );
};
ReactDOM
  //@ts-ignore
  .createRoot(document.getElementById("app"))
  .render(<Index />);
