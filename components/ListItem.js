import '../vendor/react.js';
import './ListItem.css';

export default class ListItem extends React.Component {
  onClick(ev) {
    this.props.onSelect(this.props.article);
  }

  render() {
    return (
      <div className="list-item" onClick={this.onClick.bind(this)}>
        {this.props.article.name}
      </div>
    );
  }
}
