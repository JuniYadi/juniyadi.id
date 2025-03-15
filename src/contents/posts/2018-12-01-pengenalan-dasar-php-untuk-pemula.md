---
title: "Pengenalan Dasar PHP Untuk Pemula"
slug: pengenalan-dasar-php-untuk-pemula
description: "Materi ini menjelaskan dasar-dasar PHP untuk pemula melalui contoh kode sederhana yang menggambarkan penggunaan tag, variabel, dan perintah dasar dalam pemrograman PHP."
date: "2018-12-01T01:27:49+07:00"
highlight: false
draft: false
categories:
  - PHP
  - Tutorial
tags:
  - dasar
  - php
cover: /assets/images/uploads/2018/12/php-logo.png
author: yadi
---

Pada post kali ini, saya akan membahas tentang pengenalan dasar PHP. PHP ini bukan singkatan dari ~~Pemberi Harapan Palsu~~ ya, Kepanjangan PHP yang sebenarnya yaitu Personal Home Page pada awalnya, akan tetapi lebih dikenal dengan sebutan Hypertext Preprocessor.

> Saya tidak akan membahas lebih dalam mengenai sejarah, untuk sejarahnya silahkan cek referensi berikut :


> Wikipedia Bahasa Indonesia : [https://id.wikipedia.org/wiki/PHP](https://id.wikipedia.org/wiki/PHP)

> Wikipedia Bahasa Inggris : [https://en.wikipedia.org/wiki/PHP](https://en.wikipedia.org/wiki/PHP)

# Kenapa harus menggunakan PHP?
Mungkin bagi sebagian developer profesional, php ini sudah sangat usang bagi mereka, akan tetapi, menurut saya pribadi, belajar membangun website dengan PHP adalah langkah awal yang sangat direkomendasikan bagi anda yang ingin memulai membangun website dari nol (awal).

# Bagaimana memulai belajar PHP? 
Ini adalah salah satu step yang penting ketika kita memulai belajar suatu bahasa pemograman baru, dan yang pasti jika anda otodidak alias belajar sendiri, hal ini perlu diperhatikan juga, karena ketika kita otodidak, teman utama kita hanyalah si mbah google.

Tapi, jangan patah semangat dulu, php menjadi primadona dikalangan pemula, karena kemudahan, tutorial yang berlimpah, dan tentu saja php digunakan oleh situs-situs besar seperti Facebook, dan salah satu CMS (Content Management System) populer untuk membangun website yaitu wordpress, dibuat menggunakan PHP.

# Pahami setiap fungsi yang tersedia
Jika tidak tidak mengerti dasar-dasar perintah yang ingin kita gunakan, tentu ini membuat kesulitan, berikut saya buat beberapa perintah dasar yang berguna untuk anda.

![](/assets/images/uploads/2018/12/Pengenalan-Dasar-PHP-Untuk-Pemula-Hello-World.png)

```php
<?php echo "Hello World"; ?>
```

## Pada contoh diatas, maka dijabarkan seperti ini :
* Tag PHP - Tag yang harus digunakan diawal dan akhir file berekstensi .php, hal ini menandakan bahwa semua data pada tag tersebut merupakan code untuk pemograman PHP
* echo - Perintah untuk menampilkan data 
* “” => double quote digunakan untuk menyimpan string atau text jika ingin di echo atau dimasukkan ke variable
* Semicolon - Titik koma digunakan untuk menyatakan bahwa itu merupakan akhir dari baris coding atau variable.

Wah ternyata kalau dijelaskan jadi panjang juga ya. Tenang, itu hanya sebagian kode dasar aja, bagaimana kalau seperti ini?

```php
<?php 
$a = "ini ibu budi";
$b = "ini ayah budi";
$c = "budi rajin menabung";

echo "$a <br> $b <br> $c";

?>
```

## Pada contoh diatas, kita menyimpan semua string ke dalam variable (untuk setiap variable diawali dengan simbol dollar $).

Jika kita test, maka hasilnya seperti ini :

![](/assets/images/uploads/2018/12/Pengenalan-Dasar-PHP-Untuk-Pemula-Ini-Budi.png)

Untuk referensi tentunya langsung ke website si empunya: [http://php.net/docs.php](http://php.net/docs.php)

Bagaimana? tidak terlalu susah bukan?
Semoga Bermanfaat.
