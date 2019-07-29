import { HotelEntityApi } from "./hotel-collection.api";
import { HotelEntityVm } from "./hotel-collection.vm";
import { baseApirUrl } from "core";

export const mapFromApiToVm = (apiEntity: HotelEntityApi): HotelEntityVm => ({
  id: apiEntity.id,
  picture: `${baseApirUrl}${apiEntity.thumbNailUrl}`,
  name: apiEntity.name,
  rating: apiEntity.hotelRating  ,
  description: apiEntity.shortDescription,
  address: apiEntity.address1,
});

export const mapFromApiCollectionToVmCollection = (apiCollection: HotelEntityApi[]): HotelEntityVm[] => 
  apiCollection.map(apiEntity => mapFromApiToVm(apiEntity));