import { create } from 'zustand'

const usePasswordStore = create((set) => ({
  pass1: '',
  pass2: '',

  setPass: (pass: string) => set(() => ({ pass1: pass })),
  setPass2: (pass: string) => set(() => ({ pass2: pass })),
  
}))

export default usePasswordStore