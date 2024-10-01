// Array to store the submitted applications
let applicationsData = [];

// Handle form submission
document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validation checks
    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const phonePattern = /^[0-9]{11}$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!phonePattern.test(phone)) {
        alert("Invalid phone number. Please enter a 10-digit number.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Invalid email address.");
        return;
    }

    // Collect the form data
    const applicationData = {
        fullName,
        phone,
        email,
        resume: document.getElementById('resume').value,
        coverLetter: document.getElementById('coverLetter').value
        // You can add other form fields as needed here
    };

    // Push the data to the applicationsData array
    applicationsData.push(applicationData);

    // Log the data to the console for demonstration
    console.log(applicationsData);

    // Clear the form after submission
    document.getElementById('jobApplicationForm').reset();

    // Show success message
    alert("Application submitted successfully!");
});

// View Applications as Table
document.getElementById('viewTableBtn').addEventListener('click', function() {
    // Clear any previous table rows
    const applicationsBody = document.getElementById('applicationsBody');
    applicationsBody.innerHTML = '';

    // Populate table with each application's data
    applicationsData.forEach(app => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${app.fullName}</td>
            <td>${app.email}</td>
            <td>${app.phone}</td>
            <td>${app.resume}</td>
            <td>${app.coverLetter}</td>
        `;
        applicationsBody.appendChild(row);
    });

    // Display the table
    document.getElementById('applicationsTable').style.display = 'table';
});
