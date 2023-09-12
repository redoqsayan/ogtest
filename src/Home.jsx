import axios from "axios";
import { useEffect, useState } from "react";
import Seo from "./Seo";

function Home() {
  const [data, setdata] = useState();

  const fetchData = async () => {
    const body = {
      inputData: {
        storeslug: "rose-fast-food",
        product_Id: "6183775",
      },
    };

    console.log(body, "body");
    const response = await axios.post(
      "https://webservice.dineapi.com/api/dine/storedata",
      body
    );

    setdata(response?.data?.store);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div
        style={{
          paddingTop: "20px",
        }}
      >
        <div
          style={{
            fontWeight: "800",
          }}
        >
          Store details
        </div>
        <div>{data?.store_Name}</div>

        <div>{data?.store_Banner}</div>
        <img src={data?.store_Banner_Image} />
      </div>
      <Seo
        title={data?.store_Name}
        description={data?.store_Banner}
        image={data?.store_Banner_Image}
        key={data?.store_Name}
      />
    </div>
  );
}

export default Home;
