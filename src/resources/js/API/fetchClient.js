export const customFetch = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log('Failed to fetch products: ', err);
    }
};

// export const defaultOptions = (method, body = null) =>
//     body
//         ? {
//               method,
//               headers: {
//                   'content-type': 'application/json',
//               },
//               body: JSON.stringify(body),
//           }
//         : {
//               method,
//               headers: {
//                   'content-type': 'application/json',
//               },
//           };

// export const customFetch = (url, method, body = null) =>
//     fetch(url, method === 'get' ? null : defaultOptions(method, body))
//         .then((res) => res.json())
//         .catch((err) => {
//             throw err;
//         });
