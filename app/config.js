export const config = {
  headless: false, // False jika ingin melihat tampilan browser ketika program dijalankan, dalam beberapa kondisi, menampilkan browser dibutuhkan
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', // Berisikan path file chrome.exe di komputer lokal Anda
  userDataDir:
    'C:\\Users\\HP\\AppData\\Local\\Google\\Chrome\\User Data\\Default', // Berisikan user data chrome profile path di komputer lokal Anda
  chromeProfileDir: 'Default', // Berisikan nama folder chrome profile di komputer lokal Anda
  createExcel: true, // True jika ingin menyimpan hasil scraping ke file excel
  skipDuplicate: false, // False jika Anda ingin tetap menyimpan URL yang berbeda tetapi masih terdeteksi backlink judol yang sama ke file excel
  showLinkJudol: true, // True untuk menampilkan link judol yang terdeteksi pada website tertentu ketika program dijalankan
};

/*
Cara Mendapatkan executablePath dan userDataDir :
1. Buka Google Chrome
2. ketik di kolom pencarian: chrome://version/
3. copy-paste bagian Executable Path dan Profile Path

Contoh :
- executablePath: C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe
- userDataDir: C:\\Users\\PC\\AppData\\Local\\Google\\Chrome\\User Data\\Default
- chromeProfileDir: Default

Note : Perlu diperhatikan jika Anda menggunakan backslash, gunakan double backslash!
*/
