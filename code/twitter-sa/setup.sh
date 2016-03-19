#!/bin/bash

rm -rf node_modules
npm install node-uuid lodash body-parser express morgan bluebird bluemix-object-storage multer request express-chrome-logger --save
npm install mocha chai --save-dev
