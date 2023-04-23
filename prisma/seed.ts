import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

type Post = {
    title: string;
    body: string;
}

async function getPosts()
{
    const response = await fetch('https://dummyjson.com/posts');
    const { posts } = await response.json();
    return posts as Post[];
}

function slugify(text: string)
{
    return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

async function main()
{
    const posts = await getPosts();
    for (const post of posts)
    {
        const slug = slugify(post.title);
        await db.post.create({
            data: {
                title: post.title,
                content: post.body,
                slug
            }
        });
    }

    return posts;
}

main()