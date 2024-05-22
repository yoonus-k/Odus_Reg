<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Odus Course Registration Chrome Extension - README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1, h2, h3 {
            color: #333;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow-x: auto;
        }
        code {
            font-family: "Courier New", Courier, monospace;
            background-color: #f9f9f9;
            padding: 2px 4px;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <h1>Odus Course Registration Chrome Extension</h1>
    <p>This Chrome extension automates the course registration process, ensuring you never miss a registration deadline due to high traffic.</p>

    <h2>Features</h2>
    <ul>
        <li>Automatically registers for courses at specified times</li>
        <li>Save course numbers and registration details</li>
        <li>Utilizes Chrome's messaging technology for seamless operation</li>
        <li>Simple and intuitive interface</li>
    </ul>

    <h2>Installation</h2>
    <ol>
        <li>Download the extension package or clone the repository.</li>
        <li>Open Chrome and go to <code>chrome://extensions/</code>.</li>
        <li>Enable "Developer mode" by toggling the switch in the top right corner.</li>
        <li>Click on "Load unpacked" and select the extension folder.</li>
    </ol>

    <h2>Usage</h2>
    <ol>
        <li>Open the extension by clicking on the icon in the Chrome toolbar.</li>
        <li>Enter the course numbers you want to register for.</li>
        <li>Set the registration date and time.</li>
        <li>Click "Save". The extension will automatically register you for the courses at the specified time.</li>
    </ol>

    <h2>How It Works</h2>
    <p>The extension uses JavaScript and Bootstrap to provide a user-friendly interface. It leverages Chrome's messaging system to communicate between the browser and background scripts, ensuring timely course registration without manual intervention.</p>

    <h3>Saving Course Numbers</h3>
    <p>Users can save their desired course numbers within the extension's interface. These numbers are stored locally and used for the automated registration process.</p>

    <h3>Automated Registration</h3>
    <p>On the specified date and time, the extension sends a registration request to the server using the saved course numbers, ensuring timely enrollment even during peak traffic periods.</p>

    <h2>Technical Details</h2>
    <p>The extension is built using:</p>
    <ul>
        <li>JavaScript for functionality</li>
        <li>Bootstrap for styling</li>
        <li>Chrome Extensions API for communication between the front-end and background scripts</li>
    </ul>

    <h2>Contributing</h2>
    <p>Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure your code follows the existing style and includes appropriate comments.</p>

    <h2>License</h2>
    <p>This project is licensed under the MIT License. See the <code>LICENSE</code> file for details.</p>

    <h2>Contact</h2>
    <p>If you have any questions or feedback, feel free to reach out to me at <a href="mailto:your-email@example.com">your-email@example.com</a>.</p>
</body>
</html>
