"use client";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";
import {zodResolver} from "@hookform/resolvers/zod"
import * as z from "zod"

import { useForm } from "react-hook-form";
const formSchema=z.object({
    name:z.string().min(1),
})

export const StoreModal=()=>{
    const form=useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema)
    })
    const storeModal=useStoreModal();
    return(
    <Modal title="Create store"
    description="Add a new store to manage products and categories"
    isOpen={storeModal.isOpen}
    onClose={storeModal.onClose}
    >
    Future create store form</Modal>
    )
}