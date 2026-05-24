import axios from "axios";

export default {
  async fetch() {
    const res = await axios.get("https://httpbin.org/get");

    return new Response(JSON.stringify(res.data));
  }
}
