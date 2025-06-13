'use client';

import Image from "next/image";
import {useSearchInput} from "@/modules/companions/features/CompanionsLibrary/components/searchInput/hooks";

const SearchInput = () => {

    const {searchQuery, setSearchQuery}=useSearchInput();

    return (
        <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
            <Image src="/icons/search.svg" alt="search" width={15} height={15} />
            <input
                placeholder="Search companions..."
                className="outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    )
}
export default SearchInput
