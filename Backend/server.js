
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const bodyParser = require('body-parser');
const cors = require('cors');

server.use(cors());
server.use(bodyParser.json());
server.use(middlewares);

// Custom route for registration
server.post('/register', (req, res) => {
  const { email, username, password } = req.body;
  const users = router.db.get('users').value();
  const exists = users.some(u => u.email === email);

  if (exists) {
    res.status(400).json({ error: 'User already exists' });
  } else {
    const id = users.length ? users[users.length - 1].id + 1 : 1;
    const newUser = { id, email, username, password };
    router.db.get('users').push(newUser).write();
    res.status(201).json(newUser);
  }
});

// Authentication middleware
server.post('/login', (req, res) => {
  const { email, password } = req.body;
  const users = router.db.get('users').value();
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.status(200).json({ id: user.id, username: user.username });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Create Story
server.post('/stories', (req, res) => {
  const { title, firstSentence, maxContributions, authorId } = req.body;
  const stories = router.db.get('stories').value();
  const id = stories.length ? stories[stories.length - 1].id + 1 : 1;
  const newStory = { id, title, firstSentence, maxContributions, authorId, completed: false };
  router.db.get('stories').push(newStory).write();
  res.status(201).json(newStory);
});

// Add Contribution
server.post('/contributions', (req, res) => {
  const { storyId, authorId, text, authorName } = req.body;
  const contributions = router.db.get('contributions').value();
  const id = contributions.length ? contributions[contributions.length - 1].id + 1 : 1;

  const newContribution = { id, storyId, authorId, text, authorName };
  router.db.get('contributions').push(newContribution).write();

  // Update story's completion status if necessary
  const story = router.db.get('stories').find({ id: storyId }).value();
  const storyContributions = contributions.filter(c => c.storyId === storyId).length + 1; // Include new contribution
  if (storyContributions >= story.maxContributions) {
    router.db.get('stories').find({ id: storyId }).assign({ completed: true }).write();
  }

  res.status(201).json(newContribution);
});

// Get Stories
server.get('/stories', (req, res) => {
  const stories = router.db.get('stories').value();
  res.status(200).json(stories);
});

// Get Contributions by Story ID
server.get('/contributions', (req, res) => {
  const { storyId } = req.query;
  const contributions = router.db.get('contributions').filter({ storyId: parseInt(storyId) }).value();
  res.status(200).json(contributions);
});

server.use(router);
server.listen(5000, () => {
  console.log('JSON Server is running');
});
