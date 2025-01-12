
async function fetchproduct(url) {
    const username=process.env.OXYLABS_USERNAME
    const password = process.env.OXYLABS_PASSWORD
    
    const newUrl = new URL(`https://www.walmart.com${url}`)
    
    const body = {
        source: "universal",
        url: newUrl.toString(),
        geo_location: "United States",
        parse: true,
    };

        try {
            const response =  await fetch("https://realtime.oxylabs.io/v1/queries", {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
                },
            })
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json()
            if (data.message === 'Unauthorized' || !data.results || data.results.length === 0) return;
            const result = data.results[0];
            return result;
        
        
           
        } catch (error) {
            console.error(error)   
        }
   

}

export default fetchproduct