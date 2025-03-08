// Fungsi wait untuk menunda kode tertentu sebelum dijalankan
function wait(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
}

// Fungsi countdown untuk melakukan wait sambil menampilkan pesan
async function waitWithMsg(seconds) {
  process.stdout.write(`Delay ${seconds} detik`);
  for (let i = 1; i <= seconds; i++) {
    process.stdout.write('.');

    await wait(1000); // Menunggu 1 detik (1000 milidetik)
  }
  process.stdout.write('\n');
}

export { waitWithMsg, wait };
