var React = require('react');
var GrandChild = require('./GrandChild');
var ChildComp = React.createClass({
  render:function(){
    return(
      <div>
      <GrandChild data2={this.props.data} data3= "This is GrandChild"/>
      </div>
    );
  }
});
module.exports = ChildComp;
