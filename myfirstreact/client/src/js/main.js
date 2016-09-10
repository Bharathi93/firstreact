var React=require('react');
var ReactDOM=require('react-dom');
var ChildComp = require('./component/ChildComp');
var Sibling = require('./component/Sibling');
var MainComponent=React.createClass({

  render:function()
  {
    return(
      <div>
        <h2>Hello from Parent</h2>
        <ChildComp data="This is child"/>
        <Sibling data4="This is Sibling"/>
      </div>
    );
  }
});

ReactDOM.render(<MainComponent/>,document.getElementById('app'));
