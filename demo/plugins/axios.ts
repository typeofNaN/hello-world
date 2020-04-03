export default function({ $axios }: any) {
  $axios.onRequest((req: any) => {
    console.log(1, req)
  })
  $axios.onError((error: any) => {
    console.log(2, error)
  })
}