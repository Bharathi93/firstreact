var React = require('react');
var GrandChild = React.createClass({
  render:function(){
    return(
      <div>
      <h2>{this.props.data2}</h2>
      <h3>{this.props.data3}</h3>
      </div>
    );
  }
});
module.exports = GrandChild;
