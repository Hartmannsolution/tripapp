import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: ${(props) => props.theme.darkBlue};
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4px;
  background: ${(props) => props.theme.pastelBlue};
  margin-bottom: 1em;
`;

// Use Title and Wrapper like any other React component – except they're styled!
const TitleComponent = ( {titleText} ) => {
  return (
    <Wrapper>
      <Title>{titleText}</Title>
    </Wrapper>
  );

};

TitleComponent.propTypes = {
  titleText: PropTypes.string.isRequired,
};

export default TitleComponent;
