const { WebClient } = require("@slack/web-api");
const express = require('express')
const app = express();

app.get('/notify', (req, res) => {
  const channel = req.query.channel;
  const message = req.query.message || 'Привет! Кто чем занимается сегодня?';
  const client = new WebClient("xoxb-468242695412-2394252523313-F1U34u14bNYWRv5ohoONKAFP");
  console.log(req, 'req');
  if (!channel) return;

  client.chat.postMessage({
    token: "xoxb-468242695412-2394252523313-F1U34u14bNYWRv5ohoONKAFP",
    channel: `#${channel}`,
    text: message,
  })
    .then(result => console.log(result))
    .then(() => res.status(200).json({
      message: 'Message sent successfully',
    }))
    .catch(err => {
      console.error(err, 'error');
      res.status(500).json({
        error: err.message,
      });
    });
});

app.get('/notify-test', (req, res) => {

});

app.get('/say', (req, res) => {
  res.send('say something');
});

app.get('/', (req, res) => {
  res.send('bklasjdfklj');
});

app.listen(process.env.PORT || 8000, () => {
  console.log('Example app listening on port 8000!')
});
