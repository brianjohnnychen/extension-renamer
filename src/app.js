// CONFIGURE DESIRED EXTENSION
const newExtension = '.png'

// CONFIGURE DIRECTORY CONTAINING FILES TO BE RENAMED.
const folder = '../extension-renamer/to_rename/'











/** DO NOT CHANGE CONTENTS BELOW THIS LINE */
const fs = require('fs')
const path = require('path')

// Read contents of folder.
fs.readdir(folder, (err, files) => {
    if(err) {
        console.log(err)
    } else {
        // Parse through each file inside folder.
        files.forEach(file => {
            console.log('Original:', file)

            // Retrieve file name without extension.
            const fileName = path.basename(file, path.extname(file))

            // Rename file extension.
            fs.rename(folder + file, folder + fileName + newExtension, (err) => {
                if (err) {
                    throw err
                } else {
                    console.log('New:', fileName + newExtension)
                }
            })
        })
    }
})