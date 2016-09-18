import 'table.scss'

import TBody from 'components/tbody'
import THead from 'components/thead'

export default class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className={this.props.klass || 'react-table'}>
        <THead cols={this.props.cols} />
        <TBody cols={this.props.cols} rows={this.props.rows} />
      </table>
    );
  }
}