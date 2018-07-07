import React, { Component } from 'react';
import { Section, Content } from '../components/Content';
import { Wrapper } from '../components/Wrapper';

class Dashboard extends Component {
    render() {
        return (
            <Wrapper className='dashboard' id='dashboard'>
                {/* Dashboard - World - US - Local Awareness Section */ }
                <Section className='section'>
                    <Content className='content'>
                        <h3>World - US - Local Awareness</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus mauris a diam. Nunc scelerisque viverra mauris in aliquam sem. Proin gravida hendrerit lectus a. At imperdiet dui accumsan sit amet nulla facilisi morbi. Dolor purus non enim praesent elementum. Scelerisque varius morbi enim nunc faucibus a pellentesque. Nunc congue nisi vitae suscipit tellus. Etiam tempor orci eu lobortis elementum. Sed libero enim sed faucibus turpis in eu mi bibendum. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque.
                    </Content>
                </Section>

                {/* Dashboard - Personal Inventory Section */ }
                <Section className='section'>
                    <Content className='content'>
                        <h3>Personal Inventory Section</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus mauris a diam. Nunc scelerisque viverra mauris in aliquam sem. Proin gravida hendrerit lectus a. At imperdiet dui accumsan sit amet nulla facilisi morbi. Dolor purus non enim praesent elementum. Scelerisque varius morbi enim nunc faucibus a pellentesque. Nunc congue nisi vitae suscipit tellus. Etiam tempor orci eu lobortis elementum. Sed libero enim sed faucibus turpis in eu mi bibendum. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque.
                    </Content>
                </Section>

                {/* Dashboard - Food Donation Information Section */ }
                <Section className='section'>
                    <Content className='content'>
                        <h3>Food Donation Information Section</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus mauris a diam. Nunc scelerisque viverra mauris in aliquam sem. Proin gravida hendrerit lectus a. At imperdiet dui accumsan sit amet nulla facilisi morbi. Dolor purus non enim praesent elementum. Scelerisque varius morbi enim nunc faucibus a pellentesque. Nunc congue nisi vitae suscipit tellus. Etiam tempor orci eu lobortis elementum. Sed libero enim sed faucibus turpis in eu mi bibendum. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque.
                    </Content>
                </Section>

            </Wrapper>

        );
    }
}

export default Dashboard;