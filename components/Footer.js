import React from "react";
import { Header, Divider } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
  return (
    <div>
      <Divider />
      <Header as="h5" floated="left" subheader="Hackd Crowdsale" />
      <Header as="h5" floated="right" subheader="Powered by Eleva Technology" />
    </div>
  );
};
