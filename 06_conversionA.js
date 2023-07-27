
console.log("|________________________ASSIGNMENT:0C_______________________|");

console.log('');

console.log("------------------------------------- I ---------------------------------------");

console.log('');

var result = (0 == '');
console.log(`Given Value: 0 ==''`);
console.log(`Result is:=> ${result}`);
console.log(`Reason: The Result is true because we have used here loose equlaity operator and  while using falsy value or empty value inside var2 its count as 0 and 0==0 is true `);

console.log('');

console.log("------------------------------------- II ---------------------------------------");

console.log('');

var result = (0 == '0');
console.log(`Given Value: 0 == '0'`);
console.log(`Result is:==> ${result}`);
console.log(`Reason: Result will be True because we have used the loose equality operator which compares only value not its data-type.`);

console.log('');

console.log("------------------------------------- III ---------------------------------------");

console.log('');

var result = (0 == false);
console.log(`Given Value: 0 == false`);
console.log(`Result is:==> ${result}`);
console.log(`Reason: Result will be True because 1."Use of loose equlaity operator" & 2."False always count as 0 so 0 == 0 will be true"`);

console.log('');

console.log("------------------------------------- IV ---------------------------------------");

console.log('');

var result = (null == undefined);
console.log(`Given Value: null == undefined`);
console.log(`Result is:==> ${result}`);
console.log(`Reason: Result will be True as 1."Use of loose equlaity operator" & 2."Values of null & undefined are false so false == false is true"`);

console.log('');

console.log("------------------------------------- V ---------------------------------------");

console.log('');

var result = (1 == [1]);
console.log(`Given Value: 1 == [1]`);
console.log(`Result is:==> ${result}`);
console.log(`Reason: Result will be true as 1."Use of loose equlaity operator" & 2."As show above [1] is an array value but the count and values are same so it shows true"`);

console.log('');

console.log("------------------------------------- VI ---------------------------------------");

console.log('');

var result = (1 == true);
console.log(`Given Value: 1 == true`);
console.log(`Result is:==> ${result}`);
console.log(`Reason: Result will be True as 1."Use of loose equlaity operator" and 2."The value of true is considered as '1' so it retrun true"`);

console.log('');

console.log("------------------------------------- VII ---------------------------------------");

console.log('');

var result = (1 == '1');
console.log(`Given Value: 1 == '1'`);
console.log(`Result is:==> ${result}`);
console.log(`Reason: Result will br True because we have used loose equlaity operator and it compares only values irrespective of its data-type so result is true`);




