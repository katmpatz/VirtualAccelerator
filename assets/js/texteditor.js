var quill = new Quill('.editor-container', {
modules: {
toolbar: [
[{ header: [1, 2, false] }],
['bold', 'italic', 'underline'],
['image']
]
},
placeholder: 'Write your answer...',
theme: 'snow'  // or 'bubble'
});
