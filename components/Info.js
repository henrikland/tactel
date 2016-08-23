import '../vendor/react.js';
import './Info.css';

export default class Info extends React.Component {
  render() {
    return (
      <div className="info">
        {this.props.entry &&
          <div>
            <div className="info-name">{this.props.entry.Namn}</div>
            <div className="info-price">{this.props.entry.Prisinklmoms} kr inklusive moms</div>
          </div>
        }
      </div>
    );
  }
}
