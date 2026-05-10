import { useState } from 'react';

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);
    function toggleTheme() {
        setDarkMode(!darkMode);
    }
    return (
        <div
            style={{
                backgroundColor: darkMode ? '#222' : '#fff',
                color: darkMode ? '#fff' : '#000',
                minHeight: '100vh',
                padding: '20px',
                transition: '0.3s'
            }}
        >
            <h1 style={{color: darkMode ? '#fff' : '#000'}}>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>

            <label>
                <input
                    type="checkbox"
                    onChange={toggleTheme}
                />

                Toggle Theme
            </label>

            <p>
                This is a simple dark/light mode example using useState.
            </p>
        </div>
    );
}

export default ThemeToggle;