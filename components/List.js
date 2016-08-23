import '../vendor/react.js';
import Entry from './Entry.js';
import './List.css';

export default class List extends React.Component {
  onSelect(entry) {
    this.props.onSelect(entry);
  }

  render() {
    return (
      <div className="list">
        {
          this.props.content.map(entry =>
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
