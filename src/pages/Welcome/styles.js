import styled from 'styled-components';
import colors from '../../assets/styles/variables/colors';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 60px 20px;
`;

export const Names = styled.h1`
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 500;
  color: ${colors.text.dark.medium};
  letter-spacing: 0.05em;
  line-height: 1.2;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const Ampersand = styled.span`
  font-family: 'Playfair Display', Georgia, serif;
  font-style: italic;
  color: ${colors.primary.main};
`;

export const Date = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  font-weight: 300;
  color: ${colors.text.dark.little};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-top: 20px;
`;

export const Divider = styled.div`
  width: 80px;
  height: 2px;
  background: ${colors.primary.main};
  margin: 30px 0;
`;

export const Message = styled.div`
  max-width: 600px;
  text-align: center;
  padding: 40px 20px;
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${colors.text.dark.little};
    margin-bottom: 15px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const EventDetails = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  padding: 40px 20px;
  max-width: 1200px;
`;

export const EventCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 40px;
  min-width: 280px;
  max-width: 350px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid ${colors.primary.light};
`;

export const EventTitle = styled.h3`
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.5rem;
  color: ${colors.text.dark.medium};
  margin-bottom: 20px;
`;

export const EventInfo = styled.p`
  font-size: 1rem;
  color: ${colors.text.dark.little};
  line-height: 1.6;
`;
