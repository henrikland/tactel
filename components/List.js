import '../vendor/react.js';
import Entry from './Entry.js';
import './List.css';

export default class List extends React.Component {
  onSelect(entry) {
    this.props.onSelect(entry);
  }

  shouldComponentUpdate(newProps) {
    return this.props.content !== newProps.content ||
           this.props.filter !== newProps.filter ||
           this.props.filterEcological !== newProps.filterEcological ||
           this.props.filterKosher !== newProps.filterKosher ||
           this.props.filterEthical !== newProps.filterEthical;
  }

  render() {
    const filterStr = this.props.filter.trim();
    const regex     = new RegExp(filterStr, 'i');

    const self = this;

    const filtered = this.props.content.filter(entry => {
      if (self.props.filterEcological && !entry.ecological) {
        return false;
      }

      if (self.props.filterKosher && !entry.kosher) {
        return false;
      }

      if (self.props.filterEthical && !entry.ethical) {
        return false;
      }

      return regex.test(entry.name);
    });

    return (
      <div className="list">
        {
          filtered.map(entry =>
            <Entry
              key={entry.id}
              data={entry}
              onSelect={this.onSelect.bind(this)}
            />
          )
        }
      </div>
    );
  }
}
