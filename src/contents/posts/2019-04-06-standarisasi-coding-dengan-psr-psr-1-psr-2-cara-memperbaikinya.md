---
title: "Standarisasi Coding Dengan PSR (PSR-1 & PSR-2) & Cara Memperbaikinya"
slug: standarisasi-coding-dengan-psr-psr-1-psr-2-cara-memperbaikinya
description: "Panduan lengkap untuk meningkatkan kualitas coding dengan menerapkan PSR-1 & PSR-2 serta menggunakan PHP-CS-Fixer untuk memperbaiki gaya penulisan kode PHP."
date: "2019-04-06T03:39:08+07:00"
highlight: false
draft: false
category: "Coding Standards"
tags:
  - php
  - psr
  - php-cs-fixer
cover: /assets/images/uploads/2019/04/php_psr.png
author: yadi
---

Hi Sobat Yadi, kali ini saya akan share tentang standarisasi coding, standarisasi ini berguna agar setiap codingan yang kita buat jadi mudah dibaca dan dipahami.

## Permasalahan Ketika Coding

Sebagai junior developer atau seseorang yang baru memulai coding, terkadang kita tidak percaya diri dengan codingan kita sendiri, pertanyaan yang sering terlintas di fikiran para developer baru, Apakah codingan saya …

1. Bagus ?
2. Efisien ?
3. Mudah di baca ?
4. Berfungsi dengan baik ?
5. dll

Dari pertanyaan diatas, terkadang kita menjadi malu ketika codingan kita akan dishare ke publik seperti github atau blog.

## Bagaimana cara mengatasinya ?

Jika anda ingin semua codingan anda tampil terstruktur, bagus, rapi, dsb, tentu codingan anda harus mengikuti standarisasi yang sudah ada yaitu **PSR (PHP Standar Recomendation)**.

> It’s works, don’t touch it …..

Terkadang kita berfikir seperti itu, ini codingannya bekerja kok, kenapa harus ubah-ubah lagi ? yang penting kan bisa jalan sesuai keinginan ?

Fikiran tersebut tentu tidak ada salahnya, tetapi akan sangat sulit jika itu merupakan project publik dimana anda share source codenya, tentu orang lain akan kesulitan melakukan perbaikan.

### PSR-1 – Basic Coding Standard

The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in RFC 2119.

- Files MUST use only `<?php` and `<?=` tags.
- Files MUST use only UTF-8 without BOM for PHP code.
- Files SHOULD either declare symbols (classes, functions, constants, etc.) or cause side-effects (e.g. generate output, change .ini settings, etc.) but SHOULD NOT do both.
- Namespaces and classes MUST follow an **autoloading** PSR: [PSR-0, PSR-4].
- Class names MUST be declared in StudlyCaps.
- Class constants MUST be declared in all upper case with underscore separators.
- Method names MUST be declared in camelCase.

Info lengkap dan contoh bisa cek di [https://www.php-fig.org/psr/psr-1/](https://www.php-fig.org/psr/psr-1/)

### PSR-2 – Coding Style Guide

The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in RFC 2119.

- Code MUST follow a “coding style guide” PSR [PSR-1].
- Code MUST use 4 spaces for indenting, not tabs.
- There MUST NOT be a hard limit on line length; the soft limit MUST be 120 characters; lines SHOULD be 80 characters or less.
- There MUST be one blank line after the namespace declaration, and there MUST be one blank line after the block of use declarations.
- Opening braces for classes MUST go on the next line, and closing braces MUST go on the next line after the body.
- Opening braces for methods MUST go on the next line, and closing braces MUST go on the next line after the body.
- Control structure keywords MUST have one space after them; method and function calls MUST NOT.
- Opening braces for control structures MUST go on the same line, and closing braces MUST go on the next line after the body.
- Opening parentheses for control structures MUST NOT have a space after them, and closing parentheses for control structures MUST NOT have a space before.

Info lengkap dan contoh bisa cek di [https://www.php-fig.org/psr/psr-2/](https://www.php-fig.org/psr/psr-2/)

## Memperbaiki Codingan

Untuk memperbaiki codingan anda, tidak perlu rubah manual, ada tools automatis yaitu “PHP CS FIXER”.

### Installasi PHP-CS-FIXER

```bash
wget https://cs.symfony.com/download/php-cs-fixer-v2.phar -O php-cs-fixer
chmod a+x php-cs-fixer
mv php-cs-fixer /usr/local/bin/php-cs-fixer
```

> Kemudian jalankan command `php-cs-fixer`

```bash
yadi@yadi-PFN:~$ php-cs-fixer
PHP CS Fixer 2.14.2 Sunrise by Fabien Potencier and Dariusz Ruminski (ff401e5)

Usage:
  command [options] [arguments]

Options:
  -h, --help            Display this help message
  -q, --quiet           Do not output any message
  -V, --version         Display this application version
      --ansi            Force ANSI output
      --no-ansi         Disable ANSI output
  -n, --no-interaction  Do not ask any interactive question
  -v|vv|vvv, --verbose  Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

Available commands:
  describe     Describe rule / ruleset.
  fix          Fixes a directory or a file.
  help         Displays help for a command
  list         Lists commands
  readme       Generates the README content, based on the fix command help.
  self-update  [selfupdate] Update php-cs-fixer.phar to the latest stable version.
```

### Cara Menggunakan PHP-CS-FIXER

> Saya sarankan anda untuk menyalin file codingan anda sebelum menjalankan command berikut, agar mudah dalam melakukan perbandingan.

```bash
# Memperbaiki 1 folder langsung
php-cs-fixer fix /path/direktory

# Memperbaiki 1 file di dalam folder
php-cs-fixer fix /path/nama-file.php

# Memperbaiki 1 file langsung
php-cs-fixer fix nama-file.php
```

Silahkan coba jalankan command tersebut, kemudian liat perbedaannya. Dibawah ini saya coba lampirkan salah satu hasil dari command diatas.

![](/assets/images/uploads/2019/04/Selection_01018.png)

Sekian tutorial kali ini tentang standarisasi codingan PHP, semoga bermanfaat.
