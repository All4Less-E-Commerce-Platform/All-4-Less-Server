/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable promise/prefer-await-to-callbacks */
import { exec } from 'child_process';
import { dirname, join } from 'path';

/**
 * Type for the result data returned by the scraper.
 */
interface ScrapedData {
  title: string;
  text_content: string;
}

/**
 * Scrape data from a URL.
 * @param {string} url - The URL to scrape data from.
 * @returns {Promise<ScrapedData>} - The scraped data.
 */
export const scrapeData = (url: string): Promise<ScrapedData> => {
  return new Promise((resolve, reject) => {
    exec(`python3 ${pathToCode} "${url}"`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing Python script: ${error}`);
        reject(stderr); // Log the error from stderr if the script fails
        return;
      }

      if (stderr) {
        console.error(`Python stderr: ${stderr}`); // Log stderr if there's additional output
      }

      try {
        // Check if stdout is empty or invalid JSON
        if (!stdout.trim()) {
          reject('Python script returned empty output');
          return;
        }

        const result: ScrapedData = JSON.parse(stdout);
        resolve(result);
      } catch (parseError) {
        console.error('Failed to parse Python script output:', stdout); // Log the actual output
        reject('Failed to parse Python script output');
      }
    });
  });
};

// Path to the Python script
const pathToCode = join(
  dirname(__filename), // __filename is available in CommonJS modules
  'scraper.py',
);
