"use client";
import {CallStatus} from "@/modules/companions/features/CompanionsSession/components/CompanionAiPanel";
import Image from "next/image";

interface IMicrophonePanelProps {
    toggleMicrophone: () => void;
    callStatus: CallStatus;
    isMuted: boolean;
}

const MicrophonePanel = (props:IMicrophonePanelProps) => {

    const { toggleMicrophone, callStatus, isMuted } = props;

    return (
        <>
            <button className="btn-mic" onClick={toggleMicrophone} disabled={callStatus !== CallStatus.ACTIVE}>
                <Image src={isMuted ? '/icons/mic-off.svg' : '/icons/mic-on.svg'} alt="mic" width={36} height={36} />
                <p className="max-sm:hidden">
                    {isMuted ? 'Turn on microphone' : 'Turn off microphone'}
                </p>
            </button>
        </>
    )
}

export default MicrophonePanel;