import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import CompanionsList from "@/modules/companions/features/CompanionList";

interface ICompanionListDisplayProps{
    companions:any[];
    sessionHistory:any[][];
    bookmarkedCompanions:any[][];
}

const CompanionListDisplay=(params: ICompanionListDisplayProps)=>{
    const {companions, sessionHistory, bookmarkedCompanions}=params;

    return (
        <>
            <Accordion type="multiple">
                <AccordionItem value="bookmarks">
                    <AccordionTrigger className="text-2xl font-bold">
                        Bookmarked Companions {`(${bookmarkedCompanions.length})`}
                    </AccordionTrigger>
                    <AccordionContent>
                        <CompanionsList
                            companions={bookmarkedCompanions}
                            title="Bookmarked Companions"
                        />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="recent">
                    <AccordionTrigger className="text-2xl font-bold">
                        Recent Sessions
                    </AccordionTrigger>
                    <AccordionContent>
                        <CompanionsList
                            title="Recent Sessions"
                            companions={sessionHistory}
                        />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="companions">
                    <AccordionTrigger className="text-2xl font-bold">
                        My Companions {`(${companions.length})`}
                    </AccordionTrigger>
                    <AccordionContent>
                        <CompanionsList title="My Companions" companions={companions} />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    )
}

export default CompanionListDisplay;