---
title: "IP Address CIDR Network"
slug: ip-address-cidr-network
description: "Penjelasan tentang CIDR notation dan tabel IP Address untuk konfigurasi jaringan"
date: "2021-11-27T10:11:00+07:00"
highlight: false
draft: false
tags:
  - linux
  - network
  - ip
cover: /assets/images/uploads/2021/11/network.jpg
author: yadi
---

Hai sobat yadi. kali ini saya akan memberikan **IP Address CIDR Network**.

Ketika anda menggunakan jaringan internet, mungkin anda sudah terbiasa mendengar apa itu IP Address. Pada post kali ini, saya tidak membahas tentang apa itu IP Address, tetapi lebih ke space IP Address.

Berikut table IP Space yang bisa digunakan dalam mengkonfigurasi jaringan internet anda.


## Table IP Space

| CIDR | SUBNET MASK     | WILDCARD MASK   | TOTAL IP ADDRESSES | TOTAL USABLE IP ADDRESSES |
| ---- | --------------- | --------------- | ------------------ | ------------------------- |
| /32  | 255.255.255.255 | 0.0.0.0         | 1                  | 1                         |
| /31  | 255.255.255.254 | 0.0.0.1         | 2                  | 2*                        |
| /30  | 255.255.255.252 | 0.0.0.3         | 4                  | 2                         |
| /29  | 255.255.255.248 | 0.0.0.7         | 8                  | 6                         |
| /28  | 255.255.255.240 | 0.0.0.15        | 16                 | 14                        |
| /27  | 255.255.255.224 | 0.0.0.31        | 32                 | 30                        |
| /26  | 255.255.255.192 | 0.0.0.63        | 64                 | 62                        |
| /25  | 255.255.255.128 | 0.0.0.127       | 128                | 126                       |
| /24  | 255.255.255.0   | 0.0.0.255       | 256                | 254                       |
| /23  | 255.255.254.0   | 0.0.1.255       | 512                | 510                       |
| /22  | 255.255.252.0   | 0.0.3.255       | 1.024              | 1.022                     |
| /21  | 255.255.248.0   | 0.0.7.255       | 2.048              | 2.046                     |
| /20  | 255.255.240.0   | 0.0.15.255      | 4.096              | 4.094                     |
| /19  | 255.255.224.0   | 0.0.31.255      | 8.192              | 8.190                     |
| /18  | 255.255.192.0   | 0.0.63.255      | 16.384             | 16.382                    |
| /17  | 255.255.128.0   | 0.0.127.255     | 32.768             | 32.766                    |
| /16  | 255.255.0.0     | 0.0.255.255     | 65.536             | 65.534                    |
| /15  | 255.254.0.0     | 0.1.255.255     | 131.072            | 131.070                   |
| /14  | 255.252.0.0     | 0.3.255.255     | 262.144            | 262.142                   |
| /13  | 255.248.0.0     | 0.7.255.255     | 524.288            | 524.286                   |
| /12  | 255.240.0.0     | 0.15.255.255    | 1.048.576          | 1.048.574                 |
| /11  | 255.224.0.0     | 0.31.255.255    | 2.097.152          | 2.097.150                 |
| /10  | 255.192.0.0     | 0.63.255.255    | 4.194.304          | 4.194.302                 |
| /9   | 255.128.0.0     | 0.127.255.255   | 8.388.608          | 8.388.606                 |
| /8   | 255.0.0.0       | 0.255.255.255   | 16.777.216         | 16.777.214                |
| /7   | 254.0.0.0       | 1.255.255.255   | 33.554.432         | 33.554.430                |
| /6   | 252.0.0.0       | 3.255.255.255   | 67.108.864         | 67.108.862                |
| /5   | 248.0.0.0       | 7.255.255.255   | 134.217.728        | 134.217.726               |
| /4   | 240.0.0.0       | 15.255.255.255  | 268.435.456        | 268.435.454               |
| /3   | 224.0.0.0       | 31.255.255.255  | 536.870.912        | 536.870.910               |
| /2   | 192.0.0.0       | 63.255.255.255  | 1.073.741.824      | 1.073.741.822             |
| /1   | 128.0.0.0       | 127.255.255.255 | 2.147.483.648      | 2.147.483.646             |
| /0   | 0.0.0.0         | 255.255.255.255 | 4.294.967.296      | 4.294.967.294             |

Ada beberapa range IP yang bisa anda gunakan pada lokal komputer/ jaringan rumah anda. IP ini di perbolehkan secara global, dan menjadi acuan utama untuk mengkonfigurasi jaringan internet anda.

## Table IP Local

| CIDR           | Address Range                 | Total IP Address |
| -------------- | ----------------------------- | ---------------- |
| 10.0.0.0/8     | 10.0.0.0 – 10.255.255.255     | 16.777.216       |
| 172.16.0.0/12  | 172.16.0.0 – 172.31.255.255   | 1.048.576        |
| 192.168.0.0/16 | 192.168.0.0 – 192.168.255.255 | 65.536           |

Selain dari 3 IP Range diatas. jika anda mencoba membuat IP Range dari lainnya, misalnya **192.0.0.0/24**, maka akan terjadi error.

Karena IP **192.0.0.0/24** bukan ip lokal yang di perbolehkan, maka jika anda terhubug ke internet, komputer atau router akan mencari ip tersebut pada internet bukan di jaringan lokal anda.

Semoga Bermanfaat.
