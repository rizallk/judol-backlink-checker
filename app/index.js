import _0x3abe2b from'puppeteer';import{existsSync,readFileSync,writeFileSync}from'fs';import{createInterface}from'readline';import{wait}from'../utils/wait.js';import _0x3c6df8 from'../utils/randomNumber.js';import{chromeVersions}from'../utils/chromeVersions.js';import{join,dirname}from'path';import{fileURLToPath}from'url';import _0x484df7 from'../utils/getRandomIndex.js';import _0xf592b9 from'../utils/createExcel.js';import{config}from'./config.js';const welcomeText='\x0a\x20\x20|=============================================|\x0a\x20\x20|\x20\x20Judol\x20Checker\x20by\x20Rizal\x20K.\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x0a\x20\x20|\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x0a\x20\x20|\x20\x20github\x20:\x20github.com/rizallk\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x0a\x20\x20|\x20\x20me\x20:\x20rizallk.vercel.app\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x0a\x20\x20|\x20\x20support\x20:\x20trakteer.id/rizallk/tip\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x0a\x20\x20|=============================================|\x0a';console['log'](welcomeText);(!config['chromeProfileDir']['length']||!config['executablePath']['length']||!config['userDataDir']['length'])&&(console['error']('[Required]\x20chromeProfileDir,\x20executablePath\x20dan\x20userDataDir\x20wajib\x20diisi!'),console['log']('[Message]\x20Pastikan\x20Anda\x20mengisi\x20beberapa\x20hal\x20tersebut\x20di\x20file\x20config.js'),process['exit'](0x0));const judolKeywordsPath=join(dirname(fileURLToPath(import.meta['url'])),'judol_keywords.txt');!existsSync(judolKeywordsPath)&&(console['error']('[Required]\x20File\x20judol_keywords.txt\x20tidak\x20ditemukan!'),console['log']('[Message]\x20Pastikan\x20file\x20judol_keywords.txt\x20beserta\x20isinya\x20ada\x20di\x20folder\x20app/.\x20Baca\x20petunjuk\x20di\x20README.'),process['exit'](0x0));let cookiesPath=join(dirname(fileURLToPath(import.meta['url'])),'cookies.json');if(!existsSync(cookiesPath)){cookiesPath=join(dirname(fileURLToPath(import.meta['url'])),'www.google.com.cookies.json');if(!existsSync(cookiesPath)){for(let i=0x1;i<0x3e8;i++){cookiesPath=join(dirname(fileURLToPath(import.meta['url'])),'www.google.com.cookies\x20('+i+').json');if(existsSync(cookiesPath))break;}!existsSync(cookiesPath)&&(console['error']('[Required]\x20File\x20cookies\x20tidak\x20ditemukan!'),console['log']('[Message]\x20Pastikan\x20file\x20cookies\x20beserta\x20isinya\x20ada\x20di\x20folder\x20app/.\x20Baca\x20petunjuk\x20di\x20README.'),process['exit'](0x0));}}const cookiesContent=readFileSync(cookiesPath,'utf-8');cookiesContent['length']===0x0&&(console['error']('[Error]\x20File\x20cookies\x20ditemukan\x20tetapi\x20kosong!'),console['log']('[Message]\x20Baca\x20petunjuk\x20di\x20README\x20mengenai\x20cookies.'),process['exit'](0x0));const judolKeywordsFile=readFileSync(judolKeywordsPath,'utf-8'),judolKeywordsStr=judolKeywordsFile['split'](/\r?\n/)['map'](_0x207715=>_0x207715['trim']())['filter'](_0x59d669=>_0x59d669!=='')['map'](_0x2ef178=>'\x22'+_0x2ef178+'\x22')['join']('\x20OR\x20'),judolKeywordsArr=judolKeywordsFile['split'](/\r?\n/),rl=createInterface({'input':process['stdin'],'output':process['stdout']});console['log']('\x0a\x20\x20Info\x20:\x0a\x20\x20-\x20Pastikan\x20Anda\x20telah\x20membaca\x20seluruh\x20petunjuk\x20di\x20README.\x0a\x20\x20-\x20Pastikan\x20cookies\x20Anda\x20tidak\x20memuat\x20informasi\x20sensitif.\x0a\x20\x20-\x20Masukkan\x20kata\x20kunci\x20tertentu\x20di\x20dalam\x20file\x20judol_keywords.txt\x20jika\x20diperlukan.\x0a\x20\x20-\x20Masukkan\x20full\x20domain\x20website\x20(tanpa\x20http/s://)\x20atau\x20hanya\x20TLD/SLD-nya.\x0a\x20\x20\x20\x20Contoh\x20:\x20(domain/sub-domain)\x20:\x20komingfo.go.id,\x20jurnal.komingfo.go.id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(TLD/SLD)\x20:\x20.id,\x20go.id,\x20ac.id\x0a\x0a'),rl['question']('Masukkan\x20full\x20domain\x20website\x20:\x20',async _0x2737be=>{!_0x2737be&&(console['error']('[Error]\x20Input\x20tidak\x20boleh\x20kosong!'),process['exit'](0x0)),_0x2737be['includes']('\x20')&&(console['error']('[Error]\x20Input\x20tidak\x20boleh\x20ada\x20spasi!'),process['exit'](0x0)),rl['question']('Masukkan\x20jumlah\x20URL\x20(1\x20-\x20200)\x20:\x20',async _0x1b74bf=>{!_0x1b74bf&&(console['error']('[Error]\x20Input\x20tidak\x20boleh\x20kosong!'),process['exit'](0x0));isNaN(_0x1b74bf)&&(console['error']('[Error]\x20Input\x20tidak\x20valid!'),process['exit'](0x0));_0x1b74bf=Number(_0x1b74bf);(_0x1b74bf<0x1||_0x1b74bf>0xc8)&&(console['error']('[Error]\x20Input\x20harus\x20lebih\x20dari\x200\x20atau\x20kurang\x20dari\x20200!'),process['exit'](0x0));console['log']('\x0a==========[\x20Memulai\x20scraping\x20pada\x20:\x20'+_0x2737be+'\x20]==========');const _0xe6130f='site:'+_0x2737be+'\x20'+judolKeywordsStr+'\x20-filetype:pdf\x20-filetype:docx\x20-filetype:ppt\x20-filetype:xls';await scrape(_0xe6130f,_0x1b74bf),rl['close']();});});async function scrape(_0x40826c,_0x4f42ff){const _0x41b733=await _0x3abe2b['launch']({'headless':config['headless']||![],'defaultViewport':null,'ignoreHTTPSErrors':!![],'executablePath':config['executablePath']||null,'userDataDir':config['userDataDir']||null,'args':['--profile-directory='+(config['chromeProfileDir']||'Default'),'--force-device-scale-factor=0.8','--ignore-certificate-errors']});try{config['headless']?console['log']('Membuka\x20browser\x20di\x20background...'):console['log']('Membuka\x20dan\x20menampilkan\x20browser...');const _0x2b721e='Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/'+_0x484df7(chromeVersions)+'\x20Safari/537.36',_0x396190=await _0x41b733['newPage']();await _0x396190['setUserAgent'](_0x2b721e);if(existsSync(cookiesPath)){console['log']('Menggunakan\x20cookies.');const _0x22fb3a=JSON['parse'](readFileSync(cookiesPath));await _0x41b733['setCookie'](..._0x22fb3a);}console['log']('Memuat\x20halaman...'),await _0x396190['goto']('https://www.wikipedia.org/',{'waitUntil':'networkidle2'}),await wait(_0x3c6df8(0x1f4,0x3e8)),await _0x396190['mouse']['move'](_0x3c6df8(0xc8,0xfa),_0x3c6df8(0x104,0x15e)),await _0x396190['waitForSelector']('input#searchInput'),await _0x396190['click']('input#searchInput',{'clickCount':0x3,'delay':_0x3c6df8(0x64,0xc8)}),await wait(_0x3c6df8(0x1f4,0x3e8)),await _0x396190['mouse']['move'](_0x3c6df8(0x64,0x172),_0x3c6df8(0x78,0x104));const _0x3cb24e=await _0x41b733['cookies']();writeFileSync(cookiesPath,JSON['stringify'](_0x3cb24e,null,0x2)),await wait(_0x3c6df8(0x1f4,0x3e8)),await _0x396190['goto']('https://www.google.com/',{'waitUntil':'networkidle2'}),await wait(_0x3c6df8(0x3e8,0xbb8)),await _0x396190['mouse']['move'](_0x3c6df8(0x64,0xc8),_0x3c6df8(0xc8,0x12c)),await _0x396190['waitForSelector']('.gLFyf'),await _0x396190['click']('.gLFyf',{'clickCount':0x3,'delay':_0x3c6df8(0x6e,0xc8)}),await _0x396190['mouse']['move'](_0x3c6df8(0x82,0xf0),_0x3c6df8(0xfa,0x154)),await wait(_0x3c6df8(0x3e8,0x7d0)),await _0x396190['mouse']['move'](_0x3c6df8(0xc8,0x15e),_0x3c6df8(0x64,0xfa)),console['log']('Memasukkan\x20search\x20keyword...'),await _0x396190['type']('.gLFyf',_0x40826c,{'delay':_0x3c6df8(0x14,0x32)}),await wait(_0x3c6df8(0x6a4,0xa8c)),await _0x396190['mouse']['move'](_0x3c6df8(0x12c,0x1c2),_0x3c6df8(0xfa,0x15e)),await _0x396190['keyboard']['press']('Enter'),await _0x396190['waitForNavigation']({'timeout':0xea60}),await wait(_0x3c6df8(0x3e8,0x7d0));let _0x769097=await _0x396190['$']('.g-recaptcha');for(let _0x220946=0x0;_0x220946<0x3;_0x220946++){if(_0x769097)break;_0x769097=await _0x396190['$']('.g-recaptcha'),await wait(0x1f4);}_0x769097&&(console['warn']('[Warning]\x20File\x20cookies\x20Anda\x20perlu\x20diperbarui!'),console['warn']('Anda\x20dapat\x20melanjutkannya\x20tanpa\x20memperbarui\x20cookies\x20pada\x20mode\x20headful\x20(browser\x20tampil)\x20dengan\x20menyelesaikan\x20reCAPTCHA\x20secara\x20manual.'));try{await _0x396190['waitForSelector']('.MjjYud',{'timeout':0x15f90});}catch(_0x3bd695){console['error']('[Error]\x20Terlalu\x20lama\x20melakukan\x20percobaan\x20captcha\x20atau\x20element\x20hasil\x20pencarian\x20google\x20tidak\x20ditemukan!'),process['exit'](0x0);}console['log']('Mendeteksi\x20URLs...');let _0x172181=await _0x396190['$$']('.MjjYud');if(_0x172181['length']<0x5){let _0x575dbe=await _0x396190['$']('.v3jTId');for(let _0x57bd73=0x0;_0x57bd73<0x3;_0x57bd73++){if(_0x575dbe)break;_0x575dbe=await _0x396190['$']('.v3jTId'),await wait(0x1f4);}_0x575dbe&&(console['error']('[Not\x20Found]\x20Pencarian\x20tidak\x20ditemukan!'),process['exit'](0x0));}let _0x51078d=[],_0x46b385=0x0,_0x3d18a7=0x1,_0x3dc2ad=0x0;while(_0x46b385<0xf){if(_0x46b385>=_0x172181['length']){if(_0x3d18a7>=Number(_0x4f42ff))break;let _0x3950a0=await _0x396190['$']('#pnnext');for(let _0xf84576=0x0;_0xf84576<0x3;_0xf84576++){_0x3950a0=await _0x396190['$']('#pnnext');if(_0x3950a0)break;await wait(0x3e8);}if(_0x3950a0){console['log']('Beralih\x20ke\x20halaman\x20berikutnya...'),await Promise['all']([_0x3950a0['click'](),_0x396190['waitForNavigation']({'timeout':0xea60})]),_0x46b385=0x0,await _0x396190['waitForSelector']('.MjjYud'),_0x172181=await _0x396190['$$']('.MjjYud');continue;}else{console['log']('Tidak\x20ada\x20halaman\x20selanjutnya,\x20berhenti\x20scraping.');break;}}await _0x396190['waitForSelector']('.MjjYud'),_0x172181=await _0x396190['$$']('.MjjYud'),await wait(_0x3c6df8(0xc8,0x1f4));const _0x2e7776=await _0x172181[_0x46b385]['$eval']('.LC20lb.MBeuO.DKV0Md',_0x2b6c0b=>_0x2b6c0b?.['textContent']||'')['catch'](()=>''),_0x253905=await _0x172181[_0x46b385]['$eval']('[jsname=\x22UWckNb\x22]',_0x301f4f=>_0x301f4f?.['href']||'')['catch'](()=>'');if(_0x2e7776&&_0x253905){_0x3dc2ad++,console['log']('['+_0x3dc2ad+']\x20Menelusuri\x20URL\x20:\x20'+_0x253905),await _0x396190['waitForSelector']('[jsname=\x22UWckNb\x22]'),await wait(_0x3c6df8(0xc8,0x1f4));try{await _0x396190['goto'](_0x253905,{'waitUntil':'networkidle2','timeout':0x7530});}catch(_0x11430a){console['log']('Halaman\x20terlalu\x20lama\x20dimuat,\x20dilewati!');}const _0x3423ae=await _0x396190['$eval']('#main-message\x20>\x20h1',_0x21a835=>_0x21a835?.['textContent']||'')['catch'](()=>'');_0x3423ae&&(await _0x396190['locator']('button#details-button')['click'](),await wait(_0x3c6df8(0x12c,0x258)),await Promise['all']([_0x396190['locator']('a#proceed-link')['click'](),_0x396190['waitForNavigation']({'timeout':0xea60})]));const _0x5e31b5=await _0x396190['title']();await wait(_0x3c6df8(0x1f4,0x3e8));const _0xbf16c1=await _0x396190['$$eval']('a',_0x2acc22=>{return _0x2acc22['filter'](_0xf8b4d8=>getComputedStyle(_0xf8b4d8)['display']==='none')['map'](_0x1f6562=>({'url':_0x1f6562['href']['trim'](),'text':(_0x1f6562['textContent']||'')['replace'](/\s+/g,'\x20')['trim']()['toLowerCase']()}));}),_0x668f0c=_0xbf16c1['filter'](_0x57d677=>judolKeywordsArr['some'](_0x59909d=>_0x57d677?.['href']?.['toLowerCase']()?.['includes'](_0x59909d)||_0x57d677?.['text']?.['includes'](_0x59909d)));if(_0x668f0c['length']>0x0){let _0x475950={'title':_0x5e31b5,'url':_0x253905,'judol_backlink_count':_0x668f0c['length'],'message':'Website\x20terdapat\x20backlink\x20judol.'};config['showLinkJudol']&&(_0x475950={..._0x475950,'links':_0x668f0c});console['log'](_0x475950);if(_0x51078d['length']>0x0&&config['skipDuplicate']){const _0x5ced19=_0x51078d['some'](_0x3ec79b=>_0x3ec79b['title']===_0x475950['title']&&_0x3ec79b['judol_backlink_count']===_0x475950['judol_backlink_count']);!_0x5ced19&&_0x51078d['push'](_0x475950);}else _0x51078d['push'](_0x475950);}await wait(_0x3c6df8(0xc8,0x1f4)),await _0x396190['goBack'](),await wait(_0x3c6df8(0x1f4,0x3e8));}_0x46b385++,_0x3d18a7++;}if(_0x51078d['length']>0x0&&config['createExcel']){console['log']('Menyimpan\x20hasil\x20di\x20file\x20Excel...');try{await _0xf592b9(_0x51078d);}catch(_0x460d22){console['error']('[Error]\x20Error\x20membuat\x20file\x20Excel!');}}}catch(_0x3e4305){console['error']('Terjadi\x20kesalahan:',_0x3e4305);}finally{console['log']('Menghentikan\x20proses\x20scraping...'),await _0x41b733['close'](),console['log']('Scraping\x20dihentikan.'),process['exit'](0x0);}}