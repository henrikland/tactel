import '../vendor/react.js';
import List from './List.js';
import Info from './Info.js';
import Article from './Article.js';
import request from '../services/http.js';
import config from '../config/config.js';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content:          [],
      currentEntry:     null,
      searchString:     '',
      filterEcological: false,
      filterKosher:     false,
      filterEthical:    false,
      itemsPerPage:     100,
      currentPage:      0
    };
  }

  componentDidMount() {
    request(config.URL, 'GET', this.onReceivedContent.bind(this));
  }

  onReceivedContent(content) {
    this.updateContent(content.artiklar.artikel.map(obj => {
      return new Article(obj);
    }));
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

  onChangeCheckbox(ev) {
    switch (ev.target.id) {
      case 'ecological':
        this.setState({
          filterEcological: ev.target.checked
        });

        break;
      case 'kosher':
        this.setState({
          filterKosher: ev.target.checked
        });

        break;
      case 'ethical':
        this.setState({
          filterEthical: ev.target.checked
        });

        break;
    }
  }

  onClickPrev() {
    this.setState({
      currentPage: Math.max(0, this.state.currentPage - 1)
    });
  }

  onClickNext() {
    this.setState({
      currentPage: Math.min(this.state.currentPage + 1, this.state.content.length / this.state.itemsPerPage)
    });
  }

  render() {
    const startIdx = this.state.currentPage * this.state.itemsPerPage;
    const endIdx   = startIdx + this.state.itemsPerPage;

    return (
      <div className="app">
        <div className="search">
          Sök:
          <input className="search-input"type="text" onChange={this.onUpdateSearchField.bind(this)} ></input>
        </div>
        <div className="toggles">
          <span className="toggle"><input id="ecological" type="checkbox" onChange={this.onChangeCheckbox.bind(this)} />Endast Ekologiskt</span>
          <span className="toggle"><input id="kosher" type="checkbox" onChange={this.onChangeCheckbox.bind(this)} />Endast Kosher</span>
          <span className="toggle"><input id="ethical" type="checkbox" onChange={this.onChangeCheckbox.bind(this)} />Endast Etiskt</span>
        </div>
        <div>
          <button onClick={this.onClickPrev.bind(this)}>Bakåt</button>
          {this.state.currentPage + 1}
          <button onClick={this.onClickNext.bind(this)}>Framåt</button>
          Visar {startIdx + 1} - {endIdx} av {this.state.content.length}
        </div>
        <Info entry={this.state.currentEntry} />
        <List
          content={this.state.content}
          startIndex={startIdx}
          endIndex={endIdx}
          filter={this.state.searchString}
          onSelect={this.onSelectListEntry.bind(this)}
          filterEcological={this.state.filterEcological}
          filterKosher={this.state.filterKosher}
          filterEthical={this.state.filterEthical}
        />
      </div>
    );
  }
}
