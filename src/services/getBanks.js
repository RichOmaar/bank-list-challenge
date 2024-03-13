export async function getBanksService() {
    // const res = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks', { next: { revalidate: 3600 } });
    const res = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks');
    const data = await res.json();
  
    return {
      props: {
        res,
        data
      },
    };
  }
  