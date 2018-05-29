import * as React from "react";
import styled from "react-emotion";

const Container = styled.div({
  padding: 48,
  backgroundColor: "#08ed12"
});

const Text = styled.p({
  fontFamily: "Helvetica",
  fontSize: 24,
  fontWeight: "bold"
});

const Component = () => (
  <Container>
    <Text>Hello World</Text>
  </Container>
);

export default Component;
