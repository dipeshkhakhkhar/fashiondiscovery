# FashionDiscovery - Pinterest Like Fashion Discovery Board using MEAN Stack 
<h2>MEAN Stack - Pinterest like Fashion Discovery Board</h2>

This repo contains the code for a Pinterest like Fashion Discovery Board containing items and allows infite scroll. This is built using MEAN stack:

<ul>
<li>MongoDB</li>
<li>Express</li>
<li>AngularJS</li>
<li>NodeJS</li>
</ul>


<h3>Instructions</h3>

You can clone this repo using 

    git clone git@github.com:dipeshKhakhkhar/fashiondiscovery.git

then install the Node modules with

    npm install

then make sure MongoDB is running with

    mongod

from your MongoDB directory.

Run the following command to import test data into itemlist collections in mongodb 

cd to fashiondiscovery directory
	mongoimport --db itemlist --collection itemlist --type csv --headerline --file data/test/fasdis.csv 
	
Once you know that data is imported. Start the application by running the following command
  node server


