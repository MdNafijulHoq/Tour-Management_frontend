import {
  useGetTourTypesQuery,
  useRemoveTourTypeMutation,
} from "@/redux/features/Tour/tour.api";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { AddTourTypeModal } from "@/components/modules/Tour/TourType/AddTourTypeModal";
import { DeleteConfirmation } from "@/components/DeleteConfirmation";
import { toast } from "sonner";

const AddTourType = () => {
  const { data } = useGetTourTypesQuery(undefined);
  const [removeTourTypes] = useRemoveTourTypeMutation();
  // console.log(data);

  const handleRemoveTourType = async (tourId: string) => {
    const toastId = toast.loading("Removing...");
    const res = await removeTourTypes(tourId).unwrap();
    if (res.success) {
      toast.success("Tour Type Remove Successfully", { id: toastId });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-5">
      <div className="flex justify-between my-8">
        <h1 className="text-xl font-semibold">Tour Types</h1>
        <AddTourTypeModal />
      </div>
      <div className="border border-muted rounded-md">
        <Table>
          <TableCaption>A list of Tour Types.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
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
                      onConfirm={() => handleRemoveTourType(item._id)}
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

export default AddTourType;
