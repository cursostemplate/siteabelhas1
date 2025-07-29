"use client"

import type React from "react"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "./ui/scroll-area"

type PolicyDialogProps = {
  triggerText: string
  title: string
  children: React.ReactNode
}

export function PolicyDialog({ triggerText, title, children }: PolicyDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="p-0 h-auto text-gray-400 hover:text-white justify-center md:justify-start">
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-6">
          <div className="prose prose-sm dark:prose-invert text-gray-600">{children}</div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
