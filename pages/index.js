import React, { Component } from 'react';
import { Table, Header, Button, Icon, Divider, Progress, Form, Message } from 'semantic-ui-react'
import crowdsale from '../ethereum/crowdsale';
import token from '../ethereum/token'
import Layout from '../components/Layout';
import { Link } from '../routes';
import web3 from '../ethereum/web3'

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
    
    render () {
        const { rate, cap, weiRaised, balance } = this.props;
        return (
        <Layout>
            <Header as='h1'>Buy HCKD Tokens</Header>
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Group>
                    <Form.Input 
                        width={6} 
                        placeholder='Value in ETH to exchange for HCKD tokens'
                        value={this.state.value} 
                        onChange={event => this.setState({value: event.target.value})}
                    >
                    </Form.Input>
                    <Form.Button loading={this.state.loading} primary type='submit'>Buy</Form.Button>
                </Form.Group>
                <Message error header="Oops!" content={this.state.errorMessage} />
            </Form>
            
            <Divider />
            <Header as='h2'>
                Hackd Crowdsale Details
                    <a href='https://kovan.etherscan.io/address/0xC5eDf8f83158bdf5487A15841EC200183044C5D1'>
                    <Button primary animated floated='right'>
                        <Button.Content visible>View Crowdsale Contract</Button.Content>
                        <Button.Content hidden>
                            <Icon name='right arrow' />
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
                        <Table.Cell>{web3.utils.fromWei(weiRaised, 'ether')} ETH</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <Header as='h3'>Hard Cap Progress</Header>
            <Progress value={weiRaised} total={cap/rate} indicating color='green'>
                Current Amount Raised
            </Progress>
        </Layout>
        )
    }
}

export default CrowdsaleIndex