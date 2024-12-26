// Menangkap pesan yang dikirim dari main thread
onmessage = function(event) {
    console.log('Received from main thread:', event.data);

    // Kirim balasan kembali ke main thread
    postMessage('Hello from Worker!');
};
