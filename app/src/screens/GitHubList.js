import React from 'react';
import {Appbar, List, Divider} from 'react-native-paper';
import {API_COMMITS} from '../config/API';
import axios from 'axios';
import {View, FlatList, Text} from 'react-native';

const CustomNavigationBar = ({navigation, previous, ...props}) => {
  return (
    <Appbar.Header>
      <Appbar.Content
        title={'Twitter Bootstrap (GitHub Commits)'}
        subtitle="the source of truth!"
      />
    </Appbar.Header>
  );
};

class GitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api_commit: [],
      api_commit_loading: true,
      pageNumber: 1,
      stopLoad: false,
      isLoading: false,
    };
  }

  fetchData = async () => {
    await axios
      .get(`${API_COMMITS}${this.state.pageNumber}`)
      .then(res => {
        this.setState({
          api_commit: this.state.api_commit.concat(res.data),
          api_commit_loading: false,
        });
      })
      .catch(err => {
        console.log(err.response.data);
        this.setState({
          api_commit_loading: false,
          stopLoad: true,
        });
      });
  };

  init = async () => {
    await this.props.navigation.setOptions({
      header: props => (
        <CustomNavigationBar {...props} ticker={this.state.ticker} />
      ),
    });
  }

  componentDidMount() {
    this.fetchData();
    this.init();
  }

  handleLoadMore = () => {
    if (this.state.stopLoad === false) {
      this.setState(
        {
          isLoading: true,
          pageNumber: this.state.pageNumber + 1,
        },
        () => {
          this.fetchData();
        },
      );
    }
  };

  renderItem = (item, index) => {
    return (
      <View>
        <List.Item
          key={item.sha}
          onPress={() =>
            this.props.navigation.push('GitHubDetail', {
              item: item,
            })
          }
          description={item.commit.message}
          descriptionNumberOfLines={2}
          title={item.sha}
          right={props => <Text>{item.commit.author.name} </Text>}
        />
        <Divider />
      </View>
    );
  };

  render() {
    if (this.state.api_commit_loading) {
      return null;
    }
    return (
      <FlatList
        data={this.state.api_commit}
        onEndReached={this.handleLoadMore}
        keyExtractor={item => `${item.sha}`}
        initialNumToRender={15}
        renderItem={({item, index}) => this.renderItem(item, index)}
      />
    );
  }
}

export default GitList;
