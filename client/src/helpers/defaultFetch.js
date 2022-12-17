export const defaultFetch = async (endPoint, metodo, datos) => {
    let metaData = {
        method: metodo,
        body: JSON.stringify(datos),
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
        },
      };

      const res = (await fetch(endPoint, metaData)).json();
        return res;
}


export const getFetch = async (endPoint, metodo, datos) => {
    let metaData = {
        method: metodo,
        body: JSON.stringify(datos),
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
        },
      };
<<<<<<< HEAD
  console.log(metaData)
      await fetch(endPoint, metaData)
      .then((res) => res.json())
      .then(res=>{return res})
=======
  
      const res = (await fetch(endPoint, metaData)).json();
      return res;
>>>>>>> 3b8f80f67fdc4463c33adc84fc398031f775594f
}
