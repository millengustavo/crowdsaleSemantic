import React, { Component } from "react";
import Layout from "../components/Layout";
import wallet from "../ethereum/wallet";
import web3 from "../ethereum/web3";
import {
  Table,
  Header,
  Button,
  Icon,
  Modal,
  Form,
  Message,
  Divider
} from "semantic-ui-react";
import { Router } from "../routes";
const api = require("etherscan-api").init(
  "P9RFR324H2Z64CEJ9Q21HGXYGP54N7XIND",
  "rinkeby",
  "3000"
);

class Founders extends Component {
  state = {
    openAdd: false,
    openReplace: false,
    openRemove: false,
    loading: false,
    value: "",
    addressOwner: "",
    errorMessage: "",
    newOwner: "",
    bWallet: ""
  };

  handleOpen = () => this.setState({ openAdd: true });

  handleClose = () => this.setState({ openAdd: false, errorMessage: "" });

  handleOpen2 = () => this.setState({ openReplace: true });

  handleClose2 = () => this.setState({ openReplace: false, errorMessage: "" });

  handleOpen3 = () => this.setState({ openRemove: true });

  handleClose3 = () => this.setState({ openRemove: false, errorMessage: "" });

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await wallet.methods.addOwner(this.state.addressOwner).send({
        from: accounts[0]
      });

      Router.pushRoute("/founders");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({
      loading: false,
      value: "",
      addressOwner: ""
    });
  };

  onSubmit2 = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await wallet.methods
        .replaceOwner(this.state.addressOwner, this.state.newOwner)
        .send({
          from: accounts[0]
        });

      Router.pushRoute("/founders");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({
      loading: false,
      value: "",
      addressOwner: "",
      newOwner: ""
    });
  };

  onSubmit3 = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await wallet.methods.removeOwner(this.state.addressOwner).send({
        from: accounts[0]
      });

      Router.pushRoute("/founders");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({
      loading: false,
      value: "",
      addressOwner: ""
    });
  };

  static async getInitialProps() {
    const isOwner = await web3.eth.getAccounts().then(async accounts => {
      const ownerBool = await wallet.methods.isOwner(accounts[0]).call();
      return ownerBool;
    });
    const listOwners = await wallet.methods.getOwners().call();
    const balanceWallet = await api.account
      .balance("0x21429e288e0ba214d97825195FeD1D1Fdb4B5678")
      .then(balanceData => {
        return balanceData.result;
      });
    console.log(balanceWallet);
    const txList = await api.account
      .txlist("0x21429e288e0ba214d97825195FeD1D1Fdb4B5678")
      .then(temp => {
        return temp.result;
      });
    console.log(txList[0]);
    console.log(Object.values(txList[0])[1]);
    return {
      isOwner,
      listOwners,
      balanceWallet,
      txList
    };
  }

  render() {
    const { isOwner, listOwners, balanceWallet, txList } = this.props;
    return (
      <Layout>
        {isOwner ? (
          <div>
            <Header as="h2">
              Founder's MultiSigWallet Interface
              <a href="https://rinkeby.etherscan.io/address/0x21429e288e0ba214d97825195FeD1D1Fdb4B5678">
                <Button floated="right" primary animated>
                  <Button.Content visible>View Wallet Contract</Button.Content>
                  <Button.Content hidden>
                    <Icon name="right arrow" />
                  </Button.Content>
                </Button>
              </a>
            </Header>
            <Table unstackable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>
                    Owner's Address
                    <Button
                      inverted
                      compact
                      color="red"
                      floated="right"
                      onClick={this.handleOpen3}
                    >
                      Remove
                    </Button>
                    <Modal
                      open={this.state.openRemove}
                      onClose={this.handleClose3}
                    >
                      <Header content="Remove an Owner" />
                      <Modal.Content>
                        <h3>Enter the address of the owner to be removed</h3>
                      </Modal.Content>
                      <Modal.Actions>
                        <Form
                          onSubmit={this.onSubmi3}
                          error={!!this.state.errorMessage}
                        >
                          <Form.Input
                            placeholder="Address of the Owner to be removed"
                            value={this.state.addressOwner}
                            onChange={event =>
                              this.setState({
                                addressOwner: event.target.value
                              })
                            }
                          />
                          <Button
                            color="red"
                            onClick={this.handleClose3}
                            inverted
                          >
                            Cancel
                          </Button>
                          <Button
                            color="green"
                            onClick={this.onSubmit3}
                            loading={this.state.loading}
                            inverted
                          >
                            Remove
                          </Button>
                          <Message
                            error
                            header="Oops"
                            content={this.state.errorMessage}
                          />
                        </Form>
                      </Modal.Actions>
                    </Modal>
                    <Button
                      inverted
                      color="blue"
                      compact
                      floated="right"
                      onClick={this.handleOpen2}
                    >
                      Replace
                    </Button>
                    <Modal
                      open={this.state.openReplace}
                      onClose={this.handleClose2}
                    >
                      <Header content="Replace an Owner" />
                      <Modal.Content>
                        <h3>
                          Enter the address of the owner to be replaced and the
                          address of the new Owner
                        </h3>
                      </Modal.Content>
                      <Modal.Actions>
                        <Form
                          onSubmit={this.onSubmit2}
                          error={!!this.state.errorMessage}
                        >
                          <Form.Input
                            placeholder="Address of the Owner to be replaced"
                            value={this.state.addressOwner}
                            onChange={event =>
                              this.setState({
                                addressOwner: event.target.value
                              })
                            }
                          />
                          <Form.Input
                            placeholder="Address of the new Owner"
                            value={this.state.newOwner}
                            onChange={event =>
                              this.setState({
                                newOwner: event.target.value
                              })
                            }
                          />
                          <Button
                            color="red"
                            onClick={this.handleClose2}
                            inverted
                          >
                            Cancel
                          </Button>
                          <Button
                            color="green"
                            onClick={this.onSubmit2}
                            loading={this.state.loading}
                            inverted
                          >
                            Replace
                          </Button>
                          <Message
                            error
                            header="Oops"
                            content={this.state.errorMessage}
                          />
                        </Form>
                      </Modal.Actions>
                    </Modal>
                    <Button
                      inverted
                      color="green"
                      compact
                      floated="right"
                      onClick={this.handleOpen}
                    >
                      Add
                    </Button>
                    <Modal open={this.state.openAdd} onClose={this.handleClose}>
                      <Header content="Add an Owner" />
                      <Modal.Content>
                        <h3>Enter the address of the owner to be added</h3>
                      </Modal.Content>
                      <Modal.Actions>
                        <Form
                          onSubmit={this.onSubmit}
                          error={!!this.state.errorMessage}
                        >
                          <Form.Input
                            placeholder="Address of the Owner to be added"
                            value={this.state.addressOwner}
                            onChange={event =>
                              this.setState({
                                addressOwner: event.target.value
                              })
                            }
                          />
                          <Button
                            color="red"
                            onClick={this.handleClose}
                            inverted
                          >
                            Cancel
                          </Button>
                          <Button
                            color="green"
                            onClick={this.onSubmit}
                            loading={this.state.loading}
                            inverted
                          >
                            <Icon name="add" /> Add
                          </Button>
                          <Message
                            error
                            header="Oops"
                            content={this.state.errorMessage}
                          />
                        </Form>
                      </Modal.Actions>
                    </Modal>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {listOwners.map(address => {
                  return (
                    <Table.Row key={address}>
                      <Table.Cell>{address}</Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
            <Divider />
            MultiSigWallet balance: {balanceWallet / 1e18} ETH
            <br />
            Submit a Transaction
            <br />
            Table with summary of transactions to confirm/revoke and tx hash
            linked to etherscan
          </div>
        ) : (
          <div>You are Not an Owner!</div>
        )}
      </Layout>
    );
  }
}

export default Founders;
