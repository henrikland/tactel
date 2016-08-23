import '../vendor/react.js';
import './Entry.css';

export default class Entry extends React.Component {
  onClick(ev) {
    this.props.onSelect(this.props.data);
  }

  render() {
    return (
      <div className="entry" onClick={this.onClick.bind(this)}>
        {this.props.data.Namn}
      </div>
    );
  }
}