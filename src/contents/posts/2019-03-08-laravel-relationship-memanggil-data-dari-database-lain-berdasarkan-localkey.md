---
title: "Laravel Relationship: Memanggil data dari database lain berdasarkan localkey"
slug: laravel-relationship-memanggil-data-dari-database-lain-berdasarkan-localkey
description: "Implementasi relasi database di Laravel dengan kunci lokal kustom. Pelajari cara memanggil data antar tabel berdasarkan field pengguna_id."
date: "2019-03-08T04:54:38+07:00"
highlight: false
draft: false
category: Laravel
tags:
  - laravel
  - php
  - database
cover: /assets/images/uploads/2018/12/Tutorial-Dasar-Menggunakan-Framework-Laravel.png
author: yadi
---

Hi sobat yadi, sudah lama tidak update, beberapa hari ini sedang melakukan case tentang laravel relationship tentu saja menggunakan eloquent.

Permasalahannya seperti ini :

* Table Posts:
  * id
  * pengguna_id
  * title
  * content


* Table Users:
  * id
  * nama
  * email


Pada laravel, biasanya jika kita ingin menggunakan relationship, untuk table id user kita buat seperti “user_id” (menggunakan primary key id pada table users), tentu saja tidak ada masalah disini, permasalahan yang saya temukan ketika local key nya tidak bername user_id , seperti contoh diatas, namanya pengguna_id.

## Hasil yang di inginkan
Ketika list post, maka akan muncul detail pembuat post, yaitu berdasarkan dari pengguna_id , dimana pengguna_id akan terhubung (relasi) dengan table users.

Oleh sebab itu, kita bisa membuat beberapa settingan pada model Post laravel yang ingin kita gunakan.

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    public function User()
    {
        return $this->belongsTo('App\User', 'pengguna_id');
    }
}
```

Untuk memanggil hasil dari diatas, kita gunakan pada controller seperti ini.

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index()
    {
        $posts = Post::with('user')->get();
        return $posts;
    }
}
```

Kemudian hasil akhir yang ingin dicapai seperti berikut:

![](/assets/images/uploads/2019/03/Selection_00936.png)

ini juga bisa diterapkan ke relation-relation yang lainnya jika key nya bukan dari primary key.

Semoga bermanfaat.
