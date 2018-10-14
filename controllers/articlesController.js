const db = require("../models");

axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {api_key: "9b3adf57854f4a19b7b5782cdd6e427a", req.query}).then(function(results) {});


// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    axiox.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {api_key: "9b3adf57854f4a19b7b5782cdd6e427a", req.query})
    .then(articles => { 
    db.Article
      .create(aricles);  
      .find(req.query);
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    })
  },
  findById: function(req, res) {
    db.Article
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Article
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
