// Updating the object
let updatedConfig = Object.assign({}, config, {
    'function': 'normal', // Changing the function type
    'mean': 5,            // Optionally updating other properties
    'variance': 2
});

// Using the updated config object
processConfig(updatedConfig);
