<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>FIANZ MOD STORE</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@900&family=Roboto+Mono&display=swap');
    * { margin:0; padding:0; box-sizing:border-box; }
    body { background:#000; color:#0f0; font-family:'Roboto Mono',monospace; padding:20px; min-height:100vh; position:relative; }
    .header { text-align:center; margin:30px 0; }
    h1 { font-family:'Orbitron',sans-serif; font-size:2.2rem; color:#0f0; text-shadow:0 0 20px #0f0; }
    .subtitle { color:#0ff; font-size:0.9rem; margin-top:8px; }
    .container { max-width:600px; margin:0 auto; padding-bottom:80px; }

    .login-box { position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); background:rgba(0,20,0,0.95); border:3px solid #0f0; border-radius:15px; padding:25px; width:90%; max-width:400px; box-shadow:0 0 30px #0f0; z-index:1000; text-align:center; display:none; }
    .login-input { width:100%; padding:12px; background:#111; color:#0f0; border:1px solid #0f0; border-radius:8px; margin:10px 0; font-size:1rem; }
    .login-btn { background:#0f0; color:#000; border:none; padding:12px; border-radius:8px; font-weight:bold; cursor:pointer; width:100%; margin-top:10px; }
    .login-btn:hover { background:#0c0; }

    .coin-box { position:fixed; top:10px; right:10px; background:rgba(0,20,0,0.9); border:1px solid #0f0; border-radius:20px; padding:4px 8px; font-size:0.75rem; font-weight:bold; color:#0ff; box-shadow:0 0 10px #0f0; z-index:999; display:flex; align-items:center; gap:4px; }
    .coin-icon { font-size:0.9rem; }
    .logout { position:fixed; top:10px; left:10px; font-size:0.75rem; color:#0ff; cursor:pointer; text-decoration:underline; z-index:998; }

    .voucher-box { position:fixed; bottom:20px; left:50%; transform:translateX(-50%); background:rgba(0,20,0,0.9); border:2px solid #0f0; border-radius:12px; padding:12px; width:90%; max-width:400px; box-shadow:0 0 20px #0f0; z-index:998; }
    .voucher-input { width:100%; padding:10px; background:#111; color:#0f0; border:1px solid #0f0; border-radius:6px; margin-bottom:8px; font-size:0.9rem; }
    .voucher-btn { background:#0f0; color:#000; border:none; padding:10px; border-radius:6px; font-weight:bold; cursor:pointer; width:100%; }

    .app { background:rgba(0,20,0,0.8); border:2px solid #0f0; border-radius:10px; padding:12px; margin:12px 0; box-shadow:0 0 12px #0f0; }
    .app h3 { color:#0ff; font-weight:bold; margin-bottom:6px; font-size:0.95rem; }
    .download { display:block; background:#0f0; color:#000; text-align:center; padding:10px; border-radius:6px; font-weight:bold; text-decoration:none; margin-top:8px; font-size:0.85rem; cursor:pointer; }
    .download:hover { background:#0c0; transform:scale(1.02); }
    .download.disabled { background:#333; color:#666; cursor:not-allowed; }

    .notif { position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); background:#f00; color:#fff; padding:15px 25px; border-radius:12px; font-weight:bold; box-shadow:0 0 25px #f00; z-index:1000; display:none; text-align:center; font-size:0.9rem; }
    .footer { text-align:center; margin:30px 0; color:#0a0; font-size:0.7rem; }
  </style>
</head>
<body>

<!-- LOGIN BOX -->
<div class="login-box" id="login-box">
  <h2>LOGIN AKUN</h2>
  <p style="margin:10px 0; color:#0ff;">Username: <b>123</b><br>Password: <b>123</b></p>
  <input type="text" class="login-input" id="username" placeholder="Username" />
  <input type="password" class="login-input" id="password" placeholder="Password" />
  <button class="login-btn" onclick="login()">MASUK</button>
</div>

<!-- LOGOUT -->
<div class="logout" id="logout" onclick="logout()">Logout</div>

<!-- COIN BOX -->
<div class="coin-box">
  <span class="coin-icon">Coin</span>
  <span id="coin-count">3</span>
</div>

<!-- VOUCHER INPUT -->
<div class="voucher-box">
  <input type="text" id="voucher-input" class="voucher-input" placeholder="Masukkan Voucher..." />
  <button class="voucher-btn" onclick="redeemVoucher()">TUKAR VOUCHER</button>
</div>

<!-- NOTIF -->
<div class="notif" id="notif">Coin habis!</div>

<div class="header">
  <h1>FIANZ MOD STORE</h1>
  <p class="subtitle">1 Coin = 1 Download | Beli Voucher di @FianzModBot</p>
</div>

<div class="container">
  <!-- FULL 40+ APK -->
  <div class="app"><h3>ALIGHTMOTION PREMIUM</h3><a href="https://www.mediafire.com/file/fk0z4gimiw7dzmc/Alight_Motion_Premium_by_Fianz.apk/file" class="download" data-cost="1" target="_blank">DOWNLOAD</a></div>
  <div class="app"><h3>YOUTUBE PREMIUM</h3><a href="https://www.mediafire.com/file/9nu3kqo9blp2h59/Youtube_Premium_RVX_v19_16_39_Cli_v5_0_1_Patches_v5_0_3_signed.apk/file" class="download" data-cost="1" target="_blank">DOWNLOAD</a></div>
  <!-- ... SEMUA APK LU (40+) ... -->
  <div class="app"><h3>APK TEMP MAIL</h3><a href="https://www.mediafire.com/file/de03ykicvzr1ett/Temp_Mail_Premium.apk/file" class="download" data-cost="1" target="_blank">DOWNLOAD</a></div>
</div>

<div class="footer">
  © 2025 Fianz Mod Store | @FianzModBot
</div>

<script>
// === SISTEM COIN + VOUCHER + FINGERPRINT ===
const USERNAME = "123";
const PASSWORD = "123";
const DB_NAME = "FianzModStore";
const STORE_NAME = "user_data";
let db, fingerprint = null;

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = (e) => {
      db = e.target.result;
      db.createObjectStore(STORE_NAME);
    };
    request.onsuccess = (e) => { db = e.target.result; resolve(); };
    request.onerror = reject;
  });
}

async function getFingerprint() {
  if (fingerprint) return fingerprint;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.fillText('fianzmod123', 10, 50);
  const data = canvas.toDataURL();
  fingerprint = btoa(data + navigator.userAgent + screen.width + screen.height + navigator.hardwareConcurrency);
  return fingerprint;
}

async function saveCoin(coins) {
  const fp = await getFingerprint();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  tx.objectStore(STORE_NAME).put(coins, fp);
  return tx.complete;
}

async function loadCoin() {
  const fp = await getFingerprint();
  return new Promise((resolve) => {
    const tx = db.transaction(STORE_NAME);
    const req = tx.objectStore(STORE_NAME).get(fp);
    req.onsuccess = () => resolve(req.result ?? 3);
  });
}

async function login() {
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value;
  if (user === USERNAME && pass === PASSWORD) {
    await openDB();
    const coins = await loadCoin();
    localStorage.setItem('fianz_logged', 'true');
    showMain();
    updateCoin(coins);
    loadVouchers();
  } else {
    alert('Salah! Gunakan: 123 / 123');
  }
}

function logout() {
  if (confirm('Logout?')) {
    localStorage.removeItem('fianz_logged');
    location.reload();
  }
}

function showMain() {
  document.getElementById('login-box').style.display = 'none';
  document.getElementById('logout').style.display = 'block';
}

// Load voucher dari webhook.json
async function loadVouchers() {
  try {
    const res = await fetch('webhook.json?' + Date.now());
    const data = await res.json();
    window.VALID_VOUCHERS = data;
  } catch {
    window.VALID_VOUCHERS = {};
  }
}

async function redeemVoucher() {
  const input = document.getElementById('voucher-input');
  const code = input.value.trim().toUpperCase();
  if (!code) return;

  const fp = await getFingerprint();
  const usedKey = `used_${fp}`;
  const used = JSON.parse(localStorage.getItem(usedKey) || '[]');

  if (used.includes(code)) {
    showNotif('Voucher sudah dipakai!', '#f90');
    return;
  }

  if (window.VALID_VOUCHERS && window.VALID_VOUCHERS[code]) {
    let coins = await loadCoin();
    coins += window.VALID_VOUCHERS[code];
    await saveCoin(coins);
    used.push(code);
    localStorage.setItem(usedKey, JSON.stringify(used));
    updateCoin(coins);
    showNotif(`+${window.VALID_VOUCHERS[code]} Coin! Sukses!`, '#0f0');
    input.value = '';
  } else {
    showNotif('Voucher tidak valid!', '#f90');
  }
}

async function updateCoin(coins) {
  document.getElementById('coin-count').textContent = coins;
  await saveCoin(coins);
  checkDownloads(coins);
}

function checkDownloads(coins) {
  document.querySelectorAll('.download').forEach(btn => {
    if (coins <= 0) {
      btn.classList.add('disabled');
      btn.onclick = (e) => { e.preventDefault(); showNotif('Coin habis! Beli voucher di @FianzModBot'); };
    } else {
      btn.classList.remove('disabled');
      btn.onclick = null;
    }
  });
}

function showNotif(msg, color = '#f00') {
  const notif = document.getElementById('notif');
  notif.textContent = msg;
  notif.style.background = color;
  notif.style.display = 'block';
  setTimeout(() => { notif.style.display = 'none'; }, 3000);
}

// INIT
(async () => {
  await loadVouchers();
  if (localStorage.getItem('fianz_logged') === 'true') {
    await openDB();
    const coins = await loadCoin();
    showMain();
    updateCoin(coins);
  } else {
    document.getElementById('login-box').style.display = 'block';
  }
})();

// DOWNLOAD
document.querySelectorAll('.download').forEach(btn => {
  btn.addEventListener('click', async function(e) {
    if (localStorage.getItem('fianz_logged') !== 'true') return;
    let coins = await loadCoin();
    if (coins <= 0) {
      e.preventDefault();
      showNotif('Coin habis! Beli voucher di @FianzModBot');
      return;
    }
    const cost = parseInt(this.dataset.cost) || 1;
    if (coins >= cost) {
      coins -= cost;
      updateCoin(coins);
    }
  });
});
</script>

</body>
</html>