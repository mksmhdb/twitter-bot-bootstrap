// bot features
// due to the Twitter ToS automation of likes
// is no longer allowed, so:
const Twit = require('twit')
const config = require('./config')

const bot = new Twit(config.twitterKeys)
const tweetLyrics = require('./api/tweetLyrics')

setInterval(tweetLyrics, config.twitterConfig.tweetInterval)

