function enter() {
  var fname = document.getElementById('first_name').value;

  var html = 'Hello <b>' + fname + '</b> ';

  document.getElementById('result').innerHTML = html;
}
document.getElementById('say').addEventListener('click', enter);