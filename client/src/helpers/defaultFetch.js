export const defaultFetch = (endPoint, metodo, datos) => {
    let metaData = {
        method: metodo,
        body: JSON.stringify(datos),
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
        },
      };
  
      fetch(endPoint, metaData)
      .then((res) => console.log(res))
}


export const getFetch = (endPoint,datos) => {
    let metaData = {
        method: 'GET',
        body: JSON.stringify(datos),
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
        },
      };
  
      fetch(endPoint, metaData)
      .then((res) => res.json())
      .then(res=>{return res})
}
