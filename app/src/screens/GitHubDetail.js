import React from 'react';
import {Appbar} from 'react-native-paper';
import {Card, Title, Paragraph, List} from 'react-native-paper';

const CustomNavigationBar = ({navigation, previous, ...props}) => {
  const _goBack = () => navigation.goBack();

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title={props.ticker} />
    </Appbar.Header>
  );
};

class GitDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: null,
    };
  }

  init() {
    this.props.navigation.setOptions({
      header: props => (
        <CustomNavigationBar
          {...props}
          ticker={this.props.route.params.item.commit.author.name}
        />
      ),
    });
  }

  componentDidMount() {
    this.init();
  }

  render() {
    return (
      <Card>
        <Card.Content>
          <Title>{this.props.route.params.item.commit.author.name}</Title>
          <Paragraph>
            {this.props.route.params.item.commit.author.email}
          </Paragraph>
        </Card.Content>
        <Card.Cover
          source={{uri: this.props.route.params.item.author.avatar_url}}
        />

        <List.Item title="SHA" description={this.props.route.params.item.sha} />

        <List.Item
          title="Date"
          description={this.props.route.params.item.commit.author.date}
        />

        <List.Item
          title="Message"
          description={this.props.route.params.item.commit.message}
          descriptionNumberOfLines={2}
        />
      </Card>
    );
  }
}

export default GitDetail;
