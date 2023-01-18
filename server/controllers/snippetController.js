const db = require('../models/userModel');

const snippetController = {};

snippetController.getSnippets = (req, res, next) => {
  const str = `SELECT * FROM Snippets WHERE username = '${req.body.username}'`;
  db.query(str, (err, results) => {
    res.locals.snippets = results.rows;
    return next();
  });
};

snippetController.createSnippet = (req, res, next) => {
  const { username, title, code } = req.body;
  const str = `INSERT INTO Snippets (username, title, code) VALUES ('${username}', '${title}', '${code}')`;
  db.query(str, (err, results) => {
    if (!err) {
      return next();
    }
    return next();
  });
};

snippetController.deleteSnippet = (req, res, next) => {
  const str = `DELETE FROM Snippets WHERE id = '${req.body.id}'`;
  db.query(str, (err, results) => next());
};

snippetController.editSnippet = (req, res, next) => {
  db.query(str, (err, results) => {
    const str = `UPDATE Snippets SET code = '${req.body.code}' WHERE id = '${req.body.id}' `;
    db.query(str, (err, results) => next());
  });
};

module.exports = snippetController;
