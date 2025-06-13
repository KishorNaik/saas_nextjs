"use client";
import {CallStatus} from "@/modules/companions/features/CompanionsSession/components/CompanionAiPanel";
import {cn} from "@/lib/utils";

interface IStartSessionButtonProps {
    callStatus: CallStatus;
    handleDisconnect: () => void;
    handleCall: () => Promise<void>
}

const StartSessionButton=(props:IStartSessionButtonProps)=>{

    const { callStatus, handleDisconnect, handleCall } = props

    return (
        <>
            <button className={cn('rounded-lg py-2 cursor-pointer transition-colors w-full text-white', callStatus ===CallStatus.ACTIVE ? 'bg-red-700' : 'bg-primary', callStatus === CallStatus.CONNECTING && 'animate-pulse')} onClick={callStatus === CallStatus.ACTIVE ? handleDisconnect : handleCall}>
                {callStatus === CallStatus.ACTIVE
                    ? "End Session"
                    : callStatus === CallStatus.CONNECTING
                        ? 'Connecting'
                        : 'Start Session'
                }
            </button>

        </>
    )
}

export default StartSessionButton;