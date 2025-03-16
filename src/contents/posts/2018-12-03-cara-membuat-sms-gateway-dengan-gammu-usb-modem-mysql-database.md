---
title: "Cara Membuat SMS Gateway Dengan Gammu + USB Modem + MySQL Database"
slug: cara-membuat-sms-gateway-dengan-gammu-usb-modem-mysql-database
description: "Panduan lengkap membuat SMS Gateway menggunakan Gammu, USB Modem dan database MySQL"
date: "2018-12-03T05:25:26+07:00"
highlight: false
draft: false
category: "tutorial"
tags: ["sms-gateway", "gammu", "usb-modem", "mysql"]
cover: /assets/images/uploads/2018/12/sms-gateway.jpg
author: yadi
---

Hai Sobat Yadi, kali ini saya akan membahas tentang SMS Gateway, project ini dilakukan karena saya ada modem usb nganggur satu tidak terpakai, untuk seri modemnya yaitu Vodafone Huawei K4510. Setelah iseng-iseng dengan sms gateway menggunakan HP Android, saya kefikiran apa bisa menggunakan usb modem? Alhasil bisa ternyata, semua ini menggunakan service gammu namanya.

> Kami sarankan untuk menggunakan versi terbaru dari setiap versi gammu yang terinstall, agar bisa digunakan dengan lancar dan konfigurasinya tidak mendapatkan banyak kendala

Sebelum kita mulai, saya informasikan peralatan yang saya gunakan :

- Modem = Vodafone Huawei K4510
- OS = Ubuntu 16.04.5 LTS
- Kernel Versi = 4.13.0-45-generic
- Perangkat Utama = Laptop + USB HUB (Karena port laptop saya cuma 2)
- Database = 10.3.10-MariaDB-1:10.3.10+maria~xenial (Jika anda belum menginstall database, silahkan ikuti tutorial pada halaman medium berikut)

# Installasi Gammu

Tambahkan PPA Gammu agar mendapatkan versi terbaru, karena jika langsung install, maka akan terinstall hanya pada versi 1.37.0 , sedangkan saat ini (3 desember 2018) versi baru yaitu 1.39.0. ([Link PPA](https://launchpad.net/~nijel/+archive/ubuntu/ppa))

```bash
sudo add-apt-repository ppa:nijel/ppa
sudo apt-get update
sudo apt-get install gammu-smsd gammu python-gammu usb-modeswitch -y
```

# Konfigurasi Gammu

Setelah installasi, jalankan perintah lsubs untuk mengecek apakah usb-modem yang anda gunakan sudah terhubung ke laptop/pc anda :

```bash
$ lsusb
Bus 002 Device 005: ID 258a:0016
Bus 002 Device 015: ID 10c4:8108 Cygnal Integrated Products, Inc.
Bus 002 Device 017: ID 12d1:14cb Huawei Technologies Co., Ltd.
Bus 002 Device 014: ID 1a40:0101 Terminus Technology Inc. Hub
Bus 002 Device 002: ID 8087:0020 Intel Corp. Integrated Rate Matching Hub
Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 003: ID 10f1:1a2a Importek Laptop Integrated Webcam
Bus 001 Device 002: ID 8087:0020 Intel Corp. Integrated Rate Matching Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```

pada list diatas, sudah muncul namanya Huawei, karena memang modem saya dari Huawei, jadi sampai disini, modem nya sudah terhubung dengan baik.

Selanjutnya, cek dimana letak port usb modem tersebut terhubung, lakukan dengan command : dmesg|grep tty

```bash
$ dmesg|grep tty
[    0.000000] console [tty0] enabled
[    9.344426] usb 2-1.2: GSM modem (1-port) converter now attached to ttyUSB0
[    9.344566] usb 2-1.2: GSM modem (1-port) converter now attached to ttyUSB1
[    9.344650] usb 2-1.2: GSM modem (1-port) converter now attached to ttyUSB2
[  114.629095] option1 ttyUSB0: GSM modem (1-port) converter now disconnected from ttyUSB0
[  114.653534] option1 ttyUSB1: usb_wwan_indat_callback: resubmit read urb failed. (-2)
[  114.653542] option1 ttyUSB1: usb_wwan_indat_callback: resubmit read urb failed. (-2)
[  114.653545] option1 ttyUSB1: usb_wwan_indat_callback: resubmit read urb failed. (-2)
[  114.657777] option1 ttyUSB1: GSM modem (1-port) converter now disconnected from ttyUSB1
[  114.658031] option1 ttyUSB2: usb_wwan_indat_callback: resubmit read urb failed. (-2)
[  114.658036] option1 ttyUSB2: usb_wwan_indat_callback: resubmit read urb failed. (-2)
[  114.658040] option1 ttyUSB2: GSM modem (1-port) converter now disconnected from ttyUSB2
[  115.513745] usb 2-1.2: GSM modem (1-port) converter now attached to ttyUSB0
[  115.513949] usb 2-1.2: GSM modem (1-port) converter now attached to ttyUSB1
[  115.514049] usb 2-1.2: GSM modem (1-port) converter now attached to ttyUSB2
[  115.514340] option1 ttyUSB0: GSM modem (1-port) converter now disconnected from ttyUSB0
[  115.516419] option1 ttyUSB1: GSM modem (1-port) converter now disconnected from ttyUSB1
[  115.516576] option1 ttyUSB2: GSM modem (1-port) converter now disconnected from ttyUSB2
[  313.213788] usb 2-1.1.3: GSM modem (1-port) converter now attached to ttyUSB0
[  313.217266] usb 2-1.1.3: GSM modem (1-port) converter now attached to ttyUSB1
[  313.217886] usb 2-1.1.3: GSM modem (1-port) converter now attached to ttyUSB2
```

Pada hasil diatas, usb telah terhubung ke `ttyUSB0` selanjutnya kita konfigurasikan gammu dengan command : `gammu-config`

![](/assets/images/uploads/2018/12/gammu-config.png)

Rubah configurasi seperti diatas kemudian pilih save untuk menyimpan konfigurasinya. File konfigurasi tersimpan pada path `$ ~/.gammurc`

# Pengetesan Gammu

Masukkan perintah :

```bash
$ gammu getallsms
0 SMS parts in 0 SMS sequences
```

Jika hasil nya seperti diatas, maka gammu sudah terhubung ke modem anda, dan sudah siap digunakan, untuk kirim sms, bisa langsung dengan command berikut (ganti 0812xxxxxxx4 dengan nomor anda) :

```bash
$ echo "Coba Kirim Dari Gammu By Blog JuniYadi" | gammu sendsms TEXT 0812xxxxxxx4
If you want break, press Ctrl+C...
Sending SMS 1/1....waiting for network answer..OK, message reference=213
```

sekarang cek hp sobat yang digunakan pada nomor diatas, jika masuk sms nya, berarti anda sudah berhasil kirim sms via command terminal linux.

# Menghubungkan Gammu ke Database MySQL

Untuk menghubungkan modem usb kita ke database mysql, pertama kita harus membuat database dahulu.

> Disini saya membuat nama databasenya yaitu : sms_gateway

> Anda juga bisa menggunakan nama database, nama user dan password sesuai dengan yang buat di database mysql

kemudian, kita harus mengedit file : `/etc/gammu-smsdrc` .. kemudian samakan datanya dengan baris dibawah ini (untuk :

```bash
$ sudo nano /etc/gammu-smsdrc
# Configuration file for Gammu SMS Daemon

# Gammu library configuration, see gammurc(5)
[gammu]
# Please configure this!
device = /dev/ttyUSB0
connection = at19200

# SMSD configuration, see gammu-smsdrc(5)
[smsd]
PIN = 1234
service = sql
driver = native_mysql
host = localhost
database = sms_gateway
user = xxxxx
password = xxxxx
```

pada konfigurasi diatas :

1. pada bagian device dan connection samakan dengan konfigurasi sebelumnya
2. pada [smsd] , rubah bagian database , username, dan password

Restart dan cek Status service gammu jika konfigurasi telah selesai :

```bash
$ sudo systemctl restart gammu-smsd
$ sudo systemctl status gammu-smsd
● gammu-smsd.service - LSB: Gammu SMS daemon
   Loaded: loaded (/etc/init.d/gammu-smsd; bad; vendor preset: enabled)
   Active: active (exited) since Mon 2018-12-03 03:44:32 WIB; 1h 22min ago
     Docs: man:systemd-sysv-generator(8)
  Process: 16776 ExecStop=/etc/init.d/gammu-smsd stop (code=exited, status=0/SUCCESS)
  Process: 16782 ExecStart=/etc/init.d/gammu-smsd start (code=exited, status=0/SUCCESS)
 Main PID: 12496 (code=exited, status=2)
   CGroup: /system.slice/gammu-smsd.service

Dec 03 03:44:32 yadi-PFN systemd[1]: Stopped LSB: Gammu SMS daemon.
Dec 03 03:44:32 yadi-PFN gammu-smsd[16776]:    ...done.
Dec 03 03:44:32 yadi-PFN systemd[1]: Starting LSB: Gammu SMS daemon...
Dec 03 03:44:32 yadi-PFN gammu-smsd[16782]:  * Starting Gammu SMS Daemon gammu-smsd
Dec 03 03:44:32 yadi-PFN gammu-smsd[16782]:    ...done.
Dec 03 03:44:32 yadi-PFN systemd[1]: Started LSB: Gammu SMS daemon.
```

# Membuat Table di Database MySQL untuk Gammu

Ini merupakan tahap penting karna jika table database tidak dibuat, maka ketika kirim pesan akan muncul beberapa error.

untuk membuat databasenya, langsung saja ke phpmyadmin, kemudian jalankan sql query dibawah ini atau anda juga bisa import langsung dengan mendownload file konfigurasi dibawah ini dan jalankan command :

```bash
$ mysql -u username -p sms_gateway < gammu-mysql.sql
```

```sql
--
-- Database for Gammu SMSD
--
-- In case you get errors about not supported charset, please
-- replace utf8mb4 with utf8.

-- --------------------------------------------------------

--
-- Table structure for table `gammu`
--

CREATE TABLE `gammu` (
  `Version` integer NOT NULL default '0' PRIMARY KEY
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gammu`
--

INSERT INTO `gammu` (`Version`) VALUES (17);

-- --------------------------------------------------------

--
-- Table structure for table `inbox`
--

CREATE TABLE `inbox` (
  `UpdatedInDB` timestamp NOT NULL default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  `ReceivingDateTime` timestamp NOT NULL default '0000-00-00 00:00:00',
  `Text` text NOT NULL,
  `SenderNumber` varchar(20) NOT NULL default '',
  `Coding` enum('Default_No_Compression','Unicode_No_Compression','8bit','Default_Compression','Unicode_Compression') NOT NULL default 'Default_No_Compression',
  `UDH` text NOT NULL,
  `SMSCNumber` varchar(20) NOT NULL default '',
  `Class` integer NOT NULL default '-1',
  `TextDecoded` text NOT NULL,
  `ID` integer unsigned NOT NULL auto_increment,
  `RecipientID` text NOT NULL,
  `Processed` enum('false','true') NOT NULL default 'false',
  `Status` integer NOT NULL default '-1',
  PRIMARY KEY `ID` (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `inbox`
--


-- --------------------------------------------------------

--
-- Table structure for table `outbox`
--

CREATE TABLE `outbox` (
  `UpdatedInDB` timestamp NOT NULL default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  `InsertIntoDB` timestamp NOT NULL default '0000-00-00 00:00:00',
  `SendingDateTime` timestamp NOT NULL default '0000-00-00 00:00:00',
  `SendBefore` time NOT NULL DEFAULT '23:59:59',
  `SendAfter` time NOT NULL DEFAULT '00:00:00',
  `Text` text,
  `DestinationNumber` varchar(20) NOT NULL default '',
  `Coding` enum('Default_No_Compression','Unicode_No_Compression','8bit','Default_Compression','Unicode_Compression') NOT NULL default 'Default_No_Compression',
  `UDH` text,
  `Class` integer default '-1',
  `TextDecoded` text NOT NULL,
  `ID` integer unsigned NOT NULL auto_increment,
  `MultiPart` enum('false','true') default 'false',
  `RelativeValidity` integer default '-1',
  `SenderID` varchar(255),
  `SendingTimeOut` timestamp NULL default '0000-00-00 00:00:00',
  `DeliveryReport` enum('default','yes','no') default 'default',
  `CreatorID` text NOT NULL,
  `Retries` int(3) default 0,
  `Priority` integer default 0,
  `Status` enum('SendingOK','SendingOKNoReport','SendingError','DeliveryOK','DeliveryFailed','DeliveryPending','DeliveryUnknown','Error','Reserved') NOT NULL default 'Reserved',
  `StatusCode` integer NOT NULL default '-1',
  PRIMARY KEY `ID` (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

CREATE INDEX outbox_date ON outbox(SendingDateTime, SendingTimeOut);
CREATE INDEX outbox_sender ON outbox(SenderID(250));

--
-- Dumping data for table `outbox`
--


-- --------------------------------------------------------

--
-- Table structure for table `outbox_multipart`
--

CREATE TABLE `outbox_multipart` (
  `Text` text,
  `Coding` enum('Default_No_Compression','Unicode_No_Compression','8bit','Default_Compression','Unicode_Compression') NOT NULL default 'Default_No_Compression',
  `UDH` text,
  `Class` integer default '-1',
  `TextDecoded` text,
  `ID` integer unsigned NOT NULL default '0',
  `SequencePosition` integer NOT NULL default '1',
  `Status` enum('SendingOK','SendingOKNoReport','SendingError','DeliveryOK','DeliveryFailed','DeliveryPending','DeliveryUnknown','Error','Reserved') NOT NULL default 'Reserved',
  `StatusCode` integer NOT NULL default '-1',
  PRIMARY KEY (`ID`, `SequencePosition`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `outbox_multipart`
--

-- --------------------------------------------------------

--
-- Table structure for table `phones`
--

CREATE TABLE `phones` (
  `ID` text NOT NULL,
  `UpdatedInDB` timestamp NOT NULL default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  `InsertIntoDB` timestamp NOT NULL default '0000-00-00 00:00:00',
  `TimeOut` timestamp NOT NULL default '0000-00-00 00:00:00',
  `Send` enum('yes','no') NOT NULL default 'no',
  `Receive` enum('yes','no') NOT NULL default 'no',
  `IMEI` varchar(35) NOT NULL,
  `IMSI` varchar(35) NOT NULL,
  `NetCode` varchar(10) default 'ERROR',
  `NetName` varchar(35) default 'ERROR',
  `Client` text NOT NULL,
  `Battery` integer NOT NULL DEFAULT -1,
  `Signal` integer NOT NULL DEFAULT -1,
  `Sent` int NOT NULL DEFAULT 0,
  `Received` int NOT NULL DEFAULT 0,
  PRIMARY KEY (`IMEI`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `phones`
--

-- --------------------------------------------------------

--
-- Table structure for table `sentitems`
--

CREATE TABLE `sentitems` (
  `UpdatedInDB` timestamp NOT NULL default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  `InsertIntoDB` timestamp NOT NULL default '0000-00-00 00:00:00',
  `SendingDateTime` timestamp NOT NULL default '0000-00-00 00:00:00',
  `DeliveryDateTime` timestamp NULL,
  `Text` text NOT NULL,
  `DestinationNumber` varchar(20) NOT NULL default '',
  `Coding` enum('Default_No_Compression','Unicode_No_Compression','8bit','Default_Compression','Unicode_Compression') NOT NULL default 'Default_No_Compression',
  `UDH` text NOT NULL,
  `SMSCNumber` varchar(20) NOT NULL default '',
  `Class` integer NOT NULL default '-1',
  `TextDecoded` text NOT NULL,
  `ID` integer unsigned NOT NULL default '0',
  `SenderID` varchar(255) NOT NULL,
  `SequencePosition` integer NOT NULL default '1',
  `Status` enum('SendingOK','SendingOKNoReport','SendingError','DeliveryOK','DeliveryFailed','DeliveryPending','DeliveryUnknown','Error') NOT NULL default 'SendingOK',
  `StatusError` integer NOT NULL default '-1',
  `TPMR` integer NOT NULL default '-1',
  `RelativeValidity` integer NOT NULL default '-1',
  `CreatorID` text NOT NULL,
  `StatusCode` integer NOT NULL default '-1',
  PRIMARY KEY (`ID`, `SequencePosition`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

CREATE INDEX sentitems_date ON sentitems(DeliveryDateTime);
CREATE INDEX sentitems_tpmr ON sentitems(TPMR);
CREATE INDEX sentitems_dest ON sentitems(DestinationNumber);
CREATE INDEX sentitems_sender ON sentitems(SenderID(250));

--
-- Dumping data for table `sentitems`
--


--
-- Triggers for setting default timestamps
--

DELIMITER //

CREATE TRIGGER inbox_timestamp BEFORE INSERT ON inbox
FOR EACH ROW
BEGIN
    IF NEW.ReceivingDateTime = '0000-00-00 00:00:00' THEN
        SET NEW.ReceivingDateTime = CURRENT_TIMESTAMP();
    END IF;
END;//

CREATE TRIGGER outbox_timestamp BEFORE INSERT ON outbox
FOR EACH ROW
BEGIN
    IF NEW.InsertIntoDB = '0000-00-00 00:00:00' THEN
        SET NEW.InsertIntoDB = CURRENT_TIMESTAMP();
    END IF;
    IF NEW.SendingDateTime = '0000-00-00 00:00:00' THEN
        SET NEW.SendingDateTime = CURRENT_TIMESTAMP();
    END IF;
    IF NEW.SendingTimeOut = '0000-00-00 00:00:00' THEN
        SET NEW.SendingTimeOut = CURRENT_TIMESTAMP();
    END IF;
END;//

CREATE TRIGGER phones_timestamp BEFORE INSERT ON phones
FOR EACH ROW
BEGIN
    IF NEW.InsertIntoDB = '0000-00-00 00:00:00' THEN
        SET NEW.InsertIntoDB = CURRENT_TIMESTAMP();
    END IF;
    IF NEW.TimeOut = '0000-00-00 00:00:00' THEN
        SET NEW.TimeOut = CURRENT_TIMESTAMP();
    END IF;
END;//

CREATE TRIGGER sentitems_timestamp BEFORE INSERT ON sentitems
FOR EACH ROW
BEGIN
    IF NEW.InsertIntoDB = '0000-00-00 00:00:00' THEN
        SET NEW.InsertIntoDB = CURRENT_TIMESTAMP();
    END IF;
    IF NEW.SendingDateTime = '0000-00-00 00:00:00' THEN
        SET NEW.SendingDateTime = CURRENT_TIMESTAMP();
    END IF;
END;//

DELIMITER ;
```
