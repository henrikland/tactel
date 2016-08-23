import '../vendor/react.js';
import Entry from './Entry.js';
import './List.css';

export default class List extends React.Component {
  onSelect(entry) {
    this.props.onSelect(entry);
  }

  shouldComponentUpdate(newProps) {
    return this.props.content !== newProps.content || this.props.filter !== newProps.filter;
  }

  render() {
    const filterStr = this.props.filter.trim();
    const regex     = new RegExp(filterStr, 'i');

    const filtered = this.props.content.filter(entry => {
      return regex.test(entry.Namn);
    });

    return (
      <div className="list">
        {
          filtered.map(entry =>
            <Entry
              key={entry.Artikelid[0]}
              data={entry}
              onSelect={this.onSelect.bind(this)}
            />
          )
        }
      </div>
    );
  }
}
