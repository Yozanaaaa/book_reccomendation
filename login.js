// app.js or server.js

// Dashboard route
app.get('/dashboard', (req, res) => {
    if (!req.isAuthenticated()) {
      return res.redirect('/');
    }
  
    // Display the dashboard with user information
    res.send(`
      <html>
        <head>
          <title>User Dashboard</title>
        </head>
        <body>
          <h1>Welcome to Your Dashboard, ${req.user.displayName}</h1>
          <p>Email: ${req.user.email}</p>
          <a href="/logout">Logout</a>
        </body>
      </html>
    `);
  });
  