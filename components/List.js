import '../vendor/react.js';
import Entry from './Entry.js';
import './List.css';

export default class List extends React.Component {
  onSelect(entry) {
    this.props.onSelect(entry);
  }

  render() {
    const filterStr = this.props.filter.trim();
    const regex     = new RegExp(filterStr, 'i');

    const filtered = this.props.content.filter(entry => {
      return regex.test(entry.name + ' ' + entry.description);
    });

    return (
      <div className="list">
        {
          filtered.map(entry =>
            <Entry
              key={entry.name}
              data={entry}
              onSelect={this.onSelect.bind(this)}
            />
          )
        }
      </div>
    );
  }
}
