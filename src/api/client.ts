import axios from "axios";
import { getEnvValue } from "@/utils";

const client = axios.create({
  baseURL: getEnvValue("BACKEND_API"),
});

export { client };
