import React, { Component } from "react";
import {
  Table,
  Header,
  Button,
  Icon,
  Divider,
  Progress,
  Form,
  Message,
  Card
} from "semantic-ui-react";
import crowdsale from "../ethereum/crowdsale";
import token from "../ethereum/token";
import Layout from "../components/Layout";
import { Link } from "../routes";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

class CrowdsaleIndex extends Component {
  state = {
    value: "",
    loading: false,
    errorMessage: ""
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();

      await crowdsale.methods.buyTokens(accounts[0]).send({
        from: accounts[0],
        value: this.state.value
      });

      Router.replaceRoute(`/`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, value: "" });
  };

  static async getInitialProps() {
    const balance = await web3.eth.getAccounts().then(async accounts => {
      const balanceAmount = await token.methods.balanceOf(accounts[0]).call();
      return balanceAmount;
    });
    const rate = await crowdsale.methods.rate().call();
    const cap = await crowdsale.methods.cap().call();
    const weiRaised = await crowdsale.methods.weiRaised().call();
    return {
      rate,
      cap,
      weiRaised,
      balance
    };
  }

  render() {
    const { rate, cap, weiRaised, balance } = this.props;
    return (
      <Layout>
        <Header as="h1">
          HCKD Tokens
          <a href="https://rinkeby.etherscan.io/address/0x01981ca4b06e57953074f85f04e9eb50bc0f9bda">
            <Button primary animated floated="right">
              <Button.Content visible>View Token Contract</Button.Content>
              <Button.Content hidden>
                <Icon name="right arrow" />
              </Button.Content>
            </Button>
          </a>
        </Header>
        <Card fluid color="green">
          <Card.Content textAlign="center">
            <Card.Header>Your Wallet Balance</Card.Header>
            <Card.Meta>HCKD Tokens</Card.Meta>
            <Card.Description>{balance / 1e18}</Card.Description>
          </Card.Content>
        </Card>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Group unstackable widths={2}>
            <Form.Input
              icon="ethereum"
              placeholder="Value in ETH to exchange for HCKD tokens"
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
            <Form.Button loading={this.state.loading} primary type="submit">
              Buy
            </Form.Button>
          </Form.Group>
          <Message error header="Oops!" content={this.state.errorMessage} />
        </Form>
        <Divider />
        <Header as="h2">
          Hackd Crowdsale Details
          <a href="https://rinkeby.etherscan.io/address/0xe1f21f85F10fDB1626f07A8738c8bb12162d4Fca">
            <Button primary animated floated="right">
              <Button.Content visible>View Crowdsale Contract</Button.Content>
              <Button.Content hidden>
                <Icon name="right arrow" />
              </Button.Content>
            </Button>
          </a>
        </Header>

        <Table unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Value</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>HCKD to ETH Rate</Table.Cell>
              <Table.Cell>{rate}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Crowdsale Cap (ETH)</Table.Cell>
              <Table.Cell>200.000 ETH</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>ETH Raised</Table.Cell>
              <Table.Cell>
                {web3.utils.fromWei(weiRaised, "ether")} ETH
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Header as="h3">Hard Cap Progress</Header>
        <Progress value={weiRaised} total={cap / rate} indicating color="green">
          Current Amount Raised
        </Progress>
      </Layout>
    );
  }
}

export default CrowdsaleIndex;
