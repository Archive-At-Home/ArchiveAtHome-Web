export async function onRequest({ request, env }) {

    if (!env?.CLICKS) {
        return new Response("KV not bound", { status: 500 });
    }

    const names = [
        "cookie-main",
        "cookie-backup",
        "telegram-shop",
        "mhdy-shop"
    ];

    const result = {};

    for (const name of names) {
        result[name] = Number(await env.CLICKS.get(name) || 0);
    }

    return Response.json(result);
}