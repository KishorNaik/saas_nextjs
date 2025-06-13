
import {
    Table,
} from "@/components/ui/table"
import {cn, getSubjectColor} from "@/lib/utils";
import CompanionListHeaders from "@/modules/companions/features/CompanionList/components/Headers";
import CompanionListBody from "@/modules/companions/features/CompanionList/components/Body";

interface CompanionsListProps {
    title: string;
    companions?: Companion[];
    classNames?: string;
}

const CompanionsList = ({ title, companions, classNames }: CompanionsListProps) => {
    return (
        <article className={cn('companion-list', classNames)}>
            <h2 className="font-bold text-3xl">{title}</h2>
            <Table>
                <CompanionListHeaders/>
                <CompanionListBody companions={companions}/>
            </Table>
        </article>
    )
}

export default CompanionsList;