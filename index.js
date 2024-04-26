function Display(value) {
    document.getElementById('display').value += value;
  }
  
  function Clear() {
    document.getElementById('display').value = '';
  }
  
  function Result() {
    var result = eval(
    document.getElementById('display').value
    );
    document.getElementById('display').value = result;
  }


  