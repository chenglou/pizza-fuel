var App = React.createClass({
  render: function() {
    var s = {
      width: 450,
      height: 150,
      border: '1px solid rgba(0, 0, 0, .08)',
      backgroundColor: '#f6f7f8',
    };

    var url = {
      height: 25,
      width: 125,
      left: 300,
      lineHeight: '27px',
      textAlign: 'right',
    };

    var arrow = {
      borderTop: '1px solid #ccc',
    };

    var info = {
      height: 124,
      width: 150,
      left: 300,
    };

    var gallery = {
      height: 124,
      outline: '1px solid #CCC',
      overflowX: 'scroll',
      overflowY: 'hidden',
    };

    var list = {
      paddingLeft: '8px',
      paddingRight: '5px',
      paddingTop: '4px',
      paddingBottom: '6px',
      borderColor: '#ccc',
    };

    var lefthalf = {
      width: '60%',
      position: 'relative',
      minHeight: '1px',
      float: 'left',
    };

    var righthalf = {
      width: '40%',
      position: 'relative',
      minHeight: '1px',
      float: 'right',
    };


    var photo = {
      position: 'relative',
      height: 124,
      display: 'inline-block',
    };

    return (
      <div style={s}>
        <div style={lefthalf}>
          <div style={gallery}>
            <table>
              <tr>
                <td><img style={photo} src="./img/food.jpg" alt="" /></td>
                <td><img style={photo} src="./img/food1.jpg" alt="" /></td>
                <td><img style={photo} src="./img/food2.jpg" alt="" /></td> 
              </tr>
            </table>
          </div>
        </div>
        <div style={righthalf}>
          <div style={list}><b>Weinkeller</b></div>
          <div style={list}>5 stars</div>
          <div style={list}>opening hours</div>
          <div style={list}>(123) 767-1234</div>
        </div>

        <div>
          <div className="col-md-9" style={arrow}>&nbsp;</div>
          <div className="col-md-3" style={arrow}>
            <a href="http://www.yelp.ca/biz/weinkeller-niagara-falls?hrid=K1TvWu8P5sz99KMrtbemfg" target="blank">yelp.ca &nbsp; ▶</a>
          </div>
        </div>
      </div>
    );
  }
});

React.render(<App></App>, document.body);
