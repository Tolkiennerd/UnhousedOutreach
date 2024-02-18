# Getting Started

## Prerequisites

Make sure you have all of the following on your machine:
- MySQL (or MariaDB)
  - Ubuntu installation guide: https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04
  - Windows installation guide: https://www.w3schools.com/mysql/mysql_install_windows.asp
- .NET SDK (v8)
  - Ubuntu installation guide: https://learn.microsoft.com/en-us/dotnet/core/install/linux-ubuntu-2204
  - Windows installation guide: https://learn.microsoft.com/en-us/dotnet/core/install/windows?tabs=net80
- Node
  - Ubuntu installation guide: https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04
  - Windows download link: https://nodejs.org/en/download 

## Create Database

Open a MySQL shell with:

`mysql -uroot -p`

Enter your root password.

In the MySQL shell, create an empty database called UnhousedOutreach with:  

`CREATE DATABASE UnhousedOutreach;`

Create a user with all permissions on that database with:  

`CREATE USER '<user>'@'localhost' IDENTIFIED BY '<password>';`  
`GRANT ALL PRIVILEGES ON UnhousedOutreach.* TO '<user>'@'localhost';`  

Exit the MySQL shell.

## Add Environment Variables And Clone Repository

Add the following environment variables:
- UNHOUSED_OUTREACH_DB_UID (with the username for the user created above)
- UNHOUSED_OUTREACH_DB_PWD (with the password for the user created above)

Clone the repository.

## Start the Site

To start the API, open a terminal at the Backend folder (relative to the root of the project) and run:

`dotnet run --project UnhousedOutreach.Api`

To start the UI, open a terminal at the Frontend/unhoused-outreach-ui folder (relative to the root of the project) and run:

`npm install`  
`npm start`

Pull up the site on http://localhost:4200!
