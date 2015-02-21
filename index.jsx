var App = React.createClass({
  render: function() {
    var s = {
      width: 450,
      height: 150,
      outline: '1px solid black',
    };

    var bar = {
      height: 25,
      width: 450,
      top: 125,
      outline: '1px solid black',
    };

    var url = {
      height: 25,
      width: 100,
      left: 325,
      outline: '1px solid black',
      lineHeight: '27px',
      textAlign: 'right',
    };

    var arrow = {
      height: 25,
      width: 20,
      left: 430,
      outline: '1px solid black',
      lineHeight: '30px',
    };

    var info = {
      height: 124,
      width: 125,
      left: 325,
      outline: '1px solid black',
    };

    var gallery = {
      height: 124,
      width: 324,
      outline: '1px solid black',
      overflow: 'hidden',
    };

    var name = {
      outline: '1px solid black',
      width: 125,
      height: 25,
      top: 0,
      lineHeight: '30px',
    };

    var rating = {
      outline: '1px solid black',
      width: 125,
      height: 25,
      top: 25,
      lineHeight: '30px',
    };

    var opening = {
      outline: '1px solid black',
      width: 125,
      height: 25,
      top: 50,
      lineHeight: '30px',
    };

    var phone = {
      outline: '1px solid black',
      width: 125,
      height: 25,
      top: 75,
      lineHeight: '30px',
    };

    return (
      <div style={s}>
        <div style={gallery}>
          <img src="food.jpg" alt="" width="500" height="325" />
        </div>

        <div style={info}>
          <div style={name}>Weinkeller</div>
          <div style={rating}>5 stars</div>
          <div style={opening}>opening hours</div>
          <div style={phone}>(123) 767-1234</div>
        </div>

        <div style={bar}>
          <div>
            <a style={url} href="yelp.ca">yelp.ca</a>
            <div style={arrow}>▶</div>
          </div>
        </div>
      </div>
    );
  }
});

React.render(<App></App>, document.body);
