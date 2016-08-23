import '../vendor/react.js';
import List from './List.js';
import Info from './Info.js';
import request from './http.js';

const SYSTEMET = 'http://www.systembolaget.se/api/assortment/products/xml';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
      currentEntry: null,
      searchString: ''
    };
  }

  componentDidMount() {
    request(SYSTEMET, 'GET', this.onReceivedStuff.bind(this));
  }

  onReceivedStuff(stuff) {
    this.updateContent(stuff.result);
  }

  updateContent(newContent) {
    this.setState({
      content: newContent
    });
  }

  onUpdateSearchField(ev) {
    this.setState({
      searchString: ev.target.value
    });
  }

  onSelectListEntry(entry) {
    this.setState({
      currentEntry: entry
    });
  }

  render() {
    return (
      <div className="app">
        <input type="text" onChange={this.onUpdateSearchField.bind(this)} ></input>
        <Info entry={this.state.currentEntry} />
        <List
          content={this.state.content}
          filter={this.state.searchString}
          onSelect={this.onSelectListEntry.bind(this)}
        />
      </div>
    );
  }
}
