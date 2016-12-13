function checkTypes(vareible) {

    switch (typeof vareible){
        case 'number':
               console.log('its number');
            break;
        case 'string':
                console.log('its string');
            break;
        case 'boolean':
            console.log('its boolean');
            break;
    }
}


checkTypes(true);