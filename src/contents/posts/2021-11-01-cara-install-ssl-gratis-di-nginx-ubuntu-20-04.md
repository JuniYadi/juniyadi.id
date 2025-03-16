---
title: "Cara Install SSL Gratis di Nginx Ubuntu 20.04"
slug: cara-install-ssl-gratis-di-nginx-ubuntu-20-04
description: "Panduan lengkap instalasi SSL gratis di Nginx pada Ubuntu 20.04 menggunakan ZeroSSL, mencakup persyaratan dan langkah eksekusi perintah dengan acme.sh."
date: "2021-11-01T13:00:00+07:00"
highlight: false
draft: false
categories:
  - Tutorial
tags:
  - SSL
  - Nginx
  - Ubuntu
  - ZeroSSL
cover: /assets/images/uploads/2021/11/zerossl-free.jpg
author: yadi
---

Halo sobat yadi, pada kesempatan ini saya akan share tentang **Cara Install SSL Gratis di Nginx Ubuntu 20.04**.

## Persyaratan

1. OS Ubuntu 20.04
2. Akses Root/ Non-Root
3. Web Server Nginx

## Install SSL

```
curl https://get.acme.sh | sh -s email=youremail@example.com
```

## Langkah-langkah Instalasi

1. **Unduh dan Instal acme.sh**: Jalankan perintah berikut untuk mengunduh dan menginstal `acme.sh`:
   ```bash
   curl https://get.acme.sh | sh -s email=youremail@example.com
   ```

2. **Konfigurasi acme.sh**: Setelah instalasi, Anda dapat mengkonfigurasi `acme.sh` dengan perintah berikut:
   ```bash
   ~/.acme.sh/acme.sh --set-default-ca --server letsencrypt
   ```

3. **Mendapatkan Sertifikat SSL**: Gunakan perintah berikut untuk mendapatkan sertifikat SSL:
   ```bash
   ~/.acme.sh/acme.sh --issue -d yourdomain.com -w /path/to/webroot
   ```

4. **Menginstal Sertifikat SSL**: Setelah sertifikat diperoleh, instal sertifikat pada Nginx dengan perintah:
   ```bash
   ~/.acme.sh/acme.sh --install-cert -d yourdomain.com \
   --key-file /etc/nginx/ssl/yourdomain.com.key \
   --fullchain-file /etc/nginx/ssl/yourdomain.com.cer \
   --reloadcmd "systemctl reload nginx"
   ```

5. **Verifikasi Instalasi**: Pastikan Nginx telah terkonfigurasi dengan benar dan memuat sertifikat SSL dengan memeriksa status Nginx:
   ```bash
   systemctl status nginx
   ```

Gantilah `yourdomain.com` dan `/path/to/webroot` dengan domain dan path webroot Anda yang sebenarnya.
