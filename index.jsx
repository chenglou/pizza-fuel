var Yelp = React.createClass({
  render: function() {
    var s = {
      maxWidth: 450,
      width: '100%',
      height: 180,
      border: '1px solid rgba(0, 0, 0, .08)',
      borderRadius: '5px',
      backgroundColor: '#f6f7f8',
    };

    var arrow = {
      borderTop: '1px solid #ccc',
      position: 'relative',
      float: 'right',
      width: '40%',   
      textAlign: 'right',
    };

    var info = {
      height: 150,
      width: 150,
      left: 300,
    };

    var gallery = {
      height: 150,
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
      maxWidth: '60%',
      height: 150,
      position: 'relative',
      minHeight: '1px',
      float: 'left',
    };

    var righthalf = {
      minWidth: '40%',
      maxWidth: '100%',
      padding: '10px',
      height: 150,
      position: 'relative',
      minHeight: '1px',
      float: 'left',
    };


    var photo = {
      position: 'relative',
      height: 150,
      display: 'inline-block',
    };

    return (
      <div style={s}>
        <div style={lefthalf}>
          <div style={gallery}>
            <table>
              <tr>
              {
                this.props.img.map(function(image) {
                  return (
                    <td><img style={photo} src={image} alt="" /></td>              
                  );
                })
              }
              </tr>
            </table>
          </div>
        </div>
        <div style={righthalf}>
          <div style={list}><b>{this.props.line1}</b></div>
          <div style={list}>{this.props.line2}</div>
          <div style={list}>{this.props.line3}</div>
          <div style={list}>{this.props.line4}</div>
        </div>

        <div>
         <div style={arrow}>
            <a href={this.props.link} target="blank">{this.props.tab} &nbsp; ▶</a>
          </div>
        </div>
      </div>
    );
  }
});

var Embedded = React.createClass({
  render: function() {
    var s = {
      maxWidth: 450,
      width: '100%',
      border: '1px solid rgba(0, 0, 0, .08)',
      backgroundColor: '#f6f7f8',
    };

    return (
      <div>
        <div style={s}>
          <iframe width={s.width} height="300" src="https://www.youtube.com/embed/2vjPBrBU-TM?rel=0" frameBorder="0" allowFullScreen></iframe>
        </div>
        <div style={s}>
          <iframe width={s.width} height="300" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11185.66165095139!2d-73.57286695000005!3d45.5017156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a46510f9635%3A0xdde4da9200a4ae74!2sMcGill+University!5e0!3m2!1sen!2sca!4v1424560691109" frameBorder="0"></iframe>
        </div>
      </div>
    );
  }
});




var Main = React.createClass({
  render: function() {
    var foodImages = ['./img/food.jpg', './img/food1.jpg', './img/food2.jpg'];
    var bookImages = ['./img/book.jpg', './img/book1.jpg'];
    
    return (
      <div>
        <Yelp line1="Weinkeller" 
              line2="5 stars" 
              line3="Opening hours" 
              line4="(123) 767-1234" 
              img={foodImages}
              link="http://www.yelp.ca/biz/weinkeller-niagara-falls?hrid=K1TvWu8P5sz99KMrtbemfg"
              tab="yelp.ca" />
        <Embedded />

        <Yelp line1="Three Day Road" 
              line2="by Joseph Boyden" 
              line3="5 Stars" 
              line4="CDN$ 14.44 Paperback" 
              img={bookImages}
              link="http://www.amazon.ca/Three-Day-Road-Joseph-Boyden/dp/0143056956/ref=sr_1_1?s=books&ie=UTF8&qid=1424562138&sr=1-1&keywords=Three+day+road" 
              tab="amazon.ca" />
        
      </div>
    );
  }
});


React.render(<Main />, document.body);
