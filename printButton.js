document.getElementById('printButton').addEventListener('click', function() {
    printDiv('resume_wrapper');
});

function printDiv(className) {
    var printContents = document.querySelector('.' + className).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    location.reload(); // Optional: reload to restore event listeners
}

