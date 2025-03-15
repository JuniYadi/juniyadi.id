---
title: "tui Editor: jQuery Ajax Image Upload to Server"
slug: tui-editor-jquery-ajax-image-upload-to-server
description: "Learn how to implement Ajax image uploads in tui Editor with PHP backend integration, including handling CSRF tokens and multiple images."
date: "2019-04-18T06:57:18+07:00"
highlight: false
draft: false
categories:
  - Tutorial
tags:
  - jquery
  - ajax
  - markdown
  - tui-editor
cover: /assets/images/uploads/2019/04/ajax-jquery.jpg
author: yadi
---

Hi sobat yadi, mau share sedikit tentang jQuery Ajax nih, udah pada tau tentu pastinya apa fungsi ajax ? kalau belum tau, semetara muter-muter mbah google dulu ya. Mungkin lain kali akan saya coba share di blog saya.

## Permasalahan
Jadi saya sedang mencoba melakukan upload gambar menggunakan ajax kemudian ada beberapa kendala, karena ini datanya passing dari function lain `tui Editor` sehingga tidak ada form secara langsung `<form></form>`.

Secara default ketika mengupload gambar menggunakan tui Editor maka akan ada 2 opsi :
1. Upload gambar menjadi base64_decode
2. Upload gambar melalui URL

Nah di opsi ini saya inginnya base64_decode ini harus menjadi langsung url dan gambar terupload ke server saya.

### Upload image ke base64_decode
![](/assets/images/uploads/2019/04/Selection_01055.png)

### Ajax image upload
![](/assets/images/uploads/2019/04/Selection_01054.png)

## Penyelesaian

Buat sebuah HTML Dasar atau terserah apa aja bisa
Skrip ajaxnya seperti ini :
```javascript
var dataimg = new FormData();
dataimg.append('imageupload', $('#images').val());
 
$.ajax({
  url : '/upload',
  method: 'POST',
  cache : false,
  contentType : false,
  processData : false,
  data : dataimg,
    success: function (response) {
        console.log(response.url);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      alert('error');
    }
});
```

### Penjelasan
* dataimg = pada function ini, kita membuat form di jquery dan passing data
* contentType = ini agar kita passing data gambar langsung jadi harus dibuat false, jika tidak maka nanti akan error ketika upload
* processData = memberitahu bahwa ajax tidak memproses gambar yang dikirim (diteruskan ke post url)

## Pertanyaan ?

### Kalau punya lebih dari 1 form images gimana ?
Tambah saja pada dataimg sesuai kebutuhan anda. contoh :

```javascript
var dataimg = new FormData();
dataimg.append('imageupload', $('#images').val());
dataimg.append('imageupload2', $('#images2').val());
dataimg.append('imageupload3', $('#images3').val());
```

### Ambil data di php dari ajax ini gimana ?
Ini sesuai data pada form `dataimg`, misalnya pada contoh diatas yaitu : `imageupload , imageupload2 , imageupload3` . Anda bebas memberikan nama sesuai kebutuhan.

## Penyelesaian
### Karena saya menggunakan function ajax ini di tui editor, sehingga function full nya seperti ini:

```javascript
function ImageUpload(images){
 
    var myresult = "";
    var dataimg = new FormData();
    dataimg.append('imageupload', images);
 
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content');
        }
    });
    $.ajax({
      url : '/upload',
      method: 'POST',
      async: false,
      cache : false,
      contentType : false,
      processData : false,
      data : dataimg,
        success: function (response) {
            console.log(response.url);
 
            myresult = response.url;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          alert('error');
        }
    });
 
    return myresult;
}
```

### Dan pada Tui Editor saya buat seperti ini
```javascript
var editor = new tui.Editor({
    el: document.querySelector('#editSection'),
    initialEditType: 'markdown',
    previewStyle: 'tab',
    height: '500px',
    useCommandShortcut: true,
    hooks: {
        addImageBlobHook: function (blob, callback) {
            var myupload = ImageUpload(blob);
 
            callback(myupload, 'alt text');
        }
    }
});
```

### Catatan :
* Disini saya menggunakan laravel sebagai backend untuk proses gambar.
* tui Editor merupakan salah satu WYSIWYG Markdown yang sangat easy (ketika post ini ditulis).
* Karena kita membutuhkan result dari ajax, maka pada function dibuatlah `var myresult` kosong kemudian di return pada akhir dan `async : false`.
* Untuk `response` ajax ini akan return json dengan key url.
* Untuk nama filenya sendiri saya rubah dan generate sendiri menggunakan md5(microtime())

![](/assets/images/uploads/2019/04/Selection_01056.png)

Sekian share saya kali ini, semoga bermanfaat.
