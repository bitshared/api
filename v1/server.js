// Menangkap pesan yang dikirim dari main thread

onmessage = function(event) {
    console.log('Received from main thread v3:', event.data);
    disk()
    // Kirim balasan kembali ke main thread
    postMessage('Hello from Worker!');
};

function disk(){
    console.log("disk")
}