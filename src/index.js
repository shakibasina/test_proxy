export default {
  async fetch(request) {
    const url = new URL(request.url).searchParams.get("url")

    const res = await fetch(url)

    return new Response(res.body, {
      headers: res.headers
    })
  }
}
