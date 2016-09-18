import Table from 'components/table';

function clickName(event) {
  console.log(event.nativeEvent.target);
}

ReactDOM.render(
  <Table
    cols={[
      {
        label: 'Name',
        format: (data) => {
          return (
            <span className='pseudo-link' onClick={clickName}>
              {data.name}
            </span>
          );
        }
      }, {
        label: 'Price',
        format: (data) => {
          return `€ ${data.price}`;
        },
        klass: 'price',
        filter: {
          title: 'All',
          show: () => {
            console.log(1);
          }
        }
      }, {
        label: 'Year',
        format: 'year',
        sorter: {
          name: 'year',
          ordering: ['asc', 'desc'],
          ordered: 'asc',
          change: function() {
            this.setState({
              ordered: this.state.ordered === 'asc' ? 'desc' : 'asc'
            });
          }
        }
      }, {
        label: 'Transmission',
        format: 'transmission',
        sorter: {
          name: 'year',
          ordering: ['asc', 'desc'],
          ordered: '',
          change: function() {
            this.setState({
              ordered: !this.state.ordered ? 'desc' : (this.state.ordered === 'desc' ? 'asc' : '')
            });
          }
        },
        filter: {
          title: 'All',
          show: function() {
            this.setState({filter: 'Sample value'})
          }
        }
      }]}
    rows={[
      {name: 'BMW', price: 30000, year: 2001, transmission: 'AT'},
      {name: 'Mercedes', price: 40000, year: 1999, transmission: 'AT'},
      {name: 'Audi', price: 20000, year: 2009, transmission: 'MT'},
      {name: 'Acura', price: 55000, year: 2012, transmission: 'AT'},
      {name: 'Infinity', price: 100000, year: 2016, transmission: 'MT'},
      {name: 'Jeep', price: 20500, year: 2015, transmission: 'MT'}
    ]}
  />, document.getElementById('table')
);
