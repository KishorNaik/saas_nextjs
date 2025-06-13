import Image from "next/image";

interface ICompanionLengthDisplayProps{
    length: number
}
const CompanionLengthDisplay=(props: ICompanionLengthDisplayProps)=>{
    const {length}=props;
    return (
        <>
            <div className="border border-black rouded-lg p-3 gap-2 flex flex-col h-fit">
                <div className="flex gap-2 items-center">
                    <Image src="/icons/cap.svg" alt="cap" width={22} height={22} />
                    <p className="text-2xl font-bold">{length}</p>
                </div>
                <div>Companions created</div>
            </div>
        </>
    )
}

export default CompanionLengthDisplay;