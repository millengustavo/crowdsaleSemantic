import React, { Component } from "react";
import Layout from "../components/Layout";
import { Header, Card } from "semantic-ui-react";

class TeamPage extends Component {
  render() {
    return (
      <Layout>
        <Header as="h2">TBA</Header>
        <Card.Group itemsPerRow={4}>
          <Card
            image="../static/random.jpg"
            header="Random Name"
            meta="Blockchain Developer"
            description="Random is a blockchain developer living in Sao Paulo who enjoys playing guitar and programming."
          />
          <Card
            image="../static/random1.png"
            header="Random Name"
            meta="Blockchain Developer"
            description="Random is a blockchain developer living in Sao Paulo who enjoys playing guitar and programming."
          />
          <Card
            image="../static/random4.jpg"
            header="Random Name"
            meta="Blockchain Developer"
            description="Random is a blockchain developer living in Sao Paulo who enjoys playing guitar and programming."
          />
          <Card
            image="../static/random3.png"
            header="Random Name"
            meta="Blockchain Developer"
            description="Random is a blockchain developer living in Sao Paulo who enjoys playing guitar and programming."
          />
        </Card.Group>
      </Layout>
    );
  }
}

export default TeamPage;
