<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate inputs
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
    $contactNumber = htmlspecialchars(trim($_POST["contactNumber"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Validate inputs
    if (empty($name) || !preg_match("/^[a-zA-Z\s]+$/", $name)) {
        echo "Name is required and should contain only letters!";
        exit;
    }
    if (!$email) {
        echo "Invalid email format!";
        exit;
    }
    if (empty($contactNumber) || !preg_match("/^\d{11}$/", $contactNumber)) {
        echo "Contact number must be 10 digits!";
        exit;
    }
    if (empty($message) || strlen($message) > 1000) {
        echo "Message is required and must be under 1000 characters!";
        exit;
    }

    // Database connection parameters
    $servername = "localhost";
    $username = "xxxxxxxxxxxx";
    $password = "xxxxxxxx";
    $dbname = "xxxxxxxxx";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        echo "Sorry, we couldn't connect to the database. Please try again later.";
        exit;
    }

    // Prepare SQL statement
    $stmt = $conn->prepare("INSERT INTO warriorfitness (name, email, contact_number, message) VALUES (?, ?, ?, ?)");
    if (!$stmt) {
        echo "Error preparing statement: " . $conn->error;
        exit;
    }

    // Bind parameters
    $stmt->bind_param("ssss", $name, $email, $contactNumber, $message);

    // Execute and check result
    if ($stmt->execute()) {
        header("Location: thank-you.html");
        exit;
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request method!";
}
?>