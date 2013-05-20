#!/usr/bin/env node
var param = '';
if ( process.argv[2] ) param = process.argv[2];
if(param != '')
  console.log(param);
else
  console.log('No input param');
