---
layout: post
title: "Apa itu Docker ? Serta Kelebihan dan Kekurangan Docker ?"
author: yadi
categories: [ linux, system ]
tags: [ docker ]
image: assets/images/uploads/2019/03/docker.png
date: 2019-03-28 21:35:10 +07:00
---

Pada awalnya ketika kita ingin membuat sebuah website tentunya di pusingkan dengan beberapa settingan seperti install web server, database, php/ruby/dkk.

Tentu saja ini menyulitkan bagi beberapa developer dimana tidak paham seutuhnya command-command linux yang tampak sangat sulit.

Kemudian munculah sebuah teknologi baru bernama `DOCKER`.

Docker merupakan sebuah teknologi masa kini yang dapat membantu mempermudah para developer atau system administrator dengan teknologi containernya, sehingga bekerja lebih cepat dan efisien tanpa harus setting ini itu dan sebagainya.

## Kita ibaratkan seperti ini
Anda mempunyai sebuah rumah kosong ukuran 20×20 meter, dimana tidak ada sekat dan sebagainya, ketika kita ingin membangun sebuah website konvensional, kita harus menambah beberapa perabotan didalam rumah tersebut, seperti listrik, air, kursi, tempat tidur dan lain sebagainya.

Ketika 2 tahun kemudian, anda menikah dan mempunyai seorang anak, tentu rumah anda harus dibedah dong agar ada kamar 1 lagi, dan semuanya bergeser dahulu satu per-satu. Ribet bukan ??

Analogi sebelum menggunakan docker sama seperti itu, ketika anda membangun sebuah server dan ingin menambah atau mengupdate softwarenya, tentu anda harus mengecek apakah kompetibel dengan software anda.

Tapi bagaimana jika kemudian anda membutuhkan konfigurasi lainnya? jika anda system administrator yang expert, tentu tidak masalah, tetapi jika anda hanya seorang developer ? tentu ini sulit, belum lagi system linux nya error , wah susah ya?

Dengan teknologi docker ini, anda tidak perlu pusing dengan masalah tersebut, docker akan secara automatis membuat ruangan terpisah dari rumah anda (server), tanpa anda perlu khawatir ketika beberapa tahun kedepan anda mengupdate system anda, docker tidak akan terpengaruh dengan masalah tersebut.

## Kelebihan Docker
Menurut saya, docker mempunyai kelebihan seperti :
1. **Docker Tersedia untuk Windows, Linux dan MacOS.**
2. Mempermudah pekerjaan secara cepat dan efisien.
3. Berbasis Kontainer dimana system utama (main node) terpisah dengan Intance Docker.
4. Tersedia banyak images docker yang siap digunakan (out of the box) => [Hub Docker Images](https://hub.docker.com/search?q=&type=image)
5. Mudah dalam pengoperasian.
6. Bisa digunakan untuk developer apa saja.
7. Jika terjadi update pada server, tidak mempengaruhi container docker
8. Bisa install apa saja didalam docker tanpa terpengaruh system requitmen dari kernel / versi node utama.

## Kekurangan Docker
1. Sampai saat ini saya masih belum menemukan kekurangan dalam pekerjaan saya dengan docker ini. Karena rata-rata penggunaan menggunakan images yang sudah tersedia, jadi saya tidak repot install dari awal lagi.

Mengenai command-command docker, kita tinggal belajar saja, saya rasa tidak susah.

## Tutorial Installasi Docker ??
Mengenai hal tersebut akan saya buat di tutorial-tutorial selanjutnya.

Jika mungkin teman-teman ada yang ingin menambahkan atau kekurangannya, silahkan komentar ya.

Semoga Bermanfaat.