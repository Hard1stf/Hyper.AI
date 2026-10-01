import { useEffect } from 'react';
import assets from '../assets/assets';

const ThemeToggleBtn = ({ theme, setTheme }) => {
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    setTheme(theme || (prefersDarkMode ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <button className="cursor-pointer">
        {theme === 'dark' ? (
          <img
            src={assets.sun_icon}
            alt="light-icon"
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
            onClick={() => setTheme('light')}
          />
        ) : (
          <img
            src={assets.moon_icon}
            alt="dark-icon"
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
            onClick={() => setTheme('dark')}
          />
        )}
      </button>
    </>
  );
};

export default ThemeToggleBtn;
