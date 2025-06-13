"use client";

import {useCompanionAiPanel} from "./hooks";
import dynamic from "next/dynamic";

const AiSpeakerPanel = dynamic(() => import('./components/AiSpeakerPanel/index'));
const UserAvatarPanel = dynamic(() => import('./components/UserAvatarPanel/index'));
const MicrophonePanel = dynamic(() => import('./components/MicrophonePanel/index'));
const StartSessionButton = dynamic(() => import('./components/StartSessionButton/index'));
const TranscriptPanel = dynamic(() => import('./components/TranscriptPanel/index'));

export enum CallStatus {
    INACTIVE = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}


const CompanionAiPanel = ({ companionId, subject, topic, name, userName, userImage, style, voice }: CompanionComponentProps) => {
   const {
       callStatus,
       isSpeaking,
       isMuted,
       messages,
       lottieRef,
       handleCall,
       handleDisconnect,
       toggleMicrophone
   }=useCompanionAiPanel({ companionId, subject, topic, style, voice });

    return (
        <section className="flex flex-col h-[70vh]">
            <section className="flex gap-8 max-sm:flex-col">
                <div className="companion-section">
                    <AiSpeakerPanel callStatus={callStatus} lottieRef={lottieRef} name={name} subject={subject} />
                </div>

                <div className="user-section">
                    <UserAvatarPanel userName={userName} userImage={userImage}/>
                    <MicrophonePanel toggleMicrophone={toggleMicrophone} callStatus={callStatus} isMuted={isMuted}/>
                    <StartSessionButton callStatus={callStatus} handleCall={handleCall} handleDisconnect={handleDisconnect} />
                </div>
            </section>

            <TranscriptPanel messages={messages} userName={userName} />
        </section>
    )
}

export default CompanionAiPanel;
