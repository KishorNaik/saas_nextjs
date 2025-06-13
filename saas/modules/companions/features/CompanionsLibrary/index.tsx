import {getAllCompanions} from "@/modules/companions/shared/services/db/getAllCompanions";
import dynamic from 'next/dynamic'
import CompanionsGrid from "@/modules/companions/features/CompanionsLibrary/components/CompanionsGrid";
import {Suspense} from "react";
import {CompanionGridSkeleton} from "@/modules/companions/shared/components/skeleton";

const SearchInput = dynamic(() => import("@/modules/companions/features/CompanionsLibrary/components/searchInput"));
const SubjectFilter = dynamic(() => import("@/modules/companions/features/CompanionsLibrary/components/SubjectFilter"));

const CompanionsLibraryPage=async({ searchParams }: SearchParams)=>{
    const filters = await searchParams;
    const subject = filters.subject ? filters.subject : '';
    const topic = filters.topic ? filters.topic : '';

    const companions = await getAllCompanions({ subject, topic });

    return (
        <main>
            <section className="flex justify-between gap-4 max-sm:flex-col">
                <h1>Companion Library</h1>
                <div className="flex gap-4">
                    <SearchInput />
                    <SubjectFilter />
                </div>
            </section>
            <section className="companions-grid">
                <Suspense fallback={<CompanionGridSkeleton/>}>
                    <CompanionsGrid companions={companions}/>
                </Suspense>
            </section>
        </main>
    )
}

export default CompanionsLibraryPage;