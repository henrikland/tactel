import '../vendor/react.js';
import './Info.css';

export default class Info extends React.Component {
  calculateApk() {
    const pct   = parseFloat(this.props.entry.Alkoholhalt[0]) / 100;
    const vol   = parseFloat(this.props.entry.Volymiml[0]) / 10;
    const price = parseFloat(this.props.entry.Prisinklmoms[0]);

    return (price / (pct * vol)).toFixed(2);
  }

  shouldComponentUpdate(newProps) {
    return this.props.entry !== newProps.entry;
  }

  render() {
    return (
      <div className="info">
        {this.props.entry &&
          <div>
            <div className="info-name">{this.props.entry.Namn[0]}</div>
            <div className="info-price">{this.props.entry.Prisinklmoms[0]} kr inklusive moms</div>
            <div className="info-apk">
              Alkohol per krona: {this.calculateApk()} kronor per centiliter ren sprit.
            </div>
          </div>
        }
      </div>
    );
  }
}
