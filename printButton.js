// Create and show a modal for password input with note and disclaimer
function showPrintModal() {
    // Remove existing modal if present
    var existing = document.getElementById('print-modal');
    if (existing) existing.remove();

    var modal = document.createElement('div');
    modal.id = 'print-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(0,0,0,0.6)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '9999';

    modal.innerHTML = `
      <div style="background:#222;padding:32px 24px 24px 24px;border-radius:16px;max-width:350px;width:100%;box-shadow:0 8px 32px rgba(0,0,0,0.4);text-align:center;">
        <div style='color:#ed1b76;font-weight:bold;margin-bottom:8px;'>Note: Only the developer or owner is authorized to print this resume.</div>
        <div style='color:#fff;font-size:12px;font-weight:normal;margin-bottom:16px;'>Disclaimer: This document is confidential and intended solely for the use of the individual or entity to whom it is addressed. Unauthorized printing, copying, or distribution is strictly prohibited.</div>
        <input id='print-password' type='password' placeholder='Enter password...' style='width:90%;padding:8px 12px;border-radius:6px;border:1px solid #ed1b76;margin-bottom:12px;font-size:16px;'/><br>
        <button id='submit-print' style='background:#ed1b76;color:#fff;border:none;padding:8px 24px;border-radius:6px;font-weight:bold;cursor:pointer;'>Submit</button>
        <button id='cancel-print' style='background:#444;color:#fff;border:none;padding:8px 24px;border-radius:6px;font-weight:bold;cursor:pointer;margin-left:8px;'>Cancel</button>
        <div id='print-error' style='color:#ff4d4d;margin-top:10px;display:none;'>Incorrect password!</div>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('submit-print').onclick = function() {
        var password = document.getElementById('print-password').value;
        if (password === 'RPSV09') {
            modal.remove();
            printDiv('resume_wrapper');
        } else {
            var err = document.getElementById('print-error');
            err.style.display = 'block';
        }
    };
    document.getElementById('cancel-print').onclick = function() {
        modal.remove();
    };
}

document.getElementById('printButton').addEventListener('click', function(e) {
    e.preventDefault();
    showPrintModal();
});

function printDiv(className) {
    var printContents = document.querySelector('.' + className).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    location.reload(); // Optional: reload to restore event listeners
}

