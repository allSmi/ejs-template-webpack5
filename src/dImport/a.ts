export default function () {
  const b = () => import(/* webpackChunkName: "bjs" */ './b')
  const c = () => import(/* webpackChunkName: "cjs" */ './c')

  b().then((result) => {
    const res = result.default(1, 2)
    console.log(res)
  })

  c().then((result) => {
    const res = result.default(3, 2)
    console.log(res)
  })
}
