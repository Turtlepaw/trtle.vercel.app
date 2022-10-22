function MultipleLinks(destination, ...sources) {
  return sources.map(e => ({
    source: e,
    destination,
    permanent: true
  }))
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async redirects() {
    return [
      ...MultipleLinks("https://discord.gg/2Q434HUG2J", "/discord", "/server"),
      ...MultipleLinks("https://www.reddit.com/user/Turtlepaw422", "/reddit"),
      ...MultipleLinks("https://github.com/TurtlePaw", "/github", "/git"),
      ...MultipleLinks("https://twitter.com/Turtlepaw422", "/twitter"),
      ...MultipleLinks("https://www.youtube.com/channel/UCXAp932RdDHOd-rqsAyOTcw", "/youtube", "/yt"),
    ]
  }
}

module.exports = nextConfig
