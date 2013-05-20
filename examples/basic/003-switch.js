console.log('-->' + process.argv[2]);

switch ( process.argv[2] ) {
 case '1':
  console.log('==>1');
  break;
 case '10':
  console.log('==>10');
  break;
 default:
  console.log('default...');
 break;
}
