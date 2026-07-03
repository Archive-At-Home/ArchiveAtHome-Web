export async function onRequestGet(context) {

    const { env, request } = context;

    const url = new URL(request.url);

    const tool = url.searchParams.get("tool");

    if (!tool) {
        return new Response("Missing tool", { status: 400 });
    }

    const old = await env.CLICKS.get(tool);

    const count = Number(old || 0) + 1;

    await env.CLICKS.put(tool, count.toString());

    return new Response("ok");
}