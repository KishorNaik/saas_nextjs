export const UserProfileDisplaySkeleton = () => {
    return (
        <>
            <div className="bg-white p-4 rounded-lg">
                <div className="flex gap-4 items-center">
                    <div className="w-28 h-28 bg-gray-300 rounded-full animate-pulse"></div>
                    <div className="flex flex-col gap-2">
                        <div className="w-48 h-6 bg-gray-300 rounded animate-pulse"></div>
                        <div className="w-32 h-4 bg-gray-300 rounded animate-pulse"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const SessionHistoryLengthDisplaySkeleton = () => {
    return (
        <>
            <div className="bg-white border border-gray-300 rounded-lg p-3 gap-2 flex flex-col h-fit">
                <div className="flex gap-2 items-center">
                    <div className="bg-gray-300 rounded-full w-6 h-6 animate-pulse"></div>
                    <div className="bg-gray-300 rounded w-16 h-8 animate-pulse"></div>
                </div>
                <div className="bg-gray-300 rounded w-32 h-4 animate-pulse"></div>
            </div>
        </>
    )
}

export const CompanionLengthDisplaySkeleton = () => {
    return (
        <>
            <div className="bg-white border border-gray-300 rounded-lg p-3 gap-2 flex flex-col h-fit">
                <div className="flex gap-2 items-center">
                    <div className="bg-gray-300 rounded-full w-6 h-6 animate-pulse"></div>
                    <div className="bg-gray-300 rounded w-16 h-8 animate-pulse"></div>
                </div>
                <div className="bg-gray-300 rounded w-32 h-4 animate-pulse"></div>
            </div>
        </>
    )
}

export const CompanionListDisplaySkeleton = () => {
    return (
        <>
            <div className="bg-white p-4">
                <div className="space-y-4">
                    <div className="animate-pulse">
                        <div className="h-8 w-1/2 bg-gray-300 rounded"></div>
                    </div>
                    <div className="animate-pulse">
                        <div className="h-8 w-1/2 bg-gray-300 rounded"></div>
                    </div>
                    <div className="animate-pulse">
                        <div className="h-8 w-1/2 bg-gray-300 rounded"></div>
                    </div>
                </div>
                <div className="space-y-4 mt-4">
                    <div className="animate-pulse">
                        <div className="h-32 w-full bg-gray-200 rounded"></div>
                    </div>
                    <div className="animate-pulse">
                        <div className="h-32 w-full bg-gray-200 rounded"></div>
                    </div>
                    <div className="animate-pulse">
                        <div className="h-32 w-full bg-gray-200 rounded"></div>
                    </div>
                </div>
            </div>
        </>
    )
}