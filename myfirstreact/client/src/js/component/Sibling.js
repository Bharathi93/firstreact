var React = require('react');
var Sibling = React.createClass({
  render:function(){
    return(
      <div>
      <h2>{this.props.data4}</h2>
      </div>
    );
  }
});
module.exports = Sibling;
