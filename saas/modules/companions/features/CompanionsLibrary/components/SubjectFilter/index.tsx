"use client";
import React, { useEffect, useState } from "react";
import { subjects } from "@/constants";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useSubjectFilter} from "@/modules/companions/features/CompanionsLibrary/components/SubjectFilter/hooks";
import {For} from "@yookue/react-condition";

const SubjectFilter = () => {
    const {subject, setSubject}=useSubjectFilter();

    return (
        <Select onValueChange={setSubject} value={subject}>
            <SelectTrigger className="input capitalize">
                <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All subjects</SelectItem>
                <For of={subjects} render={(subject:string,index:number)=>{
                    return (
                        <>
                            <SelectItem key={subject} value={subject} className="capitalize">
                                           {subject}
                            </SelectItem>
                        </>
                    )
                }}/>
            </SelectContent>
        </Select>
    );
};

export default SubjectFilter;