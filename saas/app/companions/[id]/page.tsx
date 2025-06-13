import CompanionSession from "@/modules/companions/features/CompanionsSession";

interface CompanionSessionPageProps {
    params: Promise<{ id: string}>;
}

const Page = async ({ params }: CompanionSessionPageProps) => {
    return (
        <>
            <CompanionSession params={params}/>
        </>
    )
}

export default Page;
