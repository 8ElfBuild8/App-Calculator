
function sum(a, b) {
      return a + b;
    }
    function subtract(a, b) {
      return a - b;
    }
    function showSum() {
      const a = parseFloat(document.getElementById('num1').value);
      const b = parseFloat(document.getElementById('num2').value);
      if (!isNaN(a) && !isNaN(b)) {
        document.getElementById('result').textContent = "Sum: " + sum(a, b);
        document.getElementById('total').textContent = "Total: " + sum(a, b);
      } else {
        document.getElementById('result').textContent = "Please enter two numbers!";
        document.getElementById('total').textContent = "Total: ";
      }
    }
    function showSubtract() {
      const a = parseFloat(document.getElementById('num1').value);
      const b = parseFloat(document.getElementById('num2').value);
      if (!isNaN(a) && !isNaN(b)) {
        document.getElementById('result').textContent = "Difference: " + subtract(a, b);
        document.getElementById('total').textContent = "Total: " + subtract(a, b);
      } else {
        document.getElementById('result').textContent = "Please enter two numbers!";
        document.getElementById('total').textContent = "Total: ";
      }
    }
	
	    function multiply(a, b) {
      return a * b;
    }
    function divide(a, b) {
      // Handle division by zero
      if (b === 0) {
        return "Cannot divide by zero!";
      }
      return a / b;
    }
    function showMultiply() {
      const a = parseFloat(document.getElementById('num1').value);
      const b = parseFloat(document.getElementById('num2').value);
      if (!isNaN(a) && !isNaN(b)) {
        document.getElementById('result').textContent = "Product: " + multiply(a, b);
        document.getElementById('total').textContent = "Total: " + multiply(a, b);
      } else {
        document.getElementById('result').textContent = "Please enter two numbers!";
        document.getElementById('total').textContent = "Total: ";
      }
    }
    function showDivide() {
      const a = parseFloat(document.getElementById('num1').value);
      const b = parseFloat(document.getElementById('num2').value);
      if (!isNaN(a) && !isNaN(b)) {
        const result = divide(a, b);
        document.getElementById('result').textContent = "Quotient: " + result;
        document.getElementById('total').textContent = "Total: " + result;
      } else {
        document.getElementById('result').textContent = "Please enter two numbers!";
        document.getElementById('total').textContent = "Total: ";
      }
    }
