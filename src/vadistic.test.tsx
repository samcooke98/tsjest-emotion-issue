import * as React from "react";

import { create } from "react-test-renderer";
import { createSerializer } from "jest-emotion";
import * as emotion from "emotion";

expect.addSnapshotSerializer(createSerializer(emotion));

import styled from "react-emotion";

it("shorthand div", () => {
  const Box = styled.div({
    padding: "20px",
    backgroundColor: "silver"
  });

  const tree = create(<Box> Box </Box>).toJSON();

  expect(tree).toMatchSnapshot();
});
