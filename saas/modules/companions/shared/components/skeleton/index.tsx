export const PopularCompanionsSkeleton = () => {
    return (
        <>
            <div className="bg-white p-4">
                <h1 className="text-2xl bg-gray-300 rounded h-8 w-1/2 animate-pulse mb-4"></h1>
                <div className="space-y-4">
                    <div className="bg-gray-200 rounded-lg p-4 animate-pulse">
                        <div className="h-32 bg-gray-300 rounded mb-2"></div>
                        <div className="h-6 bg-gray-300 rounded w-3/4 mb-1"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-4 animate-pulse">
                        <div className="h-32 bg-gray-300 rounded mb-2"></div>
                        <div className="h-6 bg-gray-300 rounded w-3/4 mb-1"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-4 animate-pulse">
                        <div className="h-32 bg-gray-300 rounded mb-2"></div>
                        <div className="h-6 bg-gray-300 rounded w-3/4 mb-1"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    </div>
                </div>
            </div>
        </>
    )
}


export const CompanionsListSkeleton = () => {
    return (
        <>
            <article className="bg-white p-4">
                <h2 className="font-bold text-3xl bg-gray-200 animate-pulse h-8 w-3/4 mb-4 rounded"></h2>
                <table className="min-w-full">
                    <thead>
                    <tr>
                        <th className="bg-gray-200 animate-pulse h-8 w-1/4 rounded mb-2"></th>
                        <th className="bg-gray-200 animate-pulse h-8 w-1/4 rounded mb-2"></th>
                        <th className="bg-gray-200 animate-pulse h-8 w-1/4 rounded mb-2"></th>
                        <th className="bg-gray-200 animate-pulse h-8 w-1/4 rounded mb-2"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="bg-gray-200 animate-pulse h-8 w-1/4 rounded mb-2"></td>
                        <td className="bg-gray-200 animate-pulse h-8 w-1/4 rounded mb-2"></td>
                        <td className="bg-gray-200 animate-pulse h-8 w-1/4 rounded mb-2"></td>
                        <td className="bg-gray-200 animate-pulse h-8 w-1/4 rounded mb-2"></td>
                    </tr>
                    <tr>
                        <td className="bg-gray-200 animate-pulse h-8 w-1/4 rounded mb-2"></td>
                        <td className="bg-gray-200 animate-pulse h-8 w-1/4 rounded mb-2"></td>
                        <td className="bg-gray-200 animate-pulse h-8 w-1/4 rounded mb-2"></td>
                        <td className="bg-gray-200 animate-pulse h-8 w-1/4 rounded mb-2"></td>
                    </tr>
                    <tr>
                        <td className="bg-gray-200 animate-pulse h-8 w-1/4 rounded mb-2"></td>
                        <td className="bg-gray-200 animate-pulse h-8 w-1/4 rounded mb-2"></td>
                        <td className="bg-gray-200 animate-pulse h-8 w-1/4 rounded mb-2"></td>
                        <td className="bg-gray-200 animate-pulse h-8 w-1/4 rounded mb-2"></td>
                    </tr>
                    </tbody>
                </table>
            </article>
        </>
    )
}

export const CompanionGridSkeleton = () => {
    return (
        <>
            <div className="bg-white p-4">
                <div className="space-y-4">
                    <div className="animate-pulse flex flex-col space-y-2">
                        <div className="bg-gray-300 h-32 rounded-lg"></div>
                        <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
                        <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
                    </div>
                    <div className="animate-pulse flex flex-col space-y-2">
                        <div className="bg-gray-300 h-32 rounded-lg"></div>
                        <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
                        <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
                    </div>
                    <div className="animate-pulse flex flex-col space-y-2">
                        <div className="bg-gray-300 h-32 rounded-lg"></div>
                        <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
                        <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
                    </div>
                </div>
            </div>
        </>
    )
}