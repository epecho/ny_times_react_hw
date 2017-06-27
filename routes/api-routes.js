const Article = require('./models/Article.js')
const app = moduel.exports{

  app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
  });

  // Route to get all saved articles
  app.get("/api/saved", function(req, res) {

    Article.find({})
      .exec(function(err, doc) {

        if (err) {
          console.log(err);
        }
        else {
          res.send(doc);
        }
      });
  });

}
// Main "/" Route. This will redirect the user to our rendered React application
