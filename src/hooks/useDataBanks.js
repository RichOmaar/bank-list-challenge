"use client";
import { getBanksService } from "@/services/getBanks";
import useStoreData from "./storeData";

export default function useDataBanks() {
  const { banks } = useStoreData((state) => ({ banks: state.banks }));

  const getBanksData = async () => {
    if (banks.length > 0) {
      return;
    }

    const response = await getBanksService();

    if (!response.props.res.statusText) {
      console.log("Ha ocurrido un error");
      return;
    }

    const data = response.props.data;

    useStoreData.setState({
      banks: data,
    });

    return;
  };

  return {
    getBanksData,
  };
}
