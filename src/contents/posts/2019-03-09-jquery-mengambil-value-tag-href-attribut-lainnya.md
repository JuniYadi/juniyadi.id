---
title: "JQuery: Mengambil Value tag (href/attribut lainnya)"
slug: jquery-mengambil-value-tag-href-attribut-lainnya
description: "Panduan lengkap mengambil nilai atribut HTML menggunakan jQuery tanpa redirect, dengan contoh kasus praktis dan kode sampel."
date: "2019-03-09T04:19:38+07:00"
highlight: false
draft: false
categories: ["jQuery", "Tutorial"]
tags:
  - jQuery
  - JavaScript
  - HTML
  - Tutorial
cover: /assets/images/uploads/2019/03/jquery.png
author: yadi
---

Hi Sobat Yadi, Pada case kali ini, saya ingin mengambil sebuah value dari tag href menggunakan jquery. Mungkin bagi anda yang masih belum terbiasa jquery, bisa mempelajari dasarnya terlebih dahulu.

Permasalahan seperti ini :
Saya ingin mengambil value dari tag href=”url-disini” tanpa harus di redirect halaman saat ini ke url pada tag href tersebut.

biasanya ketika kita membuat website dengan tag href seperti ini :

```html
<a href=”https://juniyadi.id”>https://juniyadi.id</a>
```

ketika kita klik, maka akan diredirect atau dialihkan berdasarkan url pada href tersebut.

pada case diatas, kita hanya mengambil value saja tanpa mengubah atau redirect ke halaman tersebut. maka jika menggunakan jquery, ini bisa dilakukan yaitu dengan menambahkan class (bisa juga dengan id).

anda juga bisa menggunakan logika coding dibawah ini untuk attribut lainnya. tinggal diubah sesuai selera. hehe

```html
<!DOCTYPE html>
<html>
<head>
	<title>JQuery Test</title>
</head>
<body>
	<a class="link" href="https://juniyadi.id">https://juniyadi.id</a>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>

	<script>
	$('body').on('click', '.link', function (event) {
	    event.preventDefault();
	    var me = $(this),
	        url = me.attr('href');
	    console.log(url);    
	});
	</script>
</body>
</html>
```

## Hasil Akhir

![](/assets/images/uploads/2019/03/Selection_00938.png?w=610&ssl=1)

Sekian tutorial dari catatan saya kali ini, Semoga bermanfaat.
