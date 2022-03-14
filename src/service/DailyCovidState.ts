import axios from "axios";
import { key } from "../dev/key";

let url: string = "";
const getCovid19InfState = () => {
    axios.get(url);
};
