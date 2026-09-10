/*
export default {
  async fetch(request, env) {
    const auth = request.headers.get("Authorization");

    if (!auth || !isValid(auth, env.AUTH_USER, env.AUTH_PASS)) {
      return new Response("Access restricted.", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Team Only", charset="UTF-8"',
          "Content-Type": "text/plain",
        },
      });
    }

    return env.ASSETS.fetch(request);
  },
};

function isValid(header, user, pass) {
  const expected = btoa(`${user}:${pass}`);
  return header === `Basic ${expected}`;
}
*/

export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
