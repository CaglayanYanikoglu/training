import Styled from 'styled-components';

/* const handleBackground = (type) => {
} */

const handleButtonSize = (size) => {
  console.log('size', size);
  if (size === 'tiny') {
    return '12px';
  } else if (size === 'big') {
    return '20px';
  }
}

export const Wrapper = Styled.div`
  background-color: ${props => props.theme};
  max-width: 720px;
  margin: auto;
  p {
    color: red !important;
  }
  .home-text {
    font-size: 20px;
  }
  @media (max-width: 800px) {
    border: 2px solid green;
  }
`;

export const Button = Styled.button`
  color: white;
  padding: 20px;
  background: blue;
  border: none;
  font-size: ${props => handleButtonSize(props.size)}
`;

export const CustomButton = Styled(Button)`
  background: green;
`;