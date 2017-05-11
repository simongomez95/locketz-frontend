/**
 * Created by nekothecat on 5/11/17.
 */

import React, { Component } from 'react';
import {Text, Card, CardItem, Thumbnail, Body} from 'native-base';
import Subscription from '../utils/Subscription';
import FollowButton from './FollowButton';
import { Col, Row, Grid } from 'react-native-easy-grid';
class SearchResults extends Component {

  static propTypes = {};
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      results: {}
    };

    this.subscription = new Subscription()
  }

  render() {
    return (
      <Grid>
        <Row>
          <Card>
            <Row>
              <Col size={3}>
                <CardItem header>
                  <Thumbnail size={80} source={require('../img/pool2.jpg')} />
                  <Text style={{paddingLeft:15}}>Deadpool</Text>
                </CardItem>
              </Col>
              <Col size={1} style={{justifyContent: "center"}}>
                <FollowButton userId={"elUsuario"}/>
              </Col>
            </Row>
            <CardItem>
              <Body>
              <Text note>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin sapien sit amet neque vulputate ultrices.
              </Text>
              </Body>
            </CardItem>
          </Card>
        </Row>
      </Grid>
    )

  }

}

export default SearchResults
