import Image from "next/image";

interface SessionHistoryLengthDisplayProps{
    length:number;
}

const SessionHistoryLengthDisplay=(props:SessionHistoryLengthDisplayProps)=>{
    const {length}=props
    return (
        <div className="border border-black rouded-lg p-3 gap-2 flex flex-col h-fit">
            <div className="flex gap-2 items-center">
                <Image
                    src="/icons/check.svg"
                    alt="checkmark"
                    width={22}
                    height={22}
                />
                <p className="text-2xl font-bold">{length}</p>
            </div>
            <div>Lessons completed</div>
        </div>
    )
}

export default SessionHistoryLengthDisplay;