import db from "$lib/database";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ url }) =>
{
    const limit = Number(url.searchParams.get("limit") ?? 30);
    const order = url.searchParams.get("order") === "asc" ? "asc" : "desc";
    console.log(limit, order);
    const posts = await db.post.findMany({
        take: limit,
        orderBy: {
            id: order
        }
    });
    return json(posts);
};