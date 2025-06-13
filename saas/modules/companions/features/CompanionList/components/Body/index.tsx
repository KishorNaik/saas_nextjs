import {TableBody, TableRow} from "@/components/ui/table";
import {For} from "@yookue/react-condition";
import {
    DurationCell,
    NameCell,
    SubjectCell
} from "@/modules/companions/features/CompanionList/components/Body/components/TableCells";

interface ICompanionListBodyProps{
    companions?: Companion[];
}

const CompanionListBody=(props: ICompanionListBodyProps)=>{

    const {companions}=props;

    return (
        <>
            <TableBody>
                <For of={companions} render={(companion:Companion,index:number)=>{
                    const {id,name,topic,subject,duration,bookmarked}=companion;
                    return (
                            <TableRow key={`${id}-${index}`}>
                                <NameCell id={id} name={name} subject={subject} topic={topic}/>
                                <SubjectCell subject={subject}/>
                                <DurationCell duration={duration}/>
                            </TableRow>
                    )
                }}/>

            </TableBody>
        </>
    )
}

export default CompanionListBody;