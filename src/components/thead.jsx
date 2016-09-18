import TH from 'components/th';

export default class THead extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cols = [];
    this.props.cols.forEach((col, index) => {
      cols.push(<TH klass={col.klass} filter={col.filter} sorter={col.sorter} key={index}>{col.label}</TH>);
    });

    return (
      <thead>
        <tr>
          {cols}
        </tr>
      </thead>
    );
  }
}