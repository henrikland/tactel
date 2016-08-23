import '../vendor/react.js';
import './Info.css';

export default class Info extends React.Component {
  render() {
    return (
      <div className="info">
        {this.props.entry && this.props.entry.name}
      </div>
    );
  }
}
