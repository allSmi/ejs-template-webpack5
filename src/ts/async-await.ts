let a = new Promise<number>(resolve=>{
  setTimeout(() => {
    resolve(1)
  }, 2000);
})

async function test() {
  let x:number = await a
}


test().then(res=>{
  console.log(res);
})
