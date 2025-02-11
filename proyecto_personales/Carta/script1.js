function openEnvelope() {
    var envelope = document.getElementById('envelope');
    envelope.classList.add('open');
    setTimeout(function() {
      window.location.href = 'carta.html';
    }, 1000000);
  }
  