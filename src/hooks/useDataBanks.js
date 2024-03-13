"use client";
import { getBanksService } from "@/services/getBanks";
import useStoreData from "./storeData";
// import { useEffect } from "react";

export default function useDataBanks() {
  const { banks } = useStoreData((state) => ({ banks: state.banks }));

  const getBanksData = async () => {
    if (banks.length > 0) {
      return;
    }

    const response = await getBanksService();

    if (!response.props.res.ok) {
      console.log("Ha ocurrido un error");
      return;
    }

    const data = response.props.data;

    useStoreData.setState({
      banks: data,
    });

    return;
  };

  //   useEffect(() => {
  //     if (banks.length === 0) {
  //       getBanksData();
  //       return;
  //     }
  //   }, [banks.length]);

  return {
    getBanksData,
  };
}
