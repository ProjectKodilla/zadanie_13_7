var fs = require('fs')
var colors = require('colors')

fs.readdir('./', 'utf-8', function (err, data) {
  if (err) throw err
  console.log('Zawartość katalogu zapisano do pliku nowy.txt'.blue)
  fs.writeFile('./nowy.txt', data, function (err) {
    if (err) throw err
    console.log('Dane po zapisie: ' + data)
  })
})
