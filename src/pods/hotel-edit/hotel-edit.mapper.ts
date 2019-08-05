import {HotelEntityVm} from './hotel-edit.vm';
import {HotelEntityApi} from './hotel-edit.api';
import { baseApirUrl } from 'core';

export const hotelEntityApiToVm = (hotelEntityApi:HotelEntityApi): HotelEntityVm => ({
  id: hotelEntityApi.id,
  picture:`${baseApirUrl}${hotelEntityApi.thumbNailUrl}`,
  name: hotelEntityApi.name,
  description: hotelEntityApi.shortDescription,
  rating: hotelEntityApi.hotelRating,
  city: hotelEntityApi.city
});

