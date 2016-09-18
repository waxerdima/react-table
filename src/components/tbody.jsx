import TD from 'components/td';

export default class TBody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let
      rows = [],
      format = (col, row) => {
        switch (typeof col.format) {
          case 'string':
            return row[col.format];
            break;
          case 'function':
            return col.format(row);
            break;
          default:
            return row[col.format];
        }
      },
      row = (data) => {
        let records = [];
        this.props.cols.forEach((col, index) => {
          records.push(
            <TD key={index} klass={col.klass}>{format(col, data)}</TD>
          );
        });
        return records;
      };

    this.props.rows.forEach((data, index) => {
      rows.push(
        <tr key={index}>
          {row(data)}
        </tr>
      );
    });

    return (
      <tbody>
        {rows}
      </tbody>
    );
  }
}