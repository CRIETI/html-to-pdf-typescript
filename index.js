const openPdf = () => {
    axios.get(`http://localhost:3000/`, //substituir pela URL do PDF
        { responseType: 'blob' }
    ).then((response) => {
        const file = new Blob(
            [response.data], 
            {type: 'application/pdf'});
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
    })
}

openPdf();

  