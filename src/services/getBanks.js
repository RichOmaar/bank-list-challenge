// export async function getBanksService() {
//     // const res = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks', { next: { revalidate: 3600 } });
//     const res = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks');
//     const data = await res.json();
  
//     return {
//       props: {
//         res,
//         data
//       },
//     };
//   }
  

import axios from 'axios';

export async function getBanksService() {
    try {
        const response = await axios.get('https://dev.obtenmas.com/catom/api/challenge/banks');
        return {
            props: {
                res: response,
                data: response.data
            }
        };
    } catch (error) {
        console.error('Error fetching banks:', error);
        return {
            props: {
                error: error.message
            }
        };
    }
}
