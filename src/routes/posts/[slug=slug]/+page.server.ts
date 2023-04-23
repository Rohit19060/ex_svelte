import db from "$lib/database";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) =>
{
    // const parentData = await parent();
    const post = await db.post.findUnique({
        where: { slug: params?.slug }
    });

    if (!post)
    {
        throw error(404, 'Post not found');
    }
    return { post };
}