import {getAllCompanions} from "@/modules/companions/shared/services/db/getAllCompanions";
import CompanionCard from "@/modules/companions/features/CompanionCard";
import {getSubjectColor} from "@/lib/utils";
import {For} from "@yookue/react-condition";

const PopularCompanions=async ()=>{

    const companions=await getAllCompanions({
        limit:3
    });

    return (
        <>
            <h1 className="text-2xl underline">
                Popular Companions
            </h1>

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
}

export default PopularCompanions;