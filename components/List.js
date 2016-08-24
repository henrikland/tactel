import '../vendor/react.js';
import ListItem from './ListItem.js';
import './List.css';

export default class List extends React.Component {
  onSelect(article) {
    this.props.onSelect(article);
  }

  shouldComponentUpdate(newProps) {
    return this.props.startIndex !== newProps.startIndex ||
           this.props.endIndex !== newProps.endIndex ||
           this.props.content !== newProps.content ||
           this.props.filter !== newProps.filter ||
           this.props.filterEcological !== newProps.filterEcological ||
           this.props.filterKosher !== newProps.filterKosher ||
           this.props.filterEthical !== newProps.filterEthical;
  }

  render() {
    const filterStr = this.props.filter.trim();
    const regex     = new RegExp(filterStr, 'i');

    const self = this;

    let filtered = this.props.content.filter(article => {
      if (self.props.filterEcological && !article.ecological) {
        return false;
      }

      if (self.props.filterKosher && !article.kosher) {
        return false;
      }

      if (self.props.filterEthical && !article.ethical) {
        return false;
      }

      return regex.test(article.name);
    });

    filtered = filtered.slice(this.props.startIndex, this.props.endIndex);

    return (
      <div className="list">
        {
          filtered.map(article =>
            <ListItem
              key={article.id}
              article={article}
              onSelect={this.onSelect.bind(this)}
            />
          )
        }
      </div>
    );
  }
}
