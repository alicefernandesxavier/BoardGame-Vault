const fs = require("fs").promises;
const path = require("path");

export async function readJSON(filePath) {
    try {
        const fullPath = path.resolve(filePath);
        const data = await fs.readFile(fullPath, "utf-8");
        return JSON.parse(data || "[]");
    } catch (error) {
        return [];
    }
}

export async function writeJSON(filePath, data) {
    const fullPath = path.resolve(filePath);
    await fs.writeFile(fullPath, JSON.stringify(data, null, 2), "utf-8");
}
