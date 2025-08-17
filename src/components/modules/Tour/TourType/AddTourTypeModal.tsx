import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAddTourTypeMutation } from "@/redux/features/Tour/tour.api";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

export function AddTourTypeModal() {
  const [open, setOpen] = useState(false);
  const form = useForm();
  const [addTourType] = useAddTourTypeMutation(undefined);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await addTourType({ name: data.name }).unwrap();
      if (res.success) {
        toast.success("Tour Type Added");
      }
      setOpen(false);
    } catch (error: unknown) {
      console.log(error);
      setOpen(true);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Tour Type</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Tour Type</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form id="add-tour-type" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tour Type Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Tour Type name here..."
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button form="add-tour-type" type="submit">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
