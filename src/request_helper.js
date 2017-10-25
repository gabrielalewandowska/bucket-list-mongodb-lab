var requestHelper = {
  getRequest: function (url, callback) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)

    xhr.addEventListener('load', function () {
      var jsonString = xhr.responseText
      var data = JSON.parse(jsonString)
      callback(data)
    })

    xhr.send()
  },
  postRequest: function (url, callback, payload) {
    console.log(url);
    var xhr = new XMLHttpRequest()
    xhr.open('POST', url)

    xhr.addEventListener('load', function () {
      if (xhr.status !== 200) return
      var jsonString = xhr.responseText
      var data = JSON.parse(jsonString)
      callback(data)
    })

    xhr.setRequestHeader('Content-Type', 'application/json')

    var jsonString = JSON.stringify(payload)

    xhr.send(jsonString);
  }
}

module.exports = requestHelper
