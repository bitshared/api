// Meminta izin untuk menampilkan notifikasi
if (Notification.permission !== "granted") {
    Notification.requestPermission();
}

// Membuat Web Worker
const worker = new Worker('./worker.js');

// Kirim pesan ke worker saat tombol diklik
document.getElementById('sendMessageBtn').addEventListener('click', function() {
    worker.postMessage('Hello Worker!');
});

// Mendengarkan balasan dari worker
worker.onmessage = function(event) {
    console.log('Received from worker:', event.data);

    // Menampilkan notifikasi saat menerima balasan
    if (Notification.permission === "granted") {
        new Notification('Message from Worker', {
            body: event.data,
            icon: 'android-chrome-192x192.png'
        });
    }
};