import React from 'react';
import {Appbar} from 'react-native-paper';

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
        <CustomNavigationBar {...props} ticker={this.state.ticker} />
      ),
    });
  }

  componentDidMount() {
    this.init();
  }

  render() {
    return null;
  }
}

export default GitDetail;
