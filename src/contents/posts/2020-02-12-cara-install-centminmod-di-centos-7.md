---
title: "Cara Install Centminmod di CentOS 7"
slug: "cara-install-centminmod-di-centos-7"
description: "Tutorial lengkap cara install Centminmod di CentOS 7 untuk mengoptimalkan konfigurasi LEMP server secara otomatis."
author: yadi
categories: "server"
tags: ["centminmod", "centos", "lemp", "server-optimization"]
cover: "/assets/images/uploads/2020/02/cara-install-centminmod-di-centos-7-001.png"
date: "2020-02-12T15:31:00+07:00"
highlight: false
draft: false
---

Halo sobat yadi, sudah lama tidak post di blog ini, baik kali ini saya ingin share sedikit dari catatan saya kepada sobat sekalian.

Pada tutorial ini saya akan menjelaskan "Cara Install Centminmod di CentOS 7", bagi sobat yang belum tau, centminmod adalah sebuah software automatis yang akan menginstall vps anda dengan berbagai program (LEMP) seperti: `web server`, `database`, `firewall` dan pemograman `php` tentunya.

## Apa saja fitur/aplikasi yang di tawarkan `Centminmod` ?

- Nginx
  - vHost
  - vHost Static
  - PageSpeed
  - Lua
  - SPDY & HTTP/2 SSL +LibreSSL
  - OpenResty Module
- PHP (PHP-FPM)
- MariaDB (MySQL)
- Memcached Server
- CSF Firewall
- OpenLiteSpeed Integration
- Dan masih banyak lagi fitur lainnya

## System Requirement

### Minimum

- RAM: 256MB (CentOS 6) or 1GB (CentOS 7)
- Disk: 20GB (OpenVZ) or 30GB (KVM)

### Recomended

- RAM: 512MB (CentOS 6) or 2GB (CentOS 7)
- Disk: 40GB (OpenVZ) or 60GB (KVM)

Syarat diatas berlaku untuk installasi awal agar lebih lancar, untuk penggunaan selanjutnya, anda bisa mengoptimasi lebih banyak lagi.

## Cara Install `Centminmod`

Anda tidak perlu input manual satu-per-satu, anda hanya perlu jalankan 1 baris code, dan sisanya akan di install secara automatis oleh `Centminmod`

```bash
yum -y update; curl -O https://centminmod.com/installer.sh && chmod 0700 installer.sh && bash installer.sh
```

### Catatan

- Setelah installasi selesai, Untuk menampilkan menu `Centminmod`, jalankan command `centmin` (contoh gambar menu pada header post ini)
- `Centminmod` akan menginstall dari sources, yang artinya akan di compile pemograman yang dibutuhkan, ini mungkin membutuhkan waktu, tetapi ini juga bertujuan untuk optimasi software yang digunakan, sehingga akan dicocokan sources vps dengan konfigurasi yang optimal

![cara-install-centminmod-di-centos-7-002.png](/assets/images/uploads/2020/02/cara-install-centminmod-di-centos-7-002.png)

- Jika Installasi telah selesai, maka akan muncul seperti ini

![cara-install-centminmod-di-centos-7-003.png](/assets/images/uploads/2020/02/cara-install-centminmod-di-centos-7-003.png)

Untuk informasi installer bisa cek di [Halaman Berikut](https://centminmod.com/install.html)

## Website Resmi, Support atau Bantuan ?

### Website Utama

- Website: [https://centminmod.com/](https://centminmod.com/)
- Forum: [https://community.centminmod.com/](https://community.centminmod.com/)

### Sosial Media

- Facebook: [https://www.facebook.com/centminmodcom](https://www.facebook.com/centminmodcom)
- Twitter: [https://twitter.com/centminmod](https://twitter.com/centminmod)
- Youtube: [https://www.youtube.com/c/CentminModGeorgeLiu/videos](https://www.youtube.com/c/CentminModGeorgeLiu/videos)
- GitHub: [https://github.com/centminmod/centminmod](https://github.com/centminmod/centminmod)

Sekian tutorial dari kami, Semoga Bermanfaat.
