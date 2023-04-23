import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () =>
{
    const options: ResponseInit = {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        }
    };

    return new Response('Hello world!', options);
}

export const POST: RequestHandler = async (event) =>
{
    const data = await event.request.formData();
    const email = data.get('email');

    if (!email)
    {
        return new Response('Missing name or email', { status: 400 });
    }

    console.log(email);

    const options: ResponseInit = {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        }
    };

    return new Response('Hello world!', options);
}