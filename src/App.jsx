import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Helmet } from "react-helmet-async";

function App() {
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
      <Helmet>
        <title>{data?.store_name}</title>

        <meta property="description" content={data?.store_Banner} />
        <meta property="og:title" content={data?.store_name} />
        <meta property="og:description" content={data?.store_Banner} />
        <meta property="og:image" content={data?.store_Banner_Image} />
        <meta property="twitter:title" content={data?.store_name} />
        <meta property="twitter:description" content={data?.store_Banner} />
        <meta property="twitter:image" content={data?.store_Banner_Image} />
      </Helmet>
    </div>
  );
}

export default App;
