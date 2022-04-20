const a = new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(1)
  }, 2000)
})

async function test() {
  const x: number = await a
  console.log(x)
}

test().then((res) => {
  console.log(res)
})

export { test }
