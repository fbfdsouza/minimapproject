import React from "react";
import { Button } from "semantic-ui-react";

export default ({ onClick, children }) => {
  return (
    <Button onClick={onClick} primary>
      {children}
    </Button>
  );
};
