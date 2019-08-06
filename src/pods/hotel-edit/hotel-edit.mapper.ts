import {HotelEntityVm} from './hotel-edit.vm';
import {HotelEntityApi, HotelEntityApiAsVm} from './hotel-edit.api';
import { baseApirUrl } from 'core';

export const hotelEntityApiToVm = (hotelEntityApi:HotelEntityApi): HotelEntityVm => ({
  id: hotelEntityApi.id,
  picture:`${baseApirUrl}${hotelEntityApi.thumbNailUrl}`,
  name: hotelEntityApi.name,
  description: hotelEntityApi.shortDescription,
  rating: hotelEntityApi.hotelRating,
  city: hotelEntityApi.city
});


export const hotelEntityVmToApi = (hotelEntityVm: HotelEntityVm): HotelEntityApiAsVm => ({
  id: hotelEntityVm.id,
  city: hotelEntityVm.city,
  name: hotelEntityVm.name,
  hotelRating: hotelEntityVm.rating,
  shortDescription: hotelEntityVm.description,
  thunbNailUrl: hotelEntityVm.picture.slice(hotelEntityVm.picture.indexOf('/', 8))
})
