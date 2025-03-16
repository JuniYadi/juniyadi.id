---
title: "Tips dan Trik Merubah Tampilan Terminal Linux"
slug: tips-dan-trik-merubah-tampilan-terminal-linux
description: "Panduan merubah tampilan terminal Linux melalui trik mengganti font, warna, dan info sistem secara efektif."
date: "2018-12-03T11:17:20+07:00"
highlight: false
draft: false
tags:
  - linux
  - terminal
  - customization
  - tips
cover: /assets/images/uploads/2018/12/terminal-linux.jpg
author: yadi
category: linux
---

Sobat Yadi, jika anda saat ini menggunakan linux, tentu sudah tidak asing lagi dengan terminal linux, tunggu dulu, terminal disini bukan terminal bus angkutan kota antar provinsi atau terminal colokan listrik ya.

Sedikit informasi, terminal di linux digunakan untuk berbagai kebutuhan penunjang utama, seperti perubahan konfigurasi aplikasi, menjalankan program, memodifikasi sistem, dan masih banyak lagi.

Di operasi sistem windows tentu saja tersedia, yaitu PowerShell untuk versi Server, dan CMD (Command Prompt) untuk non-server (tampilan dan fungsinya sangat terbatas).

![](/assets/images/uploads/2018/12/power-shell.png)

tapi tahukah anda, ternyata terminal ini juga bisa disesuaikan dengan kebutuhan kita loh. Mungkin bagi kita sering menggunakan tampilan yang standar saja, berikut beberapa tips dan trik merubah tampilan terminal linux.

# Mengganti Jenis Font, Ukuran Font, Dan Warna Background
Untuk tiap versi linux, biasanya untuk jenis dan ukuran font berbeda-beda, kalau saya pribadi, lebih suka seperti tampilan standar ubuntu, karena ketika melihat terminal dalam waktu lama, mata juga tidak begitu lelah karena warna jenis dan ukuran maupun warna background tidak menusuk mata.

Untuk di Linux Lubuntu 16.04, anda bisa rubah dari Tab Menu : Edit => Preference

![](/assets/images/uploads/2018/12/terminal-lubuntu.png)

Jika anda ingin mengganti background belakang, misalnya warna ungu gelap seperti ubuntu, masukkan kode warna : `#300A24`

![](/assets/images/uploads/2018/12/terminal-ubuntu-ganti-warna.png)

# Membuat Tampilan Welcome Terminal dengan Nama Sendiri
Sepertinya asik bukan jika tiap membuka terminal, terpampang nama kita, apalagi jika laptop dipinjem temen, wah kelihatan pro jadinya. contoh seperti ini :

![](/assets/images/uploads/2018/12/terminal-linux-nama-sendiri.png)

Untuk membuat seperti diatas, ini automatis ya, tidak buat sendiri dengan symbol-symbol dari keyboard, kalau manual bisa lama jadinya hehe.

Pertama, installasi software yang dibutuhkan :
* Debian/Ubuntu : `apt-get install figlet`
* Centos : `yum install figlet`

untuk memulai membuat seperti digambar, jalankan command: `figlet "blog juni yadi"`

![](/assets/images/uploads/2018/12/contoh-fliget.png)

agar tulisan tersebut automatis muncul ketika terminal dibuka, maka edit file `.bashrc` pada akun terminal utama anda. command: `nano ~/.bashrc`

Kemudian paste `figlet "blog juni yadi"` pada baris paling akhir

# Menampilkan Welcome Terminal Dengan Informasi System
Cara ini hampir sama dengan yang membuat nama, hanya berbeda paket saja yang digunakan. contohnya seperti ini :

![](/assets/images/uploads/2018/12/terminal-linux-system-info.png)

## Pertama, install software yang dibutuhkan :
* Debian/Ubuntu : `apt-get install screenfetch`
* Centos : `yum install screenfetch`

### Khusus centos 7 atau linux lainnya, installasi manual, caranya :
```bash
yum install git / apt-get install git
git clone https://github.com/KittyKatt/screenFetch.git
cp screenfetch/screenfetch-dev /usr/bin/screenfetch
chmod +x /usr/bin/screenfetch
screenfetch
```

Untuk menampilkannya secara default, caranya juga sama, edit file .bashrc yaitu dengan command : `nano ~/.bashrc`

Pastekan `screenfetch` pada baris paling akhir

# Menyembunyikan Path Folder Saat ini di Terminal
Bagi anda yang menyimpan file alam sub-sub-sub folder, tentu ini jadi sangat tidak nyaman, ketika akses file anda dari terminal, eh ternyata path nya jauh sekali, hingga harus resize ukuran terminal, contohnya:

![](/assets/images/uploads/2018/12/terminal-long-path.png)

Panjang sekali bukan? hal ini saya rasa sangat tidak nyaman, nah untuk menyembunyikan path ini, menjadi kunci, kenyamanan dalam menggunakan terminal linux kembali ke sedia kala. contohnya:

![](/assets/images/uploads/2018/12/terminal-short-path.png)

bagaimana perbandingannya? sangat jauh bukan, kita tinggal jalankan command `pwd` utk cek direktori saat ini.

Untuk membuat seperti diatas , kita edit lagi di .bashrc dengan command : `nano ~/.bashrc`

Pada baris terakhir, masukkan: `export PS1=’$ ‘`
Selesai.

Bagaimana? Menarik buka tips nya. Semoga Bermanfaat.
