import React from 'react';
import CalendarsViewContainer from './CalendarsViewContainer';
import EventViewContainer from "./EventViewContainer";


const OrderSystem = () => {
  return (
      <div className='flexbox-styles'>
          <div className='order-system'>
              <EventViewContainer />
              <CalendarsViewContainer />
          </div>
      </div>
  )
};

export default OrderSystem;
