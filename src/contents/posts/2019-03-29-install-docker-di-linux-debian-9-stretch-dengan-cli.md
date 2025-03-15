---
title: "Install Docker di Linux Debian 9 (Stretch) dengan CLI"
slug: install-docker-di-linux-debian-9-stretch-dengan-cli
description: "Panduan instalasi Docker di Debian 9 menggunakan CLI yang mencakup update, instalasi paket, konfigurasi repository, dan pengelolaan container nginx."
date: "2019-03-29T07:47:38+07:00"
highlight: false
draft: false
category: docker
tags:
  - Docker
  - Debian
  - CLI
  - Tutorial
cover: /assets/images/uploads/2019/03/docker-debian.png
author: yadi
---

Hi Sobat Yadi, kali ini saya akan menjelaskan cara install docker di linux debian 9 dengan cli (command line interface), anda bisa menginstall ini dari lokal komputer/ laptop anda, virtualisasi atau di server secara langsung.

# Index List
1. Persyaratan
2. Installasi Docker di Debian 9
3. Cara Menggunakan Docker

## 1. Persyaratan :
* Debian 9 x86_64 (64-bit) Minimal Installation
* Full akses root
* Koneksi Internet

## 2. Installasi Docker di Debian 9

### 2.1 Update & Upgrade OS ke versi terbaru
```bash
apt-get update
apt-get upgrade -y
```

### 2.2 Install Paket yang dibutuhkan untuk installasi menggunakan apt dengan https
```bash
apt-get install apt-transport-https ca-certificates curl gnupg2 software-properties-common -y
```

### 2.3 Menambahkan Official GPG dari Docker
```bash
curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -
```

### 2.4 Menambahkan Repository Docker ke Repo List
```bash
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian stretch stable"
```

### 2.5 Mengupdate Repository Lokal
```bash
apt-get update
```

### 2.6 Install Docker
```bash
apt-get install docker-ce docker-ce-cli -y
```

Setelah melakukan installasi, anda bisa mengecek status docker dengan command: `systemctl status docker`

## 3. Cara Menggunakan Docker

Untuk menggunakan docker, anda tidak perlu membuat images sendiri, semua sudah tersedia pada `Docker Images Hub`, anda hanya perlu mencari dan menggunakannya saja langsung.

Sebagai contoh, disini kita akan mencari `images web server nginx`

### 3.1 Mencari Images Docker Nginx
```bash
docker search nginx
```

### 3.2 Install Images Docker Nginx
```bash
docker pull nginx
```

### 3.3 Jalankan Container Docker Nginx
```bash
docker run --name mynginx1 -p 80:80 -d nginx
```

#### Notes:
* mynginx1 = nama unik dari container yang kita gunakan
* -p = port bidding, bisa diartikan sebagai penghubung antara docker dan main node. pada 80 pertama ini menetukan port pada docker (karena menggunaka nginx maka defaultnya 80), kemudian port 80 kedua ini menetukan port yang digunakan pada node server utama, jika kita ubah menjadi 1234 (-p 80:1234) maka aksesnya akan menjadi http://ip_server:1234
* -d = memberitahu docker bahwa images dengan container tersebut dijalakan terpisah

Sekarang coba akses dari browser dengan http://ip_server_anda, jika muncul halaman default page nginx, maka installasi docker nginx sukses.

### 3.4 Mengecek List Images Docker Yang Sudah Terdownload
```bash
docker images
```

### 3.5 Mengecek List Container Docker `docker ps`
```bash
root@juniyadi:~# docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                NAMES
8464835a656f        nginx               "nginx -g 'daemon of…"   36 minutes ago      Up 36 minutes       0.0.0.0:80->80/tcp   mynginx1
```

### 3.6 Mematikan Container Docker `docker stop <container-name>`
```bash
root@juniyadi:~# docker stop mynginx1
mynginx1
 
root@juniyadi:~# docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
```

### 3.7 Menjalankan Container Docker `docker start <container-name>`
```bash
root@juniyadi:~# docker start mynginx1
mynginx1
 
root@juniyadi:~# docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                NAMES
8464835a656f        nginx               "nginx -g 'daemon of…"   About an hour ago   Up 2 seconds        0.0.0.0:80->80/tcp   mynginx1
```

### 3.8 Docker Command List
Untuk melihat daftar lengkap command dasar pada docker, ketikkan perintah: `docker --help`

Sekian tutorial kali ini, semoga bermanfaat.
