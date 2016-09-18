export default class TD extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <td className={this.props.klass}>
        {this.props.children}
      </td>
    );
  }
}