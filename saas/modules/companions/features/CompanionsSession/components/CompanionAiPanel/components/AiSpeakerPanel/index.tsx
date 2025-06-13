"use client";

import {cn, getSubjectColor} from "@/lib/utils";
import Image from "next/image";
import Lottie, {LottieRefCurrentProps} from "lottie-react";
import soundwaves from "@/constants/soundwaves.json";
import {CallStatus} from "@/modules/companions/features/CompanionsSession/components/CompanionAiPanel";
import {RefObject} from "react";

interface IAiSpeakerPanelProps {
    callStatus: CallStatus;
    lottieRef:  RefObject<LottieRefCurrentProps | null>
    name: string;
    subject: string;
}

const AiSpeakerPanel = (props:IAiSpeakerPanelProps) => {

    const {callStatus,lottieRef,name,subject} = props;

    return (
        <>
            <div className="companion-avatar" style={{ backgroundColor: getSubjectColor(subject)}}>
                <div
                    className={
                        cn(
                            'absolute transition-opacity duration-1000', callStatus === CallStatus.FINISHED || callStatus === CallStatus.INACTIVE ? 'opacity-1001' : 'opacity-0', callStatus === CallStatus.CONNECTING && 'opacity-100 animate-pulse'
                        )
                    }>
                    <Image src={`/icons/${subject}.svg`} alt={subject} width={150} height={150} className="max-sm:w-fit" />
                </div>

                <div className={cn('absolute transition-opacity duration-1000', callStatus === CallStatus.ACTIVE ? 'opacity-100': 'opacity-0')}>
                    <Lottie
                        lottieRef={lottieRef}
                        animationData={soundwaves}
                        autoplay={false}
                        className="companion-lottie"
                    />
                </div>
            </div>
            <p className="font-bold text-2xl">{name}</p>
        </>
    )
}

export default AiSpeakerPanel;