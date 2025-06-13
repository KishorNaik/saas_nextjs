import {getSubjectColor} from "@/lib/utils";
import {For} from "@yookue/react-condition";
import dynamic from "next/dynamic";

const CompanionCard = dynamic(() => import("@/modules/companions/features/CompanionCard/index"));

interface ICompanionsGridProps {
    companions:any[]
}

const CompanionsGrid = (props: ICompanionsGridProps) => {

    const {companions} = props

    return (
        <>
            <For of={companions} render={(companion:any,index:number)=>{
                return (
                    <CompanionCard
                        key={companion.id}
                        {...companion}
                        color={getSubjectColor(companion.subject)}
                    />
                )
            }}/>

        </>
    )
};

export default CompanionsGrid;