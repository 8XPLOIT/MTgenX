// ============================================================
// MTgenX — Vanilla JS
// MikroTik Generator External
// ============================================================

// --- SVG Icons (inline) ---
const ICONS = {
  UserCheck: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>',
  Wifi: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>',
  MonitorSmartphone: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 5V1H6v4"/><path d="M6 5v14h12V5"/><rect x="18" y="7" width="3" height="10" rx="1"/><path d="M2 9h4"/><path d="M2 13h4"/><path d="M2 17h4"/></svg>',
  ReceiptText: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M8 7h8"/><path d="M8 11h8"/><path d="M8 15h5"/></svg>',
  BarChart3: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>',
  ScrollText: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/><path d="M15 8h-5"/><path d="M15 12h-5"/></svg>',
  Terminal: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
  Github: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  ShieldCheck: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  ArrowLeft: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
  FileCode2: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><polyline points="14 2 14 8 20 8"/><path d="m9 14-2 2 2 2"/><path d="m13 18 2-2-2-2"/></svg>',
  Copy: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  Check: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  CheckCircle2: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  X: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  Eye: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
  EyeOff: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" y1="2" x2="22" y2="22"/></svg>',
  Info: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
  Heart: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  HelpCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>',
};

// --- Script Templates Data ---
const TELEGRAM_INPUTS = [
  { key: 'BOT_TOKEN', label: 'Telegram Bot Token', placeholder: 'Masukkan Bot Token Telegram', type: 'password', required: true },
  { key: 'CHAT_ID', label: 'Telegram Chat ID', placeholder: 'Masukkan Chat ID Telegram', type: 'text', required: true },
];

const SCRIPT_TEMPLATES = [
  {
    slug: 'userlog',
    title: 'User Login/Logout Notification',
    description: 'Script hotspot untuk notifikasi login dan logout user ke Telegram.',
    icon: 'UserCheck',
    category: 'Hotspot',
    placement: 'IP > Hotspot > User Profile. Gunakan script login dan logout pada profile hotspot. Paste script login dibawah script yang sudah ada di masing masing kolom on login user profile.',
    inputs: [
      ...TELEGRAM_INPUTS,
      { key: 'USER_PACKAGE', label: 'Nama Paket', placeholder: 'USER 1 JAM', type: 'text', required: true },
      { key: 'PRICE', label: 'Harga Paket', placeholder: 'Rp.1000,-', type: 'text' },
      { key: 'DURATION', label: 'Durasi Paket', placeholder: '1 Jam', type: 'text' },
    ],
    template: `# ============================================================
# MTgenX - Hotspot User Login/Logout Telegram Notification
# Lokasi: IP > Hotspot > User Profile
# ============================================================

# ==================== SCRIPT LOGIN ====================
:local mac $"mac-address";
:local host [/ip dhcp-server lease get [find mac-address="$mac"] host-name];
:if ([:len $host] = 0) do={:set host $mac};
:tool fetch url="https://api.telegram.org/bot{{BOT_TOKEN}}/sendMessage?chat_id={{CHAT_ID}}&text=====[%20{{USER_PACKAGE}}%20LOGIN%20]====%0A\\F0\\9F\\8E\\AB%20Kode%20Voucher%20:%20$user%0A\\F0\\9F\\92\\B0%20Paket%20Internet%20:%20{{PRICE}}%0A\\E2\\8F\\B3%20Durasi%20Paket%20:%20{{DURATION}}%0A\\E2\\99\\BE\\EF\\B8\\8F%20Kuota%20Internet%20:%20Unlimited%0A\\F0\\9F\\93\\B2%20Device%20:%20$host%0A\\F0\\9F\\8C\\90%20IP%20Address%20:%20$address%0A\\F0\\9F\\86\\94%20MAC%20:%20$"mac-address"%0A\\E2\\8F\\B0%20Waktu%20Login%20:%20$[/system clock get time]%20WITA%0A\\F0\\9F\\93\\85%20Tanggal%20Login%20:%20$[/system clock get date]" keep-result=no;
:beep length=50ms frequency=666
:delay 120ms
:beep length=100ms frequency=888

# ==================== SCRIPT LOGOUT ====================
:local mac $"mac-address";
:local host [/ip dhcp-server lease get [find mac-address="$mac"] host-name];
:if ([:len $host] = 0) do={:set host $mac};
:tool fetch url="https://api.telegram.org/bot{{BOT_TOKEN}}/sendMessage?chat_id={{CHAT_ID}}&text=====[%20{{USER_PACKAGE}}%20LOGOUT%20]====%0A\\F0\\9F\\8E\\AB%20Kode%20Voucher%20:%20$user%0A\\F0\\9F\\92\\B0%20Paket%20Internet%20:%20{{PRICE}}%0A\\E2\\8F\\B3%20Durasi%20Paket%20:%20{{DURATION}}%0A\\E2\\99\\BE\\EF\\B8\\8F%20Kuota%20Internet%20:%20Unlimited%0A\\F0\\9F\\93\\B2%20Device%20:%20$host%0A\\F0\\9F\\8C\\90%20IP%20Address%20:%20$address%0A\\F0\\9F\\86\\94%20MAC%20:%20$"mac-address"%0A\\E2\\8F\\B0%20Waktu%20Logout%20:%20$[/system clock get time]%20WITA%0A\\F0\\9F\\93\\85%20Tanggal%20Logout%20:%20$[/system clock get date]" keep-result=no;
:beep length=50ms frequency=888
:delay 120ms
:beep length=100ms frequency=666
`,
  },
  {
    slug: 'ppplog',
    title: 'PPP Login/Logout Notification',
    description: 'Script PPP profile untuk notifikasi koneksi online dan offline ke Telegram.',
    icon: 'Wifi',
    category: 'PPP',
    placement: 'PPP > Profiles. Tempatkan script pertama pada On Up dan script kedua pada On Down.',
    inputs: [
      ...TELEGRAM_INPUTS,
      { key: 'PROFILE_NAME', label: 'Nama Profil / Judul Pesan', placeholder: 'MEMBER 2M', type: 'text', required: true },
      { key: 'PRICE', label: 'Harga Paket', placeholder: 'Rp.50.000,-', type: 'text' },
      { key: 'MAX_DEVICES', label: 'Maksimal Perangkat', placeholder: '2 Perangkat', type: 'text' },
    ],
    template: `# ============================================================
# MTgenX - PPP Login/Logout Telegram Notification
# Lokasi: PPP > Profiles
# ============================================================

# ==================== ON UP ====================
:local nama "$user";
:tool fetch url="https://api.telegram.org/bot{{BOT_TOKEN}}/sendMessage?chat_id={{CHAT_ID}}&text====[%20{{PROFILE_NAME}}%20ONLINE%20]===%0A\\F0\\9F\\91\\A4%20Profil%20User%20:%20$user%0A\\F0\\9F\\92\\B3%20Paket%20Internet%20:%20{{PRICE}}%0A\\F0\\9F\\93\\B1%20Maksimal%20IP%20:%20{{MAX_DEVICES}}%0A\\F0\\9F\\97\\93\\EF\\B8\\8F%20Billing%20Paket%20:%20Bulanan%0A\\E2\\99\\BE\\EF\\B8\\8F%20Kuota%20Internet%20:%20Unlimited%0A\\E2\\8F\\B0%20Waktu%20On%20:%20$[/system clock get time]%20WITA%0A\\F0\\9F\\93\\85%20Tanggal%20On%20:%20$[/system clock get date]" keep-result=no;
:beep length=50ms frequency=666
:delay 120ms
:beep length=100ms frequency=888

# ==================== ON DOWN ====================
:local nama "$user";
:tool fetch url="https://api.telegram.org/bot{{BOT_TOKEN}}/sendMessage?chat_id={{CHAT_ID}}&text====[%20{{PROFILE_NAME}}%20OFFLINE%20]===%0A\\F0\\9F\\91\\A4%20Profil%20User%20:%20$user%0A\\F0\\9F\\92\\B3%20Paket%20Internet%20:%20{{PRICE}}%0A\\F0\\9F\\93\\B1%20Maksimal%20IP%20:%20{{MAX_DEVICES}}%0A\\F0\\9F\\97\\93\\EF\\B8\\8F%20Billing%20Paket%20:%20Bulanan%0A\\E2\\99\\BE\\EF\\B8\\8F%20Kuota%20Internet%20:%20Unlimited%0A\\E2\\8F\\B0%20Waktu%20Off%20:%20$[/system clock get time]%20WITA%0A\\F0\\9F\\93\\85%20Tanggal%20Off%20:%20$[/system clock get date]" keep-result=no;
:beep length=50ms frequency=888
:delay 120ms
:beep length=100ms frequency=666
`,
  },
  {
    slug: 'staffusage',
    title: 'Admin/Owner Usage Monitor',
    description: 'Mengirim total penggunaan data dari daftar user hotspot tertentu ke Telegram.',
    icon: 'MonitorSmartphone',
    category: 'Monitoring',
    placement: 'System > Scripts. Jalankan manual atau gunakan Scheduler sesuai kebutuhan. Gunakan template contoh ini: {"NEMO";"BANU";"PUTRI"}',
    inputs: [
      ...TELEGRAM_INPUTS,
      { key: 'ALLOWED_USERS', label: 'Daftar User Hotspot', placeholder: 'Format CEK Info dibawah!', type: 'textarea', required: true },
    ],
    template: `# ============================================================
# MTgenX - Admin/Owner Usage Monitor
# Lokasi: System > Scripts
# ============================================================

# --- Konfigurasi Bot ---
:local botToken "{{BOT_TOKEN}}"
:local chatId "{{CHAT_ID}}"

# --- Daftar User Spesifik ---
:local allowedUsers {
{{ALLOWED_USERS}}
}

# --- Fungsi Konversi Satuan dengan Desimal Akurat ---
:local convertByte do={
    :local b $1
    :if ($b >= 1099511627776) do={
        :return (($b / 1099511627776) . "." . (($b % 1099511627776) / 109951162777) . "%20TB")
    }
    :if ($b >= 1073741824) do={
        :return (($b / 1073741824) . "." . (($b % 1073741824) / 107374182) . "%20GB")
    }
    :if ($b >= 1048576) do={
        :return (($b / 1048576) . "." . (($b % 1048576) / 104857) . "%20MB")
    }
    :if ($b >= 1024) do={
        :return (($b / 1024) . "%20KB")
    }
    :return ($b . "%20Bytes")
}

:local date [/system clock get date]

# --- Looping Berdasarkan Daftar User Spesifik ---
:foreach u in=$allowedUsers do={
    :local userID [/ip hotspot user find name=$u]
    :if ([:len $userID] > 0) do={
        :set userID ($userID->0)
        :local uName [/ip hotspot user get $userID name]
        :local uProf [/ip hotspot user get $userID profile]
        :local uUp [/ip hotspot user get $userID bytes-in]
        :local uDown [/ip hotspot user get $userID bytes-out]
        :local activeID [/ip hotspot active find where user=$uName]
        :if ([:len $activeID] > 0) do={
            :set uUp ($uUp + [/ip hotspot active get ($activeID->0) bytes-in])
            :set uDown ($uDown + [/ip hotspot active get ($activeID->0) bytes-out])
        }
        :if ($uDown > 0 || $uUp > 0) do={
            :local totalUp [$convertByte $uUp]
            :local totalDown [$convertByte $uDown]
            :local message ("%3Cpre%3E====[%20TOTAL%20DATA%20USER%20]====" . \\
                "%0A%F0%9F%91%A4%20Username%20:%20" . $uName . \\
                "%0A%F0%9F%9B%A1%EF%B8%8F%20Profile%20User%20:%20" . $uProf . \\
                "%0A%F0%9F%93%A4%20Total%20Upload%20:%20" . $totalUp . \\
                "%0A%F0%9F%93%A5%20Total%20Download%20:%20" . $totalDown . \\
                "%0A%F0%9F%93%9D%20Record%20:%20" . $date . "%3C/pre%3E")
            :do {
                /tool fetch url=("https://api.telegram.org/bot" . $botToken . "/sendMessage?chat_id=" . $chatId . "&parse_mode=html&text=" . $message) keep-result=no
            } on-error={
                :log error ("Gagal mengirim notifikasi Telegram untuk user: " . $uName)
            }
            :delay 10s
        }
    }
}
`,
  },
  {
    slug: 'pppbills',
    title: 'Tagihan PPP Reminder',
    description: 'Mengirim laporan tagihan pelanggan PPP melalui Telegram.',
    icon: 'ReceiptText',
    category: 'Billing',
    placement: 'System > Scripts. Jalankan dengan Scheduler setiap 30 hari dan 12 jam atau sesuai periode tagihan. Jika user lebih dari 1, setiap satu baris silahkan tambahkan simbol ; di akhir, setelahnya tidak perlu. Jika kesusahan mengetik, copy paste ini sebagai acuan: "Putri;Rp.50.000;8Mbps;4 Perangkat;Setiap Akhir Bulan";',
    inputs: [
      ...TELEGRAM_INPUTS,
      { key: 'CUSTOMERS', label: 'Daftar Pelanggan PPP', placeholder: 'Format pengisian CEK Info Keterangan dibawah!', type: 'textarea', required: true },
    ],
    template: `# ============================================================
# MTgenX - PPP Billing Reminder
# Lokasi: System > Scripts
# ============================================================

# --- CONFIG BOT ---
:local botToken "{{BOT_TOKEN}}"
:local chatId "{{CHAT_ID}}"

# --- AMBIL DATA WAKTU ---
:local date [/system clock get date]
:local time [/system clock get time]
:local month [:pick $date 0 3]
:local day [:pick $date 4 6]
:local year [:pick $date 7 11]
:local monthNum "00"

:if ($month = "jan") do={:set monthNum "01"}
:if ($month = "feb") do={:set monthNum "02"}
:if ($month = "mar") do={:set monthNum "03"}
:if ($month = "apr") do={:set monthNum "04"}
:if ($month = "may") do={:set monthNum "05"}
:if ($month = "jun") do={:set monthNum "06"}
:if ($month = "jul") do={:set monthNum "07"}
:if ($month = "aug") do={:set monthNum "08"}
:if ($month = "sep") do={:set monthNum "09"}
:if ($month = "oct") do={:set monthNum "10"}
:if ($month = "nov") do={:set monthNum "11"}
:if ($month = "dec") do={:set monthNum "12"}

:local fullDate "$day/$monthNum/$year"

# --- DATA PELANGGAN: Nama;Tagihan;Bandwidth;MaxIP;Deadline ---
:local daftarPelanggan {
{{CUSTOMERS}}
}

# --- LOOPING KIRIM NOTIFIKASI ---
:foreach p in=$daftarPelanggan do={
    :local pos1 [:find $p ";"]
    :local pNama [:pick $p 0 $pos1]
    :local s1 [:pick $p ($pos1 + 1) [:len $p]]
    :local pos2 [:find $s1 ";"]
    :local pTagihan [:pick $s1 0 $pos2]
    :local s2 [:pick $s1 ($pos2 + 1) [:len $s1]]
    :local pos3 [:find $s2 ";"]
    :local pBandwidth [:pick $s2 0 $pos3]
    :local s3 [:pick $s2 ($pos3 + 1) [:len $s2]]
    :local pos4 [:find $s3 ";"]
    :local pMaxIP [:pick $s3 0 $pos4]
    :local pDeadline [:pick $s3 ($pos4 + 1) [:len $s3]]

    :local message "%0A<pre>"
    :set message ($message . "%E2%84%B9%20LAPORAN%20TAGIHAN%20INTERNET%0A")
    :set message ($message . "Update%20:%20" . $fullDate . "%20|%20" . $time . "%0A")
    :set message ($message . "-------------------------------------%0A")
    :set message ($message . "%F0%9F%91%A4%20Pelanggan%20:%20" . $pNama . "%0A")
    :set message ($message . "%F0%9F%92%B3%20Tagihan%20:%20" . $pTagihan . "%0A")
    :set message ($message . "%E2%9A%A1%20Paket%20Internet%20:%20" . $pBandwidth . "%0A")
    :set message ($message . "%F0%9F%93%B1%20Maksimal%20IP%20:%20" . $pMaxIP . "%0A")
    :set message ($message . "%F0%9F%93%93%20Billing%20:%20Setiap%20" . $pDeadline . "%0A")
    :set message ($message . "-------------------------------------%0A")
    :set message ($message . "%E2%9A%A0%20Silahkan%20melakukan%20pembayaran%20sebelum%20jatuh%20tempo%20sesuai%20info%20billing%20diatas%20hingga%20batas%20yaitu%20pukul%2012:00%20malam%20supaya%20anda%20tetap%20dapat%20terhubung%20ke%20Internet.%20Terimakasih.")
    :set message ($message . "</pre>")
    /tool fetch url=("https://api.telegram.org/bot" . $botToken . "/sendMessage?chat_id=" . $chatId . "&parse_mode=HTML&text=" . $message) keep-result=no
    :delay 5s
}
`,
  },
  {
    slug: 'dailyusage',
    title: 'Daily Usage Report',
    description: 'Mengirim laporan penggunaan data harian sebuah interface ke Telegram.',
    icon: 'BarChart3',
    category: 'Monitoring',
    placement: 'System > Scripts. Jalankan melalui Scheduler setiap 24 jam pada pukul 23:59.',
    inputs: [
      ...TELEGRAM_INPUTS,
      { key: 'INTERFACE_NAME', label: 'Nama Interface', placeholder: 'ether1-INTERNET', type: 'text', required: true },
    ],
    template: `# ============================================================
# MTgenX - Daily Usage Report
# Lokasi: System > Scripts
# ============================================================

# --- 1. Konfigurasi ---
:local botToken "{{BOT_TOKEN}}";
:local chatId "{{CHAT_ID}}";
:local interfaceName "{{INTERFACE_NAME}}";

# --- 2. Mengambil Data Trafik ---
:local rxByte [/interface get [find name=$interfaceName] rx-byte];
:local txByte [/interface get [find name=$interfaceName] tx-byte];
:local rxMB ($rxByte / 1048576);
:local txMB ($txByte / 1048576);
:local totalMB ($rxMB + $txMB);
:local totalGB ($totalMB / 1024);

# --- 3. Logika Tanggal DD/MM/YYYY ---
:local bulan {"jan"="01";"feb"="02";"mar"="03";"apr"="04";"may"="05";"jun"="06";"jul"="07";"aug"="08";"sep"="09";"oct"="10";"nov"="11";"dec"="12"}
:local dateRaw [/system clock get date];
:local timeRaw [/system clock get time];
:local mon [:pick $dateRaw 0 3];
:local day [:pick $dateRaw 4 6];
:local year [:pick $dateRaw 7 11];
:local monNum ($bulan->$mon);
:local dateFormatted ($day . "/" . $monNum . "/" . $year);
:local routerName [/system identity get name];

# --- 4. Format Pesan ---
:local messageText "%F0%9F%93%8A *Laporan Penggunaan Data Harian*%0A";
:set messageText ($messageText . "-------------------------------------%0A");
:set messageText ($messageText . "%F0%9F%8F%A2 *Router:* " . $routerName . "%0A");
:set messageText ($messageText . "%F0%9F%95%92 *Waktu:* " . $dateFormatted . " " . $timeRaw . "%0A");
:set messageText ($messageText . "%F0%9F%8C%90 *Interface:* " . $interfaceName . "%0A");
:set messageText ($messageText . "-------------------------------------%0A");
:set messageText ($messageText . "%E2%AC%87%EF%B8%8F *Download:* " . $rxMB . " MB%0A");
:set messageText ($messageText . "%E2%AC%86%EF%B8%8F *Upload:* " . $txMB . " MB%0A");
:set messageText ($messageText . "%F0%9F%93%88 *Total:* *" . $totalMB . " MB* (" . $totalGB . " GB)%0A");
:set messageText ($messageText . "-------------------------------------%0A");
:set messageText ($messageText . "%E2%9A%A0%EF%B8%8F _Total penggunaan data diatas adalah akumulasi harian._");

# --- 5. Mengirim Pesan ke Telegram ---
:local tgUrl "https://api.telegram.org/bot$botToken/sendMessage";
:local httpData "chat_id=$chatId&text=$messageText&parse_mode=Markdown";
:do {
    /tool fetch http-method=post http-data=$httpData url=$tgUrl keep-result=no;
    /interface reset-counters $interfaceName;
} on-error={
    :log error "Gagal mengirim laporan trafik ke Telegram.";
}
`,
  },
  {
    slug: 'mklogs',
    title: 'Mikrotik Logs to Telegram',
    description: 'Memantau log penting MikroTik dan mengirim log baru ke Telegram.',
    icon: 'ScrollText',
    category: 'Logging',
    placement: 'System > Scripts. Jalankan melalui Scheduler setiap 30 detik atau 1 menit.',
    inputs: [
      ...TELEGRAM_INPUTS,
      { key: 'SCHEDULE_NAME', label: 'Nama Scheduler Log', placeholder: 'LogFilter', type: 'text' },
    ],
    template: `# ============================================================
# MTgenX - Mikrotik Logs to Telegram
# Lokasi: System > Scripts
# ============================================================

# BEGIN SETUP Edit Here
:local bot "{{BOT_TOKEN}}"
:local ChatID "{{CHAT_ID}}"
:local scheduleName "{{SCHEDULE_NAME}}"

# --- Mengamankan nama router untuk output Telegram ---
:local sIdentity [/system identity get name]
:local sBoard [/system resource get board-name]
:local myserver ("\\F0\\9F\\A4\\96%20Log%20MikroTik%20" . $sIdentity . "%20" . $sBoard . "%20\\E2\\84\\B9")

:local startBuf [:toarray [/log find where message~"(via winbox|std failure|unknown|uptime limit is reached|user request|administrator request|admin reset|invalid MAC address|invalid username|login failure|stop accounting|reboot|loop|fcs|excessive|system|rebooted|ipsec|ike2|no more sessions|already authorizing)" \\ or topics~"(error|critical)"]]
:local removeThese {"link";"telnet"}
# END SETUP

:local bulan {"jan"="01";"feb"="02";"mar"="03";"apr"="04";"may"="05";"jun"="06";"jul"="07";"aug"="08";"sep"="09";"oct"="10";"nov"="11";"dec"="12"}
:local lastTime [/system scheduler get [find name=$scheduleName] comment]
:local currentTime
:local message
:local output
:local keepOutput false
:local counter 0
:if ([:len $lastTime] = 0) do={:set keepOutput true}

:foreach i in=$startBuf do={
    :local keepLog true
    :foreach j in=$removeThese do={
        :if ([/log get $i message] ~ "$j") do={:set keepLog false}
    }
    :if ($keepLog = true) do={
        :set message [/log get $i message]
        :if ($message ~ "local user not found") do={:set message "VOUCHER ALREADY DELETED!"}
        :if ($message ~ "uptime limit is reached") do={:set message "VOUCHER ALREADY EXPIRED!"}
        :if ($message ~ "invalid MAC address") do={:set message "DEVICE MAC INVALID!"}
        :if ($message ~ "invalid username or password") do={:set message "VOUCHER CODE INVALID!"}
        :if ($message ~ "no more sessions are allowed for user") do={:set message "USER ALREADY ACTIVATED!"}
        :if ($message ~ "no such item (4)") do={:set message "SCRIPT NOT FOUND!"}
        :if ($message ~ "admin reset") do={:set message "VOUCHER IS STOPPED!"}
        :if ($message ~ "already authorizing, retry later") do={:set message "VOUCHER DOUBLE CLICK!"}

        :set currentTime [/log get $i time]
        :if ([:len $currentTime] = 8) do={:set currentTime ([:pick [/system clock get date] 0 11]." ".$currentTime)}
        :local mon [:pick $currentTime 0 3]
        :local day [:pick $currentTime 4 6]
        :local year [:pick $currentTime 7 11]
        :local time [:pick $currentTime 12 20]
        :local monNum ($bulan->$mon)
        :local rawCurrentTime ($day."/".$monNum."/".$year." ".$time." WITA")
        :local encCurrentTime ($day."/".$monNum."/".$year."%20".$time."%20WITA")
        :local encMessage ""
        :for k from=0 to=([:len $message] - 1) do={
            :local char [:pick $message $k ($k + 1)]
            :if ($char = " ") do={:set char "%20"}
            :set encMessage ($encMessage . $char)
        }
        :if ($keepOutput = true) do={:set output ($output."\\F0\\9F\\95\\92%20".$encCurrentTime."%0A\\E2\\80\\A2%20".$encMessage."%0A%0A")}
        :if ($rawCurrentTime = $lastTime) do={:set keepOutput true; :set output ""}
        :set currentTime $rawCurrentTime
    }
    :if ($counter = ([:len $startBuf] - 1)) do={
        :if ($keepOutput = false && [:len $message] > 0) do={:set output ($output."\\F0\\9F\\95\\92%20".$message)}
    }
    :set counter ($counter + 1)
}

:if ([:len $output] > 0) do={
    /system scheduler set [find name=$scheduleName] comment=$currentTime
    /tool fetch url=("https://api.telegram.org/bot" . $bot . "/sendMessage?chat_id=" . $ChatID . "&text=" . $myserver . "%0A%0A" . $output) keep-result=no;
}
`,
  },
];

const FEATURE_PAGES = [
  { slug: 'userlog', label: 'User Login/Logout', href: '#/feature/userlog' },
  { slug: 'ppplog', label: 'PPP Login/Logout', href: '#/feature/ppplog' },
  { slug: 'staffusage', label: 'Admin/Owner Usage', href: '#/feature/staffusage' },
  { slug: 'pppbills', label: 'Tagihan PPP', href: '#/feature/pppbills' },
  { slug: 'dailyusage', label: 'Daily Usage', href: '#/feature/dailyusage' },
  { slug: 'mklogs', label: 'Mikrotik Logs', href: '#/feature/mklogs' },
];

// Process templates into outputs (split for userlog and ppplog)
const SCRIPTS = SCRIPT_TEMPLATES.map(function(script) {
  if (script.slug === 'userlog') {
    var parts = script.template.split('\n# ==================== SCRIPT LOGOUT ====================\n');
    return Object.assign({}, script, {
      outputs: [
        { title: 'Script Login', template: parts[0].trim() },
        { title: 'Script Logout', template: parts[1].trim() },
      ],
    });
  }
  if (script.slug === 'ppplog') {
    var parts = script.template.split('\n# ==================== ON DOWN ====================\n');
    return Object.assign({}, script, {
      outputs: [
        { title: 'Script On Up', template: parts[0].trim() },
        { title: 'Script On Down', template: parts[1].trim() },
      ],
    });
  }
  return script;
});

function getScriptBySlug(slug) {
  return SCRIPTS.find(function(s) { return s.slug === slug; });
}

// --- State ---
var toastTimer = null;

function getRoute() {
  return window.location.hash.slice(1) || '/';
}

function navigate(path) {
  window.location.hash = path;
}

function getTheme() {
  try {
    return localStorage.getItem('mtgenx_theme') || 'dark';
  } catch { return 'dark'; }
}

function setTheme(theme) {
  try { localStorage.setItem('mtgenx_theme', theme); } catch {}
  document.documentElement.classList.toggle('theme-light', theme === 'light');
}

function toggleTheme() {
  setTheme(getTheme() === 'dark' ? 'light' : 'dark');
  render();
}

function getStoredValues(slug) {
  try {
    var item = localStorage.getItem('mtgenx_' + slug);
    return item ? JSON.parse(item) : {};
  } catch { return {}; }
}

function setStoredValue(slug, key, value) {
  var values = getStoredValues(slug);
  values[key] = value;
  try { localStorage.setItem('mtgenx_' + slug, JSON.stringify(values)); } catch {}
}

function showToast(msg) {
  var el = document.getElementById('toast');
  if (!el) return;
  el.querySelector('.toast-msg').textContent = msg;
  el.style.display = 'block';
  el.classList.remove('animate-slide-in-right');
  void el.offsetWidth;
  el.classList.add('animate-slide-in-right');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(function() { el.style.display = 'none'; }, 2500);
}

// --- Helper: generate script from template + values ---
function generateScript(template, values) {
  var result = template;
  for (var key in values) {
    if (values[key]) {
      result = result.replace(new RegExp('\\{\\{' + key + '\\}\\}', 'g'), values[key].replace(/ /g, '%20'));
    }
  }
  return result;
}

// --- Helper: highlight code lines ---
function highlightCode(code) {
  var lines = code.split('\n');
  return lines.map(function(line) {
    var isComment = line.trimStart().startsWith('#');
    var isPlaceholder = /{{[^}]+}}/.test(line);
    var cls = isComment ? 'text-white/35' : isPlaceholder ? 'text-amber-300' : '';
    return '<div class="' + cls + '">' + escapeHtml(line || ' ') + '</div>';
  }).join('');
}

function escapeHtml(text) {
  var div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// --- Render functions ---
function render() {
  var route = getRoute();
  var featureMatch = route.match(/^\/feature\/(\w+)/);
  var featureSlug = featureMatch ? featureMatch[1] : null;
  var script = featureSlug ? getScriptBySlug(featureSlug) : null;
  var root = document.getElementById('root');

  if (route === '/' || !featureMatch || !script) {
    root.innerHTML = renderHome();
  } else {
    root.innerHTML = renderFeature(script);
  }

  renderToast();
  attachEvents();
}

function renderHome() {
  var theme = getTheme();
  var featureCards = FEATURE_PAGES.map(function(page, i) {
    var script = SCRIPTS.find(function(s) { return s.slug === page.slug; });
    var iconName = script ? script.icon : 'Terminal';
    var iconSvg = ICONS[iconName] || ICONS.Terminal;
    return '<button data-href="' + page.href + '" style="animation-delay:' + (i * 60) + 'ms" class="group glass-card flex animate-fade-in-up flex-col rounded-xl p-4 text-left transition-all duration-300 hover:scale-[1.03] hover:border-primary-400/40 hover:bg-white/12 hover:shadow-xl hover:shadow-primary-500/10 sm:rounded-2xl sm:p-5">' +
      '<div class="mb-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-500/20 ring-1 ring-primary-400/30 transition group-hover:bg-primary-500/30 group-hover:ring-primary-400/50 sm:h-11 sm:w-11 sm:rounded-xl">' +
      '<span class="text-primary-300">' + iconSvg + '</span>' +
      '</div>' +
      '<p class="text-sm font-semibold text-white">' + page.label + '</p>' +
      (script ? '<p class="mt-1 line-clamp-2 text-xs text-white/40">' + escapeHtml(script.description) + '</p>' : '') +
      '</button>';
  }).join('');

  return '<div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">' +
    '<div class="pointer-events-none fixed inset-0 overflow-hidden">' +
    '<div class="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary-600/25 blur-[130px] animate-glow-pulse"></div>' +
    '<div class="absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-accent-500/20 blur-[130px] animate-glow-pulse"></div>' +
    '<div class="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary-500/10 blur-[100px]"></div>' +
    '</div>' +
    '<div class="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-8 sm:px-6 sm:py-12 lg:px-8">' +
    '<div class="absolute right-4 top-4">' + themeToggleBtn(theme) + '</div>' +
    '<div class="mb-10 text-center animate-fade-in-up sm:mb-16">' +
    '<div class="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-white/60 backdrop-blur-md sm:mb-6 sm:px-4 sm:text-xs">' +
    '<span class="shrink-0 text-green-400">' + ICONS.ShieldCheck + '</span>' +
    '<span class="truncate">100% Client-Side!</span>' +
    '</div>' +
    '<h1 class="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl"><span class="text-gradient">MTgenX</span> </h1>' +
    '<p class="mx-auto mt-3 max-w-2xl text-base text-white/60 sm:mt-4 sm:text-xl">MikroTik Generator External</p>' +
    '<p class="mx-auto mt-2 max-w-xl text-xs text-white/40 sm:text-sm">Pilih jenis notifikasi, isi data Bot Telegram Anda, dan salin script siap pakai, telah diuji pada RouterOS v6 Multiboard type.</p>' +
    '</div>' +
    '<div class="mx-auto w-full max-w-3xl"><div class="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">' + featureCards + '</div></div>' +
    '<div class="mx-auto mt-10 w-full max-w-3xl sm:mt-12">' +
    '<div class="glass-card flex flex-col items-center gap-4 rounded-2xl p-5 sm:flex-row sm:justify-between sm:p-6">' +
    '<div class="flex items-center gap-3">' +
    '<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/20 ring-1 ring-accent-400/30">' +
    '<span class="text-accent-400">' + ICONS.Terminal + '</span>' +
    '</div>' +
    '<div><p class="text-sm font-semibold text-white">Cara Pakai</p><p class="text-xs text-white/50">Pilih kategori &rarr; isi form &rarr; copy script &rarr; paste ke MikroTik</p></div>' +
    '</div>' +
    '<a href="https://8xploit.github.io/cv" target="_blank" rel="noopener noreferrer" class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white sm:w-auto">' +
    ICONS.Github + ' Developer</a>' +
    '</div></div>' +
    renderFooter() +
    '</div></div>';
}

function renderFeature(script) {
  var theme = getTheme();
  var iconName = script.icon;
  var iconSvg = ICONS[iconName] || ICONS.HelpCircle;
  var values = getStoredValues(script.slug);
  var outputSections = script.outputs || [{ title: script.title, template: script.template }];

  var formFields = script.inputs.map(function(input) {
    return renderInputField(input, values[input.key] || '', script.slug);
  }).join('');

  var outputPanels = outputSections.map(function(output) {
    return renderCodeOutput(output.template, values, output.title);
  }).join('');

  return '<div class="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">' +
    '<div class="pointer-events-none fixed inset-0 overflow-hidden">' +
    '<div class="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-600/20 blur-[120px] animate-glow-pulse"></div>' +
    '<div class="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-accent-500/15 blur-[120px] animate-glow-pulse"></div>' +
    '</div>' +
    '<div class="relative z-10 mx-auto max-w-7xl px-3 py-4 sm:px-6 sm:py-6 lg:px-8">' +
    '<header class="mb-5 flex items-center justify-between sm:mb-6">' +
    '<div class="flex items-center gap-2 sm:gap-3">' +
    '<button data-action="back" class="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/70 transition hover:bg-white/10 hover:text-white sm:rounded-xl sm:px-3.5 sm:text-sm">' +
    ICONS.ArrowLeft + '<span class="hidden sm:inline">Kembali</span></button>' +
    '</div>' +
    '<div class="flex items-center gap-2.5">' +
    '<span class="text-base font-bold text-gradient sm:text-lg">MTgenX</span>' +
    '<span class="text-base italic text-gradient sm:text-xs">by Kapten Nemo</span>' +
    themeToggleBtn(theme) +
    '</div></header>' +
    '<div class="mb-5 flex items-start gap-3 sm:mb-6 sm:gap-4">' +
    '<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-500/20 ring-1 ring-primary-400/30 sm:h-12 sm:w-12 sm:rounded-2xl">' +
    '<span class="text-primary-300">' + iconSvg + '</span>' +
    '</div>' +
    '<div class="min-w-0"><h1 class="text-lg font-bold text-white sm:text-xl lg:text-2xl">' + escapeHtml(script.title) + '</h1>' +
    '<p class="mt-0.5 text-xs text-white/50 sm:text-sm">' + escapeHtml(script.description) + '</p></div>' +
    '</div>' +
    '<div class="grid gap-4 sm:gap-6 lg:grid-cols-5">' +
    '<div class="lg:col-span-2"><div class="glass-card rounded-xl p-4 sm:rounded-2xl sm:p-6">' +
    '<div class="space-y-5">' +
    '<div><h3 class="text-sm font-semibold uppercase tracking-wider text-primary-300/80">Form Input</h3>' +
    '<p class="mt-1 text-xs text-white/40">Isi data di bawah \u2014 script di sebelah kanan akan otomatis ter-update.</p></div>' +
    formFields +
    '<div class="flex items-start gap-2 rounded-xl bg-primary-500/10 p-3 ring-1 ring-primary-400/20">' +
    '<span class="mt-0.5 shrink-0 text-primary-300">' + ICONS.Info + '</span>' +
    '<p class="text-xs leading-relaxed text-white/50">Data Bot Token &amp; Chat ID disimpan di browser Anda (' + escapeHtml(script.title) + '). Tidak ada data yang dikirim ke server.</p>' +
    '</div></div>' +
    '<div class="mt-6 rounded-xl border border-accent-400/20 bg-accent-500/10 p-4">' +
    '<p class="text-xs font-semibold uppercase tracking-wider text-accent-300">Lokasi Penempatan</p>' +
    '<p class="mt-1 text-sm leading-relaxed text-white/65">' + escapeHtml(script.placement) + '</p>' +
    '</div></div></div>' +
    '<div class="space-y-4 lg:col-span-3"><div class="min-h-[300px] sm:min-h-[400px] lg:sticky lg:top-6 lg:space-y-4">' +
    outputPanels +
    '</div></div></div>' +
    renderFooter() +
    '</div></div>';
}

function renderInputField(input, value, slug) {
  var isPassword = input.type === 'password';
  var inputType = isPassword ? 'password' : (input.type || 'text');
  var showKey = input.key + '_show';

  var field = '';
  if (input.type === 'textarea') {
    field = '<textarea data-input="' + input.key + '" data-slug="' + slug + '" placeholder="' + escapeHtml(input.placeholder) + '" rows="5" class="w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-all duration-200 focus:border-primary-400/50 focus:bg-white/10 focus:ring-2 focus:ring-primary-400/20">' + escapeHtml(value) + '</textarea>';
  } else {
    field = '<input type="' + inputType + '" data-input="' + input.key + '" data-slug="' + slug + '" value="' + escapeHtml(value) + '" placeholder="' + escapeHtml(input.placeholder) + '" class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-all duration-200 focus:border-primary-400/50 focus:bg-white/10 focus:ring-2 focus:ring-primary-400/20" />';
  }

  var eyeBtn = '';
  if (isPassword) {
    eyeBtn = '<button type="button" data-toggle-password="' + input.key + '" class="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 transition hover:text-white/70">' + ICONS.Eye + '</button>';
  }

  var hint = '';
  if (input.key !== 'BOT_TOKEN' && input.key !== 'CHAT_ID') {
    hint = '<p class="mt-1 text-xs text-white/30"><code class="font-mono text-primary-300/60">{{' + input.key + '}}</code></p>';
  }

  return '<div>' +
    '<label class="mb-1.5 block text-sm font-medium text-white/80">' + escapeHtml(input.label) +
    (input.required ? '<span class="ml-1 text-red-400">*</span>' : '') + '</label>' +
    '<div class="relative">' + field + eyeBtn + '</div>' +
    hint + '</div>';
}

function renderCodeOutput(template, values, title) {
  var generated = generateScript(template, values);
  var lineCount = generated.split('\n').length;
  var lineNumbers = '';
  for (var i = 0; i < lineCount; i++) {
    lineNumbers += '<div>' + (i + 1) + '</div>';
  }
  return '<div class="flex h-full flex-col">' +
    '<div class="flex flex-col gap-3 rounded-t-2xl border border-white/10 border-b-0 bg-white/5 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">' +
    '<div class="flex items-center gap-2.5"><span class="text-primary-300">' + ICONS.FileCode2 + '</span>' +
    '<div><p class="text-sm font-semibold text-white">' + escapeHtml(title) + '</p>' +
    '<p class="text-xs text-white/40">Live Preview \u2014 update otomatis saat form diisi</p></div></div>' +
    '<button data-copy="' + escapeHtml(generated) + '" class="copy-btn inline-flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-all duration-200 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm bg-green-600/20 text-green-300 ring-1 ring-green-500/40 hover:bg-green-600/30 hover:ring-green-500/60">' +
    ICONS.Copy + ' Copy to Clipboard</button>' +
    '</div>' +
    '<div class="relative flex-1 overflow-auto rounded-b-2xl border border-white/10 bg-[#0d1117]/80 backdrop-blur-sm">' +
    '<div class="flex">' +
    '<div class="select-none border-r border-white/5 px-3 py-4 text-right font-mono text-xs leading-relaxed text-white/20">' + lineNumbers + '</div>' +
    '<pre class="flex-1 overflow-x-auto px-4 py-4 font-mono text-xs leading-relaxed"><code class="text-green-300">' + highlightCode(generated) + '</code></pre>' +
    '</div></div></div>';
}

function themeToggleBtn(theme) {
  var isLight = theme === 'light';
  var moonSvg = '<svg viewBox="0 0 24 24" aria-hidden="true" class="h-5 w-5 fill-none stroke-current stroke-2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" /></svg>';
  var sunSvg = '<svg viewBox="0 0 24 24" aria-hidden="true" class="h-5 w-5 fill-none stroke-current stroke-2"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>';
  return '<button data-action="toggle-theme" aria-label="' + (isLight ? 'Aktifkan mode gelap' : 'Aktifkan mode terang') + '" title="' + (isLight ? 'Mode gelap' : 'Mode terang') + '" class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white">' +
    (isLight ? moonSvg : sunSvg) + '</button>';
}

function renderFooter() {
  var year = new Date().getFullYear();
  return '<footer class="mt-auto w-full px-6 py-6 text-center">' +
    '<p class="text-sm text-white/50">Copyright &copy; ' + year + ' ' +
    '<a href="https://8xploit.github.io/cv" target="_blank" rel="noopener noreferrer" class="font-medium text-white/70 transition hover:text-primary-300">with ❤ by Kapten Nemo</a></p></footer>';
}

function renderToast() {
  var existing = document.getElementById('toast');
  if (existing) return;
  var el = document.createElement('div');
  el.id = 'toast';
  el.style.display = 'none';
  el.className = 'fixed bottom-6 right-6 z-50';
  el.innerHTML = '<div class="glass-card flex items-center gap-3 rounded-2xl px-5 py-3.5 shadow-2xl shadow-primary-500/20">' +
    '<span class="text-green-400">' + ICONS.CheckCircle2 + '</span>' +
    '<span class="toast-msg text-sm font-medium text-white"></span>' +
    '<button class="ml-2 text-white/50 transition hover:text-white" data-action="dismiss-toast">' + ICONS.X + '</button></div>';
  document.body.appendChild(el);
}

// --- Event handling ---
function attachEvents() {
  // Navigation buttons
  document.querySelectorAll('[data-href]').forEach(function(btn) {
    btn.addEventListener('click', function() { navigate(btn.getAttribute('data-href')); });
  });

  // Back button
  document.querySelectorAll('[data-action="back"]').forEach(function(btn) {
    btn.addEventListener('click', function() { navigate('/'); });
  });

  // Theme toggle
  document.querySelectorAll('[data-action="toggle-theme"]').forEach(function(btn) {
    btn.addEventListener('click', toggleTheme);
  });

  // Toast dismiss
  var dismissBtn = document.querySelector('[data-action="dismiss-toast"]');
  if (dismissBtn) {
    dismissBtn.addEventListener('click', function() {
      var el = document.getElementById('toast');
      if (el) el.style.display = 'none';
    });
  }

  // Copy buttons
  document.querySelectorAll('[data-copy]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var text = btn.getAttribute('data-copy');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() {
          showCopied(btn);
          showToast('Script berhasil disalin!');
        }).catch(function() { fallbackCopy(text, btn); });
      } else {
        fallbackCopy(text, btn);
      }
    });
  });

  // Input fields
  document.querySelectorAll('[data-input]').forEach(function(el) {
    el.addEventListener('input', function() {
      var key = el.getAttribute('data-input');
      var slug = el.getAttribute('data-slug');
      setStoredValue(slug, key, el.value);
      updateOutputs(slug);
    });
  });

  // Password toggle
  document.querySelectorAll('[data-toggle-password]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var key = btn.getAttribute('data-toggle-password');
      var input = document.querySelector('[data-input="' + key + '"]');
      if (!input) return;
      if (input.type === 'password') {
        input.type = 'text';
        btn.innerHTML = ICONS.EyeOff;
      } else {
        input.type = 'password';
        btn.innerHTML = ICONS.Eye;
      }
    });
  });
}

function showCopied(btn) {
  btn.innerHTML = ICONS.Check + ' Disalin!';
  btn.classList.remove('bg-green-600/20', 'ring-green-500/40', 'hover:bg-green-600/30', 'hover:ring-green-500/60');
  btn.classList.add('bg-green-500/20', 'ring-green-400/40');
  setTimeout(function() {
    btn.innerHTML = ICONS.Copy + ' Copy to Clipboard';
    btn.classList.remove('bg-green-500/20', 'ring-green-400/40');
    btn.classList.add('bg-green-600/20', 'ring-green-500/40', 'hover:bg-green-600/30', 'hover:ring-green-500/60');
  }, 2000);
}

function fallbackCopy(text, btn) {
  var ta = document.createElement('textarea');
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); } catch {}
  document.body.removeChild(ta);
  showCopied(btn);
  showToast('Script berhasil disalin!');
}

function updateOutputs(slug) {
  var script = getScriptBySlug(slug);
  if (!script) return;
  var values = getStoredValues(slug);
  var outputSections = script.outputs || [{ title: script.title, template: script.template }];

  outputSections.forEach(function(output, idx) {
    var generated = generateScript(output.template, values);
    var lineCount = generated.split('\n').length;
    var lineNumbers = '';
    for (var i = 0; i < lineCount; i++) { lineNumbers += '<div>' + (i + 1) + '</div>'; }

    // Find the output panel containers
    var containers = document.querySelectorAll('.flex.h-full.flex-col');
    var container = containers[idx];
    if (!container) return;

    // Update line numbers
    var lineNumEl = container.querySelector('.select-none.border-r');
    if (lineNumEl) lineNumEl.innerHTML = lineNumbers;

    // Update code
    var codeEl = container.querySelector('pre code');
    if (codeEl) codeEl.innerHTML = highlightCode(generated);

    // Update copy button data
    var copyBtn = container.querySelector('[data-copy]');
    if (copyBtn) copyBtn.setAttribute('data-copy', generated);
  });
}

// --- Init ---
window.addEventListener('hashchange', function() {
  window.scrollTo(0, 0);
  render();
});

// Apply theme on load
setTheme(getTheme());
render();
