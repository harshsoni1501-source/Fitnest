// script.js - Fitnest Demo Payment Flow
(function(){
  const paymentForm = document.getElementById('paymentForm');
  const methodFields = document.getElementById('methodFields');
  const payBtn = document.getElementById('payBtn');
  const payBtnText = document.getElementById('payBtnText');

  // get total from URL param
  const urlParams = new URLSearchParams(location.search);
  const total = urlParams.get('total') || '549';
  document.getElementById('total').textContent = `₹${total}`;

  function renderFields(method){
    methodFields.innerHTML = '';
    if(method === 'card'){
      methodFields.innerHTML = `
        <label class="small">Card Number</label>
        <input class="input" type="text" placeholder="4242 4242 4242 4242" required>
        <div style="display:flex;gap:8px">
          <input class="input" type="text" placeholder="MM/YY" style="flex:1" required>
          <input class="input" type="text" placeholder="CVV" style="width:110px" required>
        </div>
      `;
    } else if(method === 'upi'){
      methodFields.innerHTML = `
        <label class="small">UPI ID</label>
        <input class="input" type="text" placeholder="example@upi" required>
      `;
    } else {
      methodFields.innerHTML = `
        <label class="small">Select Bank</label>
        <select class="select" required>
          <option value="">Choose a bank...</option>
          <option>HDFC</option><option>ICICI</option><option>State Bank</option><option>Axis Bank</option>
        </select>
      `;
    }
  }

  // render initial fields
  const initial = document.querySelector('input[name="method"]:checked').value;
  renderFields(initial);

  document.querySelectorAll('input[name="method"]').forEach(radio => {
    radio.addEventListener('change', e => renderFields(e.target.value));
  });

  // simulate payment process
  paymentForm.addEventListener('submit', async e => {
    e.preventDefault();

    if(!paymentForm.checkValidity()){
      paymentForm.reportValidity();
      return;
    }

    payBtn.disabled = true;
    payBtnText.innerHTML = `<span class="spinner"></span> Processing...`;

    await new Promise(r => setTimeout(r, 1800)); // fake delay

    // Simulate payment success
    const orderId = 'FIT' + Date.now();
    const params = new URLSearchParams({ orderId, total });
    location.href = `order-confirm.html?${params.toString()}`;
  });

})();
