import * as React from "react";

import { AppLayout } from "layout";
import { HotelEditContainer } from "pods/hotel-edit";

export const HotelEditScene = props => {
  const { match } = props;
  React.useEffect(() => {
    console.log(match.params.id);
  }, []);

  return (
    <AppLayout>
      <HotelEditContainer hotelId={match.params.id}/>
    </AppLayout>
  );
};
