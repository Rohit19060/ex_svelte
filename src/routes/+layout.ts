import type { LayoutLoad } from "./$types";
export const load: LayoutLoad = async (event) =>
{
    return { message: "Hello World!" };
}