---
title: "Command Dasar Linux + Contoh [PART-1]"
slug: command-dasar-linux-contoh-part-1
description: "Panduan dasar command Linux dengan penjelasan perintah pwd, cd, ls, mkdir, vi, rm, dan rmdir untuk pengguna pemula."
highlight: false
draft: false
author: yadi
category: linux
tags:
  - linux
  - bash
  - command-line
  - tutorial
cover: "/assets/images/uploads/2019/05/Selection_01146.png"
date: "2019-05-13T04:46:47+07:00"
featured: false
hidden: false
---

Command linux bisa diartikan sebagai perintah linux atau perintah dasar linux, berbeda sekali dengan windows dimana kita akan dimanjakan dengan klik sana sini, sedangkan dilinux terutama server, ini hanya berbasis command seperti ini dimana digunakan sebagai membuka/mengedit/membuat file dan lain sebagainya.

Pada dasarnya, hampir disetiap linux itu command dasar tidak jauh-jauh beda, seperti pada Linux yang familiar yaitu :

- Debian / Ubuntu / Linux Mint dan turunannya
- RedHat/centOS dan turunannya
- dan lain sebagainya

Pada tutorial ini, saya sendiri menggunakan `Linux LuBuntu 16.04` (Turunan dari Ubuntu). Dengan Terminal default yaitu `LXTerminal (Menu => System Tools => LXTerminal)`.

## Daftar Command Dasar Linux :

- [pwd](#pwd)
- [cd](#cd)
- [ls](#ls)
- [mkdir](#mkdir)
- [vi](#vi)
- [rm](#rm)
- [rmdir](#rmdir)

### pwd

pwd (Print name of current/working directory) adalah command untuk mengetahui dimana posisis anda saat ini, dengan menampilkan list lengkap dari tiap foldernya, sehingga anda mengetahui secara pasti step by step foldernya, Contoh:

```bash
$ pwd
/etc/nginx/conf.d
```

Pada contoh diatas, kita mengetahui ketika run command : `pwd` ini menampilkan direktory `/etc/nginx/conf.d` dimana posisi terminal shell anda saat ini.

### cd

CD (Change the shell working directory) adalah command yang digunakan untuk merubah direktori atau folder pada shell terminal saat ini, sebagai contoh pada `pwd` sebelumnya, sekarang kita akan menggunakan command `cd`, Contoh :

```bash
$ pwd
/etc/nginx/conf.d
$ cd
$ pwd
/home/yadi
```

Ketika kita hanya menggunakan command `cd` , maka kita akan kembali ke Home Directory (Folder Utama) Akun anda, Tetapi jika ingin pindah ke folder lain, bisa menggunakan command `cd /path/folder` , Contoh :

```bash
$ pwd
/home/yadi
$ cd /etc
$ pwd
/etc
```

### ls

ls (List directory contents) adalah command yang digunakan untuk menampilkan daftar atau list file dan folder pada direktory atau folder saat ini, Contoh :

```bash
$ pwd
/home/yadi
$ ls
Desktop
Documents
Downloads
Music
Pictures
Public
Videos
```

### mkdir

mkdir (Create the DIRECTORY(ies), if they do not already exist) adalah command yang digunakan untuk membuat folder baru, Contoh :

```bash
$ mkdir juniyadi.id
$ ls
Desktop
Documents
Downloads
juniyadi.id
Music
Pictures
Public
Videos
$ cd juniyadi.id
$ pwd
/home/yadi/juniyadi.id
```

### vi

vi (screen-oriented (visual) display editor) atau biasa disebut VIM Text Editor adalah command yang digunakan untuk membuka, mengedit atau membuat file baru, Contoh :

```bash
$ vi contoh.txt
```

Untuk menulis atau mengedit file, tekan tombol: `I` (Ikan), kemudian kita tulis apa yang di inginkan.

#### Contoh Command Vi

![](/assets/images/uploads/2019/05/Selection_01147.png)

Kemudian untuk menyimpan atau keluar dari text editor vi, tekan tombol petik disamping kiri keyboard angka 1. Kemudian ketika `:wq`

#### Keluar Dari VIM Text Editor

![](/assets/images/uploads/2019/05/Selection_01148.png)

### rm

rm adalah command yang digunakan untuk menghapus files, Contoh :

```bash
$ ls
contoh.txt
$ rm contoh.txt
$ ls
$
```

Terlihat bahwa pada akhir command tampilan kosong, ini berarti file tersebut sudah tidak ada lagi (jika folder kosong).

### rmdir

rmdir adalah command yang digunakan untuk menghapus folder, contoh :

```bash
$ rmdir juniyadi.id
$ ls
Desktop
Documents
Downloads
Music
Pictures
Public
Videos
```

Pada command diatas, ketika cek dengan command `ls`, ternyata sudah tidak ada folder bernama `juniyadi.id`, berati folder tersebut berhasil dihapus.

Bagaimana ? apakah sulit dengan command linux ? sepertinya akan sulit jika tidak dipelajari.

Sekian tutorial kali ini, semoga bermanfaat.
