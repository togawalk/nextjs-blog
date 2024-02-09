---
title: "MariaDB"
subtitle: "How to install and use MariaDB database."
image: "/images/sea-lion.jpg"
---

## Installation

```bash
sudo pacman -S mariadb
```

Verify the installation:

```bash
mysqld --version
```

## Usage

```bash
sudo mysql_install_db --user=mysql --basedir=/usr --datadir=/var/lib/mysql
sudo systemctl enable mariadb.service
sudo systemctl start mariadb.service
mysql_secure_installation
```

restart

```
SET PASSWORD FOR root@localhost=''; -- MySQL 8.x
```

## Commands

`mysql -u root -p` - login as root
`show databases` - show all databases
`SELECT User FROM mysql.user;` - show all users
