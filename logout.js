app.get('/logout', (req, res) => {
    req.logout(() => {
      res.redirect('/');
    });
  });
  