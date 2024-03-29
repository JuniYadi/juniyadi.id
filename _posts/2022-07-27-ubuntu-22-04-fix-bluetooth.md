---
layout: post
title: "Ubuntu 22.04 Fix Bluetooth"
author: yadi
categories: [ linux ]
tags: [ ubuntu ]
image: assets/images/uploads/2022/07/27/ubuntu-bluetooth.png
date: 2022-07-27 10:00:00 +07:00
featured: false
hidden: false
---

Hai sobat yadi, kali ini saya ingin share sedikit tentang memperbaiki bluetooth di ubuntu.

Baru 1 minggu ini akhirnya saya menggunakan ubuntu kembali. Tetapi ketika melihat koneksi bluetoothnya sering turun kualitas audionya.

Akhirnya suara terasa cempreng atau tidak enak di dengar.

Berikut cara memperbaikinya.

## Install Pulse Audio

```
sudo apt install pulseaudio pulseaudio-utils pavucontrol pulseaudio-module-bluetooth
```

## Edit Bluetooth Configuration

- Edit konfigurasi pada file `main.conf`

```
sudo nano /etc/bluetooth/main.conf
```

- Dibawah **[GENERAL]**, Pastekan skrip berikut

```
[General]

# Automatically connect both A2DP and HFP/HSP profiles for incoming
# connections. Some headsets that support both profiles will only connect the
# other one automatically so the default setting of true is usually a good
# idea.
AutoConnect=true
```

- Kemudian Ubah Line menjadi seperti Berikut

```
MultiProfile = multiple
```

- Restart Bluetooth

```
sudo systemctl restart bluetooth
```

- Done

Dengan cara diatas, kualitas audio bluetooth saya sudah sedikit membaik di bandingkan sebelumnya.

Semoga Bermanfaat.