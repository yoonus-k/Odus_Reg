# Odus Course Registration Chrome Extension

This Chrome extension automates the course registration process, ensuring you never miss a registration deadline due to high traffic.

## Features

- Automatically registers for courses at specified times
- Save course numbers and registration details
- Utilizes Chrome's messaging technology for seamless operation
- Simple and intuitive interface

## Installation

1. Download the extension package or clone the repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the extension folder.

## Usage

1. Open the extension by clicking on the icon in the Chrome toolbar.
2. Enter the course numbers you want to register for.
3. Set the registration date and time.
4. Click "Save". The extension will automatically register you for the courses at the specified time.

## How It Works

The extension uses JavaScript and Bootstrap to provide a user-friendly interface. It leverages Chrome's messaging system to communicate between the browser and background scripts, ensuring timely course registration without manual intervention.

### Saving Course Numbers

Users can save their desired course numbers within the extension's interface. These numbers are stored locally and used for the automated registration process.

### Automated Registration

On the specified date and time, the extension sends a registration request to the server using the saved course numbers, ensuring timely enrollment even during peak traffic periods.

## Technical Details

The extension is built using:

- JavaScript for functionality
- Bootstrap for styling
- Chrome Extensions API for communication between the front-end and background scripts

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure your code follows the existing style and includes appropriate comments.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

If you have any questions or feedback, feel free to reach out to me at [yoonusk2001@gmail.com](mailto:yoonusk2001@gmail.com).
