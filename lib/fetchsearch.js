async function fetchsearch(searchTerm) {
    const username=process.env.OXYLABS_USERNAME
    const password = process.env.OXYLABS_PASSWORD


    const newUrl =new URL(`https://www.walmart.com/search?q=${searchTerm}`)
    const body = {
        source: "universal",
        url: newUrl.toString(),
        geo_location: "United States",
        parse: true,
    };
    const options = {
        hostname: "realtime.oxylabs.io",
        path: "/v1/queries",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization:
                "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
        },
    };

    const response = fetch("https://realtime.oxylabs.io/v1/queries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization:
                "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
        },
        body: JSON.stringify(body),
        next:{
            revalidate:60*60,
        }
    }).then((res) => res.json())
    .then((data) => {
        console.log('data',data)
        if(data.message==='Unauthorized' || data.results.length === 0) return;
        const result = data.results[0];
        return result;
    })
    .catch((err) => console.error('errror',err));

    return response;
}

export default fetchsearch;