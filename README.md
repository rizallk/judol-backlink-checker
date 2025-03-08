# Judol Backlink Checker
J\*di Online Backlink Checker - Web Scraper untuk mencari website yang terindeks di Google Search Engine yang terkena backlink J\*di Online

## Features
- Search by full domain/sub-domain or TLD/SLD
- Add more gambling keywords for detection
- Scrape up to 100+ websites
- Save results to an Excel file

## Installation 
```bash npm2yarn
npm install
```

## Run
```bash npm2yarn
npm start
```

## Note
Melakukan scraping pada Google Search Engine tidaklah mudah, Google dapat dengan mudah mendeteksinya sebagai bot, artinya Anda harus melakukan beberapa konfigurasi tambahan untuk meminimalisir pendeteksian bot oleh Google. </b>
Ikuti instruksi di bawah ini secara step-by-step hingga selesai.

## Instruction
Sebelum menjalankan program, ada beberapa hal yang perlu diketahui dan dilakukan
1. Siapkan konfigurasi di file config.js
2. Anda membutuhkan Chrome Executable Path dan Chrome Profile Path yang bisa didapatkan dari browser Chrome di komputer lokal Anda
3. Kedua hal tersebut berfungsi untuk mengurangi pendeteksian bot oleh Google
4. Buka Chrome dan masukkan keyword berikut di kolom pencarian
   ```
   chrome://version/
   ```
5. Copy dan Paste isi dari Executable Path dan Profile Path ke config.js </br>
   Contoh :
   ```
   export const config = {
     executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
     userDataDir: 'C:\\Users\\PC\\AppData\\Local\\Google\\Chrome\\User Data\\Default', 
     chromeProfileDir: 'Default', # Berisikan nama folder chrome profile di komputer lokal Anda
   };
7. Tambahkan cookies dengan nama <b>cookies.json</b> atau <b>www.google.com.cookies.json</b> di dalam folder app/
8. Cookies berfungsi untuk menangani deteksi bot dari Google
10. Dapatkan cookies dengan menggunakan ekstensi ini : https://chromewebstore.google.com/detail/export-cookie-json-file-f/nmckokihipjgplolmcmjakknndddifde
11. Tambahkan ekstensi tersebut di chrome Anda
12. Buka https://www.google.com, pastikan sudah sign in dengan akun Google Anda
13. Search apa saja hingga muncul hasil pencarian, buka ekstensi tersebut, lalu <b>export cookies as JSON</b>
14. Pastikan hanya ada satu file *.json di dalam folder app/ dengan nama file seperti yang sudah disebutkan di poin no. 6
15. Alternatif : Jika cookies tidak bisa menangani deteksi bot, perbarui cookies Anda dengan cara yang sama, atau lanjutkan dengan mode headful (browser tampil) dan lakukan penyelesaian captcha secara manual

## Validation
Akurasi dari pendeteksian backlink mungkin tidak 100% akurat, perlu dilakukan perbaharuan dengan cara mengamati pola-pola backlink judol yang terdapat pada website-website yang ada dan memperbanyak gambling keywords.
    
## Support Developer
Dukung developer disini : https://trakteer.id/rizall-kadamong/tip

## Custom
Jika Anda ingin dibuatkan fitur custom, hubungi developer : https://rizallk.vercel.app/contact
