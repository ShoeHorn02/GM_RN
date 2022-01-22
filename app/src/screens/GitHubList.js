import React from 'react';
import {Appbar} from 'react-native-paper';

const CustomNavigationBar = ({navigation, previous, ...props}) => {
  return (
    <Appbar.Header>
      <Appbar.Content
        title={'Twitter Bootstrap (GitHub)'}
        subtitle="the source of truth!"
      />
    </Appbar.Header>
  );
};

class GitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palaceholder: null,
    };
  }

  init() {
    this.props.navigation.setOptions({
      header: props => (
        <CustomNavigationBar {...props} ticker={this.state.ticker} />
      ),
    });
  }

  componentDidMount() {
    //this.fetchData();
    this.init();
  }

  render() {
    return null;
  }
}

export default GitList;
