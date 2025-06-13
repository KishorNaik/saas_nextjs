import {getCompanion} from "@/lib/actions/companion.actions";
import {currentUser} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import TitlePanel from "@/modules/companions/features/CompanionsSession/components/TitlePanel";
import CompanionAiPanel from "@/modules/companions/features/CompanionsSession/components/CompanionAiPanel";

interface CompanionSessionPageProps {
    params: Promise<{ id: string}>;
}

const CompanionSession = async ({ params }: CompanionSessionPageProps) => {
    const { id } = await params;
    const [companion, user] = await Promise.all([
        getCompanion(id),
        currentUser()
    ]);

    const { name, subject, title, topic, duration } = companion;

    if(!user) redirect('/sign-in');
    if(!name) redirect('/companions')

    return (
        <main>
            <TitlePanel name={name} subject={subject} topic={topic} duration={duration}/>

            <CompanionAiPanel
                {...companion}
                companionId={id}
                userName={user.firstName!}
                userImage={user.imageUrl!}
            />
        </main>
    )
}

export default CompanionSession;