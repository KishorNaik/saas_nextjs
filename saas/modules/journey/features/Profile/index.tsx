import {currentUser} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import {getUserCompanions} from "@/modules/companions/shared/services/db/getUserCompanions";
import {getUserSessions} from "@/modules/companions/shared/services/db/getUserSessions";
import {getBookmarkedCompanions} from "@/modules/companions/shared/services/db/getBookmarkedCompanions";
import {
    CompanionLengthDisplaySkeleton, CompanionListDisplaySkeleton,
    SessionHistoryLengthDisplaySkeleton,
    UserProfileDisplaySkeleton
} from "@/modules/journey/shared/components/skeleton";
import UserProfileDisplay from "@/modules/journey/features/Profile/components/UserProfileDisplay";
import SessionHistoryLengthDisplay from "@/modules/journey/features/Profile/components/SessionHistoryLengthDisplay";
import CompanionLengthDisplay from "@/modules/journey/features/Profile/components/CompanionLengthDisplay";
import CompanionListDisplay from "@/modules/journey/features/Profile/components/companionListDisplay"
import {Suspense} from "react";

const ProfilePage=async ()=>{
    const user = await currentUser();

    if (!user) redirect("/sign-in");

    const [companions, sessionHistory, bookmarkedCompanions] = await Promise.all([
        getUserCompanions(user.id),
        getUserSessions(user.id),
        getBookmarkedCompanions(user.id),
    ]);

    return (
        <main className="min-lg:w-3/4">
            <section className="flex justify-between gap-4 max-sm:flex-col items-center">
                <Suspense fallback={<UserProfileDisplaySkeleton/>}>
                    <UserProfileDisplay
                        firstName={user.firstName!}
                        lastName={user.lastName!}
                        imageUrl={user.imageUrl!}
                        emailAddress={user.emailAddresses[0].emailAddress}/>
                </Suspense>
                <div className="flex gap-4">
                    <Suspense fallback={<SessionHistoryLengthDisplaySkeleton/>}>
                        <SessionHistoryLengthDisplay length={sessionHistory.length}/>
                    </Suspense>
                    <Suspense fallback={<CompanionLengthDisplaySkeleton/>}>
                        <CompanionLengthDisplay length={companions.length}/>
                    </Suspense>
                </div>
            </section>
            <Suspense fallback={<CompanionListDisplaySkeleton/>}>
                <CompanionListDisplay companions={companions} sessionHistory={sessionHistory} bookmarkedCompanions={bookmarkedCompanions}/>
            </Suspense>
        </main>
    );
}

export default ProfilePage;