import {TableHead, TableHeader, TableRow} from "@/components/ui/table";

const CompanionListHeaders = () => {
   return (
       <>
           <TableHeader>
               <TableRow>
                   <TableHead className="text-lg w-2/3">Lessons</TableHead>
                   <TableHead className="text-lg">Subject</TableHead>
                   <TableHead className="text-lg text-right">Duration</TableHead>
               </TableRow>
           </TableHeader>
       </>
   )
}

export default CompanionListHeaders;