// Menangkap pesan yang dikirim dari main thread
onmessage = function(event) {
    console.log('Received from main thread v2:', event.data);
    console.log("disk")
    // Kirim balasan kembali ke main thread
    postMessage('Hello from Worker!');
};
