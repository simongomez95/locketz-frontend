import React, { Component } from 'react';
import { Container, Content, Body, Left, Right, Title, Header, Icon, Form, Input, Item, Button, Text
        , List, ListItem} from 'native-base';
import { Image } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid';

class CreatorSideBar extends Component {

    static propTypes = {};
    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {}
    }

    _navigate(){
        this.props.navigator.push({
            name: 'SideBar', // Matches route.name
        })
    }

    render(){
        return(
            <Container style={{backgroundColor:"#BDBDBD"}}>
                <Header style={{backgroundColor:"#9C27B0", height:80}}>
                    <Body alignItems="flex-end">
                    <Title style={{color:'#FFFFFF'}}>Locketz</Title>
                    </Body>
                </Header>
                <Content>
                    <List>
                        <ListItem>
                            <Button transparent block style={{height:30,width:140}}
                                onPress={
                                 () => {
                                    this.props.navigator.push({id: 'Register'})
                                 }
                                }
                            >
                                <Text>Home</Text>
                            </Button>
                        </ListItem>

                        <ListItem>
                            <Button transparent block style={{height:30,width:140}}
                                    onPress={
                                 () => {
                                    this.props.navigator.push({id: 'Settings'})
                                 }
                                }
                            >
                                <Text>Settings</Text>
                            </Button>
                        </ListItem>

                        <ListItem>
                            <Button transparent block style={{height:30,width:140}}
                                    onPress={
                                 () => {
                                    this.props.navigator.push({id: 'Settings'})
                                 }
                                }
                            >
                                <Text>Settings</Text>
                            </Button>
                        </ListItem>

                        <ListItem>
                            <Button transparent block style={{height:30,width:140}}
                                    onPress={
                                 () => {
                                    this.props.navigator.push({id: 'Settings'})
                                 }
                                }
                            >
                                <Text>Settings</Text>
                            </Button>
                        </ListItem>

                        <ListItem>
                            <Button transparent block style={{height:30,width:140}}
                                    onPress={
                                 () => {
                                    this.props.navigator.push({id: 'Settings'})
                                 }
                                }
                            >
                                <Text>Settings</Text>
                            </Button>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}

export default CreatorSideBar