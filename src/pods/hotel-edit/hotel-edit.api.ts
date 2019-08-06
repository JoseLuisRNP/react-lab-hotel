import Axios from "axios";
import { baseApirUrl } from "core";

export interface HotelEntityApi {
  id: string;
  type: string;
  name: string;
  created: Date;
  modified: Date;
  address1: string;
  airportCode: string;
  amenityMask: number;
  city: string;
  confidenceRating: number;
  countryCode: string;
  deepLink: string;
  highRate: number;
  hotelId: number;
  hotelInDestination: boolean;
  hotelRating: number;
  location: {
    latitude: number;
    longitude: number;
  };
  locationDescription: string;
  lowRate: number;
  metadata: {
    path: string;
  };
  postalCode: number;
  propertyCategory: number;
  proximityDistance: number;
  proximityUnit: string;
  rateCurrencyCode: string;
  shortDescription: string;
  stateProvinceCode: string;
  thumbNailUrl: string;
  tripAdvisorRating: number;
  tripAdvisorRatingUrl: string;
}

export interface HotelEntityApiAsVm {
  id: string;
  thunbNailUrl: string;
  name: string;
  shortDescription: string;
  hotelRating: number;
  city: string;
}

const getHotelUri = `${baseApirUrl}/api/hotels/`;
export const getHotelById = (id: string) => {
  const promise = new Promise<HotelEntityApi>((resolve, reject)=>
    Axios.get<HotelEntityApi>(`${getHotelUri}${id}`).then((response) => resolve(response.data)));
    return promise;
}