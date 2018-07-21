import React, { Component } from "react";
import Layout from "../components/Layout";
import wallet from "../ethereum/wallet";
import web3 from "../ethereum/web3";
import { Table, Header, Button, Icon, Modal } from 'semantic-ui-react';

class Founders extends Component {
    state = {
        openAdd: false,
        openReplace: false,
        openRemove: false
    }

    handleOpen = () => this.setState({ openAdd: true })

    handleClose = () => this.setState({ openAdd: false })

    static async getInitialProps() {
        const isOwner = await web3.eth.getAccounts().then(async accounts => {
          const ownerBool = await wallet.methods.isOwner(accounts[0]).call();
          return ownerBool;
        });
        const listOwners = await wallet.methods.getOwners().call();
        return {
          isOwner,
          listOwners
        };
    }
    render () {
        const { isOwner, listOwners } = this.props;
        return (
            <Layout>
                {isOwner ? (
                    <div>
                        <Header as='h1'>
                            Founder's MultiSigWallet Interface
                            <a href='https://kovan.etherscan.io/address/0xedee9c33c8fbbf83e9f87480a26c8cd8e45f496a'>
                            <Button floated='right' primary animated>
                                <Button.Content visible>
                                    View Wallet Contract
                                </Button.Content>
                                <Button.Content hidden>
                                    <Icon name='right arrow'/>
                                </Button.Content>
                            </Button>
                            </a>
                        </Header>
                        <Table unstackable>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>
                                        Owner's Address
                                        <Button compact color='red' floated='right'>
                                            Remove
                                        </Button>
                                        <Button compact floated='right'>
                                            Replace
                                        </Button>
                                        <Modal
                                            trigger={<Button primary compact floated='right' onClick={this.handleOpen}>Add</Button>}
                                            open={this.state.modalOpen}
                                            onClose={this.handleClose}
                                            size='small'
                                        >
                                            <Header content='Add an Owner' />
                                            <Modal.Content>
                                            <h3>This website uses cookies to ensure the best user experience.</h3>
                                            </Modal.Content>
                                            <Modal.Actions>
                                                <Button color='green' onClick={this.handleClose} inverted>
                                                    <Icon name='add' /> Add
                                                </Button>
                                            </Modal.Actions>
                                        </Modal>
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {listOwners.map (address => {
                                    return(
                                        <Table.Row key={address}>
                                            <Table.Cell>{address}</Table.Cell>
                                        </Table.Row>
                                    )
                                })}
                            </Table.Body>
                        </Table>
                    </div>
                ) : <div>You are Not an Owner!</div>
                }
            </Layout>
        )
    }
}

export default Founders