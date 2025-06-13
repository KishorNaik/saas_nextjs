"use server";
import {revalidatePath} from "next/cache";
import {removeBookmark} from "@/modules/companions/shared/services/db/removeBookmark";

export const removeBookMarkAction = async (companionId: string, path: string) => {
    const response=await removeBookmark(companionId, path);
    // Revalidate the path to force a re-render of the page
    revalidatePath(path);
    return response;
}