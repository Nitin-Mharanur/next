"use client";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

function page({ params }) {
  const [response, setResponse] = useState([]);
  const router = useRouter();
  useEffect(() => {
    function fetchData(id) {
      fetch(`http://localhost:8000/api/services/${id}`)
        .then((response) => response.json())
        .then((json) => console.log(json));
    }

    fetchData(params.id);
  }, []);

  //   useEffect(() => {
  //     if (!response.title) {
  //       //   router.push("/Product/go/1222");
  //       router.replace("/Product/go/111", undefined, { statusCode: 301 });
  //     }
  //   }, []);

  return <div>This is prodct {params.id}</div>;
}

export default page;
