import React, { PropsWithChildren, ReactNode, useState } from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

export const Dialog = ({
  content,
  children,
}: PropsWithChildren<{ content: ReactNode }>) => {
  const [open, setOpen] = useState(false);
  return (
    <RadixDialog.Root open={open} onOpenChange={(open) => setOpen(open)}>
      <RadixDialog.Trigger>{children}</RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="bg-neutral-900/80 backdrop-saturate-150 backdrop-blur-[5px] data-[state=open]:animate-overlayShow fixed inset-0 z-50" />
        <RadixDialog.Content className="z-50 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-neutral-950 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          {content}

          <RadixDialog.Close asChild>
            <button
              className="absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};
