var Yelp = React.createClass({displayName: "Yelp",
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
      paddingTop: 7,
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
      width: '40%',
      // padding: '10px',
      height: 150,
      position: 'relative',
      minHeight: '1px',
      float: 'right',
    };

    var photo = {
      position: 'relative',
      height: 150,
      display: 'inline-block',
    };

    return (
      React.createElement("div", {style: s},
        React.createElement("div", {style: lefthalf},
          React.createElement("div", {style: gallery},
            React.createElement("table", null,
              React.createElement("tr", null,

                this.props.img.map(function(image) {
                  return (
                    React.createElement("td", null, React.createElement("img", {style: photo, src: image, alt: ""}))
                  );
                })

              )
            )
          )
        ),
        React.createElement("div", {style: righthalf},
          React.createElement("div", {style: list}, React.createElement("b", null, this.props.line1)),
          React.createElement("div", {style: list}, this.props.line2),
          React.createElement("div", {style: list}, this.props.line3),
          React.createElement("div", {style: list}, this.props.line4)
        ),

        React.createElement("div", null,
         React.createElement("div", {style: arrow},
            React.createElement("a", {href: this.props.link, target: "blank"}, this.props.tab, "   ▶")
          )
        )
      )
    );
  }
});

// var Embedded = React.createClass({displayName: "Embedded",
//   render: function() {
//     var s = {
//       maxWidth: 450,
//       width: '100%',
//       border: '1px solid rgba(0, 0, 0, .08)',
//       backgroundColor: '#f6f7f8',
//     };

//     return (
//       React.createElement("div", null,
//         React.createElement("div", {style: s},
//           React.createElement("iframe", {width: s.width, height: "300", src: this.props.url, frameBorder: "0", allowFullScreen: true})
//         )
//       )
//     );
//   }
// });

// key from getSiteStuff
var mapping = {
  yelp: yelpFunc,
  // google: googleFunc,
  // amazon: amazonFunc,
  // github: githubFunc,
  // youtube: youtubeFunc,
};

function getSiteStuff(url) {
  var stuff = url.match(/(http)?\w?:\/\/\w+?\.(.+?)\..+?\/(.+)/);
  return [stuff[2], stuff[3]];
}

// function youtubeFunc(url, asd) {
//   var bla = getSiteStuff(url)[1].replace('watch?v=', '');
//   return React.createElement(Embedded, {
//     url: bla,
//   });
// }

function yelpFunc(url, asd) {
  var name = asd.find('.biz-page-title.embossed-text-white').first().text().trim();
  var ratingRaw = asd.find('.star-img.star-img').first().attr('title');
  var rating = parseFloat(ratingRaw.slice(0, ratingRaw.indexOf(' ')));
  var price = asd.find('.business-attribute.price-range').first().text();
  var phone = asd.find('.biz-phone').text().trim();

  // TODO: parse more
  var hours = asd.find('.hour-range').text();
  var imageUrls = [].slice.call(asd.find('.showcase-photo-box').map(function(i, el) {
    return $(this).children().children().attr('src');
  }));

  return React.createElement(Yelp, {
    line1: name,
    line2: rating + ' stars',
    line3: hours,
    line4: phone,
    img: imageUrls,
    link: url,
    tab: "yelp.ca",
  });
}

// function amazonFunc(url, asd) {
//   var name = asd.find('#productTitle').text();
//   var author = $('.author.notFaded>a').text();
//   var ratingRaw = asd.find('.a-icon.a-icon-star').first().attr('class');
//   var rating = parseFloat(ratingRaw.slice(ratingRaw.lastIndexOf('-') + 1));
//   var price = asd.find('.a-size-medium.a-color-price.offer-price.a-text-normal').text();

//   var imageUrls = [asd.find('#img-canvas').children().attr('src').trim()];

//   return React.createElement(Yelp, {
//     line1: name,
//     line2: author,
//     line3: rating + ' stars',
//     line4: price,
//     img: imageUrls,
//     link: url,
//     tab: "amazon.ca",
//   });
// }

var urls = [];

function getNews(a, b) {
  return b.filter(function(x) {
    return a.indexOf(x) < 0;
  });
}

function doChange() {
  var els = [].slice.call(document.querySelectorAll('._553k'));
  var allUrls = els.map(function(el) {
    return el.href;
  });
  var newUrls = getNews(urls, allUrls);

  if (newUrls.length !== 0) {
    safari.self.tab.dispatchMessage('getPages', newUrls);
  }
  urls = allUrls;
}

function appendPreview(url, html, $container) {
  var stuff = getSiteStuff(url);
  var func = stuff[0];
  var moreStuff = stuff[1];

  var actualFunc = mapping[func];
  if (!actualFunc) {
    return;
  }

  var aa = actualFunc(url, $(html));

  $container.append(React.renderToString(aa));
}

if (window.top === window) {
  safari.self.addEventListener("message", function(event) {
    if (event.name === 'pageReturned') {
      var html = event.message[0];
      var url = event.message[1];

      var els = [].slice.call(document.querySelectorAll('._553k'));
      var elUrls = els.map(function(el) {
        return el.href;
      });

      var idx = elUrls.indexOf(url);
      if (idx < 0) {
        throw 'idx < 0';
      }
      // var $container = $(els[idx].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
      var $container = $(els[idx].parentNode.parentNode.parentNode.parentNode);
      $container.html('');
      appendPreview(url, html, $container);
    } else {
      throw 'bad event ' + event.name;
    }
  });
  setInterval(doChange, 500);
}
