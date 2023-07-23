const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

const getmetaData = (route) => {
    let data;
    switch (route) {
        case '/':
            data = {
                title: "Home"
            }
            break;
            case '/about':
                data = {
                    title: "About"
                }
                break;
                case '/privacy':
                    data = {
                        title: "Privacy"
                    }
                    break;
                    case '/tabs-example':
                        data = {
                            title: "Tabs Example"
                        }
                        break;
    
        default:
            data = {
                title: "Home"
            }
            break;
    }
    return data;
}

// Set the 'views' directory
app.set('views', path.join(__dirname, 'views'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up a route to render the EJS view
app.get('/', (req, res) => {
  // Render the 'index' view (index.ejs) from the 'views' directory
  res.render('index');
});

app.get('/about', (req, res) => {
    // Render the 'index' view (index.ejs) from the 'views' directory
    res.render('index');
  });
  app.get('/privacy', (req, res) => {
    // Render the 'index' view (index.ejs) from the 'views' directory
    res.render('index');
  });
  app.get('/tabs-example', (req, res) => {
    // Render the 'index' view (index.ejs) from the 'views' directory
    res.render('index');
  });
  app.get('/post/:id', (req, res) => {
    // Render the 'index' view (index.ejs) from the 'views' directory
    res.render('index');
  });

// components
app.get('/components/meta', (req, res)=> {
    let route = req.query.route;
    let metaData = getmetaData(route)
    res.render('partials/meta', metaData);
})
app.get('/components/header', (req, res)=> {
    res.render('components/header');
});
app.get('/components/footer', (req, res)=> {
    res.render('components/footer');
});
app.get('/components/header2', (req, res)=> {
    res.render('components/header2');
});
app.get('/components/footer2', (req, res)=> {
    res.render('components/footer2');
});
app.get('/components/home', (req, res)=> {
    res.render('components/home');
});
app.get('/components/about', (req, res)=> {
    let data = {
        id: req.query.id,
        name: req.query.name
    }
    res.render('components/about', data);
});

app.get('/components/privacy', (req, res)=> {
    res.render('components/privacy');
});
app.get('/components/tabs-example', (req, res)=> {
    res.render('components/tabs-example');
});
app.get('/components/tabs/tab1', (req, res)=> {
    res.render('components/tabs/tab1');
});
app.get('/components/tabs/tab2', (req, res)=> {
    res.render('components/tabs/tab2');
});
app.get('/components/tabs/tab3', (req, res)=> {
    res.render('components/tabs/tab3');
});

app.get('/components/post', (req, res)=> {
    console.log(req.query);
    res.render('components/post');
});
// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
