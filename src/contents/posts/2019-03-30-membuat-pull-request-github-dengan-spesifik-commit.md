---
title: "Membuat Pull Request Github dengan Spesifik Commit"
slug: membuat-pull-request-github-dengan-spesifik-commit
description: "Tutorial ini menjelaskan cara membuat pull request di GitHub dengan memilih commit spesifik menggunakan git cherry-pick, langkah-langkah dijelaskan secara rinci."
date: "2019-03-30T12:03:25+07:00"
highlight: false
draft: false
categories: github
tags: ["git", "github", "pull-request", "cherry-pick"]
cover: /assets/images/uploads/2019/03/Selection_00997.png
author: yadi
---

Hai sobat yadi, tentunya sudah ada yang mengenal tentang git dong ? secara langsung dari github saat ini belum menyediakan Pull Request dengan spesifik commit.

Misalnya ketika kita melakukan sebuah fork repository di github, kemudian kita ingin mengupdate tentu langsung klik `new pull request` dari repository github kita, kemudian muncul perubahan-perubahan yang telah kita ubah.

# Permasalahan

Saya melakukan kontribusi ke sebuah repository, dimana akan melakukan beberapa update, jika hanya 1x anda melakukan pull request tentu tidak akan masalah.

Bagaimana jika kemudian setelah pull request pertama saya disetujui kemudian melakukan perubahan kembali, automatis commit sebelumnya akan ikut ke dalam pull request kembali.

Kemudian bagaimana saya melakukan pull request dengan commit tertentu ?? karena memang yang dirubah hanya bagian tersebut itu saja, yang sebelumnya sudah di merged ke repository utama.

Pada gambar diatas, saya ingin melakukan submit pull request dengan id commit `0e6af49` dan `a0f0707` , saya tidak ingin memasukkan commit 3 diatasnya karena sudah di merged ke repository utama.

# Penyelesaian Pull Request Spesifik Commit

> Notes: Pastikan merubah detail git sesuai yang anda butuhkan

## Menambahkan upstream

Kita harus membuat upstream dimana upstream ini merupakan original repository terbaru dengan command: `git remote add upstream <git-url>`

```bash
git remote add upstream https://github.com/upstream_username/upstream_repo_name.git
```

## Membuat Branch Baru

```bash
git checkout -b nama-branch-baru upstream/master
```

## Mengambil Spesifik Commit `git cherry-pick <commit_id>`

```bash
git cherry-pick 0e6af49
git cherry-pick a0f0707
```

> Anda bisa menambahkan commit sebanyak yang ingin anda masukkan ke branch baru.

## Push Commit ke Branch Baru

```bash
git push -u origin nama-branch-baru
```

Setelah anda melakukan commit, untuk mengecek perubahan bisa di sort by branch, tinggal pilih aja.

![](/assets/images/uploads/2019/03/Selection_00998.png)

Setelah memilih repository baru tersebut, tinggal anda klik `new pull request` dimana commit yang berubah hanya ada 2 yang kita ambil tadi.

Sekian tutorial kali ini, semoga bermanfaat.
