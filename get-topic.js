module.exports = GetTopic

function GetTopic (db) {
  db.getTopic = db.getTopic || getTopic.bind(null, db)

  return db
}

function getTopic (db, topic) {
  return db.allDocs({
    startkey: topic,
    endkey: topic + '\xff',
    include_docs: true
  })
}