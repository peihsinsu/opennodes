console.log(process.argv);
for ( i in process.argv ){
  console.log('-->' + i + '=' + process.argv[i]);
}
