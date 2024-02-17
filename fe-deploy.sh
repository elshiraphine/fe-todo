#!/bin/bash

# nvm install
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc

# yarn install
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update
sudo apt-get install yarn -y

# setup node
nvm install 18
nvm alias default 18

# pm2 install
sudo aot install npm
npm install pm2 -g

sudo git clone https://github.com/elshiraphine/fe-todo.git && cd fe-todo
sudo chown -R www-data:www-data .

yarn install && yarn build

pm2 start --name fe-todo "yarn start"
