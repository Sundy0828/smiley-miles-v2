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
      title: parts.slice(0, -3).join(", "), // Everything except last 3 items is part of the title
      city: parts[parts.length - 3],
      state: parts[parts.length - 2],
      date: parts[parts.length - 1],
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
 * Traverse through the /txt folder, parse each .txt file,
 * and save the output in the /json folder with the same filename.
 */
function traverseAndParse(txtFolderPath: string, jsonFolderPath: string) {
  // Ensure the /json folder exists; if not, create it
  if (!fs.existsSync(jsonFolderPath)) {
    fs.mkdirSync(jsonFolderPath);
  }

  // Get all files and folders inside the /txt directory
  const items = fs.readdirSync(txtFolderPath);

  items.forEach((item) => {
    const fullPath = path.join(txtFolderPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // If it's a directory, traverse it recursively
      traverseAndParse(fullPath, jsonFolderPath);
    } else if (stat.isFile() && path.extname(item) === ".txt") {
      // If it's a .txt file, parse and create the equivalent .json file
      parseTextFileToJson(fullPath, jsonFolderPath);
    }
  });
}

// Entry point: Define the paths for the /txt and /json directories
const rootFolderPath = __dirname; // Current directory containing the 'parse' script
const txtFolderPath = path.join(rootFolderPath, "txt"); // The /txt folder path
const jsonFolderPath = path.join(rootFolderPath, "json"); // The /json folder path

// Execute the parsing process
traverseAndParse(txtFolderPath, jsonFolderPath);
