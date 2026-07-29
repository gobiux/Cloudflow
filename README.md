# Cloudflow

A web-based production file management and QC (Quality Control) system for reviewing and verifying production files.

## Features

### Production Gatekeeper (`gatekeeper.html`)
- List view of production files with file name, metadata, and status badges
- File status indicators: Self-Check, In Review, Rework
- Open files in viewer for detailed inspection
- Version history access
- Profile dropdown with user info and logout

### QC Gatekeeper (`qc_gatekeeper.html`)
- **All Production Files** tab: Browse all production files
- **QC Checking Files** tab: View files assigned to current QC
- Per-file QC assignment: Enter Employee ID and assign files
- Persistent assignments stored in localStorage
- Filter by Employee ID prefix (tab switching between tabs

### Viewer (`viewer.html`)
- Separation/color plate visualization
- File metadata display
- Version history with approval/rejection tracking

### Other Pages
- **Overview** (`overview.html`, `qc_overview.html`): Dashboard with stats
- **Vault** (`vault.html`, `qc_vault.html`): File storage browser
- **Dropzone** (`dropzone.html`): File upload area
- **History** (`history.html`): Version history details

## Project Structure

```
Cloudflow/
├── css/           # Stylesheets
│   ├── styles.css       # Shared base styles
│   ├── gatekeeper.css   # Gatekeeper-specific styles
│   ├── overview.css     # Overview page styles
│   ├── vault.css        # Vault page styles
│   ├── dropzone.css     # Dropzone page styles
│   ├── viewer.css       # Viewer page styles
│   └── login.css        # Login page styles
├── js/            # JavaScript
│   ├── data.js          # Shared file data (FILES array, artwork renderer)
│   └── auth.js          # Authentication utilities
└── pages/         # HTML pages
    ├── index.html
    ├── login.html
    ├── gatekeeper.html
    ├── qc_gatekeeper.html
    ├── viewer.html
    ├── overview.html
    ├── qc_overview.html
    ├── vault.html
    ├── qc_vault.html
    ├── dropzone.html
    └── history.html
```

## Getting Started

1. Clone the repository
2. Open `pages/index.html` in a browser
3. Navigate using the sidebar menu

## Key Functionality

### File Assignment (QC)
1. Go to **QC Gatekeeper** → **All Production Files**
2. Enter Employee ID in the "QC Emp ID" field per file
3. Click **Assign** - all files matching that ID prefix get assigned
4. Switch to **QC Checking Files** tab to see assigned files

### List View
Both gatekeeper pages use a responsive list view (table-like on desktop, card-stacked on mobile).

### Version History
Click the clock icon on any file card to view version history with QC status tracking.

## Data

Production files are defined in `js/data.js` as the `FILES` array. Each file includes:
- `id`, `name`, `meta` (size, upload time)
- `status`, `statusClass` (Self-Check, In Review, Rework)
- `brand`, `product`, `dims`
- `separations` (color plates for viewer)
- `versionHistory` (upload/QC/rework timeline)

## Styling

- CSS custom properties for consistent theming
- Responsive design (mobile breakpoints at 768px, 900px)
- Dark mode support in viewer/vault pages
- Shared component styles in `styles.css`

## Browser Support

Modern browsers with ES6+ support (Chrome, Firefox, Safari, Edge)

## License

Internal use only.