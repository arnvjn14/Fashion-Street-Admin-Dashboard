"use client";

import { Modal } from "../ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

export const StoreModal = () => {
  const StoreModal = useStoreModal();
  return (
    <Modal
      title="Create Store"
      description="Add a New Store to manage products and categories"
      isOpen={StoreModal.isOpen}
      onClose={StoreModal.onClose}
    >
      Future Create Store Form
    </Modal>
  );
};
