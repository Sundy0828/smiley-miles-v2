import * as fs from "fs";
import * as path from "path";

/**
 * Function to parse .txt file content to JSON
 * and save it to the equivalent .json file in the /json folder.
 */
function parseTextFileToJson(inputFilePath: string, outputFolderPath: string) {
  // Read the file content
  const fileContent = fs.readFileSync(inputFilePath, "utf-8");

  // Split file content by new lines and remove any empty lines
  const lines = fileContent.split("\n").filter((line) => line.trim() !== "");

  // Parse each line into a structured object
  const result = lines.map((line) => {
    const parts = line.split(",").map((part) => part.trim());

    return {
      place: parseInt(parts[0]), // Place is the first part
      name: parts[1], // Name is the second part
      city: parts[parts.length - 3], // Third last part
      bibNo: parseInt(parts[parts.length - 2]), // Second last part
      age: parseInt(parts[parts.length - 1]), // Last part
      gender: parts[5], // Gender (assuming it’s at the sixth position)
      time: parts[6], // Time (assuming it’s at the seventh position)
      pace: parts[7], // Pace (assuming it’s at the eighth position)
    };
  });

  // Get the relative path from the 'txt' folder without including 'txt'
  const relativePath = path.relative(
    path.join(outputFolderPath, ".."),
    inputFilePath
  );

  // Determine the output JSON file path inside the /json folder, maintaining the same folder structure
  const outputFilePath = path.join(
    outputFolderPath,
    relativePath.replace(/^txt[\\/]/, "").replace(/\.txt$/, ".json")
  );

  // Create necessary subdirectories for the output file
  const outputDir = path.dirname(outputFilePath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write the JSON result to the output file
  fs.writeFileSync(outputFilePath, JSON.stringify(result, null, 2), "utf-8");
  console.log(`JSON output written to ${outputFilePath}`);
}

/**
 * Traverse through the /txt/races folder, parse each .txt file,
 * and save the output in the /json folder with the same filename.
 */
function traverseAndParse(txtFolderPath: string, jsonFolderPath: string) {
  const racesFolderPath = path.join(txtFolderPath, "races"); // Specify the 'races' subdirectory

  // Ensure the /json folder exists; if not, create it
  if (!fs.existsSync(jsonFolderPath)) {
    fs.mkdirSync(jsonFolderPath);
  }

  // Check if the 'races' directory exists
  if (fs.existsSync(racesFolderPath)) {
    // Get all files inside the /txt/races directory
    const items = fs.readdirSync(racesFolderPath);

    items.forEach((item) => {
      const fullPath = path.join(racesFolderPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isFile() && path.extname(item) === ".txt") {
        // If it's a .txt file, parse and create the equivalent .json file
        parseTextFileToJson(fullPath, jsonFolderPath);
      }
    });
  } else {
    console.log(`The 'races' directory does not exist at: ${racesFolderPath}`);
  }
}

// Entry point: Define the paths for the /txt and /json directories
const rootFolderPath = __dirname; // Current directory containing the 'parse' script
const txtFolderPath = path.join(rootFolderPath, "txt"); // The /txt folder path
const jsonFolderPath = path.join(rootFolderPath, "json"); // The /json folder path

// Execute the parsing process
traverseAndParse(txtFolderPath, jsonFolderPath);
