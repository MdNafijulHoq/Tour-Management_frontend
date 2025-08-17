import { DeleteConfirmation } from "@/components/DeleteConfirmation";
import AddDivisionModal from "@/components/modules/Tour/Division/AddDivisionModal";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useGetDivisionsQuery,
  useRemoveDivisionMutation,
} from "@/redux/features/division/division.api";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
const AddDivision = () => {
  const { data } = useGetDivisionsQuery(undefined);
  const [removeDivision] = useRemoveDivisionMutation();

  const handleRemoveDivision = async (divisionId: string) => {
    const toastId = toast.loading("Removing...");
    const res = await removeDivision(divisionId).unwrap();
    if (res.success) {
      toast.success("Division Remove Successfully", { id: toastId });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-5">
      <div className="flex justify-between my-8">
        <h1 className="text-xl font-semibold">Division</h1>
        <AddDivisionModal />
      </div>
      <div className="border border-muted rounded-md">
        <Table>
          <TableCaption>A list of Division.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]"> Division Name</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map(
              (item: { _id: string; name: string }, index: number | string) => (
                <TableRow key={index}>
                  <TableCell className="font-medium w-full">
                    {item?.name}
                  </TableCell>
                  <TableCell>
                    <DeleteConfirmation
                      onConfirm={() => handleRemoveDivision(item._id)}
                    >
                      <Button size="sm">
                        <Trash2 />
                      </Button>
                    </DeleteConfirmation>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AddDivision;
