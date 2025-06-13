import CompanionsLibraryPage from "@/modules/companions/features/CompanionsLibrary";


const Page = async ({ searchParams }: SearchParams) => {
   return (
       <>
           <CompanionsLibraryPage searchParams={searchParams}/>
       </>
   )
}

export default Page;
