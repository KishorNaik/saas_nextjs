"use server";

import {revalidatePath} from "next/cache";
import {addBookmark} from "@/modules/companions/shared/services/db/addBookmark";

export const addBookMarkAction = async (companionId: string, path: string) => {
    const response=await addBookmark(companionId, path);
    // Revalidate the path to force a re-render of the page
    revalidatePath(path);
    return response;
}