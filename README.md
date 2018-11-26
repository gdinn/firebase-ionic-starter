# Firebase-Ionic Starter

The goal here is to make a simple application with ionic that comunicates with firebase and do simple tasks that envolves data exchange focusing on the firebase utilization. To assure the same results Its important to use the same node and ionic cli that I am using, which is 3.20.0 for ionic and 6.14.4 for node.

To install ionic:
```
npm install -g ionic@3.20.0
```

To install node:
```
curl -sL https://deb.nodesource.com/setup_6.x | bash -
```
```
apt-get install -y nodejs
```

That can be verified with:
```
node -v
```
```
ionic
```

First step is to create a folder called "Environment" inside the src folder created by Ionic. Inside this folder you will find the file "firebase.config.ts", which contains all the data required by firebase.

Then, you need to install the packages needed. To achieve this, sue on your terminal inside de project folder:
```
npm install firebase --save
```
```
npm install angularfire2 --save
```

On the day of this tutorial I am using angularfire2@5.1.0 and firebase@5.5.9

To start doing the acess interface I suggest create a folder called services under the src folder. Then, create a file called hello-world.service.ts. In this file you'll find all the methods used to register an user, login and save some data.

The implementation of theses methods can bee seen on the referred file.
