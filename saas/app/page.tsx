import {getRecentSessions} from "@/modules/companions/shared/services/db/getRecentSessions";
import CTA from "@/modules/companions/features/BuildNewCompanionBanner";
import {CompanionsListSkeleton, PopularCompanionsSkeleton} from "@/modules/companions/shared/components/skeleton";
import {Suspense} from "react";
import PopularCompanions from "@/modules/companions/features/PopularCompanions"
import CompanionsList from "@/modules/companions/features/CompanionList";

const Page = async () => {
    const recentSessionsCompanions = await getRecentSessions(10);

    return (
        <main>
                <section className="home-section">
                    <Suspense fallback={<PopularCompanionsSkeleton/>}>
                        <PopularCompanions/>
                    </Suspense>

                </section>

                <section className="home-section">
                    <Suspense fallback={<CompanionsListSkeleton/>}>
                        <CompanionsList
                            title="Recently completed sessions"
                            companions={recentSessionsCompanions}
                            classNames="w-2/3 max-lg:w-full"
                        />
                    </Suspense>
                    <CTA />
                </section>
        </main>
    )
}

export default Page