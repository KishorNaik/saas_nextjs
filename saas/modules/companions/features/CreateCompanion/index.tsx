import {auth} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import UpgradePlanBanner from "@/modules/companions/features/CreateCompanion/components/UpgradePlanBanner";
import {newCompanionPermissions} from "@/modules/companions/shared/services/db/newCompanionPermissions";
import {If} from "@yookue/react-condition";
import dynamic from "next/dynamic";

const CompanionForm = dynamic(() => import("@/modules/companions/features/CreateCompanion/components/Form"));

const CreateCompanionPage=async ()=>{
    const { userId } = await auth();
    if(!userId) redirect('/sign-in');

    const canCreateCompanion = await newCompanionPermissions();

    return (
        <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">

            <If condition={canCreateCompanion}>
                <If.Then>
                    <article className="w-full gap-4 flex flex-col">
                        <h1>Companion Builder</h1>
                        <CompanionForm />
                    </article>
                </If.Then>
                <If.Else>
                    <UpgradePlanBanner/>
                </If.Else>
            </If>
        </main>
    )
}

export default CreateCompanionPage;