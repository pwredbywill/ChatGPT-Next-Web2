export async function onRequest(context) {
  return new Response("Hello, World!", {
    headers: { "content-type": "text/plain" },
  });
}