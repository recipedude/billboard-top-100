var billboard = require('../billboard-top-100.js').getChart
var listCharts = require('../billboard-top-100.js').listCharts

listCharts(function (err, data) {
  console.log('=== listCharts - start ===')
  if (err) {
    console.log('ERROR!')
    console.log(err)
  } else {
    console.log(JSON.stringify(data, null, 2))
  }
  console.log('--- listCharts - finish ---\n\n')
})

billboard('hot-100', '2016-11-19', function (err, songs) {
  console.log('=== hot-100 test - start ===')
  if (err) {
    console.log('ERROR!')
    console.log(err)
  } else {
    // check if first rank is present
    if (songs[0].rank !== '1') {
      console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
      console.log('FAIL!!! - Rank 1 is missing!')
      console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    }
    console.log(JSON.stringify(songs, null, 2))
  }
  console.log('--- hot-100 - finish ---')
})
