module.exports = {
  domain: 'example.com',
  lang: 'ja',
  encoding: 'UTF-8',
  get locale() {
    return `${this.lang}_${this.region}`
  },
  region: 'JP',
  scheme: 'http',
  siteTitle: 'Vanilla Output Code',
  get siteUrl() {
    return `${this.scheme}://${this.domain}`
  },
  siteDescription: 'site description',
}
