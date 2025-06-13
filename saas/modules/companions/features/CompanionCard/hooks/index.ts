import {usePathname} from "next/navigation";
import {removeBookMarkAction} from "@/modules/companions/features/CompanionCard/actins/removeBookmark";
import {addBookMarkAction} from "@/modules/companions/features/CompanionCard/actins/addBookmark";

interface IUseCompanionCardParameters {
    id: string;
    bookmarked:boolean;
}

export const useCompanionCard = (params: IUseCompanionCardParameters) => {

    const {id, bookmarked} =params;

    const pathname = usePathname();

    const handleBookmark = async () => {
        if (bookmarked) {
            await removeBookMarkAction(id, pathname);
        } else {
            await addBookMarkAction(id, pathname);
        }
    };

    return {
        handleBookmark
    }
}