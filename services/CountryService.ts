import useSWR from "swr";

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

const url = process.env.REST_API;


export const useGetCountries = () => {

    const { data, error } = useSWR(url + "all", fetcher);



    return { data, loading: !error && !data, error };

}

export const getAllCountries = () => {


    return fetch(url + "all").then( res => {
        return res.json();
    })
 
}