import { Storage } from '../services/storage';
export const useStorage = () => {
  console.log("composeables/storage", process.client ? "client" : "server");
  const storage = new Storage();
  return { storage };
}