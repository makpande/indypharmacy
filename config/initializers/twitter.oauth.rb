TWITTER = OAuth::Consumer.new(
  Rails.application.secrets.twitter_consumer_key,
  Rails.application.secrets.twitter_consumer_secret,
  authorize_path: '/oauth/authenticate',
  site: 'https://api.twitter.com'
)


# boilerplate code to set up Twitter's Oauth (see tokens_controller for auth methodology)
