const j003_apiFetch = {
    apiFetch( dataRequest ) {
        fetch(  "./fetch/request_Fetch.php", {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( dataRequest )
        })
        .then( ( response ) => {
            if ( response.ok ) {
                console.log( "Comunicación con el servidor ok." );
                return response.text();
            } else {
                console.log( "Parece que no hay comunicación con el servidor." );
                throw Error( response.status );  
            } 
        })
        .then( ( body ) => {
            try {
                console.log( "Convirtiendo estructura JSON to Javascript." );
                return JSON.parse( body );
            } catch {
                console.error( "La información recibida no es una estructura JSON" );
                throw Error( body );
            }
        })
        .then( ( dataRetrieved ) => { // Va bien, tratamos los datos que han llegado.
            console.log( dataRequest );
            if ( typeof dataRequest.handler === 'function' ) {
                dataRequest.handler( dataRetrieved );
            } else {
                console.warn(`No se definió un handler para action "${dataRequest.action}"`);
            }
        })
        .catch( (error) => {
            console.log( "La información recibida es la siguiente:" );
            console.error( error );
        });
    }
};

export default j003_apiFetch;