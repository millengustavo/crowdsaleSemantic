import React, { Component } from "react";
import Layout from "../components/Layout";
import { Accordion, Icon } from 'semantic-ui-react';

class Faq extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        return (
        <Layout>
            <Accordion fluid styled>
                <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                <Icon name='dropdown' />
                How can I invest?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget
                </p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                <Icon name='dropdown' />
                How collected funds will be used?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget
                </p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                <Icon name='dropdown' />
                Why should I trust you?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget
                </p>
                </Accordion.Content>
            </Accordion>
        </Layout>
        )
    }
}

export default Faq