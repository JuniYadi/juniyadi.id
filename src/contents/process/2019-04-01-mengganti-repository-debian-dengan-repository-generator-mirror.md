---
layout: post
title: "Mengganti Repository Debian dengan Repository Generator (Mirror)"
author: yadi
categories: [ linux, system ]
tags: [ debian, debian 6, debian 7, debian 8, debian 9 ]
image: assets/images/uploads/2019/04/Selection_01006.png
date: 2019-04-01 09:19:53 +07:00
---

Hi sobat yadi, kali ini saya akan share cara mengganti repository debian dengan mudah dan simple. Kenapa harus mengganti repository debian ? tentu saja ini tidak wajib, tetapi jika repository kita rubah ke server lebih dekat, maka aksesnya atau update jadi lebih cepat.

Pada gambar diatas terlihat bahwa repository debian menggunakan server amerika serikat (US), tentu ini akan jadi masalah besar jika ternyata koneksi kita ke internasional melambat. Solusi utama tentu mengganti ke mirror server lainnya sehingga proses installasi jadi lebih cepat.

## Cara Mengganti Repository Debian
Semua list repository tersimpan pada file `/etc/apt/sources.list` kemudian edit menggunakan editor nano :

```bash
mv /etc/apt/sources.list /etc/apt/sources.list.old
nano /etc/apt/sources.list
```

> Untuk menyimpan perubahan tekan CTRL+X kemudian Y

Dibawah ini list lengkap mirror repository :
1. [Debian 10 (buster)](#repository-debian-10-buster)
2. [Debian 9 (stretch)](#repository-debian-9-stretch)
3. [Debian 8 (jessie)](#repository-debian-8-jessie)
4. [Debian 7 (wheezy)](#repository-debian-7-wheezy)

### Repository Debian 10 (Buster)
#### Mirror Indonesia (Kambing UI)
```
deb http://kambing.ui.ac.id/debian/ buster main contrib non-free
deb-src http://kambing.ui.ac.id/debian/ buster main contrib non-free

deb http://kambing.ui.ac.id/debian/ buster-updates main contrib non-free
deb-src http://kambing.ui.ac.id/debian/ buster-updates main contrib non-free

deb http://security.debian.org/ buster/updates main contrib non-free
deb-src http://security.debian.org/ buster/updates main contrib non-free
```
#### Mirror Singapore
```
deb http://ftp.sg.debian.org/debian/ buster main contrib non-free
deb-src http://ftp.sg.debian.org/debian/ buster main contrib non-free

deb http://ftp.sg.debian.org/debian/ buster-updates main contrib non-free
deb-src http://ftp.sg.debian.org/debian/ buster-updates main contrib non-free

deb http://security.debian.org/ buster/updates main contrib non-free
deb-src http://security.debian.org/ buster/updates main contrib non-free
```

#### Default (USA)
```
deb http://ftp.us.debian.org/debian/ buster main contrib non-free
deb-src http://ftp.us.debian.org/debian/ buster main contrib non-free

deb http://ftp.us.debian.org/debian/ buster-updates main contrib non-free
deb-src http://ftp.us.debian.org/debian/ buster-updates main contrib non-free

deb http://security.debian.org/ buster/updates main contrib non-free
deb-src http://security.debian.org/ buster/updates main contrib non-free
```

### Repository Debian 9 (Stretch)
#### Mirror Indonesia (Kambing UI)
```
deb http://kambing.ui.ac.id/debian/ stretch main contrib non-free
deb-src http://kambing.ui.ac.id/debian/ stretch main contrib non-free
 
deb http://kambing.ui.ac.id/debian/ stretch-updates main contrib non-free
deb-src http://kambing.ui.ac.id/debian/ stretch-updates main contrib non-free
 
deb http://security.debian.org/ stretch/updates main contrib non-free
deb-src http://security.debian.org/ stretch/updates main contrib non-free
```
#### Mirror Singapore
```
deb http://ftp.sg.debian.org/debian/ stretch main contrib non-free
deb-src http://ftp.sg.debian.org/debian/ stretch main contrib non-free
 
deb http://ftp.sg.debian.org/debian/ stretch-updates main contrib non-free
deb-src http://ftp.sg.debian.org/debian/ stretch-updates main contrib non-free
 
deb http://security.debian.org/ stretch/updates main contrib non-free
deb-src http://security.debian.org/ stretch/updates main contrib non-free
```

#### Default (USA)
```
deb http://ftp.us.debian.org/debian/ stretch main contrib non-free
deb-src http://ftp.us.debian.org/debian/ stretch main contrib non-free
 
deb http://ftp.us.debian.org/debian/ stretch-updates main contrib non-free
deb-src http://ftp.us.debian.org/debian/ stretch-updates main contrib non-free
 
deb http://security.debian.org/ stretch/updates main contrib non-free
deb-src http://security.debian.org/ stretch/updates main contrib non-free
```

### Repository Debian 8 (Jessie)
#### Mirror Indonesia (Kambing UI)
```
deb http://kambing.ui.ac.id/debian/ jessie main contrib non-free
deb-src http://kambing.ui.ac.id/debian/ jessie main contrib non-free
 
deb http://kambing.ui.ac.id/debian/ jessie-updates main contrib non-free
deb-src http://kambing.ui.ac.id/debian/ jessie-updates main contrib non-free
 
deb http://security.debian.org/ jessie/updates main contrib non-free
deb-src http://security.debian.org/ jessie/updates main contrib non-free
```
#### Mirror Singapore
```
deb http://ftp.sg.debian.org/debian/ jessie main contrib non-free
deb-src http://ftp.sg.debian.org/debian/ jessie main contrib non-free
 
deb http://ftp.sg.debian.org/debian/ jessie-updates main contrib non-free
deb-src http://ftp.sg.debian.org/debian/ jessie-updates main contrib non-free
 
deb http://security.debian.org/ jessie/updates main contrib non-free
deb-src http://security.debian.org/ jessie/updates main contrib non-free
```
#### Default (USA)
```
deb http://ftp.us.debian.org/debian/ jessie main contrib non-free
deb-src http://ftp.us.debian.org/debian/ jessie main contrib non-free
 
deb http://ftp.us.debian.org/debian/ jessie-updates main contrib non-free
deb-src http://ftp.us.debian.org/debian/ jessie-updates main contrib non-free
 
deb http://security.debian.org/ jessie/updates main contrib non-free
deb-src http://security.debian.org/ jessie/updates main contrib non-free
```

### Repository Debian 7 (Wheezy)
#### Mirror Indonesia (Kambing UI)
```
deb http://kambing.ui.ac.id/debian/ wheezy main contrib non-free
deb-src http://kambing.ui.ac.id/debian/ wheezy main contrib non-free
 
deb http://kambing.ui.ac.id/debian/ wheezy-updates main contrib non-free
deb-src http://kambing.ui.ac.id/debian/ wheezy-updates main contrib non-free
 
deb http://security.debian.org/ wheezy/updates main contrib non-free
deb-src http://security.debian.org/ wheezy/updates main contrib non-free
```

#### Mirror Singapore
```
deb http://ftp.sg.debian.org/debian/ wheezy main contrib non-free
deb-src http://ftp.sg.debian.org/debian/ wheezy main contrib non-free
 
deb http://ftp.sg.debian.org/debian/ wheezy-updates main contrib non-free
deb-src http://ftp.sg.debian.org/debian/ wheezy-updates main contrib non-free
 
deb http://security.debian.org/ wheezy/updates main contrib non-free
deb-src http://security.debian.org/ wheezy/updates main contrib non-free
```

#### Default (USA)
```
deb http://ftp.us.debian.org/debian/ wheezy main contrib non-free
deb-src http://ftp.us.debian.org/debian/ wheezy main contrib non-free
 
deb http://ftp.us.debian.org/debian/ wheezy-updates main contrib non-free
deb-src http://ftp.us.debian.org/debian/ wheezy-updates main contrib non-free
 
deb http://security.debian.org/ wheezy/updates main contrib non-free
deb-src http://security.debian.org/ wheezy/updates main contrib non-free
```

Jangan lupa melakukan `apt update` atau `apt-get update` agar repository lokal anda berubah dengan yang baru.

Jika anda ingin generate mirror lainnya, bisa menggunakan tools berikut : [https://debgen.github.io/](https://debgen.github.io/)

Sekian tutorial dari saya, semoga bermanfaat.