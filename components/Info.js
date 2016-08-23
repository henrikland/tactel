import '../vendor/react.js';
import './Info.css';

export default class Info extends React.Component {
  calculateApk() {
    const entry = this.props.entry;

    return (entry.price / ((entry.alcoholPercent / 100) * (entry.volumeMl / 10))).toFixed(2);
  }

  shouldComponentUpdate(newProps) {
    return this.props.entry !== newProps.entry;
  }

  render() {
    return (
      <div className="info">
        {this.props.entry &&
          <div>
            <div className="info-name">{this.props.entry.name}</div>
            <div className="info-price">{this.props.entry.price} kr inklusive moms</div>
            <div className="info-apk">
              Alkohol per krona: {this.calculateApk()} kronor per centiliter ren sprit.
            </div>
            {
              this.props.entry.ecological &&
              <img src="assets/leaf.jpg" title="Eco!"/>
            }
            {
              this.props.entry.kosher &&
              <img src="assets/david.png" title="Kosher!"/>
            }
            {
              this.props.entry.ethical &&
              <img src="assets/heart.png" title="Good!"/>
            }
          </div>
        }
      </div>
    );
  }
}
