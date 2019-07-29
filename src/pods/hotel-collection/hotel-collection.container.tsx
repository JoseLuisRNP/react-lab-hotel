import * as React from "react";
import { HotelCollectionComponent } from "./hotel-collection.component";
import { HotelEntityVm } from "./hotel-collection.vm";
import { HotelEntityApi, getHotelCollection } from './hotel-collection.api';
import { mapFromApiCollectionToVmCollection } from './hotel-collection.mapper';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {routerLinks} from 'core';

interface Props extends RouteComponentProps{}

const HotelCollectionContainerInner = (props:Props) => {
  const [hotelCollection, setHotelCollection] = React.useState<HotelEntityVm[]>([]);
  const {history} = props;

  React.useEffect(()=> {
    getHotelCollection().then((result) => {
      const hotelCollectionVm = mapFromApiCollectionToVmCollection(result);
      setHotelCollection(hotelCollectionVm);
    });
  }, [])

  const editHotel = (hotelId:string) => {
    history.push(routerLinks.hotelEdit(hotelId));
  }

  return (
    <HotelCollectionComponent hotelCollection={hotelCollection} editHotel={editHotel}/>
  );
}

export const HotelCollectionContainer = withRouter(HotelCollectionContainerInner);