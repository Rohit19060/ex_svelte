import db from "$lib/database";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) =>
{
    const posts = await db.post.findMany({
        select: {
            title: true,
            slug: true,

        }, take: 4,
    });

    return { posts };
}