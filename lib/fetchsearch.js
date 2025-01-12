async function fetchsearch(searchTerm) {
    const username = process.env.OXYLABS_USERNAME;
    const password = process.env.OXYLABS_PASSWORD;

    const newUrl = new URL(`https://www.walmart.com/search?q=${searchTerm}`);
    const body = {
        source: "universal",
        url: newUrl.toString(),
        geo_location: "United States",
        parse: true,
    };

    try {
        const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
            },
            body: JSON.stringify(body),
            next: {
                revalidate: 60 * 60,
            },
        });

        const data = await response.json();

        if (data.message === 'Unauthorized' || data.results.length === 0) return;
        const result = data.results[0];
        return result;
    } catch (err) {
        console.error('error', err);
    }
}

export default fetchsearch;