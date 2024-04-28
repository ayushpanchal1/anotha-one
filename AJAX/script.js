document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('feedbackForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        var formData = new FormData(this); // Create FormData object from form

        // Create XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Define POST request
        xhr.open('POST', 'submit_feedback.php', true);

        // Handle response
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    document.getElementById('feedbackResult').innerHTML = xhr.responseText; // Display feedback result
                } else {
                    console.error('Error:', xhr.status);
                }
            }
        };

        // Send request with form data
        xhr.send(formData);
    });
});
