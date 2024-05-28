import React, { useState,useEffect} from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(url);
           
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            const result = await response.json()
            // setData(booksData.reading_log_entries);
            setData(result);
        } catch (error){
            setError(error.message)
        } finally {
            setLoading(false);
        }
    }
    fetchData()

}, [url])

return {data, loading, error}
}

export const useFetchDetails = (url) => {
   
    const [details, setDetails] = useState(null);
    useEffect(() => {
        const fetchDetails =  async () => {
            try {
                const fetchedData = await fetch(url);
                
                  if (!fetchedData.ok) {
                    throw new Error("Network response was not ok");
                  }

                  const results = await fetchedData.json();
                  console.log("results", results)
                  setDetails(results);
                //   if (data.docs && data.docs.length > 0) {
                //     setDetails(data);
                //   } else {
                //     setDetails(null);
                //   }
            } catch(error){
                console.log("an error accoured", error)
            }

        }
        fetchDetails()
    }, [url])

    return {details, setDetails}
}

export const useFilterBook = (list, filterValue) => {
    console.log("List", list);
    console.log("FilterValue", filterValue);
    const filteredItems = list
    ? list.filter((item) =>
        item.work.title.toLowerCase().includes(filterValue.toLowerCase())
        )
    : [];
    console.log(filteredItems);
    return { filteredItems };
}