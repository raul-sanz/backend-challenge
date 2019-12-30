#!/bin/bash

echo "Npm install:"
npm install

echo "Copy .env file:"
file="./.env.example"
if [ -f "$file" ]
then
	echo "$file found."
	cp $file ./.env
	echo ".env created"
else
	echo "$file not found."
	exit 1
fi

echo "Start node server:"
adonis serve --dev
