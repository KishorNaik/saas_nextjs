import CompanionForm from "@/components/CompanionForm";
import {auth} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import {newCompanionPermissions} from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";

const NewCompanionsPage=async ()=>{

    // Check Auth
    const {userId}=await auth();
    if(!userId)
        redirect(`/sign-in`);

    const canCreateCompanion=await newCompanionPermissions();


    return (
        <>
            <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
                {canCreateCompanion
                    ? (
                        <article className="w-full flex flex-col gap-4">
                            <h1>
                                Companion Builder
                            </h1>
                            <CompanionForm/>
                        </article>
                    )
                    :
                    (
                        <article className="companion-limit">
                            <Image src="/images/limit.svg" alt="Companion limit reached" width={360} height={230}/>
                            <div className="cta-badge">
                                Upgrade Your Plan
                            </div>
                            <h1>
                                You have reached your companion limit
                            </h1>
                            <p>
                                You have reached your companion limit. Upgrade your plan to add more companions.
                            </p>
                            <Link href="/subscription" className="btn-primary w-full justify-center">Upgrade My Plan</Link>
                        </article>
                    )
                }

            </main>
        </>
    )
}

export default NewCompanionsPage;