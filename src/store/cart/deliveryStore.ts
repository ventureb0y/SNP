import { create } from "zustand";
import { persist } from "zustand/middleware";

interface DeliveryState {
    deliveryType: string,
    setDeliveryType: (type: string) => void
}

const useDeliveryStore = create<DeliveryState>()((set, get) => ({
    deliveryType: '',
    
    setDeliveryType: (type) => {
        set({
            deliveryType: type
        })
    }

}))

export default useDeliveryStore