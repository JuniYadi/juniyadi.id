---
layout: post
title: "Memberbaiki Error Let's Encrypt Expired 30 September 2021 (DST Root CA X3)"
author: yadi
categories: [ linux, windows ]
tags: [ ssl ]
image: assets/images/uploads/2021/10/letsencrypt.jpg
date: 2021-10-07 15:30:00 +07:00
featured: false
hidden: false
---

Halo sobat yadi, kali ini saya akan membahas permasalahan menarik. Mengenai Let's Encrypt yang expired pada 30 September 2021.

## Awal Mula

Jika anda belum mengenal apa itu Let's Encrypt maka saya akan membahas dikit disini.
Pada awalnya ketika ingin menggunakan SSL, harus berlangganan minimal 1 tahun, tetapi muncul sebuah produk pada 2014, dimana anda bisa mendapatkan SSL secara gratis tanpa biaya sedikitpun, tanpa harus isi form dsb, itulah Let's Encrypt.

Let's Encrypt memberikan kemudahan bagi pemilik website memiliki https pada website dengan mudah, meskipun terdapat kekurangan, seperti SSL yang diberikan hanya aktif 90 hari dan harus di perpanjang. (Bisa dilakukan secara automatis dengan certbot)


## Permasalahan Utama

Ketika awal mula Let's Encrypt, mereka menggunakan **DST Root CA X3** sebagai Root Certificate untuk memvalidasi semua certificate yang mereka keluarkan. Akan tetapi ada masalah lain, yaitu Certificate ini expired pada **30 September 2021**.

Sebelumnya mungkin tidak ada masalah, tetapi saat ini sudah terjadi, banyak dari pemilik website, pengguna laptop, handphone mulai kebingungan karena website mereka tidak bisa diakses dan menampilkan pesan error.

> Your connection is not private
> NET::ERR_CERT_DATE_INVALID

## Root Certificate Baru

![](/assets/images/uploads/2021/10/letsencrypt-isrg-hierarchy.png)

Let's Encrypt saat ini sudah menggunakan Root Certificate baru bernama **ISRG Root X1**, akan tetapi, jika device anda tidak pernah melakukan update **Sistem Operasi** atau masih menggunakan OS Lama, maka permasalahan ini akan muncul saat ini ketika anda mengakses website dengan SSL dari Let's Encrypt.

> Terutama jika OS anda tidak pernah di update/upgrade sejak tahun 2015.

### Bagaimana cara saya mengetahui bahwa device saya sudah didukung dengan Root Certificate Baru?

Anda bisa mengecek pada halaman berikut [https://letsencrypt.org/docs/certificate-compatibility/](https://letsencrypt.org/docs/certificate-compatibility/)

## Memperbaiki Error: Your connection is not private

### Solusi Mudah

Upgrade OS atau Sistem anda ke versi terbaru. Misalnya jika anda menggunakan **Windows 7**, upgrade ke **Windows 7 SP1**

### Manual Update (Windows)

1. Download Root Certificate **ISRG Root X1** [https://letsencrypt.org/certs/isrgrootx1.der](https://letsencrypt.org/certs/isrgrootx1.der)
2. Double Click File **isrgrootx1.der**
3. Pilih Local Machine dan Klik Next Next Next.
4. Restart PC

Referensi: [https://docs.microsoft.com/en-us/answers/questions/574761/getting-neterr-cert-date-invalid.html](https://docs.microsoft.com/en-us/answers/questions/574761/getting-neterr-cert-date-invalid.html)

### Manual Update (Ubuntu/Debian)

```
mkdir -p /usr/share/ca-certificates/letsencrypt/
curl https://letsencrypt.org/certs/isrgrootx1.pem > /usr/share/ca-certificates/letsencrypt/isrgrootx1.pem
echo 'letsencrypt/isrgrootx1.pem' >> /etc/ca-certificates.conf
update-ca-certificates
```

## Kesimpulan

Sekarang anda sudah bisa melakukan root certificate secara manual, dan anda sudah bisa mengakses website-website dengan SSL dari Let's Encrypt.

## Referensi
- https://en.wikipedia.org/wiki/Let%27s_Encrypt
- https://letsencrypt.org/certificates/
- https://community.letsencrypt.org/t/production-chain-changes/150739