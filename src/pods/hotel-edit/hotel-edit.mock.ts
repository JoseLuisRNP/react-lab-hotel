import {HotelEntityVm} from './hotel-edit.vm';
import {basePicturesUrl} from 'core';

export const createMockHotel = ():HotelEntityVm => ({  
    id: "0248058a-27e4-11e6-ace6-a9876eff01b3",
    picture: `${basePicturesUrl}/thumbnails/50947_264_t.jpg`,
    name: "Motif Seattle",
    description:
      "With a stay at Motif Seattle, you will be centrally located in Seattle, steps from 5th Avenue Theater and minutes from Pike Place Market. This 4-star hotel is within",
    rating: 4,
    city: "Seattle",
});