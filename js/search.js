let documents = [{
  "name": "Lunr",
  "text": "Like Solr, but much smaller, and not as bright."
}, {
  "name": "React",
  "text": "A JavaScript library for building user interfaces."
}, {
  "name": "Lodash",
  "text": "A modern JavaScript utility library delivering modularity, performance & extras."
}]

let idx = lunr(function () {
  this.field('text')
  this.ref('name')

  documents.forEach(function (doc) {
    this.add(doc)
  }, this)
})

idx.search("bright")