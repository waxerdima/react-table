export default class TH extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ordered: this.props.sorter ? this.props.sorter.ordered : '',
      filter: this.props.filter ? this.props.filter.title : ''
    };
  }

  render() {
    let content = () => {
      let header = [];
      if (!this.props.sorter) {
        header.push(<span key='1' className='title'>{this.props.children}</span>);
      } else {
        header.push(
          <span key='1' className={'title sorter ' + this.state.ordered} onClick={this.props.sorter.change.bind(this)}>
            {this.props.children}
          </span>
        );
      }
      if (this.props.filter) {
        header.push(
          <span key='2' className='title filter' onClick={this.props.filter.show.bind(this)}>
            {this.state.filter}
          </span>
        );
      }
      return header;
    };

    return (
      <th className={this.props.klass}>
        {content()}
      </th>
    );
  }
}