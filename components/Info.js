import '../vendor/react.js';
import './Info.css';

export default class Info extends React.Component {
  calculateApk() {
    const article = this.props.article;

    return (((article.alcoholPercent / 100) * (article.volumeMl / 10)) / article.price).toFixed(2);
  }

  shouldComponentUpdate(newProps) {
    return this.props.article !== newProps.article;
  }

  render() {
    return (
      <div className="info">
        {this.props.article &&
          <div>
            <div className="info-name">{this.props.article.name}</div>
            <div className="info-price">{this.props.article.price} kr inklusive moms</div>
            <div className="info-volume">{this.props.article.volumeMl / 10} cl</div>
            <div className="info-alcohol">{this.props.article.alcoholPercent} volymprocent alkohol</div>
            <div className="info-apk">
              Alkohol per krona: {this.calculateApk()} centiliter ren sprit per krona.
            </div>
            {
              this.props.article.ecological &&
              <img src="assets/leaf.jpg" title="Eco!"/>
            }
            {
              this.props.article.kosher &&
              <img src="assets/david.png" title="Kosher!"/>
            }
            {
              this.props.article.ethical &&
              <img src="assets/heart.png" title="Good!"/>
            }
          </div>
        }
      </div>
    );
  }
}
