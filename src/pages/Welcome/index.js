import React from 'react';

import { Container, Hero, Names, Ampersand, Date, Divider, Message, EventDetails, EventCard, EventTitle, EventInfo } from './styles';

export default function Welcome() {
  return (
    <Container>
      <Hero>
        <Names>
          Shivani <Ampersand>&</Ampersand> Ujwal
        </Names>
        <Divider />
        <Date>We're Getting Married!</Date>
      </Hero>
      
      <Message>
        <p>We joyfully invite you to celebrate our wedding!</p>
        <p>Your presence would make our special day even more memorable.</p>
      </Message>

      <EventDetails>
        <EventCard>
          <EventTitle>Save the Date</EventTitle>
          <EventInfo>Details coming soon...</EventInfo>
        </EventCard>
      </EventDetails>
    </Container>
  );
}
