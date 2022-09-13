const input = document.querySelector('#avatars');

// Retrieve FileList boject
const files = input.files;

// Loop through files
for (let i = 0; i < files.length; i++) {
    let file = files.item(i);
    console.log(file.name);
}

const input = document.querySelector('#avatars');

// Retrieve FileList boject
const files = input.files;

// Convert FileList to array
const arr = Array.from(files);

// Loop through array
arr.forEach(file => console.log(file.name));