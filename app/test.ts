var a : number  = 0.1;
var b : number  = 0.1;
var c : number  = 0.1;
var d : number  =0.3;
console.log('float test:',a+b+c-d);


export async function main() {
 await ping();
}

async function ping() {
 for (var i = 0; i < 10; i++) {
  await delay(300);
  console.log('ping ..');
 }
}

function delay(ms: number) {
 return new Promise( (resolve) => setTimeout(resolve, ms));
}